// @flow
import React, {PureComponent} from 'react';
import TestInput from '../TestInput/TestInput';
import Timer from '../Timer/Timer';
import './TestPreview.scss';

type Props = {
  previewText: string,
};
type State = {
  testInput: string,
  wordCount: number,
  disabled: boolean,
  timeInSeconds: number,
};
export default class TestPreview extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      testInput: '',
      wordCount: 0,
      disabled: false,
      timeInSeconds: 30,
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
    const input = testInput.split(' ');
    let wordCount = 0;
    input.forEach((i, idx) => {
      if (words[idx] === i) {
        wordCount += 1;
      }
    });
    this.setState({
      disabled: true,
      wordCount: Math.ceil((wordCount * 100) / 60),
    });
  };

  render() {
    const {testInput, wordCount, disabled, timeInSeconds} = this.state;
    return (
      <div className="test">
        <div className="typing-container">
          <div className="source-text">
            <div className="preview-text">{this.getParsedText(testInput)}</div>
            <div className="state-preview">
              <div className="stats">
                <span className="wpm-stat">{wordCount}</span>
                <span className="info">wpm</span>
              </div>
              <Timer
                handleEndState={this.handleEndState}
                intervalInSeconds={timeInSeconds}
              />
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