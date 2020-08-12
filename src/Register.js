import React from 'react';


class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      regemail:'',
      regpassword:'',
      regname:'',
      filled:'',
      emailvalid:'',
      namevalid:'',
      wrong:''
    }
  }


   emailreg = (eve) =>{
   this.setState({regemail: eve.target.value})
  }
 
   passwordreg = (eve) =>{
    this.setState({regpassword: eve.target.value})
  }
  namereg = (eve) =>{
    this.setState({regname: eve.target.value})
  }

  hitsubmit = () =>{
    const {regname, regemail,regpassword} = this.state;
    
    // eslint-disable-next-line
    if(regname,regemail,regpassword)
      this.setState({filled:true});

    else if( regemail==='' || regpassword==='')
    {
      this.setState({filled:false});
      return this.setState({wrong:'fields'});
    }

    

    if(regname)
      this.setState({namevalid:true})
    else
    {
      this.setState({namevalid:true});
      return this.setState({wrong:'fields'});
    }



    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(regemail))
       this.setState({emailvalid:true})
    else
    {
      this.setState({emailvalid:false})
      return this.setState({wrong:'email'});
    }



    if(this.state.emailvalid && this.state.filled && this.state.namevalid)
    {
        fetch('https://aqueous-hollows-58848.herokuapp.com/register',{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: regname,
            email: regemail,
            password:regpassword
          })
        })
          .then(resp=>resp.json())
          .then(data=>{
            if(data.id){
              this.props.dataa(data);
              this.props.onhit('home');
            }
          else if(!data.id)
              this.props.dataa('lalala')  })
    }
  }


  render(){
  return(
	<>
	<div className="br3 ba an black b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

	<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="tc f4 fw6 ph0 mh0">Register</legend>
     <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
        <input 
          onChange={this.namereg}
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text"
          name="Name"  
          id="Name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
          onChange={this.emailreg}
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address"  />
      </div>

      <div className='red tc'>
        { this.state.wrong==='email' ? <p className='f6 '>Please enter a valid email</p> : ''}
     </div>

      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
          onChange={this.passwordreg}
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"/>
      </div>
     
      
    </fieldset>

    <div className='red tc'>
        { this.state.wrong==='fields' ? <p className='f6 pa2'>Please fill in all the fields</p> : ''}
     </div>

    <div className="center tc">
      <input 
      onClick={this.hitsubmit}
      className="center tc b ph3 pv2 input-reset ba b--black bb grow pointer f6 dib" 
      type="submit" 
      value="Register"/>
    </div>
     <div className="lh-copy mt3">
      <p
      onClick={()=>this.props.onhit('signin')} 
      className="f6 underline pointer tc link dim black db">Signin</p>
    </div>
    
  </div>
</main>
</div>

</>
	);
}
}

export default Register;