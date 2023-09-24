import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MyProfileContainer from "./components/Profile/MyProfile/MyProfileContainer";

const App = (props) => {
  return(
    <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
            <div class="app-wrapper-content">                              
              <Routes>
                <Route path="/myProfile/*" element={<MyProfileContainer/>}/>
                <Route path="/profile/:userID/*" element={<ProfileContainer/>}/>
                <Route path="/messages/*" element={<DialogsContainer/>}/>
                <Route path="/news/*" element={<News />}/>
                <Route path="/music/*" element={<Music />}/>
                <Route path="/users/*" element={<UsersContainer />}/>
                <Route path="/settings/*" element={<Settings />}/>
                <Route path="/friends/*" element={<Friends />}/>
                <Route path="/login/*" element={<Login />}/>
              </Routes>             
            </div>         
        </div>
    </BrowserRouter>
  );
}

export default App;