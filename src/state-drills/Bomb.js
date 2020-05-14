import React from 'react';

class Bomb extends React.Component {
    
    state = {
        count: 0
        
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    checkCount = () => {
        let currCount = this.state.count
        if (currCount >= 8) {
            clearInterval(this.interval)
            return 'BOOM';
        }
        else if(currCount % 2 === 0 ) {
            return 'Tick'
        }
        else return 'Tock'
    };
    render () {
        return (
            <div>
                <p>{this.checkCount()}</p>
            </div>
        );
    }
}

export default Bomb;