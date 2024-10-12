import { FeedbackFormData } from '@/app/types';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type FormInputType = {
  errors: FieldErrors<FeedbackFormData>;
  type: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
};

function FormInput({ errors, type, register, placeholder }: FormInputType) {
  return (
    <div className="mb-5 flex flex-col">
      {type === 'textarea' ? (
        <textarea
          {...register}
          className="textarea textarea-bordered resize-none bg-purple-950 p-4 placeholder:text-gray-400"
          placeholder={placeholder}
          rows={5}
        ></textarea>
      ) : (
        <input
          type={type}
          {...register}
          className="input input-bordered bg-purple-950 placeholder:text-gray-400"
          placeholder={placeholder}
        />
      )}
      {errors.name && <small className="mt-2 text-red-700">{errors.name.message}</small>}
    </div>
  );
}

export default FormInput;
