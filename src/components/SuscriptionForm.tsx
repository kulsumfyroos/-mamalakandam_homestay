"use client";

import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiArrowRightLine } from "@remixicon/react";
import { toast } from "sonner";
import TEXT from "@/lang/es.json";
import Button from "@/components/ui/Button";
import { handleEmail } from "@/lib/brevo";

export default function SuscriptionForm() {

  const validations = z.object({
    email: z.string().email(),
  });

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: zodResolver(validations),
    mode: 'onBlur'
  });

  // console.log('form state:', JSON.stringify(watch(), null, 2)) // { "email": "123" }
  
  // console.log('email: ', watch('email')) // 123, una abreviacion de (e.target.value)

  // "errors" Se dispara con el evento "submit", e impide que este continue.
  // console.log('errors: ', errors) // {email: { message: 'INVALID_EMAIL' } }
  
  return (
    <>

      <form 
        className="join-form relative grid gap-y-4"
        onSubmit={handleSubmit(({email}) => {
          try {
            handleEmail(email);
            toast.success(`${TEXT.joinSuccess} ${email}`);
          } catch (error: any) {
            toast.error(`${error.message}`);
          } finally {
            reset();
          }
        })}
        aria-label="Formulario de suscripción"
      >
        <input {...register("email")}
          className="join-input py-5 px-4"
          type="email"
          id="email"
          placeholder={TEXT.joinPlaceholder1}
          aria-label="Formulario de suscripción"
        />

        {errors.email && <label className='footer-input-error text-red-600 text-xs absolute top-[-.75rem] right-6 translate-y-[-.5rem]' htmlFor='email'>{errors.email ? (errors.email as FieldError).message : ''}</label>}

        <Button 
          className="move-right bg-primary-2" type="submit" aria-label="Enviar formulario"
          text={TEXT.joinButtonText1}
          endIcon={<RiArrowRightLine className="w-5 h-5" />}
        />

      </form>
    </>
  );
}