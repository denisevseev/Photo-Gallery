import React from "react";
import iconPerson from "./person.png";
import Test from "./Test";
import  './Users.scss'
export  class Users extends React.Component {
  render(){
      const persons = this.props.persons
      return (<div className='container'>
          {persons.map((person, index)=>
             <div onClick={()=>this.props.getPhotos(person.id)}>
                 <img src={iconPerson} /><br/>
                 {person.name}
             </div>
          )}

      </div>)
  }

}