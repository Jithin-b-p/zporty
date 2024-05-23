import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { signinSchema } from "./SigninForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";

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
          className="bg-red-700"
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
  );
}

export default SigninForm;
