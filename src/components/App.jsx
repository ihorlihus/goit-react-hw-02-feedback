import React, { Component } from 'react';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeed = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralFeed = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadFeed = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.addGoodFeed}>
          Good
        </button>
        <button type="button" onClick={this.addNeutralFeed}>
          Neutral
        </button>
        <button type="button" onClick={this.addBadFeed}>
          Bad
        </button>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
