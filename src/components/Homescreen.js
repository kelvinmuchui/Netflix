import React from 'react'
import requests from '../Requests'
import Banner from './Banner'
import "./Homescreen.css"
import Nav from './Nav'
import Row from './Row'
function Homescreen() {
    return (
        <div className="homescreen">
            {/* Nav */}
            <Nav/>
            {/*Bannar */}
            <Banner/>
            {/* Row */}

            <Row 
            title = 'NETFLIX ORIGINALS'
            fetchUrl ={requests.fetchNetflixOriginal}
            isLargeRow/>
            <Row
            title = 'Trending Now'
            fetchUrl ={requests.fetchTrending}/>

            <Row
            title = 'Top Rated'
            fetchUrl ={requests.fetchTopRated}/>
            <Row
            title = 'Action Movies'
            fetchUrl ={requests.fetchActionMovies}/>
            <Row
            title = 'Comedy Movies'
            fetchUrl ={requests.fetchComendyMovies}/>
            <Row
            title = 'Horror Movies'
            fetchUrl ={requests.fetchHorrorMovies}/>
            <Row
            title = 'Romance Movies'
            fetchUrl ={requests.fetchRomanceMovies}/>
            <Row
            title = 'Documentaries'
            fetchUrl ={requests.fetchDocumentaries}/>

        </div>
    )
}

export default Homescreen
