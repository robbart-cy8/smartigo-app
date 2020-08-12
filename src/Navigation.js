import React, {Fragment} from 'react';

const Navigation = ({onhit, display, display2}) =>{
	console.log(display2,display)
	return(
		<Fragment>
			<nav style={{display:'flex', justifyContent:'flex-end'}}>

				
				{     !display2  
					      ?
				  <p 
					onClick={()=>onhit('signin')}    
					className='link underline dim black pointer pr3'>
					{display}
				  </p>
				          :
			   <>
				  <p 
				    onClick={()=>onhit('signin')}    
				    className='link underline dim black pointer pr3'>
				    {display}
				  </p>

				  <p 
				    onClick={()=>onhit('register')}    
				    className='link underline dim black pointer pr3'>
				    {display2}</p>
				</>
			}
				
			</nav>

		</Fragment>
		);
}

export default Navigation;