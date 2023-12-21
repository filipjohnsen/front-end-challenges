"use client";
import { useFormState } from "react-dom";
import { signupToNewsletter } from "./action";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Image from "next/image";
import checkIcon from "./images/icon-list.svg";

export function Form() {
  const initialState = {
    errors: {},
  };
  const [state, dispatch] = useFormState(signupToNewsletter, initialState);
  const [email, setEmail] = useState("");

  if (!!state.success) {
    return (
      <dialog
        className="open:fixed open:left-0 open:top-0 open:h-screen open:w-screen open:place-items-center open:bg-[var(--white)] md:open:grid md:open:bg-[var(--dark-slate-grey)]"
        open
      >
        <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-[var(--white)] p-10 md:block md:h-fit md:max-w-[400px] md:shadow-2xl">
          <div className="mt-24 md:mt-0">
            <Image
              width={48}
              height={48}
              src={checkIcon}
              alt=""
              role="presentation"
            />
            <div className="mt-6 space-y-4">
              <h2 className="text-5xl font-bold text-[var(--charcoal-grey)]">
                Thanks for subscribing!
              </h2>
              <p className="text-[var(--charcoal-grey)]">
                A confirmation email has been sent to <strong>{email}</strong>.
                Please open it and click the button inside to confirm your
                subscription.
              </p>
            </div>
          </div>
          <form className="mt-6" method="dialog">
            <button
              autoFocus
              className="h-12 w-full rounded-lg bg-[var(--dark-slate-grey)] from-[#ff527b] to-[var(--tomato)] text-[14px] font-bold text-[var(--white)] transition-all hover:bg-gradient-to-br hover:text-white"
            >
              Dissmiss message
            </button>
          </form>
        </div>
      </dialog>
    );
  }

  return (
    <form action={dispatch}>
      <div className="grid gap-1">
        <div className="flex items-center justify-between">
          <label
            className="text-[12px] font-bold text-[var(--dark-slate-grey)]"
            htmlFor="email"
          >
            Email address
          </label>
          {state.errors?.email?.map((error) => (
            <p
              id="email-error"
              className="text-[12px] font-bold text-[var(--tomato)]"
              key={error}
            >
              {error}
            </p>
          ))}
        </div>
        <input
          type="email"
          placeholder="email@company.com"
          autoComplete="email"
          id="email"
          name="email"
          aria-describedby="email-error"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={twMerge(
            "h-12 rounded-lg border-[0.5px] border-[var(--grey)] px-4 text-[--dark-slate-grey] outline-none focus-visible:border focus-visible:border-[var(--dark-slate-grey)]",
            state.errors?.email &&
              "border border-[var(--tomato)] bg-[#ff6257]/10 placeholder:text-[var(--tomato)]",
          )}
        />
      </div>
      <div className="mt-4">
        <button className="h-12 w-full rounded-lg bg-[var(--dark-slate-grey)] from-[#ff527b] to-[var(--tomato)] text-[14px] font-bold text-[var(--white)] transition-all hover:bg-gradient-to-br hover:text-white">
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
}
