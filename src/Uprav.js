import React, { Component } from "react";
import Okno1 from "./Okno1";
import Okno2 from "./Okno2";
import Okno3 from "./Okno3";

class Uprav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			okno1: true,
			okno2: false,
			okno3: false
		};
		this.transfer = this.transfer.bind(this);
		this.clickButton = this.clickButton.bind(this);
		this.clickButton2 = this.clickButton2.bind(this);
		this.transfer3 = this.transfer3.bind(this);
		this.clickButton3 = this.clickButton3.bind(this);
	}

	clickButton(e) {
		this.transfer();
		e.stopPropagation();   		//  метод прекращает передачу текущего события
	}
	transfer() {    				 // переключает стэйт (true <=> false)
		this.setState ({
			okno1: !this.state.okno1, // значит "НЕ текущее состояние"
			okno2: !this.state.okno2
		});
	}

	clickButton2=(chiidData) => {
		this.setState ({
			okno2: chiidData,
			okno3: !this.state.okno3
		});
	}

	clickButton3(e) {
		this.transfer3();
		e.stopPropagation();   		
	}
	transfer3() {    				 
		this.setState ({
			okno3: !this.state.okno3, 
			okno1: !this.state.okno1
		});
	}
	render () {
		return (
			<div>
				<Okno1 clickButton={this.clickButton}
					   okno1display={this.state.okno1}/>

				<Okno2  parentCallback={this.clickButton2}
						okno2display={this.state.okno2}/>

				<Okno3 clickButton3={this.clickButton3}
					   okno3display={this.state.okno3}/>
			</div>
		);
	}
}
export default Uprav;
