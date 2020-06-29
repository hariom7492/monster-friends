import React, {Component} from 'react';
import './App.css';
import {CardList} from './compponents/card-list/card-list.component'
import { SearchBox} from './compponents/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    
    this.state={
      monster:[],
      searchField : ''
    }   
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response =>
    Response.json())
    .then(users => this.setState({ monster : users}))
   }

  render(){

    const {monster , searchField} = this.state;
    const filteredMonster = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return(
      <div className="App">
      <h1>PAGAL FRIENDS</h1>
      <SearchBox 
        placeholder = 'Search Monster'
        onChange = { e => this.setState({searchField: e.target.value})}  
      />
      <CardList monster = {filteredMonster}/>
      </div>
    )
  }
}


export default App;
