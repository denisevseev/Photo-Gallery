import {autorun, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";

class GetUsers {
    persons = [];
    albums = [];
    user = [];
    photos = [];
    albumTitle = [];

    constructor() {
        makeAutoObservable(this, {
            persons: observable,
            albums: observable,
            user: observable,
            photos: observable,
            albumTitle:observable
        });
    }

    fetchGetUsers() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.persons = persons;
            })
    }

    getAlbums(id) {
        axios.get(`https://jsonplaceholder.typicode.com/photos/`)
            .then(res => {
                const albums = res.data
                this.albums = albums
            })
            .then(() => {
                axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(r => {
                    const user = r.data.name
                    this.user = user
                })
            })
    }

    getPhotos(title , id) {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then((res) => {
                const photosFromAlbums = res.data
                this.photos = photosFromAlbums
                this.albumTitle = title
            })

    }
}

export default new GetUsers