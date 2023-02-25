import './Footer.css';

const Footer = () => {

    return(
        
       <div class="container-fluid">
            <div class="row contact-row">
                <div class="col-lg-3 col10">
                    <div class="box1_1">
                        <h4>Send us an Email</h4>
                        <hr></hr>
                        <form action="" method="post" enctype="text/plain">
                            <input type="email" placeholder="Type your email here..." name="email" required></input>
                            <div class="box1_message">
                            <input type="text" placeholder="Type your message here..." name="comment" required></input>
                            </div>
                            <button type="submit">SEND</button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-3 col10">
                    <div class="box1_1">
                        <h4>Leave a feedback</h4>
                        <hr></hr>
                        <form action="" method="post" enctype="text/plain">
                            <input type="text" placeholder="Type your name here..." name="email" required></input>
                            <div class="box1_message">
                            <input type="text" placeholder="Type your message here..." name="comment" required></input>
                            </div>
                            <button type="submit">SEND</button>
                        </form>
                    </div>
                </div>

                <div class="col-lg-3 col10">
                    <div class="box2">
                        <h4>Other Information</h4>
                        <hr></hr>
                        <h5>Address:</h5>
                        <a href="https://goo.gl/maps/6U1PGq2vTzt3jH2W7"><i class="fa-solid fa-location-dot">
                        </i>Brgy. Cebulano, Carmen, Davao del Norte</a>
                        <br></br>
                        <br></br>
                        <h5>Contact Info:</h5>
                        <p>09369361714</p>
                        <br></br>
                        <h5>Email Add:</h5>
                        <p>thebrownscasita@gmail.com</p>
                    </div>
                </div>

                <div class="col-lg-3 col10">
                    <div class="box2">
                        <h4>Get Social</h4>
                        <hr></hr>
                        <ul>
                            <li><a href="https://www.facebook.com/thebrownscasita"><i class="fa-brands fa-facebook"></i></a> Facebook</li>
                            <li><a href="https://www.instagram.com/thebrownscasita/"><i class="fa-brands fa-instagram"></i></a> Instagram</li>
                            <li><a href="fghfgh"><i class="fa-brands fa-twitter"></i></a>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col footer">
                    <p><i class="fa-solid fa-copyright"></i> 2022 The Browns Casita. All Rights Reserved.</p>
                    <a href="asddf">Licence</a>
                    <a href="asddf">Terms of Service</a>
                    <a href="asddf">Privacy Policy</a>
                    <button onclick="location.href = '#toppart';"><i class="fa-solid fa-circle-arrow-up"></i></button>
                </div>
            </div>

       </div>

    )

}

export default Footer;