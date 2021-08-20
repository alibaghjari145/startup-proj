import React from 'react';
import './../../sass/style.sass'
import header from './../../img/remote.jpg'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div>
                <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون </h1>
                <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله  </h3>
                <button className='headerBtn'>همین الان ثبت نام کن</button>
                </div>
                <img src={header} alt="remote work" />
            </div>
        )
    }
}

export default Header;