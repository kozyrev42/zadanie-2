import React, { Component } from "react";
import Okno1 from "./Okno1"

class Uprav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			okno1: true 
		};
		this.transfer = this.transfer.bind(this);
		this.clickButton = this.clickButton.bind(this);
	}

	clickButton(e) {
		this.transfer();
		e.stopPropagation();   //  метод прекращает передачу текущего события
	}

	transfer() {     // переключает стэйт (true <=> false)
		this.setState ({
			okno1: !this.state.okno1 // значит "НЕ текущее состояние"
		});
	}

	render () {
		return (
			<div>
				<Okno1 clickButton={this.clickButton}
					   okno1display={this.state.okno1}/>
			</div>
			);
	}
}




export default Uprav;
