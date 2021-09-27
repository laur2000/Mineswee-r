import Container from "../../components/Container";
import { Button, Col, Row, Typography } from "antd";
import { useTitle } from "../../utils/fn";
import { Link } from "@reach/router";
import { Path } from "../Router/routes";
import { CSSProperties } from "react";

const { Title } = Typography;

const buttonStyle: CSSProperties = {
  width: "100%",
  marginBottom: "10px",
};

const Index = () => {
  useTitle("Minesweeper");
  return (
    <Container>
      <Title>Menu</Title>
      <Row>
        <Col span={24}>
          <Link to={Path.GAME} style={buttonStyle}>
            <Button style={buttonStyle}>Play</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Link to={Path.SETTINGS} style={buttonStyle}>
            <Button style={buttonStyle}>Settings</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Link to={Path.HIGHSCORE} style={buttonStyle}>
            <Button style={buttonStyle}>Highscore</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
