import React, {Component} from 'react';


class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            bombStatus: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        const count = this.state.count
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const count = this.state.count
        if (count >= 8) {
            clearInterval(this.interval)
        }
        let message = '';
            if (count === 0) {
                message = 'tick'
            }
            else if (count % 8 === 0) {
                message = 'BOOM!!!!'
            }
            else if (count % 2 === 0) {
                message = 'tick';
            }
            else {
                message = 'tock';
            }
    
        
        console.log('render')
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Bomb;