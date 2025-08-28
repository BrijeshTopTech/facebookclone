import { useState } from "react";
import Header from "./Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import Login from "./components/Login";

function App() {
  const user = "null";
  return (
    <>
    { (user) ? 
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <RightSidebar />
        </div>
        {/* Footer */}
      </div> :
      <Login />
    }
    </>
  );
}

export default App;
