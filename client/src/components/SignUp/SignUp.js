import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { AuthConsumer } from './../AuthContext';

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
        {this.state.agreed && (
          <AuthConsumer>
            {({ isAuth, login }) => (
              <div>
                <Button onClick={login}>Sign Up</Button>
                <div>{isAuth && <Redirect to="/" />}</div>
              </div>
            )}
          </AuthConsumer>
        )}
      </div>
    );
  }
}

export default SignUp;
