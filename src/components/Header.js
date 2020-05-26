
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from '../pages/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Logo from '../components/Logo'
import MainMenu from '../components/MainMenu'
import Pagination from '../pages/Pagination';
const Header = () => {
  const [posts, setPosts] = useState([{
    userId: 6,
    id: 53,
    title: "ut quo aut ducimus alias",
    body: "minima harum praesentium eum rerum illo dolore quasi exercitationem rerum nam porro quis neque quo consequatur minus dolor quidem veritatis sunt non explicabo similique"
    },{
      userId: 6,
      id: 54,
      title: "sit asperiores ipsam eveniet odio non quia",
      body: "totam corporis dignissimos vitae dolorem ut occaecati accusamus ex velit deserunt et exercitationem vero incidunt corrupti mollitia"
      },
      {
      userId: 6,
      id: 55,
      title: "sit vel voluptatem et non libero",
      body: "debitis excepturi ea perferendis harum libero optio eos accusamus cum fuga ut sapiente repudiandae et ut incidunt omnis molestiae nihil ut eum odit"
      },
      {
      userId: 6,
      id: 56,
      title: "qui et at rerum necessitatibus",
      body: "aut est omnis dolores neque rerum quod ea rerum velit pariatur beatae excepturi et provident voluptas corrupti corporis harum reprehenderit dolores eligendi"
      },
      {
      userId: 6,
      id: 57,
      title: "sed ab est est",
      body: "at pariatur consequuntur earum quidem quo est laudantium soluta voluptatem qui ullam et est et cum voluptas voluptatum repellat est"
      }]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
console.log(currentPosts)
console.log(posts);
console.log(posts.length)
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Router>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Logo/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
           <MainMenu/>
          </div>       
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" exact component ={About}>
            <About />
          </Route>
          <Route path="/blog" exact component ={Blog}>
            <Blog posts={currentPosts} loading={loading} />
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            />
          </Route>
          <Route path="/" exact component ={Home}>
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default Header;
