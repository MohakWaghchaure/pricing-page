import { Fragment } from 'react';
import Circles from './Circles';
 
function Pricing(){
    return(
        <Fragment>
            <div className='pricing-wrapper'>
                <Circles></Circles>
                <div className='container pricing-container'>
                    <div className='pricing-hero-section'>
                        <div className='content-wrapper'>
                            <h1>Pricing plans for every need</h1>
                        </div>
                    </div>
                    <div className='pricing-cards'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='card card-wrapper'>
                                    <div className='card-body card'>
                                        <div className='title'>Essential</div>
                                        <div className='sub-text'>Lorem Ipsum is simply dummy text</div>
                                        <div className='price-wrap'>
                                            <div className='price'>$20k</div>
                                            <div className='sm-text'>Billed annually</div>
                                            <div className='line-bottom'></div>
                                        </div>
                                        <div className='information-wrap'>
                                            <div className='info'>What's include?</div>
                                            <div className='info-point'><span className='bullet-icon'></span>4,500 respondent completes</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Unlimited surveys</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Unlimited users</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Complete surveys in hours</div>
                                            <div className='info-point'><span className='bullet-icon'></span>50-2000 completes per survey</div>
                                            <div className='info-point'><span className='bullet-icon'></span>30 day quick start onboarding</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Max 15 questions per survey</div>
                                            
                                        </div>
                                        <div className='book-demo-wrap'>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>Book demo</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card card-wrapper'>
                                    <div className='card-body card popular'>
                                        <div className='title'>Essential Plus</div>
                                        <div className='sub-text'>Lorem Ipsum is simply dummy text</div>
                                        <div className='price-wrap'>
                                            <div className='price'>$44k</div>
                                            <div className='sm-text'>Billed annually</div>
                                            <div className='line-bottom'></div>
                                        </div>
                                        <div className='information-wrap'>
                                            <div className='info'>What's include?</div>
                                            <div className='info-point'><span className='bullet-icon'></span>10,000 respondent completes</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Unlimited surveys</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Unlimited users</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Complete surveys in hours</div>
                                            <div className='info-point'><span className='bullet-icon'></span>50-2000 completes per survey</div>
                                            <div className='info-point'><span className='bullet-icon'></span>30 day quick start onboarding</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Max 15 questions per survey</div>
                                            
                                        </div>
                                        <div className='book-demo-wrap'>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>Book demo</button>
                                            </div>
                                        </div>
                                        <div className='highlight-popular'>Popular</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card card-wrapper'>
                                    <div className='card-body card'>
                                        <div className='title'>Enterprise</div>
                                        <div className='sub-text'>Lorem Ipsum is simply dummy text</div>
                                        <div className='price-wrap'>
                                            <div className='price'>$70k</div>
                                            <div className='sm-text'>Billed annually</div>
                                            <div className='line-bottom'></div>
                                        </div>
                                        <div className='information-wrap'>
                                            <div className='info'>What's include?</div>
                                            <div className='info-point'><span className='bullet-icon'></span>17,500 respondent completes</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Unlimited surveys</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Unlimited users</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Complete surveys in hours</div>
                                            <div className='info-point'><span className='bullet-icon'></span>50-2000 completes per survey</div>
                                            <div className='info-point'><span className='bullet-icon'></span>30 day quick start onboarding</div>
                                            <div className='info-point'><span className='bullet-icon'></span>Max 15 questions per survey</div>
                                            
                                        </div>
                                        <div className='book-demo-wrap'>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>Book demo</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='get-started-wrapper'>
                        <div className='get-started'>
                            <div className='title'>Not sure where to start?</div>
                            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                            <div className='btn-wrapper'>
                                <button className='btn'>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Pricing;