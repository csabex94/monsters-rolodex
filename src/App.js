import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/cardList';
import SearchBox from './components/searchBox/searchBox';


class App extends Component {

  state = {

    monsters: [],
    searchField: ''

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {

    this.setState({searchField: e.target.value});

  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return (

      <div className="App">

        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder="Search monsters" handleChange={e => this.handleChange(e)} />

        <CardList monsters={filteredMonsters} />
        
      </div>

    );

  }

}

export default App;