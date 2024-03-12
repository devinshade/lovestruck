import React from 'react'
import './Home.css';

const Home = () => {

  return (
    <section className='fullPage container container-fluid mx-auto'>
      <div className="row mb-4 mx-2 pt-4">
        <div className="text-center var-text-light custom-border-lg custom-bg-blue3 custom-inline col-9 m-2">
          <h1>Welcome to <span className='love-struck'>LoveStruck</span>!</h1>
          <h2>Catchphrase goes here!</h2>
        </div>
        <div className="col-2 align-content-center mx-2" id="main-login-div">
          <a className='text-decoration-none' href="/signup">
            <button className="custom-btn" id="main-login-btns">Sign Up</button>
          </a>
          <a className='text-decoration-none' href="/login">
            <button className="custom-btn " id="main-login-btns">Login</button>
          </a>
        </div>
      </div>
      <div className='row m-2'>
        <div className="col-3 mx-2 custom-bg-light" id="img-container">
          <img className="main-menu-img custom-border p-1" src="/src/assets/images/Photo1.png" alt="A couple getting married"/>
        </div>
        <div className="custom-border col-8 custom-bg-blue3 mx-2 p-4">
          <h4 className="var-text-light custom-text-lg custom-underline">About us</h4>
          <p className="var-text-light custom-text-md">
            PLACEHOLDER TEXT FOR THE ABOUT US SECTION OF THE MAIN PAGE
            GOES RIGHT HERE ON THE MAIN PAGE AND TALKS ABOUT US
            </p>
        </div>
      </div>
      <div className='row m-2'>
        <div className="custom-border col-8 custom-bg-blue3 mx-2 p-4">
          <h4 className="var-text-light custom-text-lg custom-underline">How it works</h4>
          <p className="var-text-light custom-text-md">
            PLACEHOLDER TEXT FOR THE HOW IT WORKS SECTION OF THE MAIN PAGE
            GOES RIGHT HERE ON THE MAIN PAGE AND TALKS ABOUT HOW IT WORKS
          </p>
        </div>
        <div className="col-3 mx-2  custom-bg-light" id="img-container">
          <img className="main-menu-img custom-border p-1" src="/src/assets/images/Photo2.png" alt="A couple getting married"/>
        </div>
      </div>
    </section>
  )
}

export default Home;