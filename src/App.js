import './App.css';
import NavBar from './navbar/NavBar.tsx';
import NavBarDropDown from './navbar/NavBarDropDown.tsx';

function App() {
    return (
    <div className="App">
		<header>
			<NavBar/>
			<NavBarDropDown/>
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