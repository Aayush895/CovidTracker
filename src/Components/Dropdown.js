import "../CSS/Dropdown.css";
const Dropdown = (props) => {
  return (
    <div className="dropdown text-center">
      <div className="row justify-content-center">
        <div className="form-group col-md-6 ">
          <label className="dropdown-header mt-4">Covid Tracker</label>
          <select
            name="country"
            className="form-control mt-5 drop-down"
            onChange={props.generateCountry}
          >
            <option>--Select Country--</option>
            {props.countryValue.map((data) => (
              <option>{data}</option>
            ))}
          </select>
          {/* <label className="mb-2">State</label>
            <select name="states" className="form-control" onChange={props.generateState}>
              <option>--Select State--</option>
              {props.stateValue.map((states) => (
                <option>{states}</option>
              ))}
            </select> */}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
