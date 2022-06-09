import axios from "axios";
import React from "react";
import './App.css'
import {Users} from "./Components/Users/Users";
import Test from "./Components/Users/Test";
export default class App extends React.Component {
    state = {
        persons: [],
        albums: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }


getPhotos =  (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/`)
        .then(res => {
            const albums = res.data;
            this.setState({albums})
        })
}


    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <div>Photo gallery</div>
                    </header>
                    {this.state.albums.length>0?<Test albums={this.state.albums}/>:
                        <Users getPhotos={this.getPhotos} persons = {this.state.persons}/>}
                </div>
        )
    }
}