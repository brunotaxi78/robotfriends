import React, { useState, useEffect } from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[])

    const OnSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

        const filter = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
            <h1 className="f-6">Master Players</h1>
            <SearchBox searchChange={OnSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filter}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
    
}

export default App;