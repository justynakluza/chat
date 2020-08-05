import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMessagesText,
  submitMessage,
  updateMessageText,
  selectUsername,
} from "./chatSlice";

export function ChatForm(props) {
  const messageText = useSelector(selectMessagesText);
  const username = useSelector(selectUsername);


  const dispatch = useDispatch();


  const handleChange = event => {
    dispatch(updateMessageText(event.target.value));
  };

  const onSubmit = () => {
    const message = { from: username, message: messageText };
    props.ws.send(JSON.stringify(message));
    dispatch(submitMessage());
  };



  return (
    <div className="input-group mt-3 mb-3">
      <input
        value={messageText}
        onChange={handleChange}
        id="input-text"
        type="text"
        className="form-control"
      />
      <span className="input-group-btn">
        <button onClick={onSubmit} className="btn btn-primary" type="button">
          Send
        </button>
      </span>
    </div>
  );
}
