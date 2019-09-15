import React, {Component} from "react"
import "./App.css"
import Hello from "./Hello"

class App extends Component {
  render(){
    const formatName = (user) => {return `${user.firstName} ${user.lastName}`}

    const user = {
      firstName: 'Zenchy',
      lastName: 'de Shinwo',
      avatarUrl:''
    }

    const element = (<h2>Hello, {formatName(user)}!</h2>)

    return (
      <div className="App">
        <h1> Hello again reactive celluloid </h1>
        {element}
      </div>
    ) 
  }
}

export default App