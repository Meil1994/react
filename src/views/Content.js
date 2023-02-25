import './Content.css';
import image from '../photos/photo1.jpg'
import image2 from '../photos/photo6.jpg'

const Content = () =>{
    
    return(
      <div class="container-fluid no-gutters">
        <div class="row content1-row">
            <div class="col-lg-6 content1-col">
                <h1>Meet your tropical home 
                   away from home
                </h1>
                <p>Experience one of the best villas in Davao del Norte. We offer clean, 
                    comfortable, and affordable stays. Be one who can indulge in this wonderful and
                     peaceful private place. What are you waiting for? Start and book your stay.
                </p>
                <br></br>
                <img src = {image2} class="image2" alt="Logo" />
            </div>

            <div class="col-lg-6 content1-col">
              <img src = {image} alt="Logo" />
            </div>
        </div>

        <div class="row customers-feedbck">
            <h1>What do our customers say?</h1>
            <hr></hr>
        </div>

        <div class="row feedback1">
            <div class="col-md-4 feedback-content">
                <h1>★★★★★</h1>
                <p>“The place was very nice and clean. The host 
                    was very accommodating and responsive as 
                    well. She was very helpful during check-in. We 
                    even got a free breakfast!! Would definitely 
                    recommend this place and I can't wait to book 
                    again.”
                </p>
                <h2>-Cybele Lou J.</h2>
            </div>

            <div class="col-md-4 feedback-content">
                <h1>★★★★★</h1>
                <p>“The place is truly wonderful. An experience to
                    have when planning a getaway with your loved 
                   ones.”
                </p>
                <h2>-Von</h2>
            </div>

            <div class="col-md-4 feedback-content">
                <h1>★★★★★</h1>
                <p>
                    “The Browns Casita is a destination that is one 
                    for the books! The place is truly amazing, 
                    pleasant, and relaxing. It's like you're not even 
                    in Panabo. I would definitely book again here.”
                </p>
                <h2>-Christian L.</h2>
            </div>
        </div>


      </div>

  
    )


}

export default Content;