// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Api = () => {
//   let [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((a) => setProduct(a.data))
//       .catch((err) => console.log(err));
//   });

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {product.map((a) => {
//             return (
//               <tr key={a.id}>
//                 <td>{a.name}</td>
//                 <td>{a.email}</td>
//                 <td>{a.phone}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Api;

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Api = () => {
  let [user, setUser] = useState([]);
  let [arr, setArr] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((a) => setUser(a.data))
      .catch((err) => console.log(err));
  }, []);

  let handle = () => {
    setArr({ arr: user });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((a) => {
            return (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.phone}</td>
                <td>
                  <button
                    onClick={() => handle(a)}
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    ViewDetail
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
            <tr>
              <th>ID</th>
              <th>Street</th>
              <th>suit</th>
              <th>city</th>
            </tr>
          </thead>
          <tr>{console.log(arr.arr.address)}</tr>
        </table>
      </div>
    </div>
  );
};

export default Api;
