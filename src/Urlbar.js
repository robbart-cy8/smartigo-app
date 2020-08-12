import React, {Fragment} from 'react';
import './Urlbar.css';

const Urlbar = ({Change, Detect}) =>{
	return(
	<Fragment>
		<div>
			<p className='tc f3'>Enter an image url. I will detect the face..</p>
		</div>
		<div className='center pa3 br3 shadow-2 baa' style={{width:'500px'}}>
			
			<input className='f6 pa2 w-70 an center br2 ' type='tex' placeholder='Enter url here' 
			       onChange={Change} />
			<button className='pointer w-30 grow f6 link ph3 pv2 dib black bg-light-purple'
			        onClick={Detect}>
			        Detect	</button>
	
		</div>
	</Fragment>
		);
}

export default Urlbar;