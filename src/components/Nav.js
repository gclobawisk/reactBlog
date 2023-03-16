import {Link } from 'react-router-dom'


function Nav(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a class="navbar-brand">ReactBlog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  
                  <a class="nav-link"><Link to="/" class="text-white">Home</Link> <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"><Link to="/contact" class="text-white">Contato</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link"><Link to="/company" class="text-white">Sobre</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link"><Link to="/login" class="text-white">Login</Link></a>
                </li>

                
        
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2 rounded-pill" type="search" placeholder="Pesquisar" aria-label="Search"/>
                  <button class="btn btn-outline-warning my-2 my-sm-0 rounded-circle" type="submit"><i class="fas fa-search"></i></button>
              </form>
            </div>
          </nav>
    )
}

export default Nav