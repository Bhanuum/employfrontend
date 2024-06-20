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

const TrainerForm = () => {
  const [data, setData] = useState({
    objective1: '',
    objective2: '',
    objective3: '',
    objective4: '',
    objective5: '',
    objective6: '',
    objective7: '',
  });
  let users = JSON.parse(localStorage.getItem("authUser") || "[]").user;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    data.userempid = users.empid
    data.username = users.name
    data.userrole = users.role
    console.log(data);
    axiosAPI.post('http://localhost:4000/trainerdatas', data)
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
                <CardTitle className="h4">Trainer Appraisal Form</CardTitle>
                <form onSubmit={handleFormSubmit}>
                  <Row className="mb-3">
                    <label
                      htmlFor="objective1"
                      className="col-md-2 col-form-label"
                    >
                      Ability to speak effectively
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
                    Maintain related training equipment/database and records

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
                 Analyse current training program objectives, delivery methods, standards and adopt accordingly.
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
               Remain updated in best practices that needs assessment, learning programs effectiveness, initiatives, and delivery systems
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
                    Ability of conducting training in virtual environments using web-based training, webinars, and video teleconferencing courses
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
                    Collaborate with Program Managers, leads and fellow colleagues to develop strategies and plans
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
                    Should upskill actively with new and emerging technologies that helps training and development in company
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

export default TrainerForm;