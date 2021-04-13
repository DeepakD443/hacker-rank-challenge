import React, { useEffect, useState } from "react";
import { getStoryComments } from "../../services/StoryService";
import CommentList from "../../components/news-details/comments/CommentsList";
import "./StoryDetailsPage.scss";

const StoryDetailsPage = (props) => {
  const { story } = props.location.state;
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getStoryComments(story.kids)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [story.kids]);

  return (
    <div className="story-details-page container">
      {isLoading ? (
        <p className="loading">Loading comments...</p>
      ) : (
        <div className="story-with-comments">
          <h1>{story.title}</h1>
          <h4 className="top-comments">Top Comments</h4>
          <CommentList comments={comments} />
        </div>
      )}
    </div>
  );
};

export default StoryDetailsPage;
