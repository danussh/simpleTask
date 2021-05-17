import React,{useState} from "react";
import { useHistory } from "react-router-dom";

const Createdata = () => {
  const history = useHistory();
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [email, setemail] = useState("")
  const [data,setdata]=useState([])
   
  const submit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/',
      state: {firstName:fname,lastName:lname,emailAddress:email}
    });
  };
  return (
    <div className="container">
        <div className="col-12">
        <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setfname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setlname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </div>
    </div>
  );
};

export default Createdata;
