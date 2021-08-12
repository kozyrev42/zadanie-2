import React, { Component } from "react";
import Head from "./Head";
import Okno1 from "./Okno1"

class Container extends Component {
	constructor (props) {
		super(props);

		this.state = {
			okno1: true 
		};

		this.transfer = this.transfer.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
	}

	handleMouseDown(e) {
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
				<Head/>
				<Okno1 handleMouseDown={this.handleMouseDown}
						okno1display={this.state.okno1}/>
			</div>
			);
	}
}

export default Container;
