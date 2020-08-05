import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMessages } from "./chatSlice";

export function MessageWindow() {
  const messages = useSelector(selectMessages);
  let messagesEnd;

  useEffect(() => {
    scrollToBottom();
  })

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div id="messages">
      <div className="row mb-2">
        {messages.map(message => {
          return (
            <div
              key={message.id}
              className="column col-md-10 mt-2 mb-2 ml-4 shadow-sm p-3 text-black bg-white rounded"
            >
              <div className="col">
                <p>
                  <strong>{message.from}</strong>
                </p>
              </div>
              <div className="col text-break">Message: {message.message}</div>
              <div className="col">
                <p className="text-muted">
                  {new Date(message.time).toLocaleTimeString()}
                </p>
              </div>
            </div>
          );
        })}{" "}
      </div>
      <div
        ref={(e) => {
          messagesEnd = e;
        }}
      ></div>
    </div>
  );
}
