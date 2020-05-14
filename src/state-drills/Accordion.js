import React from 'react';

export default class Accordion extends React.Component {
    static defaultProps = { sections: []}
    //Accordion contains list of accordion items.  Is set in the initial state.  Each sectino is represented in state
    //by object with "title" and "section" keys
    //Accordion component shows a list of buttons that will have their text populated by the accordion item titles
    //When you click a button, the appropriate content section should show below the button.
    //All other open content sections should close
    //Write at least one smoke test and 3 snapshot tests for this component covering the initial rendering and when 1 or 2 
    //buttons have been clicked


    state = {
        lastItemClicked: null,

    }

    handleClick = (e) => {
        let curTitle = e.target.textContent;
        let curItem = this.props.sections.find(item => item.title === curTitle);
        this.setState({
            lastItemClicked: curItem
        })
        
    }

    renderButtons() {
        return this.props.sections.map(item => (
            <li>
                <button onClick={e => this.handleClick(e)}>{item.title}</button>
            </li>
        ))
    }

    renderContent() {
        const currentTab = this.state.lastItemClicked;
        let stringRendered = '';
        if(currentTab !== null) {
            stringRendered += currentTab.content;
        }
        console.log(currentTab);
        return (                 
            <div className='content'>
                {stringRendered}
             </div>)
    }


    render () {
        console.log("Accordion.js runs")
        return (
           <ul>
               {this.renderButtons()}
               {this.state.lastItemClicked !== null && (
                    <div className='content'>
                        {this.renderContent()}
                    </div>
               )}
           </ul>
        )
    }
}