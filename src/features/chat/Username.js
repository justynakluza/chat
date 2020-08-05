import React from "react";
import { useSelector } from "react-redux";

import {
  selectUsername,
} from "./chatSlice";

export function Username() {

  const username = useSelector(selectUsername);

  return(
    <h4>Hello, {username}</h4>
  )
}
