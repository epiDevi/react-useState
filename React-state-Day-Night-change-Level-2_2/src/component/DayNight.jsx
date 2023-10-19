import { useState } from "react";
import "./DayNight.css";
const DayNight = () => {
  const [day, setDay] = useState(false);
  const [btnText, setBtnText] = useState("Change to Night");

  const setDarkmode = () => {
    console.log(day);
    setDay((day) => !day);
    console.log(day);
    if (day) {
      setBtnText("Change to Night");
    } else {
      setBtnText("Change to Day");
    }
  };
  return (
    <>
      <section className={day ? "dark" : ""}>
        <h1>Day</h1>
        <button onClick={setDarkmode}>{btnText}</button>
      </section>
    </>
  );
};

export default DayNight;
