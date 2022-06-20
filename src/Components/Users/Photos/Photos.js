import React from "react";
import './Photos.scss'
const Photos = ({photos})=> {
        return <div className='photos'>
            {photos.map((photo, index) =>
                index < 100 ?
                    <div key={index}>
                        <img src={ photo.thumbnailUrl}/>
                    </div>
                    : '')}

        </div>
}
export default Photos