import Banner from './components/Banner';
import { Footer } from './components/Footer';
import List from './components/List';

function App() {
    return (
        <div className="App">
            <Banner />
            <div className='content list-container'>
                <List />
            </div>
            <Footer />
        </div>
    );
}

export default App;
