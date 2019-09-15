import React, {Component} from "react"
import "./App.css"
import Hello from "./Hello"

class App extends Component {
  render(){
    const formatName = (user) => {return `${user.firstName} ${user.lastName}`}

    const user = {
      firstName: 'Zenchy',
      lastName: 'de Shinwo',
      avatarUrl:'https://cdn.pixabay.com/photo/2019/09/08/18/59/pumpkin-4461658_960_720.jpg'
    }

    const displayAvatar = (user) => {
      if (user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return  <img src='https://cdn.pixabay.com/photo/2019/09/10/16/45/squirrel-4466635_960_720.jpg' width='300' height='300' />

      }
    }

    const element = (<h2>Hello, {formatName(user)}!</h2>)

    return (
      <div className="App">
        <h1> Hello again reactive celluloid </h1>
        {element}
        {displayAvatar(user)}
      </div>
    ) 
  }
}

export default App