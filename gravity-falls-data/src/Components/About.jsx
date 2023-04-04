import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
function About() {
    const {id} = useParams()
    console.log(id)
    const [info, setInfo] = useState(null)
    
    useEffect (() => {
        const fetchData = async () => {
            const URL = `https://api.disneyapi.dev/character?tvShows=Gravity%20Falls&name=${id}`
            const response = await fetch(URL)
            const json = await response.json()
            setInfo(json.data[0])     
        }
        fetchData();
    }, [])




    return (
        <div>
            {info &&
            <div className="information">
                <h1>{info.name}</h1>
               <img src={info.imageURL} alt={`${id} picture`} width="400px"/>
            </div>
            }
            
        </div>
    )
}

export default About;