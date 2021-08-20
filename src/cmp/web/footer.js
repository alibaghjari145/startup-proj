import React from 'react'
import './../../sass/style.sass'
import logo from './../../img/logo.png'

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            worker:['بخش کارجو','گزینه یک','گزینه دو','گزینه سه','گزینه چهار'],
            company:['بخش شرکت','گزینه یک','گزینه دو','گزینه سه','گزینه چهار'],
            platform:['پلتفرم ','گزینه یک','گزینه دو','گزینه سه','گزینه چهار'],
            ourSite:['بخش سایت','گزینه یک','گزینه دو','گزینه سه','گزینه چهار'],
        }
    }
    render(){
        return(
        <div className='footer'>
        <div className='footerOption'>
            <ul>
                <li>{this.state.worker[0]}</li>
                <li>{this.state.worker[1]}</li>
                <li>{this.state.worker[2]}</li>
                <li>{this.state.worker[3]}</li>
                <li>{this.state.worker[4]}</li>
            </ul>
            <ul>
                <li>{this.state.company[0]}</li>
                <li>{this.state.company[1]}</li>
                <li>{this.state.company[2]}</li>
                <li>{this.state.company[3]}</li>
                <li>{this.state.company[4]}</li>
            </ul>
            <ul>
                <li>{this.state.platform[0]}</li>
                <li>{this.state.platform[1]}</li>
                <li>{this.state.platform[2]}</li>
                <li>{this.state.platform[3]}</li>
                <li>{this.state.platform[4]}</li>
            </ul>
            <ul>
                <li>{this.state.ourSite[0]}</li>
                <li>{this.state.ourSite[1]}</li>
                <li>{this.state.ourSite[2]}</li>
                <li>{this.state.ourSite[3]}</li>
                <li>{this.state.ourSite[4]}</li>
            </ul>
        </div>
        <div className='footerText'>
            <img src={logo} alt="" />
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون </p>
        </div>
        </div>
        )
    }
}

export default Footer;