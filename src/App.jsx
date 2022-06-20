import React, {useEffect} from "react";
import './App.css'
import Albums from "./Components/Users/Albums/Albums";
import {Link, Route, Routes} from "react-router-dom";
import Photos from "./Components/Users/Photos/Photos";
import {BreadCrumbs} from "./Components/BreadCrumbs/BreadCrumbs";
import getUsers from "./Store/GetUsers";
import Users from "./Components/Users/Users";
import {observer} from "mobx-react";
const App = () => {
    useEffect(() => {
        getUsers.fetchGetUsers()
    })
    return (
        <div className="App">
            <header className="App-header">
                <div>Photo gallery</div>
            </header>
            <BreadCrumbs user={getUsers.user} albums={getUsers.albums} albumTitle={getUsers.albumTitle}/>
            <Routes>
                <Route exact path='/' element={<Users persons={getUsers.persons}/>}/>
                <Route exact path='/albums' element={<Albums user={getUsers.user} albums={getUsers.albums}/>}/>
                <Route exact path='albums/photos' element={<Photos photos={getUsers.photos}/>}/>
            </Routes>
        </div>)

}
export default observer(App)