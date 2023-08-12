import "./Tournament.css"
import EventList from "../EventList"
import { TournamentTitle } from "../TournamentTitle"

export const Tournament = (data) => {
    return (
        <div className="tournament">
            <TournamentTitle country={data.country} name={data.tournament.name} />
            <EventList events={data.tournament.events} />
        </div>
    )
}

export default Tournament
