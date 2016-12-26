import React, { Component } from 'react';
import RenderRow from './RenderRow';

class RenderArea extends Component {
  render() {
    const {squareSize, rows, initRow, rules} = this.props;
    const rulesDictionary = {
      'ttt': rules[0],
      'ttf': rules[1],
      'tft': rules[2],
      'tff': rules[3],
      'ftt': rules[4],
      'ftf': rules[5],
      'fft': rules[6],
      'fff': rules[7],
    }

    const initialRows = '.'.repeat(rows).split('.').map(() => {
      return initRow.slice();
    });

    const filledRows = initialRows.reduce(function(rowValues, _, rowIndex) {
      if (rowIndex === 0) {
        return rowValues;
      }
      else {
        const newRow = rowValues[rowIndex - 1].map(function(fillValue, sqIndex, array) {
          const left = array[sqIndex - 1]?'t':'f';
          const current = fillValue?'t':'f';
          const right = array[sqIndex + 1]?'t':'f';

          return rulesDictionary[left + current + right];
        });
        const copyOfInitialRows = rowValues.slice();
        copyOfInitialRows.splice(rowIndex, 1, newRow);
        return copyOfInitialRows;
      }
    }, initialRows);

    const RenderRows = filledRows.map((row, index) => {
      return (<RenderRow  key={index}
                          row={row}
                          y={squareSize*index}
                          onClick={()=>{}}
                          squareSize={squareSize}
        />);
    });

    return (
      <svg width={initRow.length*squareSize}
           height={rows*squareSize}>
        {RenderRows}
      </svg>
    );
  }
}

export default RenderArea;
