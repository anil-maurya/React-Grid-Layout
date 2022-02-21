import { Provider } from "./context";
import { Grid } from "@material-ui/core";
const Form = (props) => {
  const {
    id: formId = "buForm",
    fields = [],
    override = {},
    disabled = false,
    columns = 1
  } = props;

  // const willMount = useRef(true);

  // if (willMount.current) {
  //   // console.log('Component will mount', formId);
  //   init(formId);
  //   willMount.current = false;
  // }

  // init(formId);
  // updateStore({ formId, fields, data });

  return (
    <form id={formId}>
      <Grid container spacing={2}>
        {fields.map((field) => {
          // data passed in override prop override to data passed in fields(JSON form object)
          const overrideWith = override[field.id] || {};
          const overriddenData = {
            ...field,
            ...overrideWith,
            validation: {
              ...field?.validation,
              ...overrideWith.validation
            }
          };

          // console.log({ overriddenData });
          return (
            <Grid item key={field.id} md={12 / columns} xs={12}>
              <BuFormField
                data={overriddenData}
                disabled={disabled}
                formId={formId}
              />
            </Grid>
          );
        })}
      </Grid>
    </form>
  );
};

export default function BuForm(props) {
  const { id, fields, override } = props;
  return (
    <Provider value={override}>
      <Form />
    </Provider>
  );
}
