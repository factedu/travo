'use client';

import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegistraterModal';
import { signIn } from 'next-auth/react';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';

interface RegisterModalProps { }

const RegisterModal: React.FC<RegisterModalProps> = ({ }) => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
        }
    });

    //handle form submit
    const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
        try {
            setIsLoading(true);
            const response = await axios.post('/api/auth/register', data);
            console.log(response);
            // close register modal
            registerModal.onClose();
        } catch (error) {
            // show error toast
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome to Travo'
                subTitle='Sign up to continue'
                center
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
                id="name"
                label='Name'
                type='text'
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
                onClick={() => signIn('google')}
            />
            <Button
                outline={true}
                label='Continue with Github'
                icon={AiFillGithub}
                disabled={isLoading}
                variant='secondary'
                onClick={() => signIn('github')}
            />
            <div
                className='text-neutral-500 text-center mt-4 font-light flex flex-row justify-center items-center gap-2'
            >
                Already have an account?
                <div
                    onClick={registerModal.onClose}
                    className='text-neutral-800 font-semibold cursor-pointer hover:underline'>
                    Login
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title='Sign Up'
            actionLabel='Continue'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal