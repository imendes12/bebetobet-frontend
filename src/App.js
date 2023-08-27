import React, { useEffect, useState } from "react"
import Banner from './components/Banner';
import { Footer } from './components/Footer';
import List from './components/List';

function App() {
    const [odds, setOdds] = useState({});

    const fetchOdds = () => {
        fetch('http://localhost:8080/odds')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setOdds(data);
            })
        ;
    }

    useEffect(() => {
        fetchOdds();
    }, []);

    return (
        <div className="App">
            <Banner />
            <div className='content list-container'>
                <List odds={odds} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
l