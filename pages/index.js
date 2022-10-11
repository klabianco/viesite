import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FernNavbar from "../components/FernNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

import adFern from '../public/i/ad-fern.png';
import adDragons from '../public/i/dragon-drawings.png';
import vieDaisy from '../public/i/vie-daisy.jpg';

export default function Home() {
  const pageTitle = "Vienna's Web";

  return (
    <div style={{backgroundImage: "url(/i/bg-home.jpg)"}}>
      <Header title={pageTitle} />
      <FernNavbar />
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
          <Link href="/fern-leopard-books">
            <a>
            <Image
              src={adFern}
              alt="Fern And The Toucan Village"
            />
            </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-md-8">
          <Link href="/dragon-drawings">
            <a>
            <Image
              src={adDragons}
              alt="Dragon Drawings"
            />
            </a>
            </Link>
          </Col>
          <Col className="col-md-4 position-relative text-light">
            <div className="text-center">
            <h2 className="mb-3">About Vienna</h2>
          <Link href="/about">
            <a>
            <Image
              src={vieDaisy}
              layout="responsive"
              className="rounded-circle"
              style={{borderColor: 'blue', borderWidth: '25px'}}
            />
            </a>
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
