import "../components/legal.css";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ques from "../images/questionmark.png";
import lawyer from "../images/lawyer.png";
import hire from "../images/hire.png";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage,faPhone, faUserCheck } from "@fortawesome/free-solid-svg-icons";

function Legal() {
  return (
    <>
      {/* <div className="navBar border-bottom border-2 border-dark">
        <Navbar>
          <Navbar.Brand href="/home">
            <img
              src={enliven}
              height="40"
              className="d-inline-block ms-5 me-5"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Container>
            <Navbar.Brand>HOME</Navbar.Brand>
          </Container>
          <Container>
            <Navbar.Brand>NGOs</Navbar.Brand>
          </Container>
          <Container>
            <Navbar.Brand>LEGAL ADVICE</Navbar.Brand>
          </Container>
          <Container>
            <Navbar.Brand>BLOGS</Navbar.Brand>
          </Container>
          <Container>
            <ButtonGroup aria-label="Basic example">
              <Button
                size="lg"
                variant="warning nav-btn"
                className="border-end border-dark"
              >
                DONATE
              </Button>
              <Button
                size="lg"
                variant="warning nav-btn"
                className=" border-dark border-start"
              >
                NGOs
              </Button>
            </ButtonGroup>
          </Container>
        </Navbar>
      </div> */}
      <div className="page-heading bg-dark bg-gradient text-light pt-4 pb-4 container-fluid">
        <h1 className="legalAd ps-5">LEGAL ADVICE.</h1>
      </div>
      <div className="latestAns border rounded-5 border-dark mt-5 ms-5 me-5">
        <div className="heading-latest mt-4 ms-4">
          <h3 className="text-decoration-underline">Latest Answers:</h3>
        </div>
        <div className="content-latest-top mt-4 ms-4">
          <Row>
            <Col lg>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Col>
            <Col lg>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Col>
            <Col lg>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Col>
          </Row>
          <Row className="mt-3 mb-4">
            <Col lg>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Col>
            <Col lg>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Col>
            <Col lg>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Col>
          </Row>
        </div>
      </div>
      <div className="cardsBtn mt-5 mb-5 d-flex justify-content-around">
        <Card className="rounded-5 text-white cardBtn1">
          <Card.Img src={ques} alt="Card image" className="img-cardBtn1" />
          <Card.ImgOverlay>
            <Card.Title className="text-center mt-5 fs-2">
              Ask a Question.
            </Card.Title>
            <Card.Text className="text-center mt-5">
              Get legal answers from lawyers.
            </Card.Text>
            <Card.Text className="text-center">
              It's quick, easy and anonymous!
            </Card.Text>
            <div className="text-center mt-4">
              <Button variant="warning ps-5 pe-5 button-card1">
              <FontAwesomeIcon icon={faMessage} className="user-icon me-3" />
                Ask a Question
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="rounded-5 text-white cardBtn1">
          <Card.Img src={lawyer} alt="Card image" className="img-cardBtn1" />
          <Card.ImgOverlay>
            <Card.Title className="text-center mt-5 fs-2">
              Talk to a Lawyer.
            </Card.Title>
            <Card.Text className="text-center mt-5">
              Personally talk to a lawyer
            </Card.Text>
            <Card.Text className="text-center">
              about your problems.
            </Card.Text>
            <div className="text-center mt-4">
              <Button variant="warning ps-5 pe-5 button-card1">
              <FontAwesomeIcon icon={faPhone} className="user-icon me-3" />
                Talk to a Lawyer
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="rounded-5 text-white cardBtn1">
          <Card.Img src={hire} alt="Card image" className="img-cardBtn1" />
          <Card.ImgOverlay>
            <Card.Title className="text-center mt-5 fs-2">
              Hire a Lawyer.
            </Card.Title>
            <Card.Text className="text-center mt-5">
              Get your own Lawyer for help.
            </Card.Text>
            <Card.Text className="text-center">
              Top Lawyers are here to hrlp you.
            </Card.Text>
            <div className="text-center mt-4">
              <Button variant="warning ps-5 pe-5 button-card1">
              <FontAwesomeIcon icon={faUserCheck} className="user-icon me-3" />
                Hire a Lawyer
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default Legal;
