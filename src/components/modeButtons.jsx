import React from 'react'

export const ModeButtons = ({isEditing, editClick, saveClick, deleteIt}) => {
  
    return !isEditing ? (
    <td className='mode'>
        <button class='delete' onClick={deleteIt}>X</button>
        <button onClick={editClick}>Edit</button>
    </td>
  ) : (
    <td>
        <button id='add' onClick={saveClick}>Save</button>
    </td>
  )
}
