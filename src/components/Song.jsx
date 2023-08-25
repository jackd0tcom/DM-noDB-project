export const Song = ({song, isEditing, onValueChange}) => {
  return isEditing? (
    <td>
        <label htmlFor="song">Song Name: </label>
        <input onChange = {(e)=> onValueChange(e.target.value)} type="text" id="song" value={song}/>
    </td>
  ) : (
    <td>
        {song}
    </td>
  )
}
