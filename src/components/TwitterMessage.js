import React from "react";

class TwitterMessage extends React.Component {
  constructor(maxChars) {
    super();

    this.state = {
       lastName:""
    };
  }
  
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleLastNameChange} value={this.state.lastName}/>

      </div>
    );
  }
}

export default TwitterMessage;
