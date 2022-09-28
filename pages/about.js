import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FernNavbar from "../components/FernNavbar";
import Header from '../components/Header'
import Footer from "../components/Footer";

export default function Home() {
  const pageTitle = "About Vienna";
  const fernLink = "/fern-leopard-books";

  return (
    <>
      <Header title={pageTitle} />
    <FernNavbar />

    <Container>
    <h1>About Vienna</h1>
    <hr />
    <Row className="mb-3">
    <h2>Fern The Leopard</h2>
    <p>
    My love of books led me to making my own book, <a
              href="https://www.amazon.com/Vienna-Labianca/dp/B0B7Q3DX9C/ref=sr_1_1?crid=25OB6S3SJHEPV&keywords=fern+and+the+toucan+village&qid=1664314109&qu=eyJxc2MiOiIwLjAwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=fern+and+the+toucan%2Caps%2C449&sr=8-1"
              target="_blank"
              rel="noreferrer noopener"
            >Fern And The Toucan Village</a>. It&apos;s about a leopard named Fern who is princess of the rainforest, and she saves the Toucan Village from a wizard. My one book led me to thinking that most of my books were a series, so I decided to make the&nbsp;
            <a href={fernLink}>Fern the Leopard Book Series</a>.
    </p>
    <Col>
    <a href={fernLink} className="btn btn-primary form-control">Explore Fern The Leopard Books</a>
    </Col>
    </Row>
    <Row className="mb-3">
          <h2>Reading</h2>
          <p>
            I started reading when I was four, featuring one of my favorite
            early-readers chapter books,&nbsp;
            <a
              href="https://www.amazon.com/s?k=the+princess+in+black&sprefix=the+princess+in+black%2Caps%2C350&ref=nb_sb_ss_ts-doa-p_1_21"
              target="_blank"
              rel="noreferrer noopener"
            >
              The Princess In Black
            </a>
            . After I read all of those books, I started reading&nbsp;
            <a
              href="https://www.amazon.com/s?k=danny+dragonbreath&crid=3SXS9SWXDV5K4&sprefix=danny+dragonbreath%2Caps%2C130&ref=nb_sb_noss_1"
              target="_blank"
              rel="noreferrer noopener"
            >
              Dragonbreath
            </a>
            , and once I was finished with those, I started reading books from
            what has become my favorite series:&nbsp;
            <a
              href="https://www.amazon.com/s?k=wings+of+fire&sprefix=wings+of+f%2Caps%2C701&ref=nb_sb_ss_ts-doa-p_1_10"
              target="_blank"
              rel="noreferrer noopener"
            >
              Wings of Fire
            </a>
            ! I started by just reading the graphic novels, but they hadn&apos;t put
            out the fifth graphic novel yet, so I started reading the novels
            just because my friend convinced me. I&apos;m still reading them today...
            there are fifteen books in the series, not including the graphic
            novels. My favorite book out of the series was probably the book&nbsp;
            <a
              href="https://www.amazon.com/Wings-Fire-Book-Six-Rising-ebook/dp/B00KRN1WKC/ref=sr_1_1?keywords=wings+of+fire+moon+rising&qid=1658337743&sprefix=wings+of+fire+moon+%2Caps%2C138&sr=8-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              Moon Rising
            </a> which was about a young Nightwing who had prophecy and mind-reading
            powers.
          </p>
          <Col>
            <a href="https://www.amazon.com/s?k=princess+in+black&sprefix=princess+in+bla%2Caps%2C299&ref=nb_sb_ss_ts-doa-p_1_15">
              <img
                src="https://m.media-amazon.com/images/P/B0721L8V5J.01._SCLZZZZZZZ_SX500_.jpg"
                className="img-fluid"
              />
            </a>
          </Col>
          <Col>
          <a href="https://www.amazon.com/s?k=danny+dragonbreath&sprefix=danny+dragon%2Caps%2C141&ref=nb_sb_ss_ts-doa-p_2_12">
          <img
            src="https://m.media-amazon.com/images/P/0142420956.01._SCLZZZZZZZ_SX500_.jpg"
            className="img-fluid"
          />
        </a>
          </Col>
          <Col>
            <a href="https://www.amazon.com/s?k=wings+of+fire&sprefix=wings+of+f%2Caps%2C701&ref=nb_sb_ss_ts-doa-p_1_10">
              <img
                src="https://m.media-amazon.com/images/I/51PNh0IkhlL.jpg"
                className="img-fluid"
              />
            </a>
          </Col>
        </Row>
        <Row className="mb-3">
          <h2>Climbing</h2>
          <p>
            I started tree climbing when I was four and now I do it almost every
            day. It&apos;s become one of my favorite things to do in the wild. These
            are some pictures of me climbing in my favorite park,{" "}
            <a
              href="https://www.alltrails.com/trail/us/california/temescal-canyon-loop-trail"
              target="_blank"
              rel="noreferrer noopener"
            >
              Temescal Canyon
            </a>
            . My mom started a play-group called &quot;Forest School&quot; and we go every
            Wednesday. The parents take turns teaching stuff, but recently my
            mom and I have been the only ones that are doing crafts. One of my
            friends, Maya, moved away only 5 years after she had joined.
          </p>
          <Col>
            <img
              src="https://lh3.googleusercontent.com/lEujovyCm8SfQqMGBgghvAmqAABd1aEzL9MZHAhW0-TAp2KybObox-B9_i_terBJClhxNVPKxtDE0yg0FgggkLWL_1U9OzRroIZGNnWMQtaAf7eDLid3-JQov5A62bltnUosoKXm5lz4MMU05HLBte9EU6CQ4u8yjoET2Ywfb-IEkpYtOyEUNEFZYtfZAH2imZ9T6ImqPRXqg7nx2vbwVIMscYXkPx7ywMbbeQeibJ6kn-_vm0Y6_Afn1Q3hs0LKBca9ujC-yiLcsWdSOEKl3mxZn8spl4BUAf7S2T5bHo4Xdn0yLv6LNcdavakmFLF-HARIPO0oZA_8iEFEMaPMlhNH1zOJ1pxYiyMvWFYdt8Wh_zja8kTbb0OON_i97m0eZihBuHcRJqXOyMGSzTdzT39qqLnNTCEWGboCfPUkOc8mwWnElkT4M2_DWcLB66VYPGPhlZ2LVjUj-b2wX7jPyXIx-84eDDN2_coB8CjSYJjTCkPQEZipamgFxNFp3NMvcgPCD10vyY8rn_t56L1C4o4Cttsup918_Ki88hM6k0lyzZiaC5uEnAWWSqWO5vtE3-2VYqXF54-7js7wRBBxuFwYJhAeqqvidQXBeYGr9TSFRL1pdkJhRnZ58hx2Osxq3vlj_8ukaxZIowNzClwBZ1Wz-sWRoY1_7q4rl3KiNMdhbjZf7UXsq3OpptJyJwarPT190olfaE4sJKCokS9kH_q1xnmKo0e2Sy54spb9WkxDG1aDgs6U2eImADCSmV2LxxSqA4eIXfu1fYRnAA86TiMma5Vg9RgVmul72S-AV0VY5L86tPnhGwnxiRnCk7pY36NnMq9SOfdAODi5Kc_u1z6olIn1vl30wyctTl758ak=w386-h686-no?authuser=3"
              className="img-fluid"
            />
          </Col>
          <Col>
            <img
              src="https://lh3.googleusercontent.com/MhqDVmxcB-TLF_0XT_XkwOx6x7ZZHOn1CUel_yzHXl2LX1d_KfgUZPaEtN3KPo78ylttsX0u7VmGw7IC2g9Ozy6TH4jNQRTLZShHVML9KRZxTrtEBTR59Hc66eKSvyHe5aUC9Iz8MfRFHVet_11amuf4nV0mhXLWaNI1-MwJ35DM0BvCxDO4fpcOnI0QmOAxnIFtEviPXTkriVv7UT9LUUjL2R9mTivDtD5g7lSU8128SeVTdxSdpTlunOenVF_sDHFuB5D2p7dQX2-aZMdar8g4jdhkkfXZ6DYb1dekye8tpyf0_SwFOVXw8CPY51ckPSXhxVgJXe4w2lNqujriPHBAsq95A9vi3sCaiT9aYk3qAT2OFj43WGuvepdDACcrloBjnoY939J2CXHmwfAE1jruM36ApPzTPjD02Gh7nDd7jUUpLDCQAU_9MQDYVWZcYwVA2RFpc1fme6RTiUYS4YncpSfX2PAW9klAF8O2Zfaaqdi0OQGThI3sWQXH4pg7hYIDd93l9OQd3mzLAP3XxPvLUSK6T3GWZY1N2fPk-MfWPJzTr66cffZsGgSzgx_1Mc4pcl5wRrUdZxmSdiKVskxp5aT2qciYaliCMfuz7pXmKO-kvAVfQhx0vB2srDRdnJbg0I61YdTpLyeRCLOn3hkKzBN_POAOTZA5-29671znmyGKOTwpFzNuqNjuIX_SftcHBB9QHyN15pU9jRkQz_bpV-McBnVpHsl48vuzGwV03evNABrhSTeLoipGDP4k21INM29CS_vOHbqGDiAgRWJbYxGfRs3IT8_E-pgoQZ7EMiemKYLKuUy-ThritrusTOKR40oMyJJPktuaR9G7AAgxj9nMk7GqFhXw7MEnbRM=w515-h686-no?authuser=3"
              className="img-fluid"
            />
          </Col>
          <Col>
            <img
              src="https://lh3.googleusercontent.com/pw/AM-JKLWcHeAuWGTAhy74Oo-vWwGqyHDuk46qd3P6Jkk-t0KDVeBpqsBGbG_UVUCreKNhe7-ErXZaY2b_0TfbpimjYvjLQAN8JyQeApJbsMqaoaz1-1gTObx9Gz8IbyRZJf57jdccIYE_KsRk6kSlEAp9BpfsDg=w915-h686-no?authuser=0"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
          <h2>Cats</h2>
          <p>
            Cats are my favorite animal. They&apos;re good at climbing trees, can see
            in the dark, and can leap very far. I decided if I wanted to learn
            about cats more, I should try to behave like them. That&apos;s what led
            me to tree-climbing. I became very good at it.
          </p>
          <Col>
            <img
              src="https://www.purelypetsinsurance.co.uk/media/1139/kitten-in-tree.jpg"
              className="img-fluid"
            />
          </Col>
          <Col>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccf2fe1d-8d53-470a-9cef-221e6063888e/df0fdkb-936c5540-70ab-4616-b786-14bb03c7a9d7.jpg/v1/fill/w_1095,h_730,q_70,strp/leopard_at_night_by_saurabhdsigns_df0fdkb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvY2NmMmZlMWQtOGQ1My00NzBhLTljZWYtMjIxZTYwNjM4ODhlXC9kZjBmZGtiLTkzNmM1NTQwLTcwYWItNDYxNi1iNzg2LTE0YmIwM2M3YTlkNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ih4MjmcbhKm6Z6MDmOg8NsO2h0PiXls_Mx35j28ogGU"
              className="img-fluid"
            />
          </Col>
          <Col>
            <img
              src="https://t4.ftcdn.net/jpg/03/52/75/35/360_F_352753517_irx3QQaA2VZm9LBYZAAVIYMCOfZWWia4.jpg"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}