import axios from "axios";
import React from "react";
import './App.css'
import {Users} from "./Components/Users/Users";
import Albums from "./Components/Users/Albums/Albums";
import {Link, Route, Routes} from "react-router-dom";

export default class App extends React.Component {
    state = {
        persons: [],
        albums: [],
        user: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }


    getPhotos = (id) => {
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



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>Photo gallery</div>
                </header>
                <Routes>
                    <Route path='/albums' element={<Albums user={this.state.user} albums={this.state.albums}/>}/>
                    <Route path='/' element={<Users link={<Link to='/users'/>} getPhotos={this.getPhotos}
                                                    persons={this.state.persons}/>}/>
                </Routes>
                {/*<Albums albums={this.state.albums}/>*/}
                {/*{this.state.albums.length>0?<Albums albums={this.state.albums}/>:*/}
                {/*    <Users getPhotos={this.getPhotos} persons = {this.state.persons}/>}*/}
            </div>
        )
    }
}