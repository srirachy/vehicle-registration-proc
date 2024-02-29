const emailObj = {
  divInfo: {
    divClass: "form-group",
  },
  labelInfo: {
    labelFor: "inputEmail",
    labelClass: "form-label",
    labelContent: "Email",
  },
  inputInfo: {
    inputType: "email",
    inputClass: "form-control",
    inputName: "inputEmail",
    inputId: "input-email",
    inputPlaceholder: "Enter email",
  },
}

const pwObj = {
  divInfo: {
    divClass: "form-group mt-2",
  },
  labelInfo: {
    labelFor: "inputPassword",
    labelClass: "form-label",
    labelContent: "Password",
  },
  inputInfo: {
    inputType: "password",
    inputClass: "form-control",
    inputName: "inputPassword",
    inputId: "input-password",
    inputPlaceholder: "********",
  },
};

const pwConfirmObj = {
  divInfo: {
    divClass: "form-group mt-2",
  },
  labelInfo: {
    labelFor: "inputPasswordConfirm",
    labelClass: "form-label",
    labelContent: "Confirm Password",
  },
  inputInfo: {
    inputType: "passwordConfirm",
    inputClass: "form-control",
    inputName: "inputPasswordConfirm",
    inputId: "input-password-confirm",
    inputPlaceholder: "********",
  },
};

const inputFormInit = {
  inputEmail: '',
  inputPassword: '',
}

export { emailObj, pwObj, pwConfirmObj, inputFormInit };