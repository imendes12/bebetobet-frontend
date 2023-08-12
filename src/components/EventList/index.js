import "./EventList.css"
import { Event } from "../Event"

export const EventList = (data) => {
    return (
        <div className="event-list">
            <Event event={data.events[0]} />
            <Event event={data.events[1]} />
            <Event event={data.events[2]} />
            <Event event={data.events[3]} />
            <Event event={data.events[4]} />
            <Event event={data.events[5]} />
        </div>
    )
}

export default EventList
