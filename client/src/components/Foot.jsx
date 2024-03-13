import React from "react"
import './Foot.css';

const Footer = () => <footer className="page-footer font-small var-text-light custom pt-4 px-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
                <h5 className="text-uppercase custom-underline custom-text-md">Portfolio</h5>
                <ul className="list-unstyled">
                    <li><a className='footer-link' target="_blank" href="https://main--bumpersresume.netlify.app/" >Lizzie Bumpers</a></li>
                    <li><a className='footer-link' target="_blank" href="https://relaxed-scone-337b91.netlify.app/" >Luke Babers</a></li>
                    <li><a className='footer-link' target="_blank" href="" >Deborah Hariharan Margar</a></li>
                    <li><a className='footer-link' target="_blank" href="https://tylerfruik.github.io/portfolio-redeploy/" >Tyler Fruik</a></li>
                    <li><a className='footer-link' target="_blank" href="https://dev-react-portfolio.netlify.app/projects" >Devin Shade</a></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase custom-underline custom-text-md">GitHub</h5>
                <ul className="list-unstyled">
                    <li><a className='footer-link' target="_blank" href="https://github.com/laude-noctis" >Lizzie Bumpers</a></li>
                    <li><a className='footer-link' target="_blank" href="https://github.com/Luwylbab" >Luke Babers</a></li>
                    <li><a className='footer-link' target="_blank" href="https://github.com/deboh12" >Deborah Hariharan Margar</a></li>
                    <li><a className='footer-link' target="_blank" href="https://github.com/tylerFruik" >Tyler Fruik</a></li>
                    <li><a className='footer-link' target="_blank" href="https://github.com/devinshade" >Devin Shade</a></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase custom-underline custom-text-md">LinkedIn</h5>
                <ul className="list-unstyled ">

                    <li><a className='footer-link' target="_blank" href="https://www.linkedin.com/in/lizzie-bumpers-90ba122b4/" >Lizzie Bumpers</a></li>
                    <li><a className='footer-link' target="_blank" href="https://www.linkedin.com/in/lucas-babers-1aa0862ab/" >Luke Babers</a></li>
                    <li><a className='footer-link' target="_blank" href="https://www.linkedin.com/in/deborah-alexander-155365294/" >Deborah Alexander</a></li>
                    <li><a className='footer-link' target="_blank" href="https://www.linkedin.com/in/tyler-fruik/" >Tyler Fruik</a></li>
                    <li><a className='footer-link' target="_blank" href="https://www.linkedin.com/in/devin-shade-649640231/" >Devin Shade</a></li>
                </ul>
            </div>
        </div>
    </div>

</footer>

export default Footer