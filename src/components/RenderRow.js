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
    const {squareSize, onClick, x, y} = this.props;
    const squares = this.props.row.map((fill, index) => {
      return (<rect key={index} style={fill ? fillStyle : emptyStyle}
                    onClick={onClick.bind(this, index)}
                    x={squareSize*index}
                    width={squareSize} height={squareSize}/>)
    });
    const translate = {x:x?x:0, y:y?y:0};
    return (
      <g transform={`translate(${translate.x}, ${translate.y})`}>
        {squares}
      </g>
    );
  }
}

export default RenderRow;
