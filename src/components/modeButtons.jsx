import React from 'react'

export const ModeButtons = ({isEditing, editClick, saveClick, deleteIt}) => {
  
    return !isEditing ? (
    <td>
        <button onClick={deleteIt}>X</button>
        <button onClick={editClick}>Edit</button>
    </td>
  ) : (
    <td>
        <button onClick={saveClick}>Save</button>
    </td>
  )
}
