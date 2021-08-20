import { faMoneyBillWave, faPizzaSlice, faPuzzlePiece, faSearch, faShieldAlt, faSignal, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './../../sass/style.sass'

class Feature extends React.Component {
    render() {
        return (
            <div className='feature'>
                <div className='categoryTitle'><p>چرا سایت ما؟</p></div>
                <div className='featureContainer'>
                    <FeatureBox
                        icons='0'
                        title='عنوان اول'
                        text='متن اول'
                    />
                    <FeatureBox
                        icons='1'
                        title='عنوان دوم'
                        text='متن دوم'
                    />
                    <FeatureBox
                        icons='2'
                        title='عنوان سوم'
                        text='متن سوم'
                    />
                </div>
            </div>
        )
    }
}
class FeatureBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icons: [
            <FontAwesomeIcon className='featureIcon' icon={faShieldAlt}/>,
            <FontAwesomeIcon className='featureIcon' icon={faPuzzlePiece}/>,
            <FontAwesomeIcon className='featureIcon' icon={faMoneyBillWave}/>
            ]
        }
    }
    render() {
        
        return (
      
        <div className='featureBox'>
            <div></div>
             <div>{this.state.icons[Number(this.props.icons)]}</div>
           <h2>
                {this.props.title}
            </h2>
            <h4>
                {this.props.text}
            </h4>
        </div>
        )
    }
}

export default Feature;