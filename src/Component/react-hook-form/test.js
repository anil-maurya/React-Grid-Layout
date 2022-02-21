"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
var react_1 = require("react");
var createFormControl_1 = require("./logic/createFormControl");
var getProxyFormState_1 = require("./logic/getProxyFormState");
var shouldRenderFormState_1 = require("./logic/shouldRenderFormState");
var useSubscribe_1 = require("./useSubscribe");
/**
 * Custom hook to mange the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useForm(props) {
  if (props === void 0) {
    props = {};
  }
  var _formControl = react_1.default.useRef();
  var _a = react_1.default.useState({
      isDirty: false,
      isValidating: false,
      dirtyFields: {},
      isSubmitted: false,
      submitCount: 0,
      touchedFields: {},
      isSubmitting: false,
      isSubmitSuccessful: false,
      isValid: false,
      errors: {}
    }),
    formState = _a[0],
    updateFormState = _a[1];
  if (_formControl.current) {
    _formControl.current.control._options = props;
  } else {
    _formControl.current = __assign(
      __assign({}, createFormControl_1.createFormControl(props)),
      { formState: formState }
    );
  }
  var control = _formControl.current.control;
  var callback = react_1.default.useCallback(
    function (value) {
      if (
        shouldRenderFormState_1.default(value, control._proxyFormState, true)
      ) {
        control._formState = __assign(__assign({}, control._formState), value);
        updateFormState(__assign({}, control._formState));
      }
    },
    [control]
  );
  useSubscribe_1.useSubscribe({
    subject: control._subjects.state,
    callback: callback
  });
  react_1.default.useEffect(function () {
    if (!control._stateFlags.mount) {
      control._proxyFormState.isValid && control._updateValid();
      control._stateFlags.mount = true;
    }
    if (control._stateFlags.watch) {
      control._stateFlags.watch = false;
      control._subjects.state.next({});
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState_1.default(
    formState,
    control._proxyFormState
  );
  return _formControl.current;
}
exports.useForm = useForm;
