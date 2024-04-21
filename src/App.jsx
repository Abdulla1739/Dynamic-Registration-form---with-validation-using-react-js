import { useState } from "react";
import "./App.css";
import { Stack } from "@mui/material";
import logo from "./assets/logo.png";
import BButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [fullName, setfullName] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Date, setDate] = useState(null);
  const [gender, setGender] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [isFullnameInvalid, setIsFullnameInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isMobileInvalid, setIsmobileInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputValidationName = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(false);
      }
    } else {
      if (name == "fullName") {
        setfullName(value);
        setIsFullnameInvalid(true);
      }
    }
  };

  const handleInputValidationAddress = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^[A-Za-z\d\s,()-.]*$/)) {
      if (name == "Address") {
        setAddress(value);
        setIsAddressInvalid(false);
      }
    } else {
      if (name == "Address") {
        setAddress(value);
        setIsAddressInvalid(true);
      }
    }
  };

  const handleInputValidationnumber = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^\d{10,}$/)) {
      if (name == "mobile") {
        setMobile(value);
        setIsmobileInvalid(false);
      }
    } else {
      if (name == "mobile") {
        setMobile(value);
        setIsmobileInvalid(true);
      }
    }
  };

  const handleInputValidationEmail = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      if (name == "Email") {
        setEmail(value);
        setIsEmailInvalid(false);
      }
    } else {
      if (name == "Email") {
        setEmail(value);
        setIsEmailInvalid(true);
      }
    }
  };

  const handleDate = (date) => {
    setDate(date);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCourseChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCourses(selectedOptions);
  };
  const handleReset = () => {
    setfullName("");
    setAddress("");
    setMobile("");
    setEmail("");
    setDate(null);
    setGender("");
    setSelectedCourses([]);
    setIsFullnameInvalid(false);
    setIsAddressInvalid(false);
    setIsmobileInvalid(false);
    setIsEmailInvalid(false);
  };
  const FormNotCompleted = (!gender || !Date || selectedCourses.length === 0);

  return (
    <div className=" py-1">
      <div></div>
      <div className="row">
        <div className="col"></div>
        <div className="col-10 ">
          <div className="container  shadow border rounded">
            <div>
              <img className="w-25" src={logo} alt="banner" />
            </div>
            <h4 className="text-center pt-1 pb-1 text-primary-emphasis fw-bolder fs-4">
              STUDENT REGISTRATION PORTAL
            </h4>

            <div className="row px-1 pb-3">
              <div className="col-lg-6 ">
                <form>
                  <div>
                    <label for="FullName" className="form-label ">
                      * Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={fullName || ""}
                      style={{ textTransform: "capitalize" }}
                      className="form-control"
                      onChange={(e) => handleInputValidationName(e.target)}
                      id="FullName"
                    />
                  </div>
                  {isFullnameInvalid && (
                    <small className="form-text text-primary">
                      Please Enter a Valid Name!!!
                    </small>
                  )}
                  <div>
                    <label for="Address" className="form-label mt-2">
                      * Full Address
                    </label>
                    <textarea
                      className="form-control"
                      name="Address"
                      value={Address || ""}
                      onChange={(e) => handleInputValidationAddress(e.target)}
                      id="Address"
                      rows="1"
                    ></textarea>
                  </div>
                  {isAddressInvalid && (
                    <small className="form-text text-primary">
                      Please Enter a Valid Address!!!
                    </small>
                  )}
                  <div>
                    <label for="Mobile" className="form-label mt-2">
                      * Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="Mobile"
                      name="mobile"
                      value={Mobile || ""}
                      onChange={(e) => handleInputValidationnumber(e.target)}
                    />
                  </div>
                  {isMobileInvalid && (
                    <small className="form-text text-primary">
                      Please Enter a Valid Mobile Number!!!
                    </small>
                  )}

                  <div>
                    <label for="Email" className="form-label mt-2 ">
                      * Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      name="Email"
                      value={Email || ""}
                      onChange={(e) => handleInputValidationEmail(e.target)}
                    />
                  </div>
                  {isEmailInvalid && (
                    <small className="form-text text-primary">
                      Please Enter a Valid Email Id!!!
                    </small>
                  )}
                </form>
              </div>

              <div className="col-lg-6">
                <form>
                  <div>
                    <label htmlFor="DOB" className="form-label mt-2 mt-lg-0">
                      * Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="DOB"
                      value={Date || ""}
                      onChange={(e) => handleDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="form-label mt-2">* Gender</label>
                    <div className="d-flex">
                      <div className="form-check me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Male"
                          id="male"
                          checked={gender === "Male"}
                          onChange={handleGenderChange}
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="Female"
                          checked={gender === "Female"}
                          onChange={handleGenderChange}
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="artificial"
                          value="Artificial"
                          checked={gender === "Artificial"}
                          onChange={handleGenderChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="artificial"
                        >
                          Artificial
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Courses" className="form-label mt-2">
                      * Courses
                    </label>
                    <select
                      multiple=""
                      className="form-select"
                      id="Courses"
                      value={selectedCourses || ""}
                      onChange={handleCourseChange}
                    >
                      <option value="">Choose a Course</option>
                      <option value="Biology">Biology</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Humanities">Humanities</option>
                    </select>
                  </div>
                  <Stack direction="column" spacing={2} className="mt-3">
                    <BButton
                      disabled={
                        isAddressInvalid ||
                        isEmailInvalid ||
                        isFullnameInvalid ||
                        isMobileInvalid ||
                        FormNotCompleted
                      }
                      style={{ width: "100%", height: "70px" }}
                      className="bg-info rounded-5"
                      variant="contained"
                      onClick={handleShow}
                    >
                      Register
                    </BButton>
                    <BButton
                      type="button"
                      className="btn btn-primary rounded-5"
                      style={{ width: "100%", height: "70px" }}
                      variant="outlined"
                      onClick={handleReset}
                    >
                      Reset
                    </BButton>
                  </Stack>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="bg-black"
      >
        <Modal.Header closeButton>
          <Modal.Title>Please below Data!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-2">
          <p className="pt-1">
            Full Name: <span className="text-danger">{fullName}</span>
          </p>
          <p className="pt-1">
            Full Address: <span className="text-danger">{Address}</span>
          </p>
          <p className="pt-1">
            Mobile No: <span className="text-danger">{Mobile}</span>
          </p>
          <p className="pt-1">
            Email Id: <span className="text-danger">{Email}</span>
          </p>
          <p className="pt-1">
            DOB: <span className="text-danger">{Date}</span>
          </p>
          <p className="pt-1">
            Gender: <span className="text-danger">{gender}</span>
          </p>
          <p className="pt-1">
            Course: <span className="text-danger">{selectedCourses}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <BButton variant="secondary" onClick={handleClose}>
            Edit
          </BButton>
          <BButton
            onClick={() => {
              handleClose();
              handleReset();
              alert(
                "Initial registration Completed and Will get back to you soon \n Welcome to Humber"
              );
            }}
            variant="primary"
          >
            Confirm
          </BButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
