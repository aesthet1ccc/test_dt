import React from "react";
import axios from "axios";

// import Tooltip from "./components/Tooltip";

function Table_body({
  firstName,
  lastName,
  email,
  age,
  website,
  numberPhone,
  address,
}) {
  return (
    <tbody className="table_body">
      <tb>
        {firstName} {lastName}
      </tb>
      <tb>{email}</tb>
      <tb>{age}</tb>
      <tb>{website}</tb>
      <tb>{address}</tb>
      <tb>{numberPhone}</tb>
    </tbody>
  );
}

export default Table_body;
