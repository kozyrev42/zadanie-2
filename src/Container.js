import React, { Component } from "react";
import Head from "./Head";
import Mobi from "./Mobi";
import Uprav from "./Uprav";

class Container extends Component {
	render () {
		let width = window.innerWidth;
		if (width > 830) {
			return (
				<div>
					<Head/>
					<Uprav/>
				</div>
			);
		} else {
			return (
				<div>
					<Mobi/>
					<Uprav/>
				</div>
			)
		}
	}
}

export default Container;
