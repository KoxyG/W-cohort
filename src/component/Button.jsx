import { motion } from "framer-motion";

const Button = () => {
  return (
    <div className="pt-[50px] grid place-content-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className="text-white  text-[4px]  md:text-[15px] pb-3"
      >
        Please choose the quality according to your device:
      </motion.p>
      <div className="flex text-white  space-x-6">
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="border ButtonX py-2 px-3 md:py-2 md:px-5 "
          >
            Low
          </motion.button>
          <p className="text-[3px] md:text-[5px]  text-transparent hover:text-white">
            Compressed mp3 audio <br /> 30mb
          </p>
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="border ButtonX py-2 px-3 md:py-2 md:px-5  "
          >
            Medium
          </motion.button>
          <p className="text-[3px] md:text-[5px] text-transparent hover:text-white">
            Standard mp3 audio 30mb
          </p>
        </div>
        <div className="">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="border ButtonX py-2 px-3 md:py-2 md:px-5  "
          >
            High
          </motion.button>
          <p className="text-[3px] md:text-[5px] pt-[5px] text-transparent hover:text-white">
            High quality mp3 audio <br />
            30mb
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;
