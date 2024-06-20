import React, { useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios";
 const axiosAPI = axios.create();

const Appraisalform = () => {
  const [customchk, setcustomchk] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)

  const [data,setData] = useState({
    objective1:'',
    objective2:'',
    objective3:'',
    objective4:''
  })
  let users = JSON.parse(localStorage.getItem("authUser") || "[]").user;
console.log(users)
const handlesubmit = (e)=>{
    e.preventDefault();
    console.log("ss")
    data.userempid = users.empid
    data.username = users.name
    data.userrole = users.role
    axiosAPI.post('http://localhost:4000/appraisalform', data).then((res)=>console.log(res.data)).catch((er) => {
      console.log(er);
    })
}

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="h4">Appraisal Form</CardTitle>
                
              <form onSubmit={handlesubmit}>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Objective 1
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="objective1"
                      value={data.objective1}
                      onChange={(e)=>setData({...data,objective1:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Objective 2
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="objective2"
                      value={data.objective2}
                      onChange={(e)=>setData({...data,objective2:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Objective 3
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="objective3"
                      value={data.objective3}
                      onChange={(e)=>setData({...data,objective3:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Objective 4
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="objective4"
                      value={data.objective4}
                      onChange={(e)=>setData({...data,objective4:e.target.value})}
                    />
                  </div>
                </Row>

                <Row className="mb-3">
                  
                  <div className="col-md-10">
                    <input
                      className=" btn btn-success"
                      type="submit"
                      name="submit"
                    />
                  </div>
                </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        

        

        


      </div>
    </React.Fragment>
  )
}

export default Appraisalform
