import React, {Component} from 'react';

// import './sass/main-admin.scss'

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

export class Zoom extends Component {
    state = {
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%'
    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
    }

    render = () =>
        <figure onMouseMove={this.handleMouseMove} style={this.state}>
            <img src={src} />
        </figure>
}