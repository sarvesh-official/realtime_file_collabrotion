import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TextEditor from "./components/TextEditor";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToDocuments />} />{" "}
        <Route path="/document/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

function RedirectToDocuments() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/document/${uuidv4()}`);
  }, []);

  return null;
}
export default App;
