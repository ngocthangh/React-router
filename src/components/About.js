import React, { Component } from 'react';
import {Prompt} from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div>
                This is about!
                <Prompt
                    when={true}
                    message={location => (`Bạn chắc chắn muốn đến trang ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default About;