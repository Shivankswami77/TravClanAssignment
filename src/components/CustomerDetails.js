import React from "react";

const CustomerDetails = (props) => {
  return (
    <div>
      Customer Details Page
      {console.log(props.item, "previous")}
    </div>
  );
};

export default CustomerDetails;
