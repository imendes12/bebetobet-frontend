import BetButton from "../BetButton"
import EventSchedule from "../EventSchedule"
import Match from "../Match"
import "./Event.css"

export const Event = (data) => {
    return (
        <div className="event">
            <EventSchedule date={data.event.date} hour={data.event.hour} />
            <Match  home={data.event.home} away={data.event.away} />
            <BetButton bet={data.event.home} odd={data.event.markets.finalResult['1']} />
            <BetButton bet="Empate" odd={data.event.markets.finalResult['X']} />
            <BetButton bet={data.event.away} odd={data.event.markets.finalResult['X']} />
        </div>
    )
}

export default Event
