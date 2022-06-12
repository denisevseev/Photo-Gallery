import React from "react";
import './Albums.scss'
import iconPerson from "./../person.png";
import {Link} from "react-router-dom";

export default class Albums extends React.Component {
    render() {
        const albums = this.props.albums
        const user = this.props.user
        return <div>
                <img style={{ marginLeft: '-190px'}} src={iconPerson}/>
                <div>{user}</div>
            <div style={{textAlign: 'left'}}>Albums</div>
            <hr/>
            <div className='Albums'>
                {albums.map((album, index) =>
                    index < 10 ?
                        <div onClick={() => this.props.getPhotos(album.title)}>
                            <Link to='/albums/photos'>
                                <img src={album.url}/>
                                <div className='title'>{album.title}</div>
                            </Link>
                        </div> : ''
                )}
            </div>
        </div>


    }
}