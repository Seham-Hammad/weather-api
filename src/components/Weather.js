/**this is a stateless component, so we dont need to have it as a class, we make it as afunction component
 * we also need to remove the this key word and make it as an arrow function
*/

import React from 'react';
const Weather = props => (
    <div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
       
)
export default Weather;
 

 /**
import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div>
               {this.props.city && this.props.country &&<p> Location: {this.props.city},{this.props.country} </p> }
               {this.props.temperature &&  <p>Temperature:{this.props.temperature}</p> }
                {this.props.humidity && <p>Humidity{this.props.humidity}</p>}
                {this.props.description && <p>Condition:{this.props.description}</p>}
                {this.props.error && <p>Error:{this.props.error}</p>}
                 
                
            </div>
        )
    }
}
export default Weather;
*/
