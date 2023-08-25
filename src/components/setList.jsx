import './setList.css'
import SetListRow from './setListRow'
import { useState } from 'react'


const SetList = ({initialSetList}) => {
    const [currentList, setCurrentList] = useState(initialSetList)
    
    return (
        <div>
            <table>
            <thead>
                    <tr>
                        <th colSpan= {4} >Set List Tracker</th>
                    </tr>
                    </thead>
                <tbody>
                    <SetListRow/>
                </tbody>
                <tfoot>
                    <td>
                        <button>Add</button>
                    </td>
                    <td>
                        <h3>Total:</h3>
                    </td>
                </tfoot>
            </table>
        </div>
    )
}

export default SetList