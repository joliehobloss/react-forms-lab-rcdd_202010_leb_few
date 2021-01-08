import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleSubmit=(e)=>{
  e.preventDefault()
  if(this.state.username!="" && this.state.password!="")
     this.props.handleLogin(this.state)
  }
  
  handleChangeUser = (e) => {
      this.setState({
      username:e.target.value;
    })

  };

    handleChangePass = (e) => {
    this.setState({
      password:e.target.value;
    })

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  onChange={this.handleChangeUser} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChangePass} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
