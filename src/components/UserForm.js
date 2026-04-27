import React from "react";

const UserForm = () => {
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <div className="w-50 shadow-lg p-3 m-auto mt-5 rounded">
      <form action="">
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              className="form-select"
              id="autoSizingSelect"
              required
              defaultValue=""
              onChange={handleOnchange}
            >
              <option value="">Choose...</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User name"
              aria-label="User name"
              required
              onChange={handleOnchange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
