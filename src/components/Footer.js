import { Fragment } from 'react';
// import github from '../images/icons/github.png';
// import linkedin from '../images/icons/linkedin.png';
// import phone from '../images/icons/phone.png';
// import email from '../images/icons/email.png';
// import resumePdf from '../docs/Mohak_Sunil_Waghchaure_Resume.pdf';
 
function Footer(){
    return(
        <Fragment>
            <div className='footer-wrapper'>
                <div className='container footer-container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='subscribe-wrapper'>
                                <div className='logo'>LOGO</div>
                                <div className='text'>Subscribe to stay up-to-date with the latest releases</div>
                                <div className='email-wrapper'>
                                    <input type="email" class="input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email id" />
                                    <button className='submit-btn'></button>
                                </div>
                                <div className='copyright-text'>©2024 All right reserved</div>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='nav-options'>
                                <div className='nav-list'>
                                    <ul>
                                        <li><a href='#'>About</a></li>
                                        <li><a href='#'>Blog</a></li>
                                        <li><a href='#'>Contact Us</a></li>
                                        <li><a href='#'>About</a></li>
                                    </ul>
                                </div>
                                <div className='nav-list'>
                                    <ul>
                                        <li><a href='#' className='active'>Pricing</a></li>
                                        <li><a href='#'>Showcase</a></li>
                                        <li><a href='#'>Resources</a></li>
                                        <li><a href='#'>Community</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;