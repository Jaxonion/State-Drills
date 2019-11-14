import React from 'react';
import Sections from './Sections.js'

class Accordion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
        console.log(this.props)
    }

    componentDidMount() {
        this.setState({
            lists: this.props.store.lists
        })
    }

    handleClickButton = (id) => {
        const array = this.state.lists
        for(let i=0; i < array.length; i++) {

            if (array[i].id === id) {
                if (array[i].hidden === 0) {
                    array[i].hidden = 1
                }
                else {
                    array[i].hidden = 0
                }
            }
            else {
                array[i].hidden = 0
            }
        }
        this.setState({
            lists: array
        })
    }

    render() {
        console.log(this.state.lists)
        const sections = this.state.lists.map((item) => {
            return (<Sections handleClickButton={this.handleClickButton} hidden={item.hidden} id={item.id} title={item.title} content={item.content}/>)
        })
        return (
            <div>
                <ul>
                    {sections}
                </ul>
            </div>
        )
    }
}

export default Accordion;