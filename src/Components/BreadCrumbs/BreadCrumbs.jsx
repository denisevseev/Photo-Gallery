import React from "react"
import './breadCrumbs.scss'

export class BreadCrumbs extends React.Component {
    changeLocation(e) {
     e.target.nextSibling.hidden = 'true'
        e.target.innerText === 'home>' ? window.location.href = '/' : window.history.back();
    }

    render() {
        console.log(this.props.user)
        const path = window.location.pathname;
        let crump = [];
        switch (path) {
            case '/':
                crump.push(`home`)
                break
            case '/albums':
                crump.push(`home`, `${this.props.user}`)    
                break
            case '/albums/photos':
                crump.push(`home`, `${this.props.user}`, `${this.props.albumTitle}`)
                break
        }
        return <div className='breadCrumbs'>
            {crump.length > 1 ? crump.map((el, i) =>
                i != crump.length - 1 ?
                    <span onClick={(e) => {this.changeLocation(e);}}>{el + '>'}</span> :
                    <span style={{color: 'gray', opacity: '0.6'}}>{el}</span>) : 'home'}
        </div>;

    }
}