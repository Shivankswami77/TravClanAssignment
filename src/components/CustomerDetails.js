import React, { useFocusEffect, useCallback, useState } from "react";
import PageHeader from "./PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

const CustomerDetails = (props) => {
  // const [state, setState] = useState(window.sessionStorage.getItem("bids"));

  //   console.log(state, "state");
  return (
    <>
      <PageHeader
        title="User Bid"
        subTitle="TravClan Assignment"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      {/* <h1> {window.sessionStorage.getItem("bids")}</h1> */}
    </>
  );
};

export default CustomerDetails;
