import { useState } from 'react'; 
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { emailObj, pwObj, inputFormInit } from '../configs/FormConfig';

const Login = () => {
  const [inputFormObj, setInputFormObj] = useState(inputFormInit);
  // const [errorMsg, setErrorMsg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputFormObj);
  }

  return (
    <main className="d-flex justify-content-center align-items-center">
      <div className="container border border-secondary page-transparent p-4 form-container">
        <form className="d-flex flex-column ">
          <h1>Sign In</h1>
          <FormInput formObj={emailObj} onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})} />
          <FormInput formObj={pwObj} onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})} />
          <Button btnType="submit" btnClass="btn btn-flat-blue my-3" btnContent="Login" onClick={submitHandler} />
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
          to="/signup"
          role="button"
          className="btn btn-twilight-lavender w-100"
          aria-pressed="true"
        >
          Create Account
        </Link>
      </div>
    </main>
  );
};

export default Login;
