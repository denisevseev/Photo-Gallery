import React from "react";
import iconPerson from "./person.png";
import './Users.scss'
import getUsers from "../../Store/GetUsers";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
const Users = ({persons}) => {
    const getAlbums = (id)=>{
        getUsers.getAlbums(id)
    }
    return (<div className='container'>
        {persons.map((person) =>
            <Link style={{ textDecoration: 'none'}} to='/albums'  key={person.id}>
                <div  onClick={()=>getAlbums(person.id)}>
                    <img src={iconPerson}/><br/>
                    <div class="text-muted"> {person.name}</div>
                </div>
            </Link>
        )}
    </div>)
}
export default observer(Users)