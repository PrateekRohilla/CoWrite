import TextEditor from "./TextEditor";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          exact
          element={<Navigate to={`/documents/${uuidv4()}`} />}
        /> */}
        <Route path="/" exact element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/documents/:id" element={<TextEditor />} />
        </Route>
        {/* <Route path="/" exact element={<LandingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
