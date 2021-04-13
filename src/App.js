import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./shared/header/Header";
import HomePage from "./pages/home/HomePage";
import StoryDetailsPage from "./pages/story-details/StoryDetailsPage";

function App() {
  return (
    <main className="app">
      <Header />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/story-details" component={StoryDetailsPage} />
      </Router>
    </main>
  );
}

export default App;
