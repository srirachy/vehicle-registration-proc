import { Link } from 'react-router-dom';

const NavBar = () => {

  const loadNavi = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="img/logo-fl.webp"
              alt="Navbar Logo"
              className="nav-logo-img"
            />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          
            <ul className="navbar-nav d-flex d-lg-none mt-2 mt-lg-0">
              <li>
                <Link to="/support" className="nav-link">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/account" className="nav-link">
                  Account
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-none d-lg-flex mt-2 mt-lg-0">
              <li>
                <Link to="/support" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-question-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-gear-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  const loadAdminNavi = () => {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top  rgba($gray, .95) bg-light"
        aria-label="Main navigation"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="img/logo-fl.webp"
              alt="Navbar Logo"
              className="nav-logo-img"
            />
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/notifications" className="nav-link">
                  Notifications
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registration-vehicle" className="nav-link">
                  Registration
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/products"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/orders" className="nav-link">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/suggestions" className="nav-link">
                      Suggestions
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/userpreferences" className="btn">
                  Preferences
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <header>
      {(sessionStorage.length > 0 && (sessionStorage.getItem('role') === 'admin')) ? loadAdminNavi() : loadNavi() }
    </header>
  );
};

export default NavBar;
