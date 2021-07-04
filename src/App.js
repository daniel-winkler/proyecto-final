import './App.css';
import AuthContext from './contexts/AuthContext';
import Router from './routers/Router';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  );
}

export default App;
