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

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  username: z.string().min(4, {
    message: "Username has to be at least 4 characters",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Minimum 8 characters required",
  }),
});

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/register",
        data: {
          name: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
        },
      });

      if (response.status === 201) {
        setFormError("");
        toast.success("Successfully signed up.");
        router.push("/login");
        setIsLoading(false);
        return;
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
      setFormError(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center h-full p-3">
      <div className="text-center space-y-2">
        <h1 className="font-extrabold lg:text-5xl text-3xl ">Join LinkSelf</h1>
        <h3 className="font-medium lg:text-lg text-md">Sign up for free!</h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-8 md:w-1/2 w-full"
        >
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isLoading} placeholder="Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Username"
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
            Create account
          </Button>
        </form>
      </Form>
      <div className="flex gap-2 mt-auto mb-auto text-base">
        <h1 className="text-neutral-600">Already have an account?</h1>
        <Link
          href={"/login"}
          className="text-sky-500 underline underline-offset-4"
        >
          Login
        </Link>
      </div>
      <div className="flex gap-2 mt-auto mb-auto text-base">
        <h1 className="text-neutral-600">&copy; 2024 LinkSelf</h1>
      </div>
    </div>
  );
};

export default RegisterForm;
