import * as z from "zod";

import Avatar from "./avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
interface ProfileEditSectionProps {
  user: User;
}

export const ProfileSchema = z.object({
  title: z.string(),
  bio: z.string(),
  image: z.string().nullable(),
});
const ProfileEditSection: React.FC<ProfileEditSectionProps> = ({ user }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      title: user.user.title,
      bio: user.user.bio,
      image: user.user.image,
    },
  });
  const image = form.watch("image");
  const title = form.watch("title");
  const bio = form.watch("bio");

  const handleUpload = async (result: any) => {
    form.setValue("image", result.info.secure_url, {
      shouldValidate: true,
    });

    const values = form.getValues();
    onSubmit(values);
  };

  const handleRemove = async () => {
    form.setValue("image", null, {
      shouldValidate: true,
    });

    const values = form.getValues();
    onSubmit(values);
  };

  const onSubmit = async (data: z.infer<typeof ProfileSchema>) => {
    console.log("data", data);

    try {
      setIsLoading(true);
      const response = await axios({
        method: "PUT",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/edit-profile",
        data: {
          title: data.title,
          bio: data.bio,
          image: data.image,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully.");
        router.refresh();
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="font-semibold text-3xl">Profile</h1>
      </div>
      <div className="border-[1px] lg:w-[600px] w-full pl-6 pr-6 rounded-xl pt-10 min-h-[60vh] pb-8 flex flex-col gap-4 bg-white">
        {/* Avatar Input */}
        <div className="flex items-center justify-center gap-4">
          {/* Avatar */}
          <div className="w-fit">
            {image ? (
              <Image
                unoptimized
                height={150}
                width={150}
                src={image}
                alt="avatarasas"
                className="aspect-square rounded-full object-cover"
              />
            ) : (
              <Avatar
                user={user}
                bgStyle={
                  user.user.image ? "w-28 h-28" : "w-24 h-24 bg-slate-800"
                }
                nameStyle="text-2xl"
              />
            )}
          </div>
          {/* Input */}
          <div className="flex flex-col gap-4 w-2/3">
            <CldUploadButton
              onSuccess={handleUpload}
              options={{ maxFiles: 1 }}
              uploadPreset="pebywbpv"
              className="font-medium border-[1px] text-base px-2 py-4 bg-purple-600 hover:bg-slate-800 transition text-white rounded-3xl"
            >
              Pick an image
            </CldUploadButton>

            <Button
              onClick={() => handleRemove()}
              variant={"secondary"}
              className="rounded-3xl text-base font-medium h-12 bg-opacity-0 border-[1px]"
              disabled={image ? false : true}
            >
              Remove
            </Button>
          </div>
        </div>

        {/* Profile Image Style (don't care) */}
        <div className="h-60">
          <div className="p-1 mb-4">
            <h1 className="font-semibold text-base">Image Style</h1>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 text-center">
              <div className="h-32 w-32 border-2 border-black bg-neutral-100 rounded-xl flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white"></div>
              </div>
              <h1 className="text-neutral-500">Classic</h1>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <div className="h-32 w-32 border-2  bg-neutral-100 rounded-xl flex items-center justify-center">
                <div className="h-28 w-16 bg-white mt-3 rounded-t-lg"></div>
              </div>
              <h1 className="text-neutral-500">Hero</h1>
            </div>
          </div>
        </div>

        {/* Profile Input */}
        <div className="flex flex-col p-2 w-full gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Profile Title"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isLoading}
                        placeholder="Profile Bio"
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4">
                <Button type="submit" variant={"default"} className="w-full">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditSection;
