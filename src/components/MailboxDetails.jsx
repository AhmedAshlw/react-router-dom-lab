import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  <h1>MailboxDetails</h1>;
  const { mailboxId } = useParams();

  const selectedBox = props.boxMail.find((mail) => {
    return mail._id === Number(mailboxId);
  });

  return (
    <>
      <h2>{selectedBox.holder}</h2>
      <h2>{selectedBox.size}</h2>
    </>
  );
};

export default MailboxDetails;
