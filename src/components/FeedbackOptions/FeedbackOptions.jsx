import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
