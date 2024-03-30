import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewContainer from './components/NewContainer';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component{
  apikey= "2304fbd5301d463a836462bd9b255793"
  pageSize=5
  state={
    progress:0
  }
  setProgress= (progress)=>
  {
    this.setState({progress: progress});
  }
  render() {
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        transitionTime	= {200}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route index path='/' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pageSize} country='in' category='general'/>}/>
            <Route exact path='/business' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={this.pageSize} country='in' category='business'/>}/>
            <Route exact path='/health' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={this.pageSize} country='in' category='health'/>}/>
            <Route exact path='/science' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={this.pageSize} country='in' category='science'/>}/>
            <Route exact path='/entertainment' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={this.pageSize} country='in' category='entertainment'/>}/>
          <Route exact path='/technology' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.pageSize} country='in' category='technology'/>}/>
          <Route exact path='/sports' element={<NewContainer setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={this.pageSize} country='in' category='sports'/>}/>
        </Routes>
      </Router>
    );
  }
}