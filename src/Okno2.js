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

	
	proverka = () => {
		let pass1 = this.state.pass1;
		let pass2 = this.state.pass2;
		let pass3 = this.state.pass3;
		let pass4 = this.state.pass4;
		let znach;
		
		if (pass1=='1' && pass2=='2' && pass3=='3' && pass4=='4') {
			znach = false;
			console.log('верно');
		} else {
			alert('Пароль не верный !');
		}
		this.props.parentCallback(znach);  // передал булевое значение в родительский, там по значению меняется стэйт
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
				<div> 
					<form id="inp2" onSubmit={this.onSubmit}>
						<div ><input id="inp1" type="text" name="pass1" value={this.state.pass1} onChange={this.onChangeInput}/> </div>
						<div ><input id="inp1" type="text" name="pass2" value={this.state.pass2}  onChange={this.onChangeInput}/></div>
						<div ><input id="inp1" type="text" name="pass3" value={this.state.pass3}  onChange={this.onChangeInput}/></div>
						<div ><input id="inp1" type="text" name="pass4" value={this.state.pass4}  onChange={this.onChangeInput}/></div>
					</form>
				</div>
				<div> <button className="but24" onMouseDown={this.proverka}> Продолжить </button></div>  
				<div> <a className="text5"> Выслать код повторно </a> </div>
			</div>
		);
	}
}

export default Okno2;




   