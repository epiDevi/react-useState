import { useState } from "react";
import "./inputsComponent.css";
const Inputs = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <main className="flex">
        <section className="container ">
          <form action="">
            <input
              type="text"
              id="vorname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
            <input
              type="text"
              id="nachname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </form>
          <section id="output">
            <p>Vorname: {firstname} </p>
            <p>Nachname: {lastname}</p>
            <p>Email: {email}</p>
          </section>
        </section>
      </main>
    </>
  );
};

export default Inputs;
