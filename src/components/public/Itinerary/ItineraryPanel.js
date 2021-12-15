import { useState } from "react";
export default function ItineraryPanel(props) {
  const [showBody, setPanel] = useState("accordion");
  function activate() {
    showBody == "accordion"
      ? setPanel("accordion active")
      : setPanel("accordion");
  }
  return (
    <>
      <button className={showBody} onClick={activate}>
        {props.titulo}
      </button>
      <div className="panel" style={{ padding: "8px" }}>
        <p>{props.description}</p>
      </div>
    </>
  );
}
