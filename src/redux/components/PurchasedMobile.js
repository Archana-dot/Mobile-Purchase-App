import { Button } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import Mobile from "./Mobile";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { cloneDeep } from "lodash";
import { UpdatePurchaseDetails } from "../redux/action/Purchase";
import { UpdateMobileDetails } from "../redux/action/Mobile";

function PurchasedMobile(props) {
  const [showReturn, setShowReturn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const returnToMobile = () => {
    let copyMobileArr = cloneDeep(props.mobile);
    let copyPurchaseArr = cloneDeep(props.purchase);
    copyPurchaseArr[currentIndex].count =
      copyPurchaseArr[currentIndex].count - 1;
    props.UpdatePurchaseDetails(copyPurchaseArr);

    props.purchase.forEach((item, index) => {
      if (item.model === props.mobile[currentIndex].model) {
        copyMobileArr[index].count = copyMobileArr[index].count + 1;
        props.UpdateMobileDetails(copyMobileArr);
      }
    });
    setShowReturn(false);
  };
  return (
    <div>
      <Modal show={showReturn} onHide={() => setShowReturn(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to return</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => {
              returnToMobile(true);
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
            <th>ModelName</th>
            <th>Price</th>
            <th>Color</th>
            <th>Count</th>
            <th> Operation</th>
          </tr>
        </thead>
        <tbody>
          {props.purchase.map((item, index) => {
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
                      setShowReturn(true);
                      setCurrentIndex(index);
                    }}
                  >
                    return
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
// const mapDispatchToProps = {
//   UpdatePurchaseDetails,
//   UpdateMobileDetails,
// };

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedMobile);
