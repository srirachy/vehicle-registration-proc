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
  <footer>
    <div class="container footer-content d-flex justify-content-center align-items-center">
      <div class="container">
        <span>
          &copy;Fulsen Logistics
        </span>
      </div>
      <div class="container d-flex justify-content-end ">
        <div class="p-1">
          <a href="https://twitter.com/" target="_blank" class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x"
              viewBox="0 0 16 16">
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
            </svg>
          </a>
        </div>
        <div class="p-1">
          <a href="https://facebook.com/" target="_blank" class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-meta"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z" />
            </svg>
          </a>
        </div>
        <div class="p-1">
          <a href="https://instagram.com" target="_blank" class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  </> );
}
 
export default Home;