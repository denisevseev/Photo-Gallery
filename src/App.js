import axios from "axios";
import React from "react";
import './App.css'
import {Users} from "./Components/Users/Users";
import Albums from "./Components/Users/Albums/Albums";
import {Link, Route, Routes} from "react-router-dom";
import {Photos} from "./Components/Users/Photos/Photos";
import {BreadCrumbs} from "./Components/BreadCrumbs/BreadCrumbs";

export default class App extends React.Component {
    state = {
        persons: [],
        albums: [],
        user: [],
        photos:[],
        albumTitle:[]
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }


    getAlbums = (id, name) => {
        // console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/photos/`)
            .then(res => {
                const albums = res.data;
                this.setState({albums})

            })
            .then(() => {
                axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(r => {
                    const user = r.data.name
                    this.setState({user})
                })
            })
    }
getPhotos = (albumTitle)=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/`)
            .then(res=>{
                const photos = res.data
                this.setState({
                    photos:photos,
                    albumTitle:albumTitle
                } )
            })
}


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>Photo gallery</div>
                </header>
                <BreadCrumbs user={this.state.user} albums={this.state.albums} albumTitle ={this.state.albumTitle} />
                <Routes>
                    <Route exact path='/albums' element={<Albums getPhotos={this.getPhotos} user={this.state.user}
                                                           albums={this.state.albums}/>}/>
                    <Route exact path='/' element={<Users link={<Link to='/users'/>} getAlbums={this.getAlbums}
                                                    persons={this.state.persons}/>}/>
                    <Route exact path='albums/photos' element={<Photos photos = {this.state.photos}/>}/>
                </Routes>
            </div>
        )
    }
}
