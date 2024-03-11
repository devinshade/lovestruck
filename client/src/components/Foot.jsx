import React from "react"
import './Foot.css';

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Portfolio</h5>
                <ul className="list-unstyled">
                    <li><a href="" class="link-light">Lizzie Bumpers</a></li>
                    <li><a href="" class="link-light">Luke Babers</a></li>
                    <li><a href="" class="link-light">Deborah Hariharan Margar</a></li>
                    <li><a href="" class="link-light">Tyler Fruik</a></li>
                    <li><a href="" class="link-light">Devin Shade</a></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">GitHub</h5>
                <ul className="list-unstyled">
                    <li><a href="https://github.com/laude-noctis" class="link-light">Lizzie Bumpers</a></li>
                    <li><a href="https://github.com/Luwylbab" class="link-light">Luke Babers</a></li>
                    <li><a href="https://github.com/deboh12" class="link-light">Deborah Hariharan Margar</a></li>
                    <li><a href="https://github.com/tylerFruik" class="link-light">Tyler Fruik</a></li>
                    <li><a href="https://github.com/devinshade" class="link-light">Devin Shade</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">LinkedIn</h5>
                <ul className="list-unstyled ">
                    {/* <li><a href="" class="link-light">Lizzie Bumpers</a></li> */}
                    <li><a href="https://www.linkedin.com/in/lucas-babers-1aa0862ab/" class="link-light">Luke Babers</a></li>
                    {/* <li><a href="" class="link-light">Deborah Hariharan Margar</a></li> */}
                    <li><a href="https://www.linkedin.com/in/tyler-fruik/" class="link-light">Tyler Fruik</a></li>
                    <li><a href="https://www.linkedin.com/in/devin-shade-649640231/" class="link-light">Devin Shade</a></li>
                </ul>
            </div>
        </div>
    </div>

</footer>

export default Footer