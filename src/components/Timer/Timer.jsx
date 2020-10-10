// @flow
import React, {PureComponent} from 'react';
import './Timer.scss';

type Props = {
  handleEndState: () => void,
  intervalInSeconds: number,
};
type State = {
  secondsLeft: number,
};
export default class Timer extends PureComponent<Props, State> {
  interval: IntervalID;

  constructor(props: Props) {
    super(props);
    this.state = {
      secondsLeft: 0,
    };
  }

  componentDidMount() {
    const {intervalInSeconds} = this.props;
    this.setState({secondsLeft: intervalInSeconds});
    this.interval = setInterval(this.runCountdownTimer, 1000);
  }

  handleTimerCompletion = (): void => {
    const {handleEndState} = this.props;
    clearInterval(this.interval);
    handleEndState && handleEndState();
  };

  runCountdownTimer = (): void => {
    const {secondsLeft} = this.state;
    if (secondsLeft) {
      this.setState({
        secondsLeft: secondsLeft - 1,
      });
    } else {
      this.handleTimerCompletion();
    }
  };

  render() {
    const {secondsLeft} = this.state;
    return (
      <div className="timer">
        <span className="seconds">{secondsLeft}</span>
        <span className="info">
          {secondsLeft
            ? `Second${secondsLeft > 1 ? 's' : ''} left`
            : 'Timeout!!'}
        </span>
      </div>
    );
  }
}
