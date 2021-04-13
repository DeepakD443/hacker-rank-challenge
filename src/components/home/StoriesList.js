import React from "react";
import Story from "./Story";

const StoriesList = ({ stories }) => {
  return (
    <React.Fragment>
      {stories &&
        stories.map((story) => <Story key={story.id} story={story} />)}
    </React.Fragment>
  );
};

export default StoriesList;
