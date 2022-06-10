import React from "react";
import './Albums.scss'
import iconPerson from "./../person.png";
export default class Albums extends React.Component{
   render() {
      const albums = this.props.albums
      const user = this.props.user
      return <div>
         <img src={iconPerson}/>
         <div className='user'>{user}</div>
         <div style={{textAlign: 'left'}}>Albums</div>
         <hr/>
         <div className='Albums'>
            {albums.map((album, index)=>
                index<10?
                    <div>
                       <img src={album.url}/>
                       <div className='title'>{album.title}</div>
                    </div>:''

            )}
         </div>
      </div>


   }
}