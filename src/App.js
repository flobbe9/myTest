import './App.css';
import NavBar from './navbar/NavBar.tsx';


const navBarDropDown = document.getElementsByClassName("NavBarDropDownn");
const navBar = document.getElementsByClassName("NavBarr");


function App() {

    return (
		<div className="App">
			<header>
				<NavBar className="NavBarr" />
				{/* <NavBarDropDown className="NavBarDropDownn" />
				<NavBarDropDown className="NavBarDropDownn" />
				<NavBarDropDown className="NavBarDropDownn" /> */}
			</header>

			<body className="Body">
				<h1>Body</h1>
			</body>

			<footer>
				Footer
			</footer>
		</div>
  	);
}


export default App;