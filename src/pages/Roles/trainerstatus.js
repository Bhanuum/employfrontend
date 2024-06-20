import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import axios from "axios";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";

const axiosAPI = axios.create();

const TrainerStatus = () => {
  const [tableData, setTableData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosAPI.get("http://localhost:4000/gettrainerdatas");
      if (response.status === 200) {
        setTableData(response.data.users);
      } else {
        console.error("Failed to fetch data from the server");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleModal = (row) => {
    setSelectedRow(row);
    setModal(!modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTableData = tableData.map((row) => {
      if (row.userempid === selectedRow.userempid) {
        const newData = { rating, feedback };
        localStorage.setItem(row.userempid, JSON.stringify(newData));
        return { ...row, ...newData };
      }
      return row;
    });
    setTableData(updatedTableData);
    setModal(false);
  };

  const data = {
    columns: [
      { label: "Employee ID", field: "userempid", sort: "asc", width: 150 },
      { label: "Name", field: "username", sort: "asc", width: 200 },
      { label: "Role", field: "userrole", sort: "asc", width: 150 },
      { label: "Ability to speak effectively", field: "objective1", sort: "asc", width: 200 },
      { label: "Maintain related training equipment/database and records", field: "objective2", sort: "asc", width: 200 },
      { label: "Analyse current training program objectives, delivery methods, standards and adopt accordingly", field: "objective3", sort: "asc", width: 200 },
      { label: "Remain updated in best practices that needs assessment, learning programs effectiveness, initiatives, and delivery systems", field: "objective4", sort: "asc", width: 200 },
      { label: "Ability of conducting training in virtual environments using web-based training, webinars, and video teleconferencing courses", field: "objective5", sort: "asc", width: 200 },
      { label: "Collaborate with Program Managers, leads and fellow colleagues to develop strategies and plans", field: "objective6", sort: "asc", width: 200 },
      { label: "Should upskill actively with new and emerging technologies that helps training and development in company", field: "objective7", sort: "asc", width: 200 },
      { label: "Rating", field: "rating", sort: "asc", width: 100 },
      { label: "Feedback", field: "feedback", sort: "asc", width: 200 },
    ],
    rows: tableData.map((row) => {
      const storedData = JSON.parse(localStorage.getItem(row.userempid)) || {};
      return {
        ...row,
        rating: storedData.rating ? storedData.rating : (
          <Button color="primary" onClick={() => toggleModal(row)}>
            Rate
          </Button>
        ),
        feedback: storedData.feedback || ""
      };
    }),
  };

  return (
    <div className="page-content">
      <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <MDBDataTable responsive striped bordered data={data} noBottomColumns />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Rate {selectedRow && selectedRow.username}</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                className="form-control"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback</label>
              <textarea
                className="form-control"
                id="feedback"
                rows="3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
            </div>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TrainerStatus;
