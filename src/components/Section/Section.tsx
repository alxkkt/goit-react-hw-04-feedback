import React from 'react';
import styles from './Section.module.css';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: IProps) => {
  return (
    <section>
      <h2 className={styles.statisticsTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;