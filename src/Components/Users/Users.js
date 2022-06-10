import React from "react";
import iconPerson from "./person.png";
import Albums from "./Albums/Albums";
import  './Users.scss'
import {Link} from "react-router-dom";
export  class Users extends React.Component {
  render(){
      const persons = this.props.persons
      return (<div className='container'>
          {persons.map((person, index)=>
              <Link to='/albums'>
                  <div onClick={()=>{this.props.getPhotos(person.id, person.name)}}>
                      <img src={iconPerson} /><br/>
                      {person.name}
                  </div>
              </Link>

          )}

      </div>)
  }

}