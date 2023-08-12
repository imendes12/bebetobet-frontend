import { stringToSlug } from "../../common/Util"
import "./TournamentTitle.css"

export const TournamentTitle = (data) => {
    const countrySlug = stringToSlug(data.country);

    return (
        <div className="tournament-title">
            <img src={`/images/countries/${countrySlug}.png`} alt={`${data.country} flag`} />
            <h2>
                {data.country}: {data.name}
            </h2>
        </div>
    )
}
