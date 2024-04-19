import { theme } from "@/app/(routes)/(user)/[username]/page";

interface ThemeEditSectionProps {
  user: User;
}
const ThemeEditSection: React.FC<ThemeEditSectionProps> = ({ user }) => {
  const handleOnClick = (key: string) => {
    console.log(key);
  };
  return (
    <div className="p-4">
      <div className="p-4">
        <h1 className="font-semibold text-3xl">Themes</h1>
      </div>
      <div className="border-[1px] lg:w-[600px] w-full pl-8 pr-8 rounded-xl pt-10 min-h-[60vh] pb-8 flex flex-col gap-4 bg-white">
        <div className="grid grid-cols-4 gap-4 w-full">
          {Object.entries(theme).map(([key, value]) => (
            <div
              className="flex flex-col gap-2 hover:scale-105 transition duration-75 cursor-pointer"
              onClick={() => handleOnClick(key)}
            >
              <div
                key={key}
                className={`relative h-[200px] lg:col-span-1  ${value.displayBgColor} border-[0.5px] rounded-lg`}
              >
                <div className="flex flex-col gap-2  p-[4px] justify-center w-full h-full">
                  <div
                    className={`relative h-[20px] rounded-lg ${value.buttonBgColor}`}
                  />
                  <div
                    className={`relative h-[20px] rounded-lg ${value.buttonBgColor}`}
                  />
                  <div
                    className={`relative h-[20px] rounded-lg ${value.buttonBgColor}`}
                  />
                </div>
              </div>
              <h1 className="text-sm text-center p-[0.5px]">{value.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeEditSection;
