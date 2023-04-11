import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const EditAvatar = () => {
    let params = useParams();
    const[player, setPlayer] = useState(null);

    useEffect(() => {
        fetchPlayer();
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(player);
        setPlayer( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const fetchPlayer = async () => {
        const {data} = await supabase.from('Players').select().eq('id', params.id);
        console.log(data[0]);
        setPlayer(data[0]);
    }

    const deletePlayer = async () => {
        await supabase.from('Players').delete().eq('id', params.id);
        window.location = '/';
    }

    const updatePlayer = async () => {

        await supabase.from('Players').update(
            {
                name: player.name, 
                role: player.role, 
                description: player.description
            }).eq('id', params.id);

        window.location = '/';
    }

    return(
        <>
            <h1> Edit Player </h1>

            {player && 
                <form>
                <label> Name </label>
                <input type="text" name="name" value={player.name} onChange={handleChange}/>

                <label> Role </label>
                <input type="text" name="role" value={player.role} onChange={handleChange}/>

                <label> Description</label>
                <textarea rows="5" cols="50" type="text" name="description" value={player.description} onChange={handleChange}/>

                <button onClick={updatePlayer}> Submit </button>
                </form>
            }

            <button onClick={deletePlayer}> Delete Player </button>
        </>
    )
}

export default EditAvatar
