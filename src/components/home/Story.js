import React from "react";
import "./Story.scss";
import { useHistory } from "react-router-dom";

const Story = ({ story }) => {
  const history = useHistory();
  const handleView = () => {
    history.push("/story-details", {
      story: story,
    });
  };
  return (
    <div className="story" onClick={handleView}>
      <div className="story__title">
        <h1>{story.title} </h1>
      </div>
      <div className="story-info">
        <span>
          by{" "}
          <a
            href={`https://news.ycombinator.com/user?id=${story.by}`}
            title={story.by}
          >
            {story.by}
          </a>
        </span>
        &nbsp;|&nbsp;
        <span>{`${
          story.kids && story.kids.length > 0 ? story.kids.length : 0
        } comments`}</span>
      </div>
    </div>
  );
};

export default Story;
