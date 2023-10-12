const Button = () => {
  return (
    <div className="pt-[50px] grid place-content-center">
      <p className="text-white  text-[4px]  md:text-[15px] pb-3">
        Please choose the quality according to your device:
      </p>
      <div className="flex text-white  space-x-6">
        <div>
          <button className="border ButtonX py-2 px-3 md:py-2 md:px-5 ">Low</button>
          <p className="text-[3px] md:text-[5px]  text-transparent hover:text-white">Compressed mp3 audio <br /> 30mb</p>
        </div>
        <div>
          <button className="border ButtonX py-2 px-3 md:py-2 md:px-5  ">Medium</button>
        <p className="text-[3px] md:text-[5px] text-transparent hover:text-white">Standard mp3 audio 30mb</p>
        </div>
        <div className="">
          <button className="border ButtonX py-2 px-3 md:py-2 md:px-5  ">High</button>
            <p className="text-[3px] md:text-[5px] pt-[5px] text-transparent hover:text-white">High quality mp3 audio <br />30mb</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
