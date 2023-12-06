import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from "./component/Header";
import Sidebar from "./component/Siderbar";
import Footer from './component/Footer';
import CreatePost from './component/CreatePost'
import PostList from './component/PostList'

function App(){

  const [selectedTab, setSelectedTab] = React.useState("home");

  function handleSelectedTab(e){
    if(e.target.innerHTML=="Home") {
      setSelectedTab("home");
    }
    else{
      setSelectedTab("")
    }
  }

  return (
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={handleSelectedTab}/>
      <div className='app-content'>
        <Header /> 
        {
          (selectedTab=="home") ? <PostList /> : <CreatePost />
        } 
        <Footer />
      </div>
    </div>
  )
}

export default App;