import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://media.licdn.com/dms/image/C5603AQGXQVbiSdsn0w/profile-displayphoto-shrink_200_200/0/1517587922339?e=2147483647&v=beta&t=xS1ot1EMAs_G-c9mT-aU7YN5WHj10epzuNCarDrBPTA"} className="App-logo" alt="logo" />
        <p>
          This is me, Ron
        </p>
        <a
          className="App-link"
          href="https://media.licdn.com/dms/image/C5603AQGXQVbiSdsn0w/profile-displayphoto-shrink_200_200/0/1517587922339?e=2147483647&v=beta&t=xS1ot1EMAs_G-c9mT-aU7YN5WHj10epzuNCarDrBPTA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your photo, Dmitry
        </a>
        {/* <img src={logo} className="App-logoD" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
