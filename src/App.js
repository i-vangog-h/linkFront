import logo from './logo.svg';
import './App.css';
import LinkForm from './components/linkForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Link Shortener</h1>
        <LinkForm />
      </header>
    </div>
  );
}

export default App;
