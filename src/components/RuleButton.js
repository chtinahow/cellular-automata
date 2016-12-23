import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const fillStyle = {
  fill:'#9933cc'
}

const emptyStyle = {
  fill:'#f4e7fb'
}

class RuleButton extends Component {
  render() {
    const { left, middle, right, bottom, size } = this.props;
    return (
      <Button onClick={this.props.onClick}>
        <svg width={size*3} height={size*2}>
          <rect width={size} height={size}
                style={left ? fillStyle : emptyStyle} />
          <rect x={size} width={size} height={size}
                style={middle ? fillStyle : emptyStyle} />
          <rect x={size*2} width={size} height={size}
                style={right ? fillStyle : emptyStyle} />
          <rect x={size} y={size} width={size} height={size}
                style={bottom ? fillStyle : emptyStyle} />
        </svg>
      </Button>
    );
  }
}

export default RuleButton;
