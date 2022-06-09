import React from "react";
export default class Test extends React.Component{
   render() {
      const albums = this.props.albums
      return <div>
         {albums.map((album, index)=>
             index<10?
         <div>
            <img src={album.url}/>
         </div>:''
         )}
      </div>
   }
}