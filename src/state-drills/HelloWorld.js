import React from 'react';

class HelloWorld extends React.Component {

    state = {
        who: 'Everybody'
    }

    handleClick(string, e) {
        console.log(string);
        this.setState({
            who: string
        });
        console.log(this.state.who);
    }

    render () {
        return (
        <div>
            <p>Hello {this.state.who}</p>
            <button onClick={e => this.handleClick('World',e)}>World</button>
            <button onClick={e => this.handleClick('Friend',e)}>Friend</button>
            <button onClick={e => this.handleClick('React',e)}>React</button>
        </div>
        );
    }
}


export default HelloWorld;