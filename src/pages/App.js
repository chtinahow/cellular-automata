import React, { Component } from 'react';
import { connect } from 'react-redux';

import RulesBanner from '../components/RulesBanner';
import RenderArea from '../components/RenderArea';
import StartingRow from '../components/StartingRow';

import { toggleRule, toggleInitSquare } from '../reducers/settings';

const rulesStyle = {
  margin: '20px'
}

const appStyle = {
  textAlign: 'center'
}

const appHeaderStyle = {
  backgroundColor: '#222',
  padding: '10px',
  color: '#f4e7fb'
}

const hrStyle = {
  borderColor: '#f4e7fb',
  borderWidth: 'thick'
}

class App extends Component {

  onRuleButtonClick(ruleIndex) {
    const { dispatch } = this.props;
    dispatch(toggleRule(ruleIndex));
  }

  onInitRowClick(initRowIndex) {
    const { dispatch } = this.props;
    dispatch(toggleInitSquare(initRowIndex));
  }

  render() {
    return (
      <div style={appStyle}>
        <div>
          <RulesBanner squareSize={25}
            style={rulesStyle} rules={this.props.settings.rules}
            onRuleButtonClick={this.onRuleButtonClick.bind(this)}/>
          <hr style={hrStyle}/>
          <StartingRow squareSize={25}
            initRow={this.props.settings.initRow}
            onInitRowClick={this.onInitRowClick.bind(this)}/>
          <hr style={hrStyle}/>
          <RenderArea squareSize={25} rows={15}
            rules={this.props.settings.rules}
            initRow={this.props.settings.initRow}/>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    settings: state.settings
  };
}

export default connect(select)(App);
