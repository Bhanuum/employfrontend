import React from "react";
import { Row, Col, Card, CardBody, FormGroup, Button, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const FormValidations = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <AvForm>
                  <FormGroup>
                    <Label for="objective1">Objective 1</Label>
                    <AvField
                      type="textarea"
                      name="objective1"
                      id="objective1"
                      placeholder="Enter Objective 1"
                      errorMessage="Objective 1 is required"
                      validate={{ required: { value: true } }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="objective2">Objective 2</Label>
                    <AvField
                      type="textarea"
                      name="objective2"
                      id="objective2"
                      placeholder="Enter Objective 2"
                      errorMessage="Objective 2 is required"
                      validate={{ required: { value: true } }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="objective3">Objective 3</Label>
                    <AvField
                      type="textarea"
                      name="objective3"
                      id="objective3"
                      placeholder="Enter Objective 3"
                      errorMessage="Objective 3 is required"
                      validate={{ required: { value: true } }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="objective4">Objective 4</Label>
                    <AvField
                      type="textarea"
                      name="objective4"
                      id="objective4"
                      placeholder="Enter Objective 4"
                      errorMessage="Objective 4 is required"
                      validate={{ required: { value: true } }}
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

export default FormValidations;
