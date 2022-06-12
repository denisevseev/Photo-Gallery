import React from "react"
export class BreadCrumbs extends React.Component{
    render() {
     console.log(this.props.user)
            const path = window.location.pathname;
        // alert(path)
        let crump = [];
        switch (path){
            case '/':
                crump.push(`home>${this.props.user}`)
                break
            case '/albums':
                crump.push(`home>${this.props.user}`)
                break
            case '/albums/photos':
                crump.push(`home>${this.props.user}>${this.props.albumTitle}`)
                break
        }
       return <div >
           { crump.length>0?crump.map((el, i)=> i!=crump.length-1?el+'>':el ):'home'}
        </div>;

    }
}