import { useState } from 'react';
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { emailObj, pwObj, pwConfirmObj, inputFormInit } from '../configs/FormConfig';

const SignUp = () => {
  const [inputFormObj, setInputFormObj] = useState({...inputFormInit, inputPasswordConfirm : ''});
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputFormObj);
  }

  return (
    <main className="d-flex justify-content-center align-items-center">
      <div className="container border border-secondary page-transparent p-4 form-container">
        <form className="d-flex flex-column ">
          <h1>Create Account</h1>
          <FormInput formObj={emailObj} onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})} />
          <FormInput formObj={pwObj}  onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})} />
          <FormInput formObj={pwConfirmObj} onChange={(e) => setInputFormObj({...inputFormObj, [e.target.name]: e.target.value})} />
          <Button btnType="submit" btnClass="btn btn-flat-blue mt-5" btnContent="Submit" onClick={submitHandler} />
        </form>
      </div>
    </main>
  );
};

export default SignUp;
