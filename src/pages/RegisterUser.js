const RegisterUser = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mx-auto main-register my-md-5">
      <div class="container border border-secondary page-transparent p-4">
        <form class="d-flex flex-column ">
          <h1>Create Account</h1>
          <div class="form-group">
            <label htmlFor="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mt-2">
            <label htmlFor="inputPassword" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
          <div class="form-group mt-2">
            <label htmlFor="inputPasswordConfirm" class="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              class="form-control"
              id="inputPasswordConfirm"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-flat-blue my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
