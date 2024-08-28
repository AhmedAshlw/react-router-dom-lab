import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  <h1>MailboxForm</h1>;

  const [mailData, setMailData] = useState({ holder: "", size: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddMailBox(mailData);
    navigate("/mailboxes");
  };

  return (
    <main>
      <h3>Add BoxMail</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="holder">Box Holder:</label>
          <input
            type="text"
            id="holder"
            value={mailData.holder}
            name="holder"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            value={mailData.size}
            name="size"
            onChange={handleChange}
            form="sizeform"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default MailboxForm;
