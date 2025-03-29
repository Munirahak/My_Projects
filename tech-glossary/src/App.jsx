import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddTerm from "./pages/AddTerm";
import EditTerm from "./pages/EditTerm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { TermsProvider } from "./context/TermsContext";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <TermsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-term" element={<AddTerm />} />
              <Route path="/edit-term/:id" element={<EditTerm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TermsProvider>
  );
}

export default App;
