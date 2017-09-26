import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      pro_pic_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//redirect user to home page if they are logged in
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  signupFields() {
    if (this.props.formType === 'login') {
      return;
    } else {
      return (
        <div>
        <label>First Name:
          <input type="text"
            value={this.state.firstname}
            onChange={this.update('firstname')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Last Name:
          <input type="text"
            value={this.state.lastname}
            onChange={this.update('lastname')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
        <br/>
        <label>Profile Picture Url:
          <input type="text"
            value={this.state.pro_pic_url}
            onChange={this.update('pro_pic_url')}
            className="login-input"
          />
        </label>
        <br/>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
        <h2>A place to share knowledge and better understand the world</h2>
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            {this.signupFields()}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
