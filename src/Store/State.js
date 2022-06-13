import axios from "axios";
import React from "react";
import App from "../App";
 export class AxiosRequests extends React.Component{
    fg={
        name:'name'
    }
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


    getAlbums = (id) => {
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
        return <App state={this.state} getPhotos = {this.getPhotos} getAlbums = {this.getAlbums} />
    }
 }