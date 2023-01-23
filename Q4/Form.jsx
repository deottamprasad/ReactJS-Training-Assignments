import React from "react";

//So, this is a stateless component Form, as it doesn't have any state variables used to store the values of different input fields or for any other purpose.


function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
