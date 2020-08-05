import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername, selectUsername } from "./chatSlice";

import {
  Link 
} from "react-router-dom";

export function Entry() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const setUsername = (event) => {
    dispatch(updateUsername(event.target.value));
  };

  useEffect(() => {
    Notification.requestPermission();
    });

  return (
    <React.Fragment>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          className="col-md-4 shadow-sm p-4 m-4 bg-white rounded"
          align="center"
        >
          <label>
            <h3>Join</h3>
          </label>
          <input
            value={username}
            onChange={setUsername}
            type="text"
            className="form-control"
            placeholder="username"
          />

          <Link to="/Chat" className="btn btn-primary mt-4" role="button">Go to Chat!</Link>
        </div>
      </div>
    </React.Fragment>
  );
}
