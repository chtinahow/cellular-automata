import React, { Component } from 'react';
import { connect } from 'react-redux';

import RulesBanner from '../components/RulesBanner';
import RenderArea from '../components/RenderArea';

import { toggleRule } from '../reducers/settings';

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

  render() {
    return (
      <div style={appStyle}>
        <div style={appHeaderStyle}>
          <h2 style={appHeaderStyle}>Cells R' Fun</h2>
        </div>
        <div>
          <RulesBanner
            style={rulesStyle} rules={this.props.settings.rules}
            onRuleButtonClick={this.onRuleButtonClick.bind(this)}/>
          <hr style={hrStyle}/>
          <RenderArea />
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
