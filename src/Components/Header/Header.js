import logo from './logo-removebg-preview.png'


function Header (){
    return (

        <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <img src={logo} alt="logo" width="150" />
            <a class="navbar-brand" href="#"> </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active ps-5" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item ps-5">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item ps-5">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <button class="sign__up p-2 px-4 py-2 mx-5 my-2">Sign Up</button>
          </div>
        </nav>
      </header>

    

    )
}

export default Header