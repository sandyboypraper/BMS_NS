import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";

function ShowDB(props) {
  const Listii = props.numbers.map(temp => {
    return <span key={temp + Math.random()}> {temp} , </span>;
  });

  return (
    <div className="ShowDB">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.numbers.length == 0
              ? "DataBase is Empty"
              : "Available Numbers in DataBase"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Listii}
          <br />
          <input
            type="number"
            placeholder="add Numbers"
            onKeyDown={event => {
              if (event.key === "Enter" && event.target.value != "") {
                props.addnumber(event.target.value);
                event.target.value = "";
              }
            }}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowDB;
