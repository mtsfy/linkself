const PhoneScreen = () => {
  return (
    <div className="bg-gray-200 rounded-xl p-4 w-full flex items-center justify-center">
      <div className="w-[352px] h-[724px] rounded-[32px] border-8 border-black p-2 bg-black">
        <iframe
          name="screen"
          src="http://localhost:3000/admin"
          className="rounded-2xl h-full w-full"
        />
      </div>
    </div>
  );
};

export default PhoneScreen;
