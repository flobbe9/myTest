import './App.css';
import NavBar from './navbar/NavBar.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home-page/Home.tsx';

function App() {

    return (
		<BrowserRouter className="App">
			<header>
				<NavBar className="NavBarr" />
			</header>
			
			<body>
				<Routes>
					<Route path="/contact" element={<h1>Contact</h1>} />
					<Route path="/jobs" element={<h1>Jobs</h1>} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</body>

			<footer>
				Footer
			</footer>
		</BrowserRouter>
  	);
}


export default App;