import {AxiosRequests} from "./Store/State";
import React from "react";
import './App.css'
import {Users} from "./Components/Users/Users";
import Albums from "./Components/Users/Albums/Albums";
import {Link, Route, Routes} from "react-router-dom";
import {Photos} from "./Components/Users/Photos/Photos";
import {BreadCrumbs} from "./Components/BreadCrumbs/BreadCrumbs";

export default class App extends React.Component {

    render() {
        // console.log(AxiosRequests.fg())
        const state = this.props.state
        const getAlbums = this.props.getAlbums
        const getPhotos = this.props.getPhotos

        console.log(state)
        return (
            <div className="App">
                <header className="App-header">
                    <div>Photo gallery</div>
                </header>
                <BreadCrumbs user={state.user} albums={state.albums} albumTitle={state.albumTitle}/>
                <Routes>
                    <Route exact path='/albums' element={<Albums getPhotos={getPhotos} user={state.user}
                                                                 albums={state.albums}/>}/>
                    <Route exact path='/' element={<Users getAlbums={getAlbums}
                        persons={state.persons}/>}/>
                    <Route exact path='albums/photos' element={<Photos photos={state.photos}/>}/>
                </Routes>
            </div>
        )
    }
}
