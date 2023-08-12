import "./List.css"
import Tournament from "../Tournament"

const data = {
    'countries' : [
        {
            'name' : 'Brasil',
            'tournaments' : [
                {
                    'name' : 'Série A',
                    'events' : [
                        {
                            'date' : '2023-08-13',
                            'hour' : '11:00',
                            'home' : 'Atlético Mg',
                            'away' : 'Bahia',
                            'markets' : {
                                'finalResult' : {
                                    '1' : 1.61,
                                    'X' : 3.75,
                                    '2' : 6.00
                                }
                            }
                        },
                        {
                            'date' : '2023-08-13',
                            'hour' : '16:00',
                            'home' : 'América Mg',
                            'away' : 'Goiás',
                            'markets' : {
                                'finalResult' : {
                                    '1' : 1.90,
                                    'X' : 3.60,
                                    '2' : 3.80
                                }
                            }
                        },
                        {
                            'date' : '2023-08-13',
                            'hour' : '16:00',
                            'home' : 'Corinthians',
                            'away' : 'Coritiba',
                            'markets' : {
                                'finalResult' : {
                                    '1' : 1.75,
                                    'X' : 3.60,
                                    '2' : 5.00
                                }
                            }
                        },
                        {
                            'date' : '2023-08-13',
                            'hour' : '16:00',
                            'home' : 'Grêmio',
                            'away' : 'Fluminense',
                            'markets' : {
                                'finalResult' : {
                                    '1' : 2.20,
                                    'X' : 3.30,
                                    '2' : 3.40
                                }
                            }
                        },
                        {
                            'date' : '2023-08-13',
                            'hour' : '18:30',
                            'home' : 'Flamengo',
                            'away' : 'São Paulo',
                            'markets' : {
                                'finalResult' : {
                                    '1' : 1.57,
                                    'X' : 3.80,
                                    '2' : 6.50
                                }
                            }
                        },
                        {
                            'date' : '2023-08-13',
                            'hour' : '18:30',
                            'home' : 'Fortaleza',
                            'away' : 'Santos',
                            'markets' : {
                                'finalResult' : {
                                    '1' : 1.66,
                                    'X' : 3.60,
                                    '2' : 6.00
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}

export const List = () => {
    return (
        <section className="list">
            <Tournament country={data.countries[0].name} tournament={data.countries[0].tournaments[0]} />
        </section>
    )
}

export default List
