import React from 'react'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div class="copyright-wrapper">
                <div class="copyright-wrapper-inner">
                    © 2021 <a href="http://card.linkconnect.in" target="_blank"><b>card.linkconnect.in</b></a>
                </div>
            </div>
        )
    }
}