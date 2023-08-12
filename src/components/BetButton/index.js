import "./BetButton.css"

export const BetButton = (data) => {
    return (
        <div className="odd">
            <button>
                <div className="value">{data.odd}</div>
                <div className="bet">{data.bet}</div>
            </button>
        </div>
    )
}

export default BetButton
