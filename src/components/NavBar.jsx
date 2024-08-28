import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="Header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mailboxes">MailBoxes</Link>
          </li>
          <li>
            <Link to="/new-mailbox">New MailBox</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
