import React from 'react'
import {SocialMediaProvider} from './store/social-media-store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from "./component/Header";
import Sidebar from "./component/Siderbar";
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';
// import CreatePost from './component/CreatePost'
// import PostList from './component/PostList'

function App(){

  const [selectedTab, setSelectedTab] = React.useState("home");

  
  // postList, handleAddPost, handleDeletePost
  function handleSelectedTab(e){
    if(e.target.innerHTML=="Home") {
      setSelectedTab("home");
    }
    else{
      setSelectedTab("")
    }
  }

  return (
    <SocialMediaProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={handleSelectedTab}/>
        <div className='app-content'>
          <Header /> 
            <Outlet />
          {/* {
            (selectedTab=="home") ? <PostList /> : <CreatePost />
          }  */}
          <Footer />
        </div>
      </div>
    </SocialMediaProvider>
  )
}

export default App;