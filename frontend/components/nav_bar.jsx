import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user} = this.props
    return(
      <div className="nav-bar">
        <ul className="nav-bar-items">
          <li>Quera</li>

          <li>
            <Link to={`/`} activeClassName="active">Home</Link>
          </li>

          <li>
            <Link to={`/questions`} activeClassName="active">Answer</Link>
          </li>

          <li>

            <textarea className="question-search-bar" rows="1" placeholder="Search Quera" onChange={()=>{console.log("u is typing")}}></textarea>
            </li>


          <li><button onClick={()=>{console.log("Clicked ask question")}}>Ask Question</button></li>


            <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="nav-pro-pic" />

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
