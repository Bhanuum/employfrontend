import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from "axios";

const axiosAPI = axios.create();

const OperationTeamForm = () => {
  const [data, setData] = useState({
    objective1: '',
    objective2: '',
    objective3: '',
    objective4: '',
    objective5: '',
  });
  let users = JSON.parse(localStorage.getItem("authUser") || "[]").user;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    data.userempid = users.empid
    data.username = users.name
    data.userrole = users.role
    console.log(data);
    axiosAPI.post('http://localhost:4000/operationteams', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="h4">OperationTeam Appraisal Form</CardTitle>
                <form onSubmit={handleFormSubmit}>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective1"
                      className="col-md-2 col-form-label"
                    >
                      Check the trainee disciplinary activities while coming and leaving classes
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective1"
                        name="objective1"
                        value={data.objective1}
                        onChange={(e) =>
                          setData({ ...data, objective1: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective2"
                      className="col-md-2 col-form-label"
                    >
                     Work closely with Operations Manager
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective2"
                        name="objective2"
                        value={data.objective2}
                        onChange={(e) =>
                          setData({ ...data, objective2: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective3"
                      className="col-md-2 col-form-label"
                    >
                      Finish the daily tasks assigned by Lead and Manager
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective3"
                        name="objective3"
                        value={data.objective3}
                        onChange={(e) =>
                          setData({ ...data, objective3: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective4"
                      className="col-md-2 col-form-label"
                    >
                    Submit the daily report of activities to Manager
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective4"
                        name="objective4"
                        value={data.objective4}
                        onChange={(e) =>
                          setData({ ...data, objective4: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective5"
                      className="col-md-2 col-form-label"
                    >
                    Track and manage assets and office premises
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective5"
                        name="objective5"
                        value={data.objective5}
                        onChange={(e) =>
                          setData({ ...data, objective5: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <div className="col-md-10">
                      <button
                        className="btn btn-success"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default OperationTeamForm;