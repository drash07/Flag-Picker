import React from 'react'
import {render} from 'react-dom'
import '../../css/demo.css';
import '../../css/react-flags-select.css';
import 'highlight.js/styles/default.css';

import ReactFlagsSelect from '../../src'
import SelectBox from '../../src/Select'

let Highlight = require('react-syntax-highlight');
var data = require('../../src/continents.json'); 

class Demo extends React.Component {

	state = {
		continent: '',
		selectCode: ''
	  }

	handleSelectItem = (item) => {
		this.setState({continent: item});
		this.forceUpdate();
	  }

	handleSelectCountryItem = (item) => {
		this.setState({continent: item});
		// this.forceUpdate();
	}  

	renderSwitch(param) {
		switch(param) {
		  case 'Africa':
			return ["NG", "ET", "CD", "EG", "ZA"];
		  case 'America':
		    return ["US", "BR", "MX", "CO", "AR"];
		  case 'Asia':
		    return ["CN", "IN", "ID", "PK", "BD"];
		  case 'Europe':
		    return ["RU", "GB", "DE", "IT", "FR"];
		  case 'Oceania':
			return ["AU", "PG", "NZ", "FJ", "SB"];	
		  default:
			return ["NG", "ET", "CD", "EG", "ZA"];
		}
	}

	render() {
		const continentsData = data.map((item, index) => {
			return( {id: index, value: item.continent}
			) });

			const isSelected = this.state.selectCode;

		return (
			<div>
				<div className="header">
					<span className="title">React Flags Select</span>
				</div>
				<div className="main">
					<p className="info">A customizable svg flags select components for React Js.</p>
					<div className="section-header">
						<span>Examples</span> 
					</div>
					<hr />
					<div className="demo-group">
						<span>Continent</span>
						<div className="demo-source">
						<div style={{margin: '16px', position: 'relative'}}>
       					  <SelectBox
       					    name="venue[continent_id]"
       					    items={continentsData}
       					    selectItem={this.handleSelectItem}
       					  />
       					</div>
						</div>
					</div>
					<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

					<div className="demo-group">
						<div className="demo-group-title">
							<span>countries</span>
						</div>
						<div className="demo-source">
						<div>
						<div className={`flag-select`}>
				<div ref="selectedFlag" style={{fontSize: `${25}px`}} className={`selected--flag--option`} tabIndex="0" >
					{ isSelected &&
						<span className="country-flag" style={{width: `${25}px`, height: `${25}px`}} >
								<span className="country-label">{ this.props.customLabels[isSelected] || countries[isSelected] }</span>
						</span>
					}
				</div>
				</div>
						</div>
							<Highlight lang={'js'} 
							value={'SelectdCountries'}/>
						</div>
						<ReactFlagsSelect
						searchable={true} 
						countries={this.renderSwitch(this.state.continent)}
						onSelect={this.handleSelectCountryItem}/>
					</div>
					<div>
      
     				</div>
					
					<div>


    </div>
				</div>
			</div>
		)
	}
}



render(<Demo/>, document.querySelector('#demo'))
