import './App.css';
import React, {useState, useEffect} from 'react';
import LinkForm from './components/linkForm';
import LinksList from './components/linksList';
import { getAllLinks } from './services/api';

function App() {
  const [links, setLinks] = useState([]);
  const [showLinksList, setShowLinksList] = useState(false);

  const fetchLinks = async () => {
    try {
      const linksData = await getAllLinks();
      setLinks(linksData);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  };
  
  useEffect(() => {
    fetchLinks();
  }, []);

  const addLink = (link) => {
    setLinks([link, ...links]);
  };

  const changeShow = () => {
    setShowLinksList(!showLinksList);
    if (!showLinksList){
      fetchLinks();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Link Shortener</h1>
        <div className='main-bar'>
          <div className='list-bar'> <button className="linksListButton" onClick={changeShow}>List links</button> </div>
          <LinkForm onAddLink={addLink}/>
        </div>
        { showLinksList && <LinksList links={links}/>}
      </header>
    </div>
  );
}

export default App;
