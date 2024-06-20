import React, { useEffect, useState } from "react";
import { Row, Col, Card, Alert, Container } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-sm-dark.png";
import axios from "axios";

const axiosAPI = axios.create();

const Register = props => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  }, []);
  const [data,setData] = useState({
    empid:'',
    name:'',
    email:'',
    role:'',
    password:''
  })
   const handlesubmit =(e)=>{
        e.preventDefault();
        
        axiosAPI.post('http://localhost:4000/register', data).then((res)=>console.log(res.data))
    }

    useEffect(()=>{
      console.log(data)
    },[data])

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20"> Register</h5>
                    {/* <p className="text-white-50 mb-0">
                      Get your free Qovex account now
                    </p> */}
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"                      
                      onSubmit={handlesubmit}
                    >
                         <div className="mb-3">
                        <AvField
                          id="empid"
                          name="empid"
                          label="Employee Id"
                          className="form-control"
                          placeholder="Enter employee id"
                          type="text"
                          required
                          value={data.empid}
                          onChange={(e)=>setData({...data,empid:e.target.value})}
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="name"
                          label="Name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={data.name}
                          onChange={(e)=>setData({...data,name:e.target.value})}
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                          value={data.email}
                          onChange={(e)=>setData({...data,email:e.target.value})}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select
                          id="role"
                          name="role"
                          className="form-select"
                          required
                          value={data.role}
                          onChange={(e)=>setData({...data,role:e.target.value})}
                        >
                          <option value="">Select a role</option>
                          <option value="admin">Super Admin</option>
                          <option value="manager">Manager</option>
                          <option value="teamlead">Team lead</option>
                          <option value="developer">Developer</option>
                          <option value="supportteam">Support team</option>
                          <option value="trainer">Trainer</option>
                          <option value="pegatrainer">pegatrainer</option>
                          <option value="devopstrainer">devopsTrainer</option>
                          <option value="cloudtrainer">cloudTrainer</option>
                          <option value="networkadministrator">networkadministrator</option>
                          <option value="operationteam">Operation team</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                          value={data.password}
                          onChange={(e)=>setData({...data,password:e.target.value})}
                        />
                      </div>

                      <div className="mt-4">
                        <button 
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;