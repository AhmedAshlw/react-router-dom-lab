import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

const initialState = [
  { _id: 1, boxSize: "Small", boxholder: "Ali" },
  { _id: 2, boxSize: "Medium", boxholder: "Jaffer" },
  { _id: 3, boxSize: "Medium", boxholder: "Ahmed" },
  { _id: 4, boxSize: "Large", boxholder: "Sajad" },
  { _id: 5, boxSize: "Small", boxholder: "Hasan" },
];

const App = () => {
  const [boxMail, setBoxMail] = useState(initialState);

  const handleAddMailBox = async (newMailBox) => {
    try {
      newMailBox._id = boxMail.length + 1;
      setBoxMail([...boxMail, newMailBox]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList boxMail={boxMail} />} />
        <Route
          path="/new-mailbox"
          element={<MailboxForm handleAddMailBox={handleAddMailBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails boxMail={boxMail} />}
        />
      </Routes>
    </>
  );
};

export default App;
