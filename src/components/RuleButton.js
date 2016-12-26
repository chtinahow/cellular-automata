import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const emptyStyle = {
  fill:'#9933cc'
}

const fillStyle = {
  fill:'#f4e7fb'
}

class RuleButton extends Component {
  render() {
    const { left, middle, right, bottom, size } = this.props;
    return (
      <Button onClick={this.props.onClick}>
        <svg width={size*3} height={size*2}>
          <rect width={size} height={size}
                style={left ? emptyStyle : fillStyle} />
          <rect x={size} width={size} height={size}
                style={middle ? emptyStyle : fillStyle} />
          <rect x={size*2} width={size} height={size}
                style={right ? emptyStyle : fillStyle} />
          <rect x={size} y={size} width={size} height={size}
                style={bottom ? emptyStyle : fillStyle} />
        </svg>
      </Button>
    );
  }
}

export default RuleButton;
