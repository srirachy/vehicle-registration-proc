import { useState } from 'react'; 
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

const Login = () => {
  const [inputFormObj, setInputFormObj] = useState({
    inputEmail: '',
    inputPassword: ''
  });
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');
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
  };

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
      inputPlaceholder: "Password",
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputFormObj);
  }

  return (
    <div className="d-flex justify-content-center align-items-center mx-auto main-login my-5">
      <div className="container border border-secondary page-transparent p-4">
        <form className="d-flex flex-column ">
          <h1>Sign In</h1>
          <FormInput formObj={emailObj} onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})}/>
          <FormInput formObj={pwObj} onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})}/>
          <Button
            btnType="submit"
            btnClass="btn btn-flat-blue my-3"
            btnContent="Login"
            onClick={submitHandler}
          />
        </form>
        <div className="container d-flex flex-column justify-content-evenly align-items-center">
          <span className="user-forgot mx-3">Forgot Email?</span>
          <span className="user-forgot mx-3">Forgot Password?</span>
        </div>
        <div className="container d-flex flex-row justify-content-center align-items-center">
          <hr className="w-25" />
          <span className="mx-2">Or</span>
          <hr className="w-25" />
        </div>
        <Link
          to="/registration"
          role="button"
          className="btn btn-twilight-lavender w-100"
          aria-pressed="true"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
