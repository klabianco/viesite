import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from '../components/FernNavbar';

export default function Home() {
  const pageTitle = "Fern The Leopard Book Series";

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <Row className="text-center">
          <h2>{pageTitle}</h2>
          <Col>
          <iframe type="text/html" sandbox="allow-scripts allow-same-origin allow-popups" width="336" height="550" frameBorder={0} allowFullScreen src="https://read.amazon.com/kp/card?asin=B0B7GCX7RL&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_A3W4DC0F4RKFN6A7ATW3" ></iframe>
          </Col>
          <Col>
          <p className="text-center">My love of books led me to making my own book, &quot;Fern And The Toucan Village.&quot;  It&apos;s about a leopard named Fern who is princess of the rainforest, and she saves the Toucan Village from a wizard.  My one book led me to thinking that most of my books were a series, so I decided to make a Fern the Leopard Book Series.  Each book has 11 chapters and 3 main characters: Fern the Leopard, Bella the Mouse, and Tsunami the Purrmaid.  Purrmaids are half cat, half fish animals and live in any type of water.  Tsunami is a river purrmaid that lives in the Amazon River.  Tsunami&apos;s fourth best friend is Marsh the Caiman. A caiman is like an alligator, except fiercer and stronger, and lives in the Amazon.  Fern has a cousin named Flower who is about an inch tall, but still a leopard.  Flower lives in a field and calls the field Flower&apos;s Field.  Her meadow is filled with different kinds of flowers and an occasional baby tree.  Her house is inside a toadstool underneath some pieces of grass that she wove together.  In addition to being Fern&apos;s cousin, she is also Fern&apos;s best friend.  All of these characters help fern in her quests as she journeys through the rainforest righting all the wrongs.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}