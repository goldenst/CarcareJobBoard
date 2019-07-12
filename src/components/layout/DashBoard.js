import React from "react";
import Jobs from "../jobs/Jobs";
import SideBar from "../layout/SideBar";

export default function DashBoard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Jobs />
      </div>
      <div className="col-md-2">
        <SideBar />
      </div>
    </div>
  );
}
