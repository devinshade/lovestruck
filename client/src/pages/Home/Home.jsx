import React from 'react'
import './Home.css';

const Home = () => {

  return (
    <section className='fullPage container container-fluid mx-auto'>
      <div className="row mb-4 mx-2 pt-4">
        <div className="text-center var-text-light custom-border-lg custom-bg-blue3 custom-inline col-9 m-2">
          <h1 className='custom-text-xxl'>Welcome to <span className='love-struck'>LoveStruck</span>!</h1>
          <h2>LoveStruck simplifies wedding planning effortlessly</h2>
        </div>
        <div className="col-2 align-content-center mx-2" id="main-login-div">
          <a className='text-decoration-none' href="/signup">
            <button className="custom-btn" id="main-login-btns">Sign Up</button>
          </a>
          <a className='text-decoration-none' href="/login">
            <button className="custom-btn" id="main-login-btns">Login</button>
          </a>
        </div>
      </div>
      <div className='row m-2'>
        <div className="col-3 mx-2 custom-bg-light" id="img-container">
          <img className="main-menu-img custom-border p-1" src="images/Photo1.png" alt="A couple getting married"/>
        </div>
        <div className="custom-border col-8 custom-bg-blue3 mx-2 p-4">
          <h4 className="var-text-light custom-text-lg custom-underline">About Us</h4>
          <p className="var-text-light custom-text-md">
            Welcome to <span className='love-struck'>LoveStruck</span>, where dreams meet meticulous planning for your perfect day!
            With <span className='love-struck'>LoveStruck</span> by your side, you can relax and cherish every moment, knowing that your special day is in expert hands. 
            Let's create memories that will leave you <span className='love-struck'>LoveStruck</span> forever!
            </p>
        </div>
      </div>
      <div className='row m-2'>
        <div className="custom-border col-8 custom-bg-blue3 mx-2 p-4">
          <h4 className="var-text-light custom-text-lg custom-underline">How it Works</h4>
          <p className="var-text-light custom-text-md">
          Start by creating your event, detailing every aspect of your dream day. Once set, 
          invite your loved ones through seamless RSVPs. As you and your guests confirm attendance, 
          the <span className='love-struck'>LoveStruck</span> calendar automatically populates on your profile, ensuring you stay organized. 
          Meanwhile, explore and RSVP to other enchanting events, celebrating the love stories of those dear to you.
          </p>
        </div>
        <div className="col-3 mx-2  custom-bg-light" id="img-container">
          <img className="main-menu-img custom-border p-1" src="images/Photo2.png" alt="A couple getting married"/>
        </div>
      </div>
    </section>
  )
}

export default Home;