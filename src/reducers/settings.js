/* Action Types */
export const TOGGLE_RULE = 'TOGGLE_RULE';
export const TOGGLE_INIT_SQUARE = 'TOGGLE_INIT_SQUARE';

/* Action Creators */
export function toggleRule(ruleIndex) {
  return {
    type: TOGGLE_RULE,
    ruleIndex
  }
}

export function toggleInitSquare(initRowIndex) {
  return {
    type: TOGGLE_INIT_SQUARE,
    initRowIndex
  }
}

/* reducer */
const initialRow = '.'.repeat(24).split('.').map(() => false);

export default function settings(settings = {
    rules: [false, false, false, false,
            false, false, false, false],
    initRow: initialRow
}, action) {
  switch(action.type){
    case TOGGLE_RULE:
      const rules = settings.rules.slice();
      const ruleIndex = action.ruleIndex;
      rules.splice(ruleIndex, 1, !rules[ruleIndex]);
      return Object.assign({}, settings, {rules});
    case TOGGLE_INIT_SQUARE:
      const initRow = settings.initRow.slice();
      const initRowIndex = action.initRowIndex;
      initRow.splice(initRowIndex, 1, !initRow[initRowIndex]);
      return Object.assign({}, settings, {initRow});
    default:
      return settings;
  }
}
