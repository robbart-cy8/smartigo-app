import React from 'react';


class Signin extends React.Component{
  constructor(){
    super();
    this.state = {
      sinemail:'',
      sinpassword:'',
      status:'',
      wrong:''
    }
  }

  skip = () =>{
    this.setState({status:'skip'})
    this.damnsubmit();
  }

  emailchange = (eve) =>{
    this.setState({sinemail: eve.target.value})
  }

   passwordchange = (eve) =>{
    this.setState({sinpassword: eve.target.value})
  }

   damnsubmit = () =>{
    
    fetch('https://aqueous-hollows-58848.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.sinemail,
        password: this.state.sinpassword
      })
    })
    .then(resp=>resp.json())
    .then(data=>{ 
      if(data.id)
      {
        this.props.dataa(data)
        this.props.onhit('home');
      } 
        else if(this.state.status ==='skip')
             {
              this.props.dataa('')
              this.props.onhit('home');
             }
              else
              this.setState({wrong:'wrongcombo'})
    })
    .catch(err=>console.log('unable to signin'))
    
   }

  render(){
   return(
	<>
  <nav style={{display:'flex', justifyContent:'flex-end'}}>
    <p 
      className="f5 underline pointer tr link dim white db pr3"
      onClick={this.skip}> skip </p>
  </nav>
	<div className="br3 ba an black b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

	<main className="pa4 black-80">
    <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="tc f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
          onChange={this.emailchange}
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
          onChange={this.passwordchange}
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"/>
      </div>
      
    </fieldset>

    <div className='red tc'>
        { this.state.wrong ? <p className='f6 pa2'>incorrect email and password combination!</p> : ''}
     </div>
     

    <div className="center tc">
      <input
      onClick={this.damnsubmit} 
      className="center tc b ph3 pv2 input-reset ba b--black bb grow pointer f6 dib" 
      type="submit" 
      value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p
      onClick={()=>this.props.onhit('register')} 
      className="underline f6 pointer tc link dim black db">Register</p>
    </div>
    </div>

  </main>
</div>

</>
	);
}
}

export default Signin;