import axios from "axios";
const API_URL = "https://hacker-news.firebaseio.com/v0";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${API_URL}/item/${id}.json`);
    return story.data;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(`${API_URL}/topstories.json`);
    const stories = await Promise.all(storyIds.slice(0, 20).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.", error);
  }
};

export const getComment = async (commentId) => {
  try {
    const comment = await axios.get(`${API_URL}/item/${commentId}.json`);
    return comment.data;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStoryComments = async (commentIds) => {
  try {
    const comments = await Promise.all(commentIds.slice(0, 20).map(getComment));
    return comments;
  } catch (error) {
    console.log("Error while getting list of stories.", error);
  }
};
