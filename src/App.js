import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
  return(
    <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
            <div class="app-wrapper-content">                              
              <Routes>
                <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                <Route path="/messages/*" element={<Dialogs store={props.store} />}/>
                <Route path="/news/*" element={<News />}/>
                <Route path="/music/*" element={<Music />}/>
                <Route path="/settings/*" element={<Settings />}/>
                <Route path="/friends/*" element={<Friends />}/>
              </Routes>             
            </div>         
        </div>
    </BrowserRouter>
  );
}

export default App;
