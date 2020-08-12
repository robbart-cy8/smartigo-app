import React from 'react';
import './Imagebox.css';

const Imagebox = ({imageUrl,Box}) =>{
	return(
	<>
	<div className='center ma'>
		<div className='absolute mt2'>
			<img id='inputimage' className='ba' alt='' src={imageUrl} width='350px' heigh='auto' />
			<div 
				className='bounding-box' style={{top:Box.toprow, right:Box.rightcol , bottom:Box.bottomrow , left:Box.leftcol}} >
			</div>
		</div>
	</div>
	</>
	);
}

export default Imagebox;