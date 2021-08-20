import React from 'react'
import './../../sass/style.sass'
import logo from './../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                "یک",
                "دو",
                "سه",
                "چهار"
            ]
        }
    }
    render() {
        return (
            <div className='headerMenu'>
                <img src={logo} alt="" />
                <ul>
                    <li>{this.state.menu[0]}</li>
                    <li>{this.state.menu[1]}</li>
                    <li>{this.state.menu[2]}</li>
                    <li>{this.state.menu[3]}</li>
                </ul>
                <input placeholder='جست و جو...' type="text" name="" id="" />
                <FontAwesomeIcon icon={faSearch}/>
                <span>
                    <span className='headerSpan'>ورود</span>
                    {' / '}
                    <span className='headerSpan'>ثبت نام</span>
                </span>
            </div>
        )
    }
}

export default HeaderMenu;