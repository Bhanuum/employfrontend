import React from "react";
import { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, FormGroup, Button, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";
 const axiosAPI = axios.create();
const AppraisalForm = () => {
    const [data,setData] = useState({
        objective1:'',
        objective2:'',
        objective3:'',
        objective4:''
      })
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log("ss")
        
        axiosAPI.post('http://localhost:4000/appraisalform copy', data).then((res)=>console.log(res.data)).catch((er) => {
          console.log(er);
        })
    }
    
       
    
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <AvForm
                    className="form-horizontal"                      
                    onSubmit={handlesubmit}
                >
                  <FormGroup>
                    <Label for="objective1">Objective 1</Label>
                    <AvField
                      type="text"
                      name="objective1"
                      id="objective1"
                      placeholder="Enter Objective 1"
                      errorMessage="Objective 1 is required"
                      value={data.objective1}
                      onChange={(e)=>setData({...data,objective1:e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="objective2">Objective 2</Label>
                    <AvField
                      type="text"
                      name="objective2"
                      id="objective2"
                      placeholder="Enter Objective 2"
                      errorMessage="Objective 2 is required"
                      value={data.objective2}
                      onChange={(e)=>setData({...data,objective2:e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="objective3">Objective 3</Label>
                    <AvField
                      type="text"
                      name="objective3"
                      id="objective3"
                      placeholder="Enter Objective 3"
                      errorMessage="Objective 3 is required"
                      value={data.objective3}
                      onChange={(e)=>setData({...data,objective3:e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="objective4">Objective 4</Label>
                    <AvField
                      type="text"
                      name="objective4"
                      id="objective4"
                      placeholder="Enter Objective 4"
                      errorMessage="Objective 4 is required"
                      value={data.objective4}
                      onChange={(e)=>setData({...data,objective4:e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div>
                      <Button type="submit" color="primary" className="ms-1">
                        Submit
                      </Button>{" "}
                      <Button type="reset" color="secondary">
                        Cancel
                      </Button>
                    </div>
                  </FormGroup>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AppraisalForm;