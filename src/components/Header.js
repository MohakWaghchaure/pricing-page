import { Fragment } from 'react';
 
function Header(){
    return(
        <Fragment>
            <div className='header-wrapper fixed-top'>
                <div className='container header-container'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-5 col-sm-5 col-6 logo-wrapper'>
                            <div className='logo'>LOGO</div>
                        </div>
                        <div className='col-lg-7 col-md-7 col-sm-7 col-6 nav-wrapper'>
                            <div className='nav-container'>
                                <div className='nav'>Products</div>
                                <div className='nav'>Solutions</div>
                                <div className='nav'>Resources</div>
                                <div className='nav active'>Pricing</div>
                                <div className='nav extra'>
                                    <div className='button'>Get In Touch</div>
                                </div>
                            </div>
                            {/* <div className='hamburger' onClick={() => setMobileMenu(!mobileMenu)}>
                                <img src={HamburgerMenu}/>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='highlight-line'></div>
            </div>
        </Fragment>
    )
}

export default Header;