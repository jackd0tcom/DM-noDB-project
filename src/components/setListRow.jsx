import { Song } from "./Song"
import { Duration } from "./Duration"
import { ModeButtons } from "./modeButtons"

const SetListRow = () => {
    return (
        <tr>
            <ModeButtons/>
            <Song/>
            <Duration/>
        </tr>
    )
}

export default SetListRow