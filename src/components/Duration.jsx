
export const Duration = ({duration, isEditing, onValueChange}) => {
  return isEditing ? (
    <td>
        <label htmlFor="duration">Duration: </label>
        <input onChange = {(e)=> onValueChange(e.target.value)} type='number' value={duration}/>
    </td>

  ) : (
    <td>
        {duration}
    </td>
  )
}
