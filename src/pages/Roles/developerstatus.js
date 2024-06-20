import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import axios from "axios";

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../Tables/datatables.scss";

const axiosAPI = axios.create();

const DeveloperStatus = () => {
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
      const response = await axiosAPI.get("http://localhost:4000/getdeveloperdatas");
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
        localStorage.setItem(row.userempid, JSON.stringify({ rating, feedback }));
        return { ...row, rating: rating, feedback: feedback };
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
      { label: "Work on development projects", field: "objective1", sort: "asc", width: 200 },
      { label: "Follow defined development standards", field: "objective2", sort: "asc", width: 200 },
      { label: "Manage code repository and CI/CD", field: "objective3", sort: "asc", width: 200 },
      { label: "Implement new features", field: "objective4", sort: "asc", width: 200 },
      { label: "Understand database and security", field: "objective5", sort: "asc", width: 200 },
      { label: "Troubleshoot issues", field: "objective6", sort: "asc", width: 200 },
      { label: "Conduct testing and maintain environments", field: "objective7", sort: "asc", width: 200 },
      { label: "Deliver trainings", field: "objective8", sort: "asc", width: 200 },
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
        feedback: storedData.feedback ? storedData.feedback : ""
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
              <label htmlFor="rating">Developer Rating</label>
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
              <label htmlFor="feedback">Developer Feedback</label>
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

export default DeveloperStatus;