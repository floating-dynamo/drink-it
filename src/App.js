import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import CataloguePage from "./pages/CataloguePage";
import BottleJuiceDetails from "./pages/BottleJuiceDetails";
import ScrollToTop from "./components/ScrollToTop";
import userCartState from "./context/userCartState";
import userWishState from "./context/userWishState";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<userCartState>
				<userWishState>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about-us" element={<AboutPage />} />
						<Route path="/contact-us" element={<ContactPage />} />
						<Route path="/catalogue" element={<CataloguePage />} />
						<Route
							path="/catalogue/bottle-juice/:name"
							element={<BottleJuiceDetails />}
						/>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</userWishState>
			</userCartState>
		</Router>
	);
}

export default App;
