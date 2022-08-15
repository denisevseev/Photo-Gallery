import React from "react";
import './Albums.scss'
import iconPerson from "./../person.png";
import {Link} from "react-router-dom";
import getUsers from "../../../Store/GetUsers";
const Albums = ({albums, user}) => {
    const getPhotosFromAlbums = (title, id) => {
        getUsers.getPhotos(title, id)
    }
    return <div>
        <div className='user'>
            <img src={iconPerson}/>
            <div class='text-muted'>{user}</div>
        </div>
        <div style={{textAlign: 'left', fontWeight: 'bold'}}>Albums</div>
        <hr/>
        <div className='Albums'>
            {albums.map((album, index) =>
                index < 10 ?
                    <div onClick={() => getPhotosFromAlbums(album.title, album.id)}>
                        <Link style={{ textDecoration: 'none'}} to='/albums/photos' key={user}>
                            <img src={album.url}/>
                            <div className='text-muted'>{album.title}</div>
                        </Link>
                    </div> : ''
            )}
        </div>
    </div>
}
export default Albums