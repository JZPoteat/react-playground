import React from 'react';

export default class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
        
    }


    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    renderMessage = () => {
        //If spinningTheChamber === true, render "Spinning the chamber and pulling the trigger!"
        //If the chamber value in state is the same as the bulletInChamber value, render BANG!!!
        //Otherwise, render safe
        let spinning = this.state.spinningTheChamber
        if(spinning) {
            return 'Spinning the chamber and pulling the trigger!';
        }
        else if (this.state.chamber === null) {
            return 'Are ya feelin lucky? Well, do ya, punk??'
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!';
        }
        return 'You are safe!';
        
    }

    handleClick = () => {
        //State should update spinningTheChamber to be true
            //Timeout registered for 2 seconds
            //Within timeout, generate a random number between 1 and 8
            //Within timeout, state should be updated so that the generated random number is the new value for changer
        //also need to change spinningTheChamber back to false
        this.setState({ 
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }
    render () {
        return (
            <div>
                <p>{this.renderMessage()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}
