import React from "react";
import './Albums.scss'
import iconPerson from "./../person.png";
import {Link} from "react-router-dom";
import getUsers from "../../../Store/GetUsers";
import {observer} from "mobx-react";

const Albums = ({albums, user}) => {
    const getPhotosFromAlbums = (title, id) => {
        getUsers.getPhotos(title, id)
    }
    return <div>
        <img style={{marginLeft: '-190px'}} src={iconPerson}/>
        <div>{user}</div>
        <div style={{textAlign: 'left'}}>Albums</div>
        <hr/>
        <div className='Albums'>
            {albums.map((album, index) =>
                index < 10 ?
                    <div onClick={() => getPhotosFromAlbums(album.title, album.id)}>
                        <Link to='/albums/photos' key={user}>
                            <img src={album.url}/>
                            <div className='title'>{album.title}</div>
                        </Link>
                    </div> : ''
            )}
        </div>
    </div>
}
export default observer(Albums)