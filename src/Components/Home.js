import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        //  console.log(props.location.state);
        if(props.location.state){
          myJson.users.push(props.location.state)

         // console.log(myJson.users)

          setData(myJson.users);
         
        }else{
          setData(myJson.users);
        }
       
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-fluid ">
      <div className="text-center">
        <button
          className="btn bg-info "
          onClick={() => history.push("/create")}
        >
          Add Data
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.emailAddress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
