import contentImage from './content.png'
import ArrowRight from './Arrow-Right 1.png'


function Content() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 mt-5 pt-5 ps-5 ms-5">
            <h2 class="title">E-Banking for customers</h2>
            <p class="content">
              Draft is a revolutionary mobile app built to help you manage your
              busniess easily and save your money
            </p>
            <button type="button" class="reg mt-2 px-4 py-2 shadow">
             Get Started
              <img src={ArrowRight} alt="arrow" height="25px" />
            </button>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <img
              src={contentImage}
              alt="phone"
              class="phone"
              width="600px"
            />
          </div>
        </div>
      </div>
    )
    
}


export default Content