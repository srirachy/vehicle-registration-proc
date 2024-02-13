const Home = () => {
  return ( 
  <>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/index.html"><img src="img/logo-fl.webp" alt="Navbar Logo" class="nav-logo-img"/></a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="/index.html" aria-current="page">Home
                <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about.html">About</a>
            </li>
          </ul>
          <ul class="navbar-nav d-flex d-lg-none mt-2 mt-lg-0">
            <li><a class="nav-link" href="/support.html">Support</a></li>
            <li><a class="nav-link" href="/settings.html">Settings</a></li>
            <li><a class="nav-link" href="/login.html">Account</a></li>
          </ul>
          <ul class="navbar-nav d-none d-lg-flex mt-2 mt-lg-0">
            <li><a class="nav-link" href="/support.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-question-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg></a></li>
            <li><a class="nav-link" href="/settings.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg></a></li>
            <li><a class="nav-link" href="/login.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>    
    <div class="parallax" id="para-one">
      <div class="container para-content d-flex justify-content-center align-items-center">
        <div class="container text-center para-transparent">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.</h2>
        </div>
      </div>
    </div>
    <div class="parallax" id="para-two">
      <div class="container para-content d-flex justify-content-center align-items-center">
        <div class="container text-center para-transparent">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.</h2>
        </div>
      </div>
    </div>
    <div class="parallax" id="para-three">
      <div class="container para-content d-flex justify-content-center align-items-center">
        <div class="container text-center para-transparent">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.</h2>
        </div>
      </div>
    </div>
    <div class="parallax" id="para-four">
      <div class="container para-content d-flex justify-content-center align-items-center">
        <div class="container text-center para-transparent">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.</h2>
        </div>
      </div>
    </div>
    <div class="parallax" id="para-five">
      <div class="container para-content d-flex justify-content-center align-items-center">
        <div class="container text-center para-transparent">
          <h1>Lorem Ipsum</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex totam natus ea nesciunt. Impedit dolorem odit consequatur facere necessitatibus delectus soluta.</h2>
        </div>
      </div>
    </div>
  </main>
  </> );
}
 
export default Home;