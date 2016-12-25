import React, { Component } from 'react';

const fillStyle = {
  fill: '#9933cc',
  cursor: 'pointer'
}

const emptyStyle = {
  fill:'#f4e7fb',
  cursor: 'pointer'
}

class RenderRow extends Component {
  render() {
    // TODO: Add cursor to pointer
    // if (onClick) {
    // }
    const {squareSize, numberOfSquares, onClick} = this.props;
    const squares = this.props.row.map((fill, index) => {
      return (<rect key={index} style={fill ? fillStyle : emptyStyle}
                    onClick={onClick.bind(this, index)}
                    x={squareSize*index}
                    width={squareSize} height={squareSize}/>)
    });
    return (
      <g>
        {squares}
      </g>
    );
  }
}

export default RenderRow;
