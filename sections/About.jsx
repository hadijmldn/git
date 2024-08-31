'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className='p-10 bg-black m-10 rounded-3xl'>
  <div className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0 bg-black rounded-md w-[80%] flex items-center justify-center" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About OrbitHost"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold"> OrbitHost </span>  we're redefining the future of web hosting by combining the power of advanced hosting solutions with the innovative world of cryptocurrency <span className="font-extrabold">Our goal</span> is to provide businesses <span className="font-extrabold"> and individuals </span> with exceptional hosting services while offering <span className="font-extrabold"> the </span> convenience and security of crypto payments.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </div>
  </section>
);

export default About;
