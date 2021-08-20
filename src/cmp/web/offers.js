import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import digi from './../../img/digikala.jfif'
import snap from './../../img/snapp.png'
import divar from './../../img/divar.png'
import prof from './../../img/prof.jpeg'

class Offers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }
    increase() {
        this.setState({ current: this.state.current + 1 })
    }
    decrease() {
        if (this.state.current != 1) {
            this.setState({ current: this.state.current - 1 })
        }
    }
    render() {
        if (this.props.box == 'job') {
            return (
                <div className='offerscontainer'>
                    <div className="categoryTitle">شغل های باز</div>
                    <div className='offers'>
                        <Jobs
                            n='0'
                            title='برنامه نویس'
                            price='3 الی 4 میلیون'
                        />
                        <Jobs
                            n='1'
                            title='برنامه نویس'
                            price='3 الی 4 میلیون'
                        />
                        <Jobs
                            n='2'
                            title='برنامه نویس'
                            price='3 الی 4 میلیون'
                        />
                        <Jobs
                            n='0'
                            title='برنامه نویس'
                            price='3 الی 4 میلیون'
                        />
                        <Jobs
                            n='1'
                            title='برنامه نویس'
                            price='3 الی 4 میلیون'
                        />

                    </div>
                    <div className='whichPage'>
                        <FontAwesomeIcon onClick={this.increase} icon={faChevronRight} />
                        {this.state.current}
                        <FontAwesomeIcon onClick={this.decrease} style={this.state.current === 1 ? { color: '#3138962c' } : { color: '#313896' }} icon={faChevronLeft} />


                    </div>
                </div>
            )
        } else if (this.props.box == 'expert') {
            return (
                <div className='offerscontainer'>
                    <div className="categoryTitle">متخصص ها</div>
                    <div className='offers'>
                        <Experts
                            title='برنامه نویس فرانت'
                            exp='2سال سابقه کار'
                        />
                        <Experts
                            title='برنامه نویس فرانت'
                            exp='2سال سابقه کار'
                        />
                        <Experts
                            title='برنامه نویس فرانت'
                            exp='2سال سابقه کار'
                        />
                        <Experts
                            title='برنامه نویس فرانت'
                            exp='2سال سابقه کار'
                        />
                        <Experts
                            title='برنامه نویس فرانت'
                            exp='2سال سابقه کار'
                        />

                    </div>
                    <div className='whichPage'>
                        <FontAwesomeIcon onClick={this.increase} icon={faChevronRight} />
                        {this.state.current}
                        <FontAwesomeIcon onClick={this.decrease} style={this.state.current === 1 ? { color: '#3138962c' } : { color: '#313896' }} icon={faChevronLeft} />


                    </div>
                </div>
            )
        }

    }
}

class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: [
                <img src={divar} alt="" />,
                <img src={snap} alt="" />,
                <img src={digi} alt="" />
            ]
        }
    }
    render() {
        return (
            <div className='offerBox'>
                <div>{this.state.img[Number(this.props.n)]}</div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.price}</h4>
                <button>مشاهده آگهی</button>
            </div>
        )
    }
}

class Experts extends React.Component {
    render() {
        return (
            <div className='offerBox'>
                <img src={prof} alt="" />
                <h3>{this.props.title}</h3>
                <h4>{this.props.exp}</h4>
                <button>مشاهده پروفایل</button>
            </div>
        )
    }
}

export default Offers;