import './App.css';
import React, {useState, useEffect} from 'react';
import LinkForm from './components/linkForm';
import LinksList from './components/linksList';
import { getAllLinks } from './services/api';

function App() {
  const [links, setLinks] = useState([]);
  const [showLinksList, setShowLinksList] = useState(false);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const linksData = await getAllLinks();
        setLinks(linksData);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, []);

  const addLink = (link) => {
    setLinks([link, ...links]);
  };

  const changeShow = () => {
    setShowLinksList(!showLinksList);
  }

  return (
    <div className="App">
      <div className="navbar">
        <button className="linksListButton" onClick={changeShow}>LIST LINKS</button>
      </div>
      <header className="App-header">
        <h1>Link Shortener</h1>
        <LinkForm onAddLink={addLink}/>
        { showLinksList && <LinksList links={links}/>}
      </header>
    </div>
  );
}

export default App;
