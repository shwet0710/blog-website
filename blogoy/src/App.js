import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
       <NavBar />
       <div className='max-w-screen-md mx-auto pt-20'>
         <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/about" element={<About />} />
             <Route exact path="/article-list" element={<ArticleList />} />
             <Route exact path="/article/:name" element={<Article />} /> 
             <Route path="*" element={<NotFound />} />
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
