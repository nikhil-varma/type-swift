// @flow
import React, {PureComponent} from 'react';
import './PreviewText.scss';

type Props = {
  testInput: string,
};
export default class PreviewText extends PureComponent<Props> {
  render() {
    const {testInput} = this.props;
    return <div className="preview-text">{testInput}</div>;
  }
}
