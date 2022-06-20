import React from "react";
import iconPerson from "./person.png";
import './Users.scss'
import getUsers from "../../Store/GetUsers";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
const Users = ({persons}) => {
    const get = (id)=>{
        getUsers.getAlbums(id)
    }
    return (<div className='container'>
        {persons.map((person) =>
            <Link to='/albums' key={person.id}>
                <div onClick={()=>get(person.id)}>
                    <img src={iconPerson}/><br/>
                    {person.name}
                </div>
            </Link>
        )}
    </div>)
}
export default observer(Users)