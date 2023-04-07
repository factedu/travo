'use client';

import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegistraterModal';
import { callbackify } from 'util';
import { useRouter } from 'next/navigation';

interface LoginModalProps { }

const LoginModal: React.FC<LoginModalProps> = ({ }) => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    //handle form submit
    const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
        //set loading state
        setIsLoading(true);

        // signin using next-auth
        signIn('credentials', {
            redirect: false,
            ...data
        }).then((callback) => {
            // if callback is ok
            if (callback?.ok) {
                //show success toast
                toast.success('Login successful!');
                // refresh the router
                router.refresh();
                //close the modal
                loginModal.onClose();
            }

            // if callback is error
            if (callback?.error) {
                //show error toast
                toast.error(callback.error);

            }
        }).catch((err) => {
            // if error
            toast.error(err.message);
        });
    }, []);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome Back!'
                subTitle='Login to your account!'
                center={false}
            />
            <Input
                id="email"
                label='Email'
                type='email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label='Password'
                type='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline={true}
                label='Continue with Google'
                icon={FcGoogle}
                disabled={isLoading}
                variant='secondary'
                onClick={() => { }}
            />
            <Button
                outline={true}
                label='Continue with Github'
                icon={AiFillGithub}
                disabled={isLoading}
                variant='secondary'
                onClick={() => { }}
            />
            <div
                className='text-neutral-500 text-center mt-4 font-light flex flex-row justify-center items-center gap-2'
            >
                Don't have an account yet?
                <div
                    onClick={loginModal.onClose}
                    className='text-neutral-800 font-semibold cursor-pointer hover:underline'>
                    Register
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal