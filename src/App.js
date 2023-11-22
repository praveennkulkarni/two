// import React from "react";
// import Api from "./Componets/Api";
// import City from "./Componets/City";
// import Form from "./Componets/Form";
// import Nav from "./Componets/Nav";

// function App() {
//   return (
//     <div>
//       {/* <Nav /> */}
//       <Api />
//       {/* <Form /> */}
//       {/* <City /> */}
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  let [arr, setArr] = useState([]);
  let [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((a) => setArr(a.data))
      .catch((err) => console.log(err));
  }, []);

  let handle = (arr) => {
    setUser({ user: arr });
  };
  return (
    <div className="col-sm-card sm-6">
      <div className="card-body bg-info text-white h-50">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((a) => {
              return (
                <tr>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.phone}</td>
                  <td>
                    <button
                      onClick={() => handle(a)}
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <table>
            <thead>
              {" "}
              <tr>
                <th>Id</th>
                <th>Street</th>
                <th>Suit</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.user.id}</td>
                <td>{user.user.address.street}</td>
                <td>{user.user.address.suite}</td>
                <td>{user.user.address.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
