"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { cookies, headers } from "next/headers";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Passowrd is required",
  }),
});
// export const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
//   withCredentials: true,
// });
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
        data: {
          email: data.email,
          password: data.password,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success("Successfully logged in.");
        console.log(response.headers);

        router.push("/");
        setIsLoading(false);
        return;
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
      console.log(error);

      setFormError("Error");
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center h-full p-3">
      <div className="text-center space-y-2">
        <h1 className="font-extrabold lg:text-5xl text-3xl ">Welcome Back</h1>
        <h3 className="font-medium lg:text-lg text-md">
          Log in to your LinkSelf
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-8 md:w-1/2 w-full"
        >
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Email"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {true && <div className="text-red-500 mt-4 text-sm">{formError}</div>}
          <Button
            variant={"default"}
            disabled={isLoading}
            type="submit"
            className="w-full mt-8 bg-black hover:opacity-80 rounded-full"
          >
            Log in
          </Button>
        </form>
      </Form>
      <div className="flex gap-2 mt-auto mb-auto text-base">
        <h1 className="text-neutral-600">Don&apos;t have an account?</h1>
        <Link
          href={"/register"}
          className="text-sky-500 underline underline-offset-4"
        >
          Sign up
        </Link>
      </div>
      <div className="flex gap-2 mt-auto mb-auto text-base">
        <h1 className="text-neutral-600">&copy; 2024 LinkSelf</h1>
      </div>
    </div>
  );
};

export default LoginForm;
