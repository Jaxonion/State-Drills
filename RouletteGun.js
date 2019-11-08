import React, {Component} from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            bulletInChamber: 8
        }
    }
    randomNumber = () => {
        this.setState({
            spinningTheChamber: true
        })
        setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        },2000)
    }

    render() {
        let message = '';
        if (this.state.spinningTheChamber) {
            message = 'spinning the chamber and pulling the trigger! ...'
        }
        else {
            if (this.state.chamber == this.state.bulletInChamber) {
                message = 'BANG!!!!'
            }
            else {
                message = "you're safe!"
            }
        }
        return(
            <div>
                <p>
                    {message}
                </p>
                <button
                    onClick={this.randomNumber}>
                    Pull the trigger!
                </button>
            </div>
        )
    }


}

export default RouletteGun;