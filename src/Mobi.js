
import React, { Component } from "react";
import './Mobi.css'
import mobi from'./mobi.jpg'

class Mobi extends Component {
	shouldComponentUpdate(nextProps, nextState){  // блок лишнего рендера
		return false;
	}

	render () {
		return (
			<div id="mobi">
				<div > <img className="mobi" src={mobi} alt={"mobi"}/> </div>
			</div>
		)														 
	}
}

export default Mobi;
