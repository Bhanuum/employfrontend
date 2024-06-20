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

const DevopsAppraisalForm = () => {
  const [data, setData] = useState({
    objective1: '',
    objective2: '',
    objective3: '',
    objective4: '',
    objective5: '',
    objective6: '',
    objective7: '',
    objective8: '',
    objective9: '',
    objective10: ''
  });
  let users = JSON.parse(localStorage.getItem("authUser") || "[]").user;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    data.userempid = users.empid
    data.username = users.name
    data.userrole = users.role
    console.log(data);
    axiosAPI.post('http://localhost:4000/devopss', data)
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
                <CardTitle className="h4">Devops Trainer Appraisal Form</CardTitle>
                <form onSubmit={handleFormSubmit}>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective1"
                      className="col-md-2 col-form-label"
                    >
                      DevOps trainings delivery
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
                      Strong knowledge on DevOps major tools
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
                      Knowledge of DevOps integration into multi cloud
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
                    Authorized & Certified instructor
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
                    Project identification, implementation and support
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
                    <label
                      htmlFor="objective6"
                      className="col-md-2 col-form-label"
                    >
                    Technology integration into development and office related activitie
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective6"
                        name="objective6"
                        value={data.objective6}
                        onChange={(e) =>
                          setData({ ...data, objective6: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective7"
                      className="col-md-2 col-form-label"
                    >
                    Cross domain trainings and technology integration
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective7"
                        name="objective7"
                        value={data.objective7}
                        onChange={(e) =>
                          setData({ ...data, objective7: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective8"
                      className="col-md-2 col-form-label"
                    >
                    Online technology related events and participation
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective8"
                        name="objective8"
                        value={data.objective8}
                        onChange={(e) =>
                          setData({ ...data, objective8: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective9"
                      className="col-md-2 col-form-label"
                    >
                    Master classes
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective9"
                        name="objective9"
                        value={data.objective9}
                        onChange={(e) =>
                          setData({ ...data, objective9: e.target.value })
                        }
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective10"
                      className="col-md-2 col-form-label"
                    >
                    Skill upgrade session to new learners
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        id="objective10"
                        name="objective10"
                        value={data.objective10}
                        onChange={(e) =>
                          setData({ ...data, objective10: e.target.value })
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

export default DevopsAppraisalForm;