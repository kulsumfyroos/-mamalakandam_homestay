"use client";

import { RiArrowRightLine } from "@remixicon/react";
import { toast } from "sonner";
import TEXT from "@/lang/es.json";
import Button from "@/components/ui/Button";
import { useState, FormEvent } from "react";

export default function SuscriptionForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    // For static site, just show success message
    toast.success(`${TEXT.joinSuccess} ${email}`);
    setEmail("");
  };
  
  return (
    <>

      <form 
        className="join-form relative grid gap-y-4"
        onSubmit={handleSubmit}
        aria-label="Subscription form"
      >
        <input 
          className="join-input py-5 px-4"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={TEXT.joinPlaceholder1}
          aria-label="Email subscription"
        />

        {error && <label className='footer-input-error text-red-600 text-xs absolute top-[-.75rem] right-6 translate-y-[-.5rem]' htmlFor='email'>{error}</label>}

        <Button 
          className="move-right bg-primary-2" type="submit" aria-label="Submit form"
          text={TEXT.joinButtonText1}
          endIcon={<RiArrowRightLine className="w-5 h-5" />}
        />

      </form>
    </>
  );
}