'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FeedbackFormData } from '@/app/types';
import { formSchema } from '@/app/formSchema';
import { Form, FormInput } from '@/app/ui-lib';

export default function FeedbackForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (_data: FeedbackFormData) => {
    reset();
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <h3 className="py-16 text-center text-3xl text-gray-200">Thank you for your feedback!</h3>
      ) : (
        <Form action={handleSubmit(onSubmit)}>
          <h2 className="mb-10 mt-4 text-center text-2xl">Please leave your feedback</h2>
          <FormInput
            register={register('name')}
            type={'text'}
            placeholder={'Your Name'}
            errors={errors}
          />
          <FormInput
            register={register('email')}
            type={'email'}
            placeholder={'Your Email'}
            errors={errors}
          />
          <FormInput
            register={register('message')}
            type={'textarea'}
            placeholder={'Your Feedback'}
            errors={errors}
          />
          <button
            className="btn ml-auto mt-4 bg-brand-pink text-stone-900 hover:bg-brand-light-pink"
            type="submit"
            disabled={!isValid}
          >
            Submit
          </button>
        </Form>
      )}
    </>
  );
}
