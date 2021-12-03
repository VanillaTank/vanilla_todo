import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateProject from "./components/CreateProject/CreateProject";
import DoneArchive from "./components/Done-Archive-Projects/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActualProjects from "./components/ActualProjects/ActualProjects";

import OpenProject from "./components/OpenProject/OpenProject";

function App(props) {
  const sortedActual = getSelectedData(props.data, "isActual");
  const sortedDone = getSelectedData(props.data, "isDone");
  const sortedArchive = getSelectedData(props.data, "isArchive");

  console.log();

  return (
    <Router>
      <div className="App">
        <Header />

        {/* потом удалить */}
        <Routes>
          <Route
            exact
            path="/projjj"
            element={<OpenProject data={sortedActual[0]} />}
          />

          <Route
            exact
            path="/"
            element={<ActualProjects data={sortedActual} />}
          />
          <Route exact path="/create-project" element={<CreateProject />} />
          <Route
            exact
            path="/done"
            element={
              <DoneArchive title="ВЫПОЛНЕННЫЕ ПРОЕКТЫ" data={sortedDone} />
            }
          />

          <Route
            exact
            path="/archieve"
            element={<DoneArchive title="АРХИВ" data={sortedArchive} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function getSelectedData(general, sort) {
  return general.filter((el) => {
    return el[sort] === true;
  });
}

export default App;
