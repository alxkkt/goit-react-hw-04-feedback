import { useState } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const onLeaveFeedback = property => {
    setState(prevState => {
      return {
        ...prevState,
        [property]: prevState[property] + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;

    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = state;

    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };
  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        {!total && <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
};

export default App;
