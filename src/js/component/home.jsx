import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container-fluid " id="background">
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div className="container">
				<div className="" id="header"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-brightness-alt-high" viewBox="0 0 16 16">
					<path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
				</svg>reminders</div>
				<div>
					<ul>
						<div className="" id="list">
							<li>
								<input
									id="placeholder"
									type="text"
									onChange={(e) => setInputValue(e.target.value)}
									value={inputValue}
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											setTodos(todos.concat(inputValue));
											setInputValue("");
										}
									}}
									placeholder="remind me to ..."
								></input>
							</li>
						</div>
						<div className="" id="dropdown">
							{todos.map((item, index) =>
								<li id="icon"><i class="fa-solid fa-quote-left fa-fade fa-2xs" onClick={() =>
									setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>&nbsp;&nbsp;&nbsp;
									{item}&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-quote-right fa-fade fa-2xs" onClick={() =>
										setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
								</li>)}
						</div>

					</ul>
				</div>
				<div className="" id="footer">remaining tasks  <strong id="number">_0{todos.length}</strong></div>
				<div>&nbsp;</div>
			</div>
		</div>
	);
};

export default Home;
