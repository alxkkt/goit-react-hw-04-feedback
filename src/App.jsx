import { Component } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = property => {
    this.setState(prevState => {
      return {
        [property]: (prevState[property] += 1),
      };
    });
  };
  countTotalFeedback() {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
  }
}

export default App;
