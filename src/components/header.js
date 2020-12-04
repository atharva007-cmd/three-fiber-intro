import React from "react";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<span>REACT THREE FIBER</span>
			</div>
			<div className="details">
				<h4 className="heading">Canvas</h4>
				<span className="content">
					The canvas object is your portal into three.js.<br></br>
					It renders three.js elements and not DOM elements.<br></br>
					Defaults setup:<br></br>- Translucent WebGL-renderer{" "}
					<br></br>- Perspective camera <br></br>- Orthographic camera{" "}
					<br></br>- A scene <br></br>- Wrapping container with
					resizable observer <br></br>
				</span>
				<h4 className="heading">Ambient Light</h4>
				<span className="content">
					This light globally illuminates all objects in the scene
					equally.<br></br>
					This light cannot be used to cast shadows as it does not
					have any direction.<br></br>
				</span>
				<h4 className="heading">Directional Light</h4>
				<span className="content">
					A light that gets emmited in a specific direction.<br></br>
					This light acts as if it's infinitely far away and rays
					produced are parallel.<br></br>A common usecase is daylight
					simulation.<br></br>
				</span>
				<h4 className="heading">Point Light</h4>
				<span className="content">
					A light that gets emmited from a single point in all
					direction.<br></br>A common usecase is simulation of light
					emmited from bare lightbulb.<br></br>
				</span>
			</div>
		</header>
	);
};

export default Header;
