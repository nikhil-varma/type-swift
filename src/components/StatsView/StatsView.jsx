// @flow
import React, {PureComponent} from 'react';
import './StatsView.scss';

type Props = {
  wordCount: number,
};
export default class StatsView extends PureComponent<Props> {
  render() {
    const {wordCount} = this.props;
    return (
      <div className="stats">
        <span className="wpm-stat">{wordCount}</span>
        <span className="info">wpm</span>
      </div>
    );
  }
}
