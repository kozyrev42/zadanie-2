
import React, { Component } from "react";
import './Head.css'
import gerb from'./gerb.jpg'

class Head extends Component {
	shouldComponentUpdate(nextProps, nextState){  // блок рендера
		return false;
	}

	render () {
		return (
			<div id="head">
				<div > <img className="gerb" src={gerb} alt={"gerb"}/> </div>
				<div className="text"><a> Электронный бланк ПТБ   </a></div>
				<div className="text"><a> Памятка путешественника </a></div>
				<div className="text"><a> Информация              </a></div>
				<div className="text"><a> Вопросы и поддержка	  </a></div>
				<div className="text"><a> Личный кабинет		  </a></div>
			</div>
		)														 
	}
}

export default Head;
