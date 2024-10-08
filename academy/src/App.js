import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <form className="row g-3">
        <div className="col-7">
          <label htmlFor="name">Name</label><br />
          <input type="text" placeholder="First name" />
        </div>
        <div className="col-7">
          <label htmlFor="staticEmail2">Email</label>
          <input type="text" id="staticEmail2" placeholder="john@example.com" />
        </div>
        <div className="col-7">
          <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
          <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
        </div>
        <div>
          <br />
          <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
        </div>
      </form>
    </div>
  );
}

export default App;
