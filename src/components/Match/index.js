import stringToSlug from "../../common/Util"
import "./Match.css"

export const Match = (data) => {
    const homeSlug = stringToSlug(data.home);
    const awaySlug = stringToSlug(data.away);
    return (
        <div className="match">
            <div className="team">
                <img src={`/images/teams/${homeSlug}.png`} alt={data.home} />
                <div className="name">
                    {data.home}
                </div>
            </div>
            <div className="team">
                <img src={`/images/teams/${awaySlug}.png`} alt={data.away} />
                <div className="name">
                    {data.away}
                </div>
            </div>
        </div>
    )
}

export default Match
