import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateProject from "./components/CreateProject/CreateProject";
import DoneArchive from "./components/Done-Archive-Projects/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActualProjects from "./components/ActualProjects/ActualProjects";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<ActualProjects />} />
          <Route exact path="/create-project" element={<CreateProject />} />
          <Route
            exact
            path="/done"
            element={<DoneArchive title="ВЫПОЛНЕННЫЕ ПРОЕКТЫ" />}
          />

          <Route
            exact
            path="/archieve"
            element={<DoneArchive title="АРХИВ" />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
