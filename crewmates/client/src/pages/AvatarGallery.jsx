import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { supabase } from "../client"
import PlayerCard from "../components/PlayerCard";


const AvatarGallery = () => {
    const[players, setPlayers] = useState();

    useEffect(() => {
        fetchPlayers();
    }, [])

    const fetchPlayers = async () => {
        const {data} = await supabase.from('Players').select()
        console.log(data);
        setPlayers(data);
    }

    return(
        <>
            {players && players.length > 0 ?
                players.map((player) => 
                    <>
                        <PlayerCard
                            id={player.id}
                            name={player.name}
                            role={player.role}
                            description={player.description}
                        />
                    </>
                )
            : 
                <>
                    <h2> No Players Found, please create a player</h2>
                </>
            }
        </>
    )
}

export default AvatarGallery
