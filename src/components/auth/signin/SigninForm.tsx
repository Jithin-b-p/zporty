import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { signinSchema } from "./SigninForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

type SigninFormType = z.infer<typeof signinSchema>;

function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SigninFormType>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit: SubmitHandler<SigninFormType> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className="border-[0.5px] border-gray-400 rounded-md p-5 md:p-10 mt-8">
        <h1 className="text-xl font-bold text-center">LOG IN</h1>
        <span className="block mt-4 text-sm text-center md:text-base">
          Enjoy a personalised shopping experience
        </span>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <Button
            sx={{
              backgroundColor: "rgb(185 28 28)",
              fontWeight: "700",
            }}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="sticky w-full h-[1px] mt-10 bg-slate-300">
        <span className="absolute block text-sm -translate-x-1/2 bg-white text-slate-500 -top-2 w-max left-1/2 right-1/2">
          New to zporty?
        </span>

        <Link to="/auth/signup">
          <Button
            sx={{
              width: "100%",
              marginBlockStart: "2rem",
              marginBlockEnd: "3rem",
              textTransform: "none",
              borderColor: "rgb(185 28 28)",
              color: "rgb(127 29 29)",
              fontWeight: "700",
            }}
            variant="outlined"
          >
            Sign up for free
          </Button>
        </Link>
        <Button
          sx={{
            width: "100%",
            marginBlockStart: "2rem",
            marginBlockEnd: "3rem",
            textTransform: "none",
            fontWeight: "700",
          }}
          variant="outlined"
        >
          <img src="/images/logos/google_logo.svg" width={20} height={20} />{" "}
          <span className="block ml-auto">Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}

export default SigninForm;
