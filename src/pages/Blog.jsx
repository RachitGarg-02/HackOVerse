import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b5dfb90267c1427293f84d847e5400a0"
        );
          console.log(response.data.articles);
          let random = Math.ceil(Math.random() * 10);
        setNews(response.data.articles.slice(random, random+4));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="blog">
      <h2 className="blog_head">Health News</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {news.map((article, index) => (
          <div className="blog_content" key={index}>
            <img className="blog_img" src={article.urlToImage} alt={article.title} />
                <div className="blog_desc">
                    
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
