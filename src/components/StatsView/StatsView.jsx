// @flow
import React, {PureComponent} from 'react';
import './StatsView.scss';

type Props = {
  wordCount: number,
  score: number,
};
export default class StatsView extends PureComponent<Props> {
  render() {
    const {wordCount, score} = this.props;
    return (
      <>
        <div className="stats">
          <span className="wpm-stat">{wordCount}</span>
          <span className="info">wpm</span>
        </div>
        <div className="stats">
          <span className="wpm-stat">{score}</span>
          <span className="info">Score</span>
        </div>
      </>
    );
  }
}
