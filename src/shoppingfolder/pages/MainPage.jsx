import Banner from "../components/Banner"
import Collection from "../components/Collections"
import Footer from "../components/footer"
import Header from "../components/Header"
import { Gents } from "../data"
import React,{useState} from 'react'
const MainPage = () => {

    const [gentsFashion,setGentsFashio]=useState(Gents)

    return (
        <div>
            <Header/>
            <Banner/>
            <Collection gentsFashion={gentsFashion}/>
            <Footer/>
        </div>
    )
}
export default MainPage