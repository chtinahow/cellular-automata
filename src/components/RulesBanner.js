import React, { Component } from 'react';
import RuleButton from './RuleButton';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const itemStyle = {
  flexGrow: 1
};

class RulesBanner extends Component {
  render() {
    const style = Object.assign({}, containerStyle, this.props.style);
    const sqSize = this.props.squareSize;
    return (
      <div style={style}>
        <RuleButton size={sqSize} bottom={this.props.rules[0]}
          onClick={this.props.onRuleButtonClick.bind(this, 0)}
          left middle right />
        <RuleButton size={sqSize} bottom={this.props.rules[1]}
          onClick={this.props.onRuleButtonClick.bind(this, 1)}
          left middle       />
        <RuleButton size={sqSize} bottom={this.props.rules[2]}
          onClick={this.props.onRuleButtonClick.bind(this, 2)}
          left right        />
        <RuleButton size={sqSize} bottom={this.props.rules[3]}
          onClick={this.props.onRuleButtonClick.bind(this, 3)}
          left              />
        <RuleButton size={sqSize} bottom={this.props.rules[4]}
          onClick={this.props.onRuleButtonClick.bind(this, 4)}
          middle right      />
        <RuleButton size={sqSize} bottom={this.props.rules[5]}
          onClick={this.props.onRuleButtonClick.bind(this, 5)}
          middle            />
        <RuleButton size={sqSize} bottom={this.props.rules[6]}
          onClick={this.props.onRuleButtonClick.bind(this, 6)}
          right             />
        <RuleButton size={sqSize} bottom={this.props.rules[7]}
          onClick={this.props.onRuleButtonClick.bind(this, 7)}
                            />
      </div>
    );
  }
}

export default RulesBanner;
