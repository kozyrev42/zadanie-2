import React, { Component } from "react";
import Head from "./Head";
import Uprav from "./Uprav"

class Container extends Component {
	
	shouldComponentUpdate(nextProps, nextState){  // блок лишнего рендера
		return false;
	}

	render () {
		return (
			<div>
				<Head/>
				<Uprav/>
			</div>
			);
	}
}

export default Container;
