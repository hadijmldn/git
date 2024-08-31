'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { Canvas } from "@react-three/fiber";
import { Robot } from '../components/Robot';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Experience } from "../components/Experience";
import { themeAtom, THEMES, UI } from "../components/UI";
import { useAtom } from "jotai";
import { Leva } from 'leva';
import { Loader } from "@react-three/drei";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Hero = () => (
  <section className={`${styles.yPaddings} bg-hero`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth2} mx-auto flex flex-col section-content`}
  >
    <div className="relative z-10 flex flex-col items-center justify-center">
      <motion.h1
        variants={textVariant(1.1)}
        className={styles.heroHeading}
      >
        OrbitHost
      </motion.h1>
      <Canvas>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <ambientLight intensity={1} />
        <Robot scale={1.2} fov={50} rotate={[1, 0, 1]} />
      </Canvas>
    </div>
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[280px]"
    >
      <div className="absolute w-full h-[500px] rounded-tl-[150px] z-[0] sm:-top-[20px] -top-[10px]" />
      {/* Additional content goes here */}
    </motion.div>
  </motion.div>
</section>

);

export default Hero;
