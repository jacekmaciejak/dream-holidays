import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { FeaturedRooms: rooms } = this.context;
    return (
      <div>
        Hello from featured rooms
        <Loading />
      </div>
    );
  }
}