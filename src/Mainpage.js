import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Navigation';
import Icon from './Icon';
import Urlbar from './Urlbar';
import Rank from './Rank';
import Imagebox from './Imagebox';
import Signin from './Signin';
import Register from './Register';

const po = {
	particles:{
		number:{
			value:150,
			density:{
				enable:true,
				value_area:800
			}
		}
	}
}



class Mainpage extends Component{
	constructor(){
		super();
		this.state = {
			input:'',
			imageurl:'',
			box:{},
			route:'signin',
			nav:'',
			nav2:'',
			user:{
				   id:'',
				   name:'',
				   email:'',
				   entries:'',
				   joined:''
				  }
		}
	}

	updation = (data) => {
		  this.setState({user: {
								id:data.id,
								name:data.name,
								email:data.email,
								entries:data.entries,
								joined:data.joined
							}
					  })
		  if(!data.name){
		  	this.setState({nav:'Sign in', nav2:'Register'})
		  }else{
		  	this.setState({nav:'Sign Out', nav2:''})
		  }
		
	}



	InputChange = (event) => {
		this.setState({input: event.target.value});
	}


	Calculation = (data) => {
		const boxy=data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
    	const width = Number(image.width);
    	const height = Number(image.height);
    	return {
      		leftcol: boxy.left_col * width,
      		toprow: boxy.top_row * height,
      		rightcol: width - (boxy.right_col * width),
      		bottomrow: height - (boxy.bottom_row * height)
    	}
    }

	boxf = (x) => {
		this.setState({box:x})
	}

	

	onDetect = () =>{
		this.setState({imageurl:this.state.input})
		fetch('https://aqueous-hollows-58848.herokuapp.com/imageurl', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body:JSON.stringify({
								   input:this.state.input
								})
		    })
		     .then(response => response.json())
		    .then(response => {

			if(response)
			{
				fetch('https://aqueous-hollows-58848.herokuapp.com/image',{
					method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
											id:this.state.user.id
										})
				  } )
					.then(resp=> resp.json())
					.then(count=>{
						this.setState(Object.assign(this.state.user,{entries:count}))
				  } )
			}

		this.boxf(this.Calculation(response))})
   		.catch(err => console.log(err))
	}

	onSign = (r) =>{
		this.setState({route:r,imageurl:''})
	}


	render(){
	return( 
	<>	
	 <Particles className='particle' params={po} />
		{ this.state.route === 'home' 
		                 ? 
		   <div>	
				<Navigation onhit={this.onSign}
							display={this.state.nav}
							display2={this.state.nav2} />
				<Icon />

				{!this.state.user.name 
					              ?

					<>
					  <Urlbar Change={this.InputChange}
								Detect={this.onDetect} />
					  <Imagebox imageUrl={this.state.imageurl} 
								  Box={this.state.box} />
					</>
						          :	  
					<>
						<Rank name={this.state.user.name}
						  entry={this.state.user.entries}	/>
						<Urlbar Change={this.InputChange}
							Detect={this.onDetect} />
						<Imagebox imageUrl={this.state.imageurl} 
							  Box={this.state.box} />
					</>
				}
		    }
		     </div>	
		   		
		   : ( this.state.route === 'signin' 
		   	   ?  <Signin onhit={this.onSign}
		   	   			  dataa={this.updation}	 />
		 	   :  <Register onhit={this.onSign}
		 	   				dataa={this.updation} />
		 	  )
		  	  
		}
		  			  
	</>
		);

	}
}

export default Mainpage;