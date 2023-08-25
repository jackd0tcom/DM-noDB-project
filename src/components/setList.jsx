import './setList.css'
import SetListRow from './setListRow'
import { Total } from './total'
import { useState } from 'react'
import axios from 'axios'


const SetList = ({initialSetList}) => {
    const [currentList, setCurrentList] = useState(initialSetList)
    const [total, setTotal] = useState(0)

    const deleteFunc = async (id) => {
        const {data} = await axios.delete(`/deleteItem/${id}`)

        if(!data.error){
            const filteredList = currentList.filter(el => {
                return el.id !== id;
            })
            setCurrentList(filteredList)
        }
    }

    const addRow = async () => {
        let {data} = await axios.post('/addItem', {song: 'Song Title', duration: 0})
        setCurrentList([...currentList, data])
    }

    const rows = currentList.map(el => {
        let {id, song, duration} = el
        return (<SetListRow
        key={el.id}
        initialRowData = {{
        id: id,
        song: song,
        duration: duration }}
        initialIsEditing = {false}
        deleteItem={() => deleteFunc(id)}
        />)
    })

    return (
        <div>
            <table>
            <thead>
                    <tr>
                        <th colSpan= {4} >Set List Tracker</th>
                    </tr>
                    </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                        <tr>
                        <td colSpan={3}>
                        <button onClick={addRow}>Add</button>
                        </td>
                        <Total total={total}/>
                        </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default SetList