import "./App.css";
import Button from "./component/Button";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const background = "/screw.jpg";

  return (
    <>
      <div>
        <AnimatePresence >
        <motion.div
        key="zoom"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        exit={{ scale: 0.5 }}
        transition={{
          repeat: Infinity,
          
          duration: 20,
          ease: 'easeInOut',
        }}
          style={{ backgroundImage: `url(${background})` }}
          className="z-10 bg-cover bg-center h-screen flex items-center justify-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1 },
              }}
              className="grid text-[#c4b3da] "
            >
              <h1 className="text-[10px] md:pl-[20px] tracking-wide md:text-[17px] pb-2 md:pb-6 leading-3">
                BRITTEN
              </h1>
              <h1 className="text-[30px] md:pl-[15px]  md:text-[45px]  py-[10px] leading-[5px]">
                THE
              </h1>
            </motion.div>

            <div className="flex text-[#c4b3da] space-x-2 ">
              <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 1 }
            }}
               className="text-[30px] md:text-[150px]  md:pt-[50px] leading-9">
                TURN
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 },
                }}
                className="grid text-[10px]  md:text-[35px]"
              >
                <h1 className="md:pt-[30px]">OF</h1>
                <h1 className="">THE</h1>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }} transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 1 }
            }}
              className="text-[30px] md:text-[150px]   md:pt-[50px] leading-9">
                SCREW
              </motion.h1>
            </div>

            <div className="text-[#c4b3da] text-[4px] md:text-[15px] md:leading-9 flex justify-end">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                An immersive trailer for Opera North production
              </motion.p>
            </div>

            <Button />
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
