'use client';

import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import Button from '../ui/button';
import Input from '../ui/input';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from '@/lib/constants';
import { useForm } from 'react-hook-form';
import { SERVICES_OPTIONS } from '@/data';
import { toast } from 'sonner';
import { LuText } from 'react-icons/lu';

interface ContactFormData {
  name: string;
  email: string;
  services: string[];
  message: string;
}

export default function ContactCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    mode: 'onChange',
  });

  const onSubmit = async (formData: ContactFormData) => {
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.services.join(', '),
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_USER_ID
      );

      toast.success('Your message has been sent successfully', {
        duration: Infinity,
        onDismiss: () => {
          reset();
        },
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong, please try again', {
        duration: Infinity,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-background border border-border rounded-lg space-y-5 overflow-hvalueden p-3 py-5 xs:px-5 shadow-md"
    >
      <div className="flex flex-col lg:flex-row  justify-between gap-5">
        <div className="w-full space-y-2">
          <Input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 4,
                message: 'Username must be at least 4 characters',
              },
              maxLength: {
                value: 50,
                message: 'Username cannot exceed 50 characters',
              },
            })}
            placeholder="Full Name again"
            icon={<FaUser />}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="w-full space-y-2">
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Basic email regex
                message: 'Invalid email address',
              },
            })}
            placeholder="Email Address"
            icon={<MdEmail />}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="font-bold text-lg">
          What services are you in need for ?
        </h1>
        <div className="grid gap-5 xs:grid-cols-2 min-[768px]:grid-cols-1 min-[850px]:grid-cols-2 xl:grid-cols-4">
          {SERVICES_OPTIONS.map((service) => (
            <label key={service.value} className="flex items-center gap-x-2">
              <input
                type="checkbox"
                {...register('services')}
                value={service.value}
                className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
              />
              {service.label}
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative w-full">
          <div className="absolute top-5 start-0 flex items-center ps-3.5 pointer-events-none">
            <LuText />
          </div>
          <textarea
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
              maxLength: {
                value: 500,
                message: 'Message cannot exceed 500 characters',
              },
            })}
            placeholder="Tell me about your project, so I can help you"
            className="bg-primary-background text-primary-foreground w-full rounded-lg text-sm ps-10 px-2.5 py-4 min-h-14 focus:outline-none"
          />
        </div>
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="w-full flex justify-end">
        <Button
          className="!w-44 !py-3 !text-xl"
          type="submit"
          loading={isSubmitting}
        >
          Send <SiMinutemailer />
        </Button>
      </div>
    </form>
  );
}
