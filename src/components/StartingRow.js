import React, { Component } from 'react';
import RenderRow from './RenderRow';

class StartingRow extends Component {
  render() {
    const sqSize = this.props.squareSize;
    const numOfSqs = this.props.initRow.length;
    return (
      <div>
        <svg width={numOfSqs*sqSize}
             height={sqSize} >
          <RenderRow
                      onClick={this.props.onInitRowClick}
                      row={this.props.initRow}
                      squareSize={sqSize} />
        </svg>
      </div>
    );
  }
}

export default StartingRow;
