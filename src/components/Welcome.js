import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>
                Selamat datang {this.props.name}
                </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome