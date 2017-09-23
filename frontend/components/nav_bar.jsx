import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="nav-bar">
        <ul className="nav-bar-items">
          <li>Quera</li>

          <li><Link to={`/`} activeClassName="active">Home</Link>
</li>

          <li><button onClick={()=>{console.log("Clicked Aanswer")}}>Answer</button></li>
          <li><input onChange={()=>{console.log("u is typing")}}/></li>
          <li><button onClick={()=>{console.log("Clicked ask question")}}>Ask Question</button></li>
          <li>
            <form name="sign-out" method="POST" action="/users/sign_out">
              <input type="hidden" name="_method" value="delete"/>
              <label>
                <input name="submit2" type="submit" id="submit2" value="Sign out" />
              </label>
            </form>

            </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
