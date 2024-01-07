const OurPartners = () => {
  return (
    <div className="w-full tablet:h-[100vh] flex items-center justify-center mt-[100px]">
      <div className="max-w-[800px] phone:px-[67.5px]">
        <span className="font-medium text-[100px] text-white flex flex-col justify-center items-center phone:text-[33px]">
          Our Partners
        </span>
        <div className="grid grid-cols-2 gap-24 gap-x-40 mt-[78px] phone:gap-x-10 phone:gap-10 phone:mt-[55px]">
          <div className="w-[300px] h-[300px] bg-[#C6E8B1] phone:w-[99px] phone:h-[99px]" />
          <div className="w-[300px] h-[300px] bg-[#C6E8B1] phone:w-[99px] phone:h-[99px]" />
          <div className="w-[300px] h-[300px] bg-[#C6E8B1] phone:w-[99px] phone:h-[99px]" />
          <div className="w-[300px] h-[300px] bg-[#C6E8B1] phone:w-[99px] phone:h-[99px]" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
