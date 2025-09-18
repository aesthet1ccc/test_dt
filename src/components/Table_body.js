function Table_body(props) {
  console.log(props);
  return (
    <tbody className="table_body">
      <tb>{props.firstName}</tb>
      <tb>{props.email}</tb>
      <tb>{props.age}</tb>
      <tb>{props.website}</tb>
      <tb>{props.address}</tb>
      <tb>{props.phoneNumber}</tb>
    </tbody>
  );
}

export default Table_body;
