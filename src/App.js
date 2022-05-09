import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import CataloguePage from "./pages/CataloguePage";

function App() {
	return (
		<Router>
			<Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about-us" element={<AboutPage />}/>
        <Route path="/contact-us" element={<ContactPage />}/>
        <Route path="/catalogue" element={<CataloguePage />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
		</Router>
	);
}

export default App;
