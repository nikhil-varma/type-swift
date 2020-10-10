// @flow
import React, {PureComponent} from 'react';
import TestInput from '../TestInput/TestInput';
import Timer from '../Timer/Timer';
import StatsView from '../StatsView/StatsView';
import PreviewText from '../PreviewText/PreviewText';
import './TestContainer.scss';

type Props = {
  previewText: string,
};
type State = {
  testInput: string,
  wordCount: number,
  disabled: boolean,
  timeInSeconds: number,
  score: number,
};
export default class TestContainer extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      testInput: '',
      wordCount: 0,
      disabled: false,
      timeInSeconds: 60,
      score: 0,
    };
  }

  getParsedText = (testInput: string): any => {
    this.setState({testInput});
    const {previewText} = this.props;
    return previewText.split('').map((char: string, i: number) => {
      let color = '';
      if (i < testInput.length) {
        color = char === testInput[i] ? 'correct' : 'wrong';
      }
      return (
        <span className={color} key={`${i * 12}__${char}`}>
          {char}
        </span>
      );
    });
  };

  handleInputChange = (testInput: string): void => {
    this.setState({testInput});
  };

  handleEndState = () => {
    const {testInput} = this.state;
    const {previewText} = this.props;
    const words = previewText.split(' ');
    const input = testInput ? testInput.split(' ') : [];
    let wordCount = 0;
    let score = 0;
    input.forEach((i, idx) => {
      if (words[idx] === i) {
        wordCount += 1;
      } else {
        score -= 5;
      }
    });
    score = wordCount * 10 + score;
    this.setState({
      disabled: true,
      wordCount: Math.ceil((wordCount * 100) / 60),
      score,
    });
  };

  render() {
    const {testInput, wordCount, disabled, timeInSeconds, score} = this.state;
    return (
      <div className="test">
        <div className="typing-container">
          <div className="source-text">
            <PreviewText testInput={this.getParsedText(testInput)} />
            <div className="stats-preview">
              <Timer
                handleEndState={this.handleEndState}
                intervalInSeconds={timeInSeconds}
              />
              <StatsView wordCount={wordCount} score={score} />
            </div>
          </div>
          <TestInput
            className="test-input"
            handleInputChange={this.handleInputChange}
            disabled={disabled}
          />
        </div>
      </div>
    );
  }
}
