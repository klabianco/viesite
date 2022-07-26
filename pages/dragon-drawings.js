import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FernNavbar from "../components/FernNavbar";
import Header from '../components/Header'
import Footer from "../components/Footer";

export default function Home() {
  const pageTitle = "Dragon Drawings";

  return (
    <>
      <Header title={pageTitle} />
    <FernNavbar />

      <Container>
      <h1>{pageTitle}</h1>
      <hr />
      <Col className="mb-3">
          <p>The Wings of Fire Books led me to thinking, &quot;Hey, what if I tried to draw some dragons?&quot;  I started by just tracing the covers of the books with tracing paper, and then after I had traced them, took pictures of them on an app called <a href="https://procreate.art/" target="_blank" rel="noreferrer noopener">Procreate</a> and traced them on the iPad.  Then I colored them in, and added backgrounds.  Sometimes, I even made dragon eggs in the pictures.</p>
          <a href="https://opensea.io/collection/96dragons" target="_blank" className="btn btn-primary form-control" rel="noreferrer noopener">View The Full Collection</a>
          </Col>
      <h2 className="text-center">There are seven different types of dragons:</h2>

        <Row>
          <Col>
          <h4>Rainwings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936918685421142017">
          <img
            src="https://lh3.googleusercontent.com/XC-OZVxQVKlWrdxE93_JsZP3zc4TENgAJY6JDBAXgZy2zRuvI6xHKxy6m9qE8r_qP0sRDPsBcJBdzQFUvoNwfyy1ppJl0L3-02TaSA=w600"
            className="img-fluid"
          />
        </a>
        <br />
        My favorite out of the dragons are Rainwings because they can spit a deadly venom and camouflage their scales.  They live in the rainforest and most of the other tribes think they are lazy.
          </Col>
          <Col>
          <h4>Sandwings</h4>
                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936909889328119809">
              <img
                src="https://lh3.googleusercontent.com/1pgLRFPH5C8cjxigZndPl7TF-UkyyjgSWiq2GSCJln_da75B9yCcsVTRnGjs2BDwd4nhs77tHx1dgF5IGAnmjlXK09ZpGxljRbMxr9c=w600"
                className="img-fluid"
              />
            </a>
            My second favorite are probably Sandwings since they have a deadly venemous tailbarb like a scorpion.  Their scales are the color of sand since they live in the desert.
          </Col>
          <Col>
          <h4>Nightwings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936916486397886465">
          <img
            src="https://lh3.googleusercontent.com/tfydDegoZYlBscyyCZM5zdVgrnUR2Ier0N42Ak9oTjynqo7K6uQY1bXKDTIJ_h40BiL4T66U4p6ZZ6qREEcewmcVN4a0dQgmAsIH=w600"
            className="img-fluid"
          />
          </a>
        Nightwings can live anywhere and those who are born under one full moon either have mind-reading or prophecy powers, and those under two moons have both.  Some say that those born under three moons also have amuse powers, which is a power to enchant objects.  Others say the third moon just makes the other two powers stronger.
          </Col>
        </Row>
        <Row>
          <Col>
          <h4>Icewings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936915386886258689">
          <img
            src="https://lh3.googleusercontent.com/djtLxo8tInL1RtcHcF7C6wZe8ADl7Q5ixzSoCkNL6iU6Sb-Y0NR3IK1_1qyZ3rqxwDSi7J4AeBODOvOKrcaEyUYwIAJC6B8PENDyAA=w600"
            className="img-fluid"
          />
        </a>
        Icewings live in the arctic and have sharp icicles sticking out of their back, a deadly frost-breathe, and snow-colored scales. Also three words:  They. Hate. Nightwings.
          </Col>
          <Col>
          <h4>Mudwings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936908789816492033">
          <img
            src="https://lh3.googleusercontent.com/rp2Q7aEodWJtGBDJctkIX6DcCvBW3rAsmeE8A33fpDeHXjVzpPAN4F_-06yQG_a_h4Ifkqt46e4XiBnDBndAR0cueoLhNQAuEIYO3A=w600"
            className="img-fluid"
          />
        </a>
        Mudwings have dual brownish, grayish, greenish scales, and their homes are the mudswamps.  Unlike the other tribes, Mudwings that are born from eggs the color of dragonblood are fireproof.  They live in groups and rely on each other to keep each other safe, unlike Skywings who sometimes even kill their brothers and sisters.
          </Col>
          <Col>
          <h4>Skywings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936906590793236481">
          <img
            src="https://lh3.googleusercontent.com/185p3OjdqH-rvE-iCaHVn3hDhxm8UvskRjzD18-geSnGqNUAczMXVSe6Bt4heG3jLIWQwQqKYOhgrYKdsFwrlxrsjCvY7D-gLGM4ug=w600"
            className="img-fluid"
          />
        </a>
        All the dragons scales match their environment except the Skywings.  Skywings are the most powerful tribe because they can breathe fire for longer than any other dragon, fly at top speeds, and have excellent eyesight.  The only thing about them is that their scales are bright red, just the thing to attract attention, even if they&apos;re coming from a mile away in the sky.
          </Col>
          <Col>
          <h4>Seawings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936910988839747585">
          <img
            src="https://lh3.googleusercontent.com/PRpPprsVK6Zv56LS-5A0JlYPn28kWeGDF4qP3iNcyXQSCRSNyqk8siJ7hwcwaB0-zFWiI62gdmi5yxScfXNBrKQswnr9x7glFDdUqQ=w600"
            className="img-fluid"
          />
        </a>
        Seawings have glow in the dark aquamarine scales.  You can probably guess where they live and what color their scales are.  They can see in the dark and breathe under water.
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}