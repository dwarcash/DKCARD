import React from 'react'

export default class ImageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //state properties here
        };
    }
    render() {
        return (
            <div id="imageModal" class="modal">
                <span class="close" id="imageModalClose">&times;</span>
                <img class="modal-content fadeIn" id="img01" />
                <div id="caption"></div>
            </div>
        )
    }
}