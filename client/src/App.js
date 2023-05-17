import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import NotFoundPage from "./pages/notFoundPage";
import ErrorFallback from "./components/errorFallBack";
import Loader from "./components/loader";
import { useSelector } from "react-redux";
import Home from "./pages/home";

function App() {
  const loading = useSelector((state) => state.app.loading);

  return loading ? (
    <Loader />
  ) : (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
