import { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [plus, setPlus] = useState(false);
  const [btn, setBtn] = useState("+");
  const btnText = () => {
    setPlus((plus) => !plus);
    if (plus) {
      setBtn("-");
    } else {
      setBtn("+");
    }
  };

  return (
    <>
      <main>
        <section className="flex">
          <div className="question flex">
            <p>Why is React great?</p>
            <button onClick={btnText}>{btn}</button>
          </div>
          <div className={plus ? "answer" : "none"}>
            <p>Fast Learning Curve</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;
