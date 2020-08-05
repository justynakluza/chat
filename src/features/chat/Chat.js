import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { MessageWindow } from "./MessageWindow";
import { ChatForm } from "./ChatForm";
import { Username } from "./Username";

import { updateMessages } from "./chatSlice";

const URL = "ws://st-chat.shas.tel";

export function Chat() {

  const ws = useRef(new WebSocket(URL));

  const dispatch = useDispatch();

  useEffect(() => {
    ws.current.onopen = () => {
      console.log("connected");
    };

    ws.current.onmessage = event => dispatch(updateMessages(JSON.parse(event.data)));

    ws.current.onclose = function(e) {
      console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
      setTimeout(function() {
        ws.current = new WebSocket(URL);
      }, 1000);
    };
  
    ws.current.onerror = function(err) {
      console.error('Socket encountered error: ', err.message, 'Closing socket');
      ws.current.close();
    };
  });


  return (
    <React.Fragment>
      <div className="container mt-4">
        <h1>Chat Room</h1>
        <div className="row">
          <div className="col-md-12 mt-4 mb-4">
            <Username/>
          </div>
        </div>
        <div className="mt-4">
          <div className="message-window col-md-12 scroll-div">
            <MessageWindow />
          </div>
          <form>
            <ChatForm ws={ws.current} />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
