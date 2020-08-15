import React from "react";
import "./styles.scss"
import { BsPlus } from "react-icons/all"

class ToDoItem extends React.Component {

    state = {
        flag: this.props.status.done
    }

    clickHandler = () => {
        this.setState({
                flag: !this.state.flag
            }
        )
        this.props.doneItem(!this.state.flag, this.props.status.text);
    }

    delHandler = () => {
        this.props.delItem(this.props.status)
    }

    render() {

        return (
            <div className={'to-do-list__item container'}>
                <div className={'to-do-list__item-text'}>
                    <input type={'checkbox'} className={'checkbox'} onChange={this.clickHandler} checked={this.state.flag}/>
                    <span className={`to-do-text ${this.state.flag ? 'line-through' : ''}`}>{this.props.status.text}</span>
                </div>
                <BsPlus className={'close'} onClick={this.delHandler}/>
            </div>
        )
    }

}

export default ToDoItem