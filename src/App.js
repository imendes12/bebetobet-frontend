import Banner from './components/Banner';
import List from './components/List';

function App() {
    return (
        <div className="App">
            <Banner />
            <div className='content list-container'>
                <List />
            </div>
        </div>
    );
}

export default App;
