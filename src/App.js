import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const TestData=
[
  {
     name:"Rutuj Shahare",avatar_url: "https://avatars0.githubusercontent.com/u/51992103?v=4",company:"OceanGreen"
  },

  {
    name:"Rahul Shahare",avatar_url: "https://avatars2.githubusercontent.com/u/13538433?v=4",company:"OceanGreen"
  },
  {
    name:"Master Atul",avatar_url: "https://avatars1.githubusercontent.com/u/4029423?v=4",company:"Facebook"
  },
  {
    name:"Erika Languirand",avatar_url: "https://avatars1.githubusercontent.com/u/1471872?v=4",company:"Tech Mahindra"
  },

];

const CardList =(props)=>
(
  <div>
    {props.profile.map(profile=><Card key={profile.id}{...profile}/>)}
    
  </div>
);



class Card extends React.Component {
  render() {

    const profile=this.props;
    return (
    <div className="github-profile"> 
    <img src={profile.avatar_url}/>
    <div className="info" >
    <div className="Name"> {profile.name} </div>
    <div className="Company">{profile.company}</div>
    </div>

    
    
    
    </div>
    );
  }
}



 



class App1 extends React.Component {
  
            state={
              profile:[],
            };
   addNewProfile=(profiledata)=>
   {
     this.setState(prevState=>({
       profile:[...prevState.profile,profiledata],
     }));

   } ;         

   render() {
     
     return (
      <div>
     <div className="Header">{this.props.title}</div>
     <Form onSubmit={this.addNewProfile}/>
     <CardList profile={this.state.profile}/>
     </div>
     );
   }
}

class Form extends React.Component {
state={Username:''}

  handleSubmit=async(event)=>
  {
     event.preventDefault();
   const resp  =await axios.get(`https://api.github.com/users/${this.state.Username}`);
    this.props.onSubmit(resp.data);
    this.setState({Username:''});
    
  };
  render() {
    
    return (
      <div className="form">
    <form onSubmit={this.handleSubmit}>
      <input type="text"  value={this.state.Username } onChange={event=>this.setState({Username:event.target.value})}placeholder="Github Username"  required/>

      <button>Add The Username</button>
    </form>
    </div>
      );  
  }
}



export default App1;

