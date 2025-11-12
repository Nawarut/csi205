import { Card, Row, Col, Image } from "react-bootstrap";
import profilePic from "./images/Profile.jpg";

const Home = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">HOME PAGE</h2>

      <Card className="p-4 shadow-lg">
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Image
              src={profilePic}
              roundedCircle
              fluid
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
              alt="Profile"
            />
          </Col>
          <Col md={8}>
            <h4 className="fw-bold">รหัสนักศึกษา: 67158250</h4>
            <h4 className="fw-bold">ชื่อ-สกุล:ณวรุตม์ อินมีศรี</h4>
            <h5>
              ชั้นปี: 2 สาขา: สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมซอฟต์แวร์ 
              คณะ: เทคโนโลยีสารสนเทศ  มหาวิทยาลัย: มหาวิทยาลัยศรีปทุม
            </h5>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
