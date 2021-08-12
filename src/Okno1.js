import React, { Component } from "react";
import "./Okno1.css";
import img1 from'./img1.jpg'

class Okno1 extends Component {
	render () {
		if (this.props.okno1display===false) {
			return null;
		}
		return (
			<div id='okno1'>
				<div> <img className="img1" src={img1} alt={"img1"}/> </div>
				<div><p className="text1"> Без регистрации </p></div>
				<div><p className="text2"> Введите адрес электронной почты </p></div>
				<div> <form> <input className="input3" placeholder="введите email"></input></form></div>
				<div> <button className="but4" onMouseDown={this.props.clickButton}> Продолжить </button></div>  
				<div> <a className="text5"> Вход через Госуслуги </a> </div>
			</div>
		);
	}
}

export default Okno1;




   