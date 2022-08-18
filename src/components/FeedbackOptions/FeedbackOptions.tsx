import React from 'react';
import { nanoid } from 'nanoid';

import styles from './FeedbackOptions.module.css';

interface IProps {
  options: string[];
  onLeaveFeedback: (param: string) => void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: IProps) => {
  const buttons = options.map(option => (
    <li className={styles.feedbackBtnListItem} key={nanoid()}>
      <button
        type="button"
        className={styles.feedbackBtn}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </li>
  ));
  return <ul className={styles.feedbackBtnList}>{buttons}</ul>;
};

export default FeedbackOptions;
