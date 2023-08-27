import "./List.css"
import Tournament from "../Tournament"

export const List = (data) => {
    if (!data.odds.countries) {
        return;
    }

    return (
        <section className="list">
            <Tournament country={data.odds.countries[0].name} tournament={data.odds.countries[0].tournaments[0]} />
        </section>
    )
}

export default List
