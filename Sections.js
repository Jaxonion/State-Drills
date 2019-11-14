import React from 'react';

class Sections extends React.Component {

    render() {
        let content = ''
        if (this.props.hidden === 1) {
            content = this.props.content
        }
        else {
            content = ''
        }
        return (
            <li>
                {this.props.title}
                <button 
                    onClick={() => this.props.handleClickButton(this.props.id)}
                    >Show Content</button>
                <p>{content}</p>
            </li>
        )
    }
}

export default Sections;