import React, {Component} from 'react';
import './Chatbox.css';
import Info from './Info'

class Chatbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            Message: 'Hello, welcome to SymptoBot.',
            Typed: ''
        };
    }
    render() {
        return (
            <div className='Chatbox'>
                <h1 className='Chatbox-Title'>SymptoBot says...</h1>

                <Info />

                <div className='Chatbox-Content'>
                <div className='Chatbox-Message'>
                </div>
                </div>
            </div>
        );
    }
}

export default Chatbox;