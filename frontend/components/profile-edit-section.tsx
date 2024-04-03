import Avatar from "./avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ProfileEditSectionProps {
  user: User;
}
const ProfileEditSection: React.FC<ProfileEditSectionProps> = ({ user }) => {
  return (
    <>
      {/* TODO: Clean this up */}
      <div className="p-4">
        <h1 className="font-semibold text-3xl">Profile</h1>
      </div>
      <div className="border-[1px] xl:w-1/3 md:w-1/2 w-full pl-6 pr-6 rounded-xl pt-10 min-h-[60vh] pb-8 flex flex-col gap-4 bg-white">
        <div className="flex items-center xl:gap-14 gap-10">
          {/* Profile Avatar */}
          <div className="w-fit">
            <Avatar
              user={user}
              bgStyle="bg-slate-800 h-24 w-24"
              nameStyle="text-2xl"
            />
          </div>
          {/* Image Input */}
          <div className="flex flex-col gap-4 w-2/3">
            <Button
              variant={"default"}
              className="rounded-3xl text-base font-medium h-12 bg-purple-600 hover:opacity-90 transition hover:bg-purple-600"
            >
              Pick an image
            </Button>
            <Button
              variant={"secondary"}
              className="rounded-3xl text-base font-medium h-12 bg-opacity-0 border-[1px]"
              disabled
            >
              Remove
            </Button>
          </div>
        </div>
        {/* Profile Image Style */}
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
        <div className="flex justify-center  items-center p-2 w-full">
          <div className="w-full space-y-4">
            <Input placeholder="Profile Title" className="" />
            <Textarea className="resize-none" placeholder="Profile Bio" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditSection;
