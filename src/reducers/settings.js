/* Action Types */
export const TOGGLE_RULE = 'TOGGLE_RULE';

/* Action Creators */
export function toggleRule(ruleIndex) {
  return {
    type: TOGGLE_RULE,
    ruleIndex
  }
}

/* reducer */
export default function settings(settings = {
    rules: [false, false, false, false,
            false, false, false, false]
}, action) {
  switch(action.type){
    case TOGGLE_RULE:
      const rules = settings.rules.slice();
      const ruleIndex = action.ruleIndex;
      rules.splice(ruleIndex, 1, !rules[ruleIndex]);
      return Object.assign({}, settings, {rules});
    default:
      return settings;
  }
}
