import React from "react";
import "./styles.scss"

class Header extends React.Component {
    render() {
        return (
            <div className={'header'}>
                <h1 className={'header-title'}>To Do List</h1>
            </div>
        );
    }
}

export default Header