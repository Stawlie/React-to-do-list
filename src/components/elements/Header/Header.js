import React from "react";
import "./styles.scss"

class Header extends React.Component {
    render() {
        return (
            <div className={'header'}>
                <h1 className={'header-title'} onClick={this.props.clearList}>To Do List
                    <p className={'header-subtitle'}>(Click here to delete all the plans)</p>
                </h1>
            </div>
        );
    }
}

export default Header