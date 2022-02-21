const formJSONOrg = [
  {
    id: "42",
    label: "Mobile number",
    type: "textField",
    placeholder: "Enter mobile number",
    helperText: null,
    errorText: null,
    validation: {
      required: true,
      inputType: "mobile",
      min: 0,
      max: 0
    }
  },
  {
    id: "66",
    label: "Pipeline",
    placeholder: "Select pipeline",
    type: "dropdown",
    optionsId: null,
    options: null,
    variant: "inputBase",
    helperText: null,
    errorText: null,
    validation: {
      required: true
    },
    child: "67",
    parent: null
  },
  {
    id: "67",
    label: "Stage",
    type: "dropdown",
    variant: "inputBase",
    optionsId: null,
    options: null,
    placeholder: "Select stage",
    helperText: null,
    errorText: null,
    validation: {
      required: true
    },
    child: null,
    parent: "66"
  },
  {
    id: "49",
    label: "Owner",
    placeholder: "Select owner",
    type: "dropdown",
    variant: "inputBase",
    optionsId: null,
    options: null,
    helperText: null,
    errorText: null,
    validation: {
      required: false
    }
  },

  {
    id: "43",
    label: "First Name",
    type: "textField",
    placeholder: "Enter first name",
    helperText: null,
    errorText: null,
    validation: {
      required: false,
      inputType: "text",
      min: 0,
      max: 0
    }
  },
  {
    id: "44",
    label: "Last Name",
    type: "textField",
    placeholder: "Enter last name",
    helperText: null,
    errorText: null,
    validation: {
      required: false,
      inputType: "text",
      min: 0,
      max: 0
    }
  },
  {
    id: "45",
    label: "Email",
    type: "textField",
    placeholder: "Enter email",
    helperText: null,
    errorText: null,
    validation: {
      required: false,
      inputType: "email",
      min: 0,
      max: 0
    }
  },
  {
    id: "46",
    label: "Gender",
    type: "dropdown",
    optionsId: null,
    options: null,
    placeholder: "Select gender",
    variant: "inputBase",
    helperText: null,
    errorText: null,
    validation: {
      required: false,
      inputType: null,
      min: 0,
      max: 0
    }
  },
  {
    id: "47",
    label: "Date of birth",
    type: "date",
    placeholder: "select date of birth",
    helperText: null,
    errorText: null,
    validation: {
      required: false,
      inputType: "date",
      min: 0,
      max: 0
    }
  },
  {
    id: "48",
    label: "Source",
    type: "dropdown",
    optionsId: null,
    options: null,
    placeholder: "Select source",
    variant: "inputBase",
    helperText: null,
    errorText: null,
    validation: {
      required: false
    }
  }
];

const formJSON = [
  {
    id: "42",
    label: "Mobile number",
    type: "textField",
    placeholder: "Enter mobile number",
    // helperText: null,
    // errorText: null,
    validation: {
      required: true,
      inputType: "mobile",
      min: 0,
      max: 0
    }
  },
  {
    id: "66",
    label: "Pipeline",
    placeholder: "Select pipeline",
    type: "dropdown",
    // optionsId: null,
    // options: null,
    variant: "inputAvatarSearchSingle",
    // helperText: null,
    // errorText: null,
    validation: {
      required: true
    },
    child: "67"
    // parent: null,
  },
  {
    id: "67",
    label: "Stage",
    type: "dropdown",
    variant: "inputBase",

    placeholder: "Select stage",

    validation: {
      required: true
    },
    parent: "66"
  }
];

export const override = {
  42: {
    defaultData: "9540352840"
  },
  66: {
    options: [
      {
        id: "pip-1",
        label: "Pipeline 1"
      },
      {
        id: "pip-2",
        label: "Pipeline 2"
      }
    ]
  },
  67: {
    header: "input",
    options: [
      {
        id: "stage-1",
        label: "Stage 1"
      },
      {
        id: "stage-2",
        label: "Stage 2"
      }
    ]
  }
};
export default formJSON;
