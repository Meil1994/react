import './Header.css';
import logo from '../photos/logo.jpg'
 
const Header = () =>{

    return(
            <div class="container-fluid" style={{ backgroundImage: 'linear-gradient(90deg,rgba(80, 79, 79, 0.616),rgba(25, 3, 44, 0.829))'}}>
              <div class="row nav-row">
                <div class="col-md-4">
                  <img src = {logo} class="logo" alt="Logo" />
                </div>

                <div class="col-md-4 nav">
                  <ul>
                    <li>HOME</li>
                    <li>FACILITIES</li>
                    <li>CONTACT</li>
                  </ul>
                </div>

                <div class="col-md-4 nav2">
                  <a href="https://www.instagram.com/thebrownscasita/" target="blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.facebook.com/thebrownscasita" target="blank"><i class="fa-brands fa-facebook"></i></a>
                  <i class="fa-solid fa-user"></i>
                </div>
              </div>

              <div class="row opening-row">
                <h5>WELCOME TO</h5>
                <h1>THE BROWNS CASITA</h1>
                <p>A Tropical Hideaway! Feel the tropical paradise vibe
                  <br></br> without traveling away from the City. 
                </p>
                <button>CLICK TO BOOK</button>
              </div>
              
            </div>
    )


}

export default Header;