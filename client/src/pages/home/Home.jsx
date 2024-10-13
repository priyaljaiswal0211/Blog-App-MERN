// // import React from 'react'
// import "./home.css"
// import Header from  "../../components/header/Header.jsx"
// import Posts from "../../components/posts/Posts"
// import Sidebar from "../../components/sidebar/Sidebar.jsx"


// export default function Home() {
//   return (
//     <>
//         <Header />
//         <div className="home">
//             <Posts/>
//             <Sidebar/>
//         </div>
//     </>
//   )
// }



import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
      // console.log(res.data)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}