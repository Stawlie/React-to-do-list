import React from "react";
import "./styles.scss"
import { BsPlus } from "react-icons/all"

class AddToDoItem extends React.Component {

    state = {
        value: '',
        flag: false
    }

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    clickHandler = () => {
        this.props.addItem(this.state.value)
        this.setState({
            value: ''
        })
    }

    rotatePlus = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        return (
            <div className={'to-do-list__item add-item container'}>
                <BsPlus className={`plus ${this.state.flag === true ? 'rotate' : ''}`}/>
                <div className={'add-inputs'}>
                    <input
                        type={'text'}
                        className={'add-text'}
                        onChange={this.changeHandler}
                        value={this.state.value}
                        onFocus={this.rotatePlus}
                        onBlur={this.rotatePlus}
                    />
                    <input
                        type={'button'}
                        className={`add-button ${this.state.value === '' ? 'btn-disabled' : ''}`}
                        value={'Добавить'}
                        disabled={!this.state.value}
                        onClick={this.clickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default AddToDoItem