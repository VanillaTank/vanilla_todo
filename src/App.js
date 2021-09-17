import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CreateProject from './components/CreateProject/CreateProject';

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <CreateProject />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
