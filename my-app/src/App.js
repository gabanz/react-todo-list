import logo from './logo.svg';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List itemList={["Subscribe to DataStaxDevs YouTube channel"]}/>
        <List itemList={["Build to-do app", "Build TikTok clone app", "Build Netflix clone app"]}/>
        <List itemList={["Collect all badges", "Get gold badge"]}/>
        <List itemList={["Publish a LinkedIn post mentioning about the workshop"]}/>
        <List itemList={["Publish a blog post on dev.to talking about the lessons learned from the workshop"]} />
      </header>
    </div>
  );
}

export default App;
