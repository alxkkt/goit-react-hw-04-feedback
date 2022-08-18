import React from 'react';

import styles from './statistics.module.css';

interface IProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: string;
}

const Statistics = ({ good, neutral, bad, total, positivePercentage }: IProps) => {
  const positivePercentageValue = good ? positivePercentage : '0';

  return (
    <ul className={styles.feedbackRatingList}>
      <li className={styles.feedbackRatingListItem}>Good: {good}</li>
      <li className={styles.feedbackRatingListItem}>Neutral: {neutral}</li>
      <li className={styles.feedbackRatingListItem}>Bad: {bad}</li>
      <li className={styles.feedbackRatingListItem}>Total: {total}</li>
      <li className={styles.feedbackRatingListItem}>
        Positive Feedback: {positivePercentageValue}%
      </li>
    </ul>
  );
};

export default Statistics;
