import React from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
        
    }

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filter = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
            <h1 className="f-6">Master Players</h1>
            <SearchBox searchChange={this.OnSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filter}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
    }
}

export default App;