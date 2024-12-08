"use client"

import { TypeAnimation } from 'react-type-animation';
import styles from './TypeWriter.module.css';

const TypeWriter = () => {
    return (
    <TypeAnimation
        sequence={[
          'Web Development',
          1000,
          'Mobile Development',
          1000,
          'SEO',
          1000,
          'Marketing',
          1000,
          'Designing',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className={styles.typewriter}
        repeat={Infinity}
      />);
}

export default TypeWriter;
