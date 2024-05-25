import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignupSchema } from "./SignupForm.schema";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

type SignupFormType = z.infer<typeof SignupSchema>;

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormType>({ resolver: zodResolver(SignupSchema) });

  const onSubmit: SubmitHandler<SignupFormType> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className="border-[0.5px] border-gray-400 rounded-md p-5 md:p-10 mt-8">
        <h1 className="text-xl font-bold text-center">Sign up</h1>
        <span className="block mt-4 text-sm text-center md:text-base">
          Create Account
        </span>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-3">
            <TextField
              id="firstname"
              type="text"
              {...register("firstname")}
              label="Firstname *"
              variant="outlined"
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
            />
            <TextField
              id="lastname"
              type="text"
              {...register("lastname")}
              label="Lastname *"
              variant="outlined"
              error={!!errors.lastname}
              helperText={errors.lastname?.message}
            />
          </div>
          <TextField
            id="email"
            type="text"
            {...register("email")}
            label="Email *"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            id="password"
            type="password"
            {...register("password")}
            label="Password *"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <PrimaryButton content="Sign up" />
        </form>
      </div>
      <div className="sticky w-full h-[1px] mt-10 bg-slate-300 rounded-full">
        <span className="absolute block p-2 text-sm -translate-x-1/2 bg-white text-slate-500 -top-4 w-max left-1/2 right-1/2">
          Already have an account?
        </span>
      </div>

      <Link to="/auth/signin">
        <SecondaryButton content="Sign in" />
      </Link>
    </div>
  );
}

export default SignupForm;
