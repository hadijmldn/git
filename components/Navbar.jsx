'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-5 relative flex justify-between items-center`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />

      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        OrbitHost
      </h2>

      <button type="button" className="flex items-center h-fit py-4 px-5 bg-[#25618B] rounded-[32px] gap-[12px] object-contain">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[20px] h-[20px] object-contain"
          />
          <span className="font-normal text-[10px] text-white">
            OrbitHost
          </span>
        </button>
    </div>
  </motion.nav>
);

export default Navbar;
