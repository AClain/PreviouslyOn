import React, { useState } from "react";

import { IconButton, Grid } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import api from "../../assets/js/api";

import "./css/friend.css";

export default function Friend(props) {

  const [toggle, setToggle] = useState(true);

  const addFriend = (friendId) => {
    api
      .addFriend(friendId)
      .then((res) => {
        setToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {toggle ? (
        <Grid item xs={2} className="friend-box">
          <h5>{props.friend.login}</h5>
          <IconButton
            onClick={() => {
              addFriend(props.friend.id);
            }}
          >
            <PersonAddIcon />
          </IconButton>
        </Grid>
      ) : (null)}
    </>
  );
}
