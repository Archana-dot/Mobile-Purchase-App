import React from 'react'
import { useState} from 'react'
import { Modal, Button } from "react-bootstrap";
function Popup(props) {
  const [mobileBrand, setMobileBrand] = useState("")
  const [model, setModel] = useState("")
  const [price, setPrice] = useState("")
  const [color, setColor] = useState("")
  const [count, setCount] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const brandchangehandler = e => {
    setMobileBrand(e.target.value)
  }
  const modelchangehandler = e => {
    setModel(e.target.value)
  }
  const pricechangehandler = e => {
    setPrice(e.target.value)
  }
  const colorchangehandler = e => {
    setColor(e.target.value)
  }
  const countchangehandler = e => {
    setCount(e.target.value)
  }
  return (
    <div>
      <Modal show={props.show} onHide={ ()=>props.onClick(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form >
          <div className="form-group">
            <label htmlFor="name">mobile brand</label>
            <input className="form-control" id="name" />
    onChange={(e) => brandchangehandler(e)}
          value={mobileBrand}
          </div>

          <div className="form-group">
            <label htmlFor="name">mobile model</label>
            <input className="form-control" id="name" />
        onChange={(e) => modelchangehandler(e)}
          value={model}
          </div>
          <div className="form-group">
            <label htmlFor="name">mobile price</label>
            <input className="form-control" id="name" />
        onChange={(e) => pricechangehandler(e)}
          value={price}
          </div>
          <div className="form-group">
            <label htmlFor="name">mobile color</label>
            <input className="form-control" id="name" />
        onChange={(e) => colorchangehandler(e)}
          value={color}
          </div>
          <div className="form-group">
            <label htmlFor="name">Enter count</label>
            <input className="form-control" id="name" />
        onChange={(e) => countchangehandler(e)}
          value={count}
          </div>
          <div className="form-group">
            <button className="form-control btn btn-primary" type="submit">
              Submit
    </button>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Popup
