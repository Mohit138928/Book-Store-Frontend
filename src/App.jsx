import "./App.css";
import { Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 sm:px-40 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
