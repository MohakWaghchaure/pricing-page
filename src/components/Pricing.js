import { Fragment, useState } from 'react';
import Circles from './Circles';

function Pricing(){
    const [period, setPeriod] = useState('annually');
    function showAnnually(){
        document.querySelector('.btn-annually').classList.add("active");
        document.querySelector('.btn-monthly').classList.remove("active");
        setPeriod('annually');
    }
    function showMonthly(){
        document.querySelector('.btn-monthly').classList.add("active");
        document.querySelector('.btn-annually').classList.remove("active");
        setPeriod('monthly');
    }
    return(
        <Fragment>
            <div className='pricing-wrapper'>
                <Circles></Circles>
                <div className='container pricing-container'>
                    <div className='pricing-hero-section'>
                        <div className='content-wrapper'>
                            <h1>Pricing plans for every need</h1>
                            <div className='sub-text'>Bring customer data to every business decision.</div>
                        </div>
                    </div>
                    <div className='period-set-wrapper'>
                        <button className='btn-annually active' onClick={showAnnually}>Annually</button>
                        <button className='btn-monthly' onClick={showMonthly}>Monthly</button>
                    </div>
                    {(period == 'annually') && <div className='pricing-cards annually'>
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
                    </div>}
                    {(period == 'monthly') && <div className='pricing-cards monthly'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='card card-wrapper'>
                                    <div className='card-body card'>
                                        <div className='title'>Essential</div>
                                        <div className='sub-text'>Lorem Ipsum is simply dummy text</div>
                                        <div className='price-wrap'>
                                            <div className='price'>$2k</div>
                                            <div className='sm-text'>Billed monthly</div>
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
                                            <div className='price'>$5k</div>
                                            <div className='sm-text'>Billed monthly</div>
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
                                            <div className='price'>$8k</div>
                                            <div className='sm-text'>Billed monthly</div>
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
                    </div>}
                    <div className='get-started-wrapper'>
                        <div className='get-started'>
                            <div className='title'>Not sure where to start?</div>
                            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                            <div className='btn-wrapper'>
                                <button className='btn'>Contact us</button>
                            </div>
                        </div>
                        <div className='started-image'></div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Pricing;