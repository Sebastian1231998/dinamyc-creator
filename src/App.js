import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-parent">
      <Sidebar />
      <Workspace  />
      </div>      
    </div>
  );
}

export default App;
