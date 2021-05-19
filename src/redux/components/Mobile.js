import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Button, ButtonToolbar, Form, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { connect } from "react-redux";
import { cloneDeep } from "lodash";
import "../App.css";
import { Modal } from "react-bootstrap";
import { UpdatePurchaseDetails } from "../redux/action/Purchase";
import { UpdateMobileDetails } from "../redux/action/Mobile";

function Mobile(props) {
  const [addPopup, setaddPopup] = useState(false);
  let addPopupClose = () => setaddPopup({ addPopupShow: false });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mobileData, setMobileData] = useState([]);
  const [mobileBrand, setMobileBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [count, setCount] = useState(0);
  const [showPurchase, setShowPurchase] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const submitMobile = (e) => {
    let obj = {
      mobileBrand: mobileBrand,
      model: model,
      price: price,
      color: color,
      count: count,
    };

    let arr = Object.assign([], props.mobile);
    arr.push(obj);
    setMobileData(arr);
    props.UpdateMobileDetails(arr);
    setaddPopup(false);
  };
  const submitPurchase = () => {
    let copyMobileArr = cloneDeep(props.mobile);
    let copyPurchaseArr = cloneDeep(props.purchase);

    let check = false;
    let gotIndex = null;

    props.purchase.forEach((item, index) => {
      if (item.model === props.mobile[currentIndex].model) {
        check = true;
        gotIndex = index;
      }
    });

    if (check) {
      copyPurchaseArr[gotIndex].count = copyPurchaseArr[gotIndex].count + 1;
      props.UpdatePurchaseDetails(copyPurchaseArr);
    } else {
      copyMobileArr[currentIndex].count = 1;
      props.UpdatePurchaseDetails([
        ...props.purchase,
        copyMobileArr[currentIndex],
      ]);
    }

    if (props.mobile[currentIndex].count > 0) {
      props.mobile[currentIndex].count = props.mobile[currentIndex].count - 1;
      props.UpdateMobileDetails(props.mobile);
    }

    setShowPurchase(false);
  };

  return (
    <div className="App">
      <Modal show={addPopup} onHide={() => setaddPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Mobile data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Mobile brand</Form.Label>
              <Form.Control
                onChange={(e) => setMobileBrand(e.target.value)}
                type="text"
                placeholder="Enter mobile brand"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Mobile name</Form.Label>
              <Form.Control
                onChange={(e) => setModel(e.target.value)}
                type="text"
                placeholde="Enter mobile name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter price</Form.Label>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Enter price"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter color</Form.Label>
              <Form.Control
                onChange={(e) => setColor(e.target.value)}
                type="text"
                placeholder="Enter color"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter count </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setCount(parseInt(e.target.value));
                }}
                type="number"
                placeholder="Enter count"
              />
            </Form.Group>
            <Button variant="primary" onClick={(e) => submitMobile(e)}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      
      <div className="body">
        <div class="content">
          <button
            type="button"
            class="btn btn-primary pull-right"
            id="right-panel-link"
            href="#right-panel"
            onClick={() => setaddPopup(true)}
          >
            Add
          </button>
          <div>
            <div
              range-slider
              floor="0"
              ceiling="19"
              dragstop="true"
              ng-model-low="lowerValue"
              ng-model-high="upperValue"
            ></div>
          </div>
        </div>

        <Modal show={showPurchase} onHide={() => setShowPurchase(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Do you want to purchase</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => {
                submitPurchase(true);
                setShowPurchase(false);
              }}
            >
              yes
            </Button>
          </Modal.Footer>
        </Modal>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Mobile Brand</th>
              <th>Model Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Count</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {props.mobile.map((item, index) => {
              return (
                
                <tr key={index}> 
                {console.log('purchase',props.purchase)}
                {console.log('mobile',props.mobile)}
                  <td>{item.mobileBrand}</td>
                  <td>{item.model}</td>
                  <td>{item.price}</td>
                  <td>{item.color}</td>
                  <td>{item.count}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setShowPurchase(true);
                        setCurrentIndex(index);
                      }}
                      disabled={item.count === 0 ? true : false}
                    >
                      Purchase
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    purchase: state.purchase.purchase,
    mobile: state.mobile.mobile,
  };
};
const mapDispatchToProps = (dispatch) =>{
    
    return{
    UpdatePurchaseDetails: (s) => { dispatch(UpdatePurchaseDetails(s)) },
    UpdateMobileDetails: (s) => { dispatch(UpdateMobileDetails(s)) },
}
   };
export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
