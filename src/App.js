import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import CataloguePage from "./pages/CataloguePage";
import BottleJuiceDetails from "./pages/BottleJuiceDetails";
import ScrollToTop from "./components/ScrollToTop";
import UserCartState from "./context/UserCartState";
import UserWishState from "./context/UserWishState";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import PaymentPage from "./pages/PaymentPage";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<UserCartState>
				<UserWishState>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about-us" element={<AboutPage />} />
						<Route path="/contact-us" element={<ContactPage />} />
						<Route path="/catalogue" element={<CataloguePage />} />
						<Route
							path="/catalogue/bottle-juice/:name"
							element={<BottleJuiceDetails />}
						/>
						<Route path="/cart" element={<Cart />}/>
						<Route path="/wishlist" element={<WishList />}/>
						<Route path="/pay" element={<PaymentPage />}/>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</UserWishState>
			</UserCartState>
		</Router>
	);
}

export default App;
