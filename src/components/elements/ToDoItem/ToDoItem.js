import React from "react";
import "./styles.scss"

class ToDoItem extends React.Component {

    state = {
        flag: false
    }

    overline = () => {
        this.setState({
                flag: !this.state.flag
            }
        )
        console.log(this.state.flag)
        return this.state.flag
    }

    render() {

        return (
            <div className={'to-do-list__item container'}>
                <input type={'checkbox'} className={'checkbox'} onChange={this.overline}/>
                <span className={`to-do-text ${this.state.flag ? 'line-through' : ''}`}>{this.props.data}</span>
            </div>
        )
    }

}

export default ToDoItem