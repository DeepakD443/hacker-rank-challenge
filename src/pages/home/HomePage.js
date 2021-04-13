import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import { getStories } from "../../services/StoryService";
import StoriesList from "../../components/home/StoriesList";

const HomePage = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories()
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home-page container">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <StoriesList stories={stories} />
      )}
    </div>
  );
};

export default HomePage;
