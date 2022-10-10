import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FernNavbar from "../components/FernNavbar";
import Header from '../components/Header'
import Footer from "../components/Footer";
import Link from "next/link";
import NewsLetterSignUpForm from "../components/NewsletterSignupForm";
import fernHeader from '../public/i/fern-page-header.jpg';

export default function Home() {
  const pageTitle = "Fern The Leopard Books";

  return (
    <>
     <Header title={pageTitle} />
    <FernNavbar />
      <Container>
      <h1>{pageTitle}</h1>
          <hr />
          <Row className="mb-3">
            <Col>
            <Image
              src={fernHeader}
              alt="Fern!"
            />
            </Col>
          </Row>
        <Row className="mb-3">
          <Col>
          Fern, a lovable leopard, is the Princess of the Amazon Rainforest.  She journeys through the jungle on magical quests to right all the wrongs, collecting artifacts as she goes.  Fern is joined by her two best friends that help her accomplish these missions: Bella (a smart gray mouse) and Tsunami (a purrmaid - half cat, half fish.)
          </Col>
          <Col className="col-12 col-md-3">
          <a href="#map" className='btn btn-primary form-control mb-2'>See Fern&apos;s Coloring Map</a>
          <a href="#poem" className='btn btn-primary form-control'>Read Fern&apos;s Poem</a>
          </Col>
          </Row>
        <Row>

          <Col className="col-12 col-md-6">
          <h2 className="text-center">Book 1</h2>
          <iframe type="text/html" className="mb=3" sandbox="allow-scripts allow-same-origin allow-popups" width="100%" height="550" frameBorder={0} allowFullScreen src="https://read.amazon.com/kp/card?asin=B0B7GCX7RL&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_A3W4DC0F4RKFN6A7ATW3" ></iframe>
          <p className="text-justify">A leopard named Fern meets a magical meerkat fairy and receives a quest. She must rescue the Toucan Village, which a wizard has cursed high above the jungle. Fern finds clues like an Emerald Leaf used for teleportation and meets Bella the mouse during her investigation. Exploring castles, avoiding hunters and enjoying tea with her mother are just some of the adventures that solidify the friendship between these young heros. With an old friend, Marsh the cayman, they finally find unlikely help from a purrmaid water spirit, Tsunami, to trap the wizard and reverse his curse using magic and teamwork. The Toucan Village is saved just in time for Fern’s eleventh birthday party. The friends bake a cake and celebrate with a sleepover.</p>
          </Col>

          <Col className="col-12 col-md-6">
          <div className="text-center">
          <h2>Book 2</h2>
          <div className="mb-5">
          <Image
              src="/i/cover-monkeys.jpg"
              alt="Fern And The Monkeys"
              width="313"
              height="500"
            />
            </div>
            <h3><strong>Coming November 25, 2022</strong><br /><small>(Black Friday)</small></h3>
            More details to be announced soon...
            {/*
            <NewsLetterSignUpForm />
            */}
            
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col id="map" className="text-center col-6">
            <h2>Fern&apos;s Coloring Map</h2>
            <Link href="/pdf/coloring-map.pdf">
            <a>
            <Image
              src="/i/coloring-map.jpg"
              alt="Fern's Coloring Maps"
              width="540"
              height="417"
            />
            </a>
            </Link>
            <div>
            <a className="btn btn-success" href="/pdf/coloring-map.pdf"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-pdf" viewBox="0 0 16 16">
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
  <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
</svg> Download PDF of Map</a>
            </div>
          </Col>
          <Col id="poem" className="col-6 text-center">
            <h2 className="text-center">Fern&apos;s Poem</h2>
            <Link href="/pdf/fern-and-her-friends.pdf">
            <a>
            <Image
              src="/i/fern-and-her-friends-preview.jpg"
              alt="Fern And Her Friends"
              width="313"
              height="417"
            />
            </a>
            </Link>
            <div>
            <a className="btn btn-success" href="/pdf/fern-and-her-friends.pdf"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-pdf" viewBox="0 0 16 16">
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
  <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
</svg> Download PDF of Poem </a>
            </div>
            </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}