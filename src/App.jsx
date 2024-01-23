import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("createpost");

  return (
    <>
      <div>
        <Navbar />
      </div>
      <aside className="mt-16">
        <Sidebar selectedTab={selectedTab} />
      </aside>
      <main>
        {selectedTab === "createpost" ? <PostList /> : <CreatePost />}
      </main>
    </>
  );
}

export default App;
