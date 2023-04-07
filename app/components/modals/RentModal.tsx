'use client';
import { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal';
import Heading from '../Heading';
import { categories } from '@/app/data/categories';
import CategoryInput from '../inputs/CategoryInput';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

type Props = {}

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = (props: Props) => {
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            description: '',
            title: '',
        }
    });

    const category = watch('category');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        });

    };

    const onNext = () => {
        setStep((prev) => prev + 1);
    }

    const onBack = () => {
        setStep((prev) => prev - 1);
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }

        return 'Next'
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }

        return 'Back'
    }, [step]);

    let bodyContent = (
        <div
            className='flex flex-col gap-8'
        >
            <Heading
                title='Which of the following best describes your destination?'
                subTitle='Choose a destination type'
            />
            <div
                className='
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-3
                    max-h-[50vh]
                    overflow-y-auto
                '
            >
                {categories.map((item, index) => (
                    <div key={index + item.label} className='col-span-1 px-2'>
                        <CategoryInput
                            label={item.label}
                            icon={item.icon}
                            description={item.description}
                            onClick={(category) => {
                                return setCustomValue('category', category);
                            }}
                            selected={category === item.label}
                        />
                    </div>
                ))}

            </div>

        </div>
    );

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={() => { }}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title='Travo your journey'
            body={bodyContent}
        />
    )
}

export default RentModal