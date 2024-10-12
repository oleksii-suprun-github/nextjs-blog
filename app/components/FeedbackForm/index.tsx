import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FeedbackFormData } from '@/app/types';
import { formSchema } from '@/app/formSchema';
import { useState } from 'react';

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-gray-200">
          <h2 className="mb-10 mt-4 text-center text-2xl">Please leave your feedback</h2>
          <div className="mb-5 flex flex-col">
            <input
              type="text"
              {...register('name')}
              className="input input-bordered bg-purple-950 placeholder:text-gray-400"
              placeholder="Your Name"
            />
            {errors.name && <small className="mt-2 text-red-700">{errors.name.message}</small>}
          </div>

          <div className="mb-5 flex flex-col">
            <input
              type="email"
              {...register('email')}
              className="input input-bordered bg-purple-950 placeholder:text-gray-400"
              placeholder="Your Email"
            />
            {errors.email && <small className="mt-2 text-red-700">{errors.email.message}</small>}
          </div>

          <div className="mb-5 flex flex-col">
            <textarea
              {...register('message')}
              className="textarea textarea-bordered resize-none bg-purple-950 p-4 placeholder:text-gray-400"
              placeholder="Your Feedback"
              rows={5}
            ></textarea>
            {errors.message && (
              <small className="mt-2 text-red-700">{errors.message.message}</small>
            )}
          </div>

          <button
            className="btn ml-auto mt-4 bg-brand-pink text-stone-900 hover:bg-brand-light-pink"
            type="submit"
            disabled={!isValid}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
