import React, {Fragment} from 'react';
import Tilt from 'react-tilt';
import icon from './icong.png';

const Icon = () =>{
	return(
		<Fragment>
			<div className='pl3 '>
				<Tilt className="Tilt shadow-3 baa" options={{ max : 77 }} style={{ height: 110, width: 110 }} >
 					<div className="Tilt-inner"> 
 						<img  alt={'bleh'} src={icon} />
 					</div>
				</Tilt>
			</div>
		</Fragment>
		);
}

export default Icon;