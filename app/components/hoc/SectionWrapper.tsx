import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { FC } from "react";

type StarWrapperProps = {
  idName: string;
};

const StarWrapper = (Component: FC, idName: string): FC<StarWrapperProps> =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // Example values for staggerChildren and delayChildren
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
