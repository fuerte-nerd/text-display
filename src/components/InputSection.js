import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateInput, updateText } from "../redux/actions";

import { Button, FormGroup, Input } from "reactstrap";

function InputSection(props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleFocus = e => {
    e.target.select();
  };
  const handleChange = e => {
    if(props.value.length < 24){
      props.dispatch(updateInput(e.target.value));
    }
  };

  const handleClick = e => {
    if (props.value) {
      props.dispatch(updateText(props.value)).then(() => {
        props.dispatch(updateInput("")).then(() => {
          document.getElementById("input-field").focus();
        });
      });
    }
  };

  useEffect(() => {
    if (!props.value) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [props.value]);

  return (
    <div>
      <FormGroup>
        <Input
          type="text"
          style={{
            textAlign: 'center'
          }}
          onChange={handleChange}
          onKeyPress={e => (e.key === "Enter" ? handleClick() : null)}
          onFocus={handleFocus}
          id="input-field"
          value={props.value}
          placeholder="Type something here..."
          autoComplete="off"
        />
      </FormGroup>
      <Button
        color="primary"
        onClick={handleClick}
        style={{ textTransform: "uppercase" }}
        id="submit-button"
        disabled={isDisabled}
      >
        Update
      </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    value: state.input.inputText
  };
};

export default connect(mapStateToProps)(InputSection);
