import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import NotFound from "./components/NotFound";


function App() {
		return (
				<BrowserRouter>
						<div className="App">
								<Link to="/">Home</Link>
								<br/>
								<Link to="/about">About</Link>
								<br/>
								<Link to="/works">Works</Link>
								<br/>
								<Link to="/contact">Contact</Link>
								<br/>
								<Routes>
										<Route path="/" element={<Home/>}/>
										<Route path="/about" element={<About/>}/>
										<Route path="/works" element={<Works/>}/>
										<Route path="/contact" element={<Contact/>}/>
										<Route path="/*" element={<NotFound/>}/>
								</Routes>
								{/* <Footer /> */}
						</div>
				</BrowserRouter>
		);
}

export default App;
