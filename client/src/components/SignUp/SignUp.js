import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      agreed: false,
    };
  }

  toggle = () => {
    console.log(this.state);
    this.setState({
      agreed: !this.state.agreed,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <Form>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={this.toggle} />
              I agree to the Terms of Use & Privacy Policy
            </Label>
          </FormGroup>
        </Form>
        {this.state.agreed && <h2>agreed!</h2>}
      </div>
    );
  }
}

export default SignUp;
