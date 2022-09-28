import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FernNavbar from "../components/FernNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

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
              src="/i/ad-fern.png"
              alt="Fern And The Toucan Village"
              width="1140"
              height="300"
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
              src="/i/dragon-drawings.png"
              alt="Dragon Drawings"
              width="800"
              height="450"
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
              src="/i/vie-daisy.jpg"
              layout="responsive"
              width="483"
              height="644"
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
