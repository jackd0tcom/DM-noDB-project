import './setList.css'
import { useState } from "react"
import { Song } from "./Song"
import { Duration } from "./Duration"
import { ModeButtons } from "./modeButtons"
import { Number } from "./Number"
import axios from "axios"

const SetListRow = ({initialRowData, initalIsEditing, deleteItem, totalFunc}) => {
    const [isEditing, setIsEditing] = useState(initalIsEditing)
    const [number, setNumber] = useState(initialRowData.id)
    const [song, setSong] = useState(initialRowData.song)
    const [duration, setDuration] = useState(initialRowData.duration)

    const save = async () => {
        let obj = {
            number,
            song,
            duration
        }
        const {data} = await axios.put(`/editList/${number}`, obj)
        totalFunc()
        if(!data.error){setIsEditing(false)
        }else alert('try again')
    }

    const editMode = () => {
        setIsEditing(true)
        totalFunc()
    }
    return (
        <tr>
            <ModeButtons editClick={editMode} isEditing={isEditing} saveClick={save} deleteIt={deleteItem}/>
            <Number number={number}/>
            <Song onValueChange={setSong} song={song} isEditing={isEditing} value={song}/>
            <Duration onValueChange={setDuration} duration={duration} isEditing={isEditing} value={duration}/>
        </tr>
    )
}

export default SetListRow