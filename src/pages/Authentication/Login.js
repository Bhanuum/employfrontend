import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import { Row, Col, Alert, Container } from "reactstrap";
import { connect } from "react-redux";
import { withRouter, Link, useHistory } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { loginUser, apiError } from "../../store/actions";
import logo from "../../assets/images/logo-sm-dark.png";
import axios from "axios";
const axiosAPI = axios.create();

const Login = (props) => {
  const [data, setData] = useState({
    empid: '',
    password: ''
  });

  const history = useHistory();

  useEffect(() => {
    document.body.className = "authentication-bg";
    return function cleanup() {
      document.body.className = "";
    };
  }, []);

  const handleValidSubmit = (event, values) => {
    event.preventDefault();
    const { empid, password } = values;
    const formData = { empid, password };

    axiosAPI.post('http://localhost:4000/login', formData)
      .then(response => {
        console.log(response.data)
        localStorage.setItem('authUser',JSON.stringify(response.data))
        history.push('/dashboard'); // Navigate to the dashboard page
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle login error
        props.apiError("Login failed. Please check your credentials and try again.");
      });
  };

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back!</h5>
                    {/* <p className="text-white-50 mb-0">Sign in to continue to Qovex.</p> */}
                    <Link to="" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={handleValidSubmit}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}
                      <div className="mb-3">
                        <AvField
                          name="empid"
                          label="Employee Id"
                          value={data.empid}
                          className="form-control"
                          placeholder="Enter employee id"
                          type="text"
                          required
                          onChange={(e) => setData({ ...data, empid: e.target.value })}
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          value={data.password}
                          type="password"
                          required
                          placeholder="Enter Password"
                          onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted"><i
                          className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>Don't have an account? <Link to="/register" className="fw-medium text-primary">Sign up now</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  const { error } = state.Login;
  return { error };
}

Login.propTypes = {
  error: PropTypes.any,
  apiError: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, { loginUser, apiError })(Login));