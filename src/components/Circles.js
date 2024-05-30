import { Fragment } from 'react';
 
function circles(){
    return(
        <Fragment>
            <div className='circles-wrapper'>
                <div className='circles-container'>
                    <div className='backgroundCircle circle_1 odd'></div>
                    <div className='backgroundCircle circle_2 even'></div>
                    <div className='backgroundCircle circle_3 odd'></div>
                    <div className='backgroundCircle circle_4 even'></div>
                    <div className='backgroundCircle circle_5 odd'></div>
                    <div className='backgroundCircle circle_6 even'></div>
                    <div className='backgroundCircle circle_7 odd'></div>
                    <div className='backgroundCircle circle_8 even'></div>
                </div>
            </div>
        </Fragment>
    )
}

export default circles;