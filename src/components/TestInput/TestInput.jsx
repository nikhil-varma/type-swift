// @flow
import React, {PureComponent} from 'react';
import './TestInput.scss';

type Props = {
  handleInputChange: (input: string) => void,
  className?: string,
  disabled: boolean,
};
export default class TestInput extends PureComponent<Props> {
  static defaulProps = {
    className: 'test-input',
  };

  handleOnChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const {handleInputChange} = this.props;
    handleInputChange && handleInputChange(e.currentTarget.value);
  };

  render() {
    const {className, disabled} = this.props;
    return (
      <textarea
        className={className}
        onChange={this.handleOnChange}
        placeholder="Start typing here!"
        disabled={disabled}
      />
    );
  }
}
