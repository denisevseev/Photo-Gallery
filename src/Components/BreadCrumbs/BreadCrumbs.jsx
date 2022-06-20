import React from "react"
import './breadCrumbs.scss'

export const BreadCrumbs = ({user, albumTitle}) => {
    const changeLocation = (e) => {
        e.target.nextSibling.hidden = 'true'
        e.target.innerText === 'home>' ? window.location.href = '/' : window.history.back();
    }
    const path = window.location.pathname;
    let crump = [];
    switch (path) {
        case '/':
            crump.push(`home`)
            break
        case '/albums':
            crump.push(`home`, `${user}`)
            break
        case '/albums/photos':
            crump.push(`home`, `${user}`, `${albumTitle}`)
            break
    }

    const paht = [
        {
            text: "Home",
            path: '/',
        },
        {
            text: "albums",
            path: '/albums',
        }, {
            text: "photos",
            path: '/albums/',
        },
    ]

    return <div className='breadCrumbs'>
        {crump.length > 1 ? crump.map((el, i) =>
            i != crump.length - 1 ?
                <span onClick={(e) => {
                    changeLocation(e);
                }}>{el + '>'}</span> :
                <span style={{color: 'gray', opacity: '0.6'}}>{el}</span>) : 'home'}
    </div>;

}