"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { BsX } from "react-icons/bs";
import { Input } from "./ui/input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

interface InputBoxProps {
  onClick: () => void;
  isOpen: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ onClick, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const InputBoxSchema = z.object({
    url: z.string().min(1, { message: "Url is required" }),
  });
  const form = useForm<z.infer<typeof InputBoxSchema>>({
    resolver: zodResolver(InputBoxSchema),
    defaultValues: {
      url: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof InputBoxSchema>) => {
    try {
      setIsLoading(true);

      const response = await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/link/new",
        data: {
          url: data.url,
          title: "No way",
        },
        withCredentials: true,
      });

      console.log(response);

      if (response.status === 201) {
        toast.success("Link created successfully");
        setIsLoading(false);
        onClick();
        router.refresh();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const url = form.watch("url");

  return (
    <div className="z-0 relative bg-white p-4 h-[65vh] rounded-2xl">
      <div className="absolute right-4 top-5">
        <Button
          variant={"ghost"}
          className="rounded-full px-2 py-4"
          onClick={onClick}
        >
          <BsX size={25} />
        </Button>
      </div>
      <div className="px-4 mt-6">
        <h1 className="font-bold text-xl">Enter URL</h1>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center gap-4 w-full"
            >
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="sr-only">Url</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder=""
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading || url === ""}
                type="submit"
                className="rounded-full p-6 bg-violet-700 text-white"
                variant={"secondary"}
              >
                Add
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-gray-200 rounded-full" />
      <div className="px-4">
        <h1 className="text-sm font-semibold text-gray-500">
          Inspired by your interests
        </h1>
      </div>
      <div className="mt-48 my-6 w-full" />
      <div className="px-4">
        <h1 className="text-sm font-semibold text-gray-500">New to try</h1>
      </div>
    </div>
  );
};

export default InputBox;
