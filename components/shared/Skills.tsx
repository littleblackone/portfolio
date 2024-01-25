import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className=" flex items-center xl:text-lg lg:text-base md:text-sm text-[0.6rem] justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark  xl:py-3 xl:px-6 py-1.5 px-3 absolute shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      viewport={{ once: true }}
      whileInView={{ x, y }}
      transition={{
        duration: 0.5,
      }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className=" font-bold 2xl:text-8xl xl:text-6xl text-4xl 2xl:mt-64 mt-32 w-full text-center dark:text-light">
        Skills
      </h2>
      <div className=" rounded-full w-full 2xl:h-screen xl:h-[90vh] lg:h-[70vh] md:h-[60vh] h-[50vh] relative flex items-center justify-center 2xl:bg-circularLight 2xl:dark:bg-circularDark xl:bg-circularLightLg xl:dark:bg-circularDarkLg lg:bg-circularLightMd lg:dark:bg-circularDarkMd bg-circularLightSm dark:bg-circularDarkSm">
        <motion.div
          className=" xl:text-lg lg:text-base text-sm  flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light  text-light dark:text-dark xl:p-8 lg:p-6 md:p-4 p-2 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw"></Skill>
        <Skill name="CSS" x="-5vw" y="-10vw"></Skill>
        <Skill name="JavaScript" x="20vw" y="6vw"></Skill>
        <Skill name="ReactJS" x="0vw" y="12vw"></Skill>
        <Skill name="NextJs" x="-20vw" y="-15vw"></Skill>
        <Skill name="GatsbyJs" x="15vw" y="-12vw"></Skill>
        <Skill name="Web Design" x="32vw" y="-5vw"></Skill>
        <Skill name="Figma" x="0vw" y="-20vw"></Skill>
        <Skill name="Firebase" x="-25vw" y="18vw"></Skill>
        <Skill name="Tailwind CSS" x="18vw" y="18vw"></Skill>
      </div>
    </>
  );
}
