import React, { Component } from "react";
import "./Okno2.css";
import img1 from'./img1.jpg'

class Okno2 extends Component {
	constructor(props) {
		super(props);
		this.state = {  pass1: '',
						pass2: '',
						pass3: '',
						pass4: ''
	    };
		this.onChangeInput = this.onChangeInput.bind(this);
		this.proverka = this.proverka.bind(this);
	}
	
	onChangeInput(event) {
		const name = event.target.name;
		this.setState({[name]: event.target.value});  // каждый name - получит своё значение
	}

	proverka(e) {
		let pass1 = this.state.pass1;
		let pass2 = this.state.pass2;
		let pass3 = this.state.pass3;
		let pass4 = this.state.pass4;

		if (pass1=='1' && pass2=='2' && pass3=='3' && pass4=='4') {
			console.log('верно');
		} else {
			console.log('не верно');
		}
	}

	render () {
		if (this.props.okno2display===false) {
			return null;
		}

		return (
			<div id='okno2'>
				<div> <img className="img1" src={img1} alt={"img1"}/> </div>
				<div><p className="text21"> Подтверждение </p></div>
				<div><p className="text22"> На Ваш электронный адрес был выслан код,  </p></div>
				<div><p className="text22"> введите его ниже </p></div>
				<div id="inp2"> 
				<form onSubmit={this.onSubmit}>
					<p> <input type="text" name="pass1" value={this.state.pass1}  onChange={this.onChangeInput}/></p>
					<p> <input type="text" name="pass2" value={this.state.pass2}  onChange={this.onChangeInput}/></p>
					<p> <input type="text" name="pass3" value={this.state.pass3}  onChange={this.onChangeInput}/></p>
					<p> <input type="text" name="pass4" value={this.state.pass4}  onChange={this.onChangeInput}/></p>
				</form>
				</div>
				<div> <button className="but24" onMouseDown={this.proverka}> Продолжить </button></div>  
				<div> <a className="text5"> Выслать код повторно </a> </div>
			</div>
		);
	}
}

export default Okno2;




   