import React from "react";
import { Form } from "react-bootstrap";

const InputCustom = ({ handleInputChange, text }) => {
  return (
    <div>
      <Form.Label className="text-white">{text}</Form.Label>
      <Form.Control
        type="email"
        placeholder="name@example.com"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputCustom;
