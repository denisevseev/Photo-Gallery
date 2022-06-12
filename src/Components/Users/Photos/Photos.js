import React from "react";
import './Photos.scss'

export class Photos extends React.Component {
    render() {
        const photos = this.props.photos
        return <div className='photos'>
            {photos.map((photo, index) =>

                index < 100 ?
                    <div key={index}>
                        <img src={ photo.thumbnailUrl}/>
                    </div>
                    : '')}

        </div>
    }
}