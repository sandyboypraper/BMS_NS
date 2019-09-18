import React from "react";
import MyInput from "./MyInput";

function InputHandler(props) {
  const selectedTags = tags => {
    console.log(tags);
  };

  const passed = e => {
    props.delete(e);
  };

  return (
    <div className="App">
      <MyInput selectedTags={selectedTags} delete={e => passed(e)} />
    </div>
  );
}

export default InputHandler;
