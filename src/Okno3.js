import React, { Component } from "react";
import "./Okno3.css";
import img2 from'./img2.jpg'

class Okno3 extends Component {
	render () {
		if (this.props.okno3display===false) {
			return null;
		}
		return (
			<div id='okno3'>
				<div> <img className="img2" src={img2} alt={"img2"}/> </div>
				<div><p className="text1"> Почта подтверждена! </p></div>
				<div><p className="text2"> На Ваш электронный адрес выслан бланк </p></div>
				<div><p className="text2"> пассажирской таможенной декларации </p></div>
				<div><p className="text2"> и штрих код для доступа к </p></div>
				<div><p className="text2"> быстрой печати с сенсорного терминала </p></div>

				<div> <button className="but4" onMouseDown={this.props.clickButton3}> Вернуться </button></div>  
			</div>
		);
	}
}

export default Okno3;




   