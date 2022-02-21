// buFormHook

/*
// formState data structure. it holds forms data

const state = {
  formId: {
    value: {},
    error: false,
    editing: false
  }
};
*/

const state = {};

/**
 * Update state
 * @param {String} formId FormId
 * @param {String} stateType state type - oneof ['value', 'error', 'editing']
 * @param {Object} data  - data - {'id': 'value'}
 */

const setValue = (formId, value) => {
  const prevState = state[formId]?.value || {};
  state[formId].value = {
    ...prevState,
    value
  };
};

export { setValue };
