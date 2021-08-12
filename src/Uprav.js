import React, { Component } from "react";
import Okno1 from "./Okno1";
import Okno2 from "./Okno2";

class Uprav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			okno1: true,
			okno2: false
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
			okno1: !this.state.okno1, // значит "НЕ текущее состояние"
			okno2: !this.state.okno2
		});
	}

	
	render () {
		return (
			<div>
				<Okno1 clickButton={this.clickButton}
					   okno1display={this.state.okno1}/>

				<Okno2 okno2display={this.state.okno2}/>
			</div>
		);
	}
}




export default Uprav;
