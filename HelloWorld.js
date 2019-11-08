import React, {Component} from 'react';
import { thisTypeAnnotation } from '@babel/types';


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 'world'
        };
    }
    
    changeStateToWorld = () => {
        this.setState({ who: 'world'})
    }
    
    changeStateToFriend = () => {
        this.setState({ who: 'friend'})
    }

    changeStateToReact = () => {
        this.setState({ who: 'react'})
    }

    render() {
        return (
        <div>
            <p>
                Hello, {this.state.who}
            </p>
            <button
                onClick={() => this.changeStateToWorld()}
            >
                World
            </button>
            <button
                onClick={() => this.changeStateToFriend()}
            >
                Friend
            </button>
            <button
                onClick={() => this.changeStateToReact()}
            >
                React
            </button>
        </div>
        )
    }
}

export default HelloWorld;

