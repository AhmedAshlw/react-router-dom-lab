import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h1>MailboxList</h1>
      <ul>
        {props.boxMail.map((currentboxMail, idx) => {
          return (
            <li key={idx}>
              <Link to={`/mailboxes/${currentboxMail._id}`}>
                {currentboxMail.holder}
                {currentboxMail.size}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
