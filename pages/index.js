import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const siteTitle = "VV's Faves";
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="{siteTitle}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="text-center">{siteTitle}</h1>
        <Row className="text-center">
          <h2>Cats</h2>
          <p>
            Cats are my favorite animal. They're good at climbing trees, can see
            in the dark, and can leap very far. I decided if I wanted to learn
            about cats more, I should try to behave like them. That's what led
            me to tree-climbing. I became very good at it.
          </p>
          <Col>
            <Image
              src="https://www.purelypetsinsurance.co.uk/media/1139/kitten-in-tree.jpg"
              className=""="img-fluid"
            />
          </Col>
          <Col>
            <Image
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccf2fe1d-8d53-470a-9cef-221e6063888e/df0fdkb-936c5540-70ab-4616-b786-14bb03c7a9d7.jpg/v1/fill/w_1095,h_730,q_70,strp/leopard_at_night_by_saurabhdsigns_df0fdkb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvY2NmMmZlMWQtOGQ1My00NzBhLTljZWYtMjIxZTYwNjM4ODhlXC9kZjBmZGtiLTkzNmM1NTQwLTcwYWItNDYxNi1iNzg2LTE0YmIwM2M3YTlkNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ih4MjmcbhKm6Z6MDmOg8NsO2h0PiXls_Mx35j28ogGU"
              className=""="img-fluid"
            />
          </Col>
          <Col>
            <Image
              src="https://t4.ftcdn.net/jpg/03/52/75/35/360_F_352753517_irx3QQaA2VZm9LBYZAAVIYMCOfZWWia4.jpg"
              className=""="img-fluid"
            />
          </Col>
        </Row>
        <Row className="text-center">
          <h2>Climbing</h2>
          <p>
            I started tree climbing when I was four and now I do it almost every
            day. It's become one of my favorite things to do in the wild. These
            are some pictures of me climbing in my favorite park,{" "}
            <a
              href="https://www.alltrails.com/trail/us/california/temescal-canyon-loop-trail"
              target="_blank"
            >
              Temescal Canyon
            </a>
            . My mom started a play-group called "Forest School" and we go every
            Wednesday. The parents take turns teaching stuff, but recently my
            mom and I have been the only ones that are doing crafts. One of my
            friends, Maya, moved away only 5 years after she had joined.
          </p>
          <Col>
            <Image
              src="https://lh3.googleusercontent.com/lEujovyCm8SfQqMGBgghvAmqAABd1aEzL9MZHAhW0-TAp2KybObox-B9_i_terBJClhxNVPKxtDE0yg0FgggkLWL_1U9OzRroIZGNnWMQtaAf7eDLid3-JQov5A62bltnUosoKXm5lz4MMU05HLBte9EU6CQ4u8yjoET2Ywfb-IEkpYtOyEUNEFZYtfZAH2imZ9T6ImqPRXqg7nx2vbwVIMscYXkPx7ywMbbeQeibJ6kn-_vm0Y6_Afn1Q3hs0LKBca9ujC-yiLcsWdSOEKl3mxZn8spl4BUAf7S2T5bHo4Xdn0yLv6LNcdavakmFLF-HARIPO0oZA_8iEFEMaPMlhNH1zOJ1pxYiyMvWFYdt8Wh_zja8kTbb0OON_i97m0eZihBuHcRJqXOyMGSzTdzT39qqLnNTCEWGboCfPUkOc8mwWnElkT4M2_DWcLB66VYPGPhlZ2LVjUj-b2wX7jPyXIx-84eDDN2_coB8CjSYJjTCkPQEZipamgFxNFp3NMvcgPCD10vyY8rn_t56L1C4o4Cttsup918_Ki88hM6k0lyzZiaC5uEnAWWSqWO5vtE3-2VYqXF54-7js7wRBBxuFwYJhAeqqvidQXBeYGr9TSFRL1pdkJhRnZ58hx2Osxq3vlj_8ukaxZIowNzClwBZ1Wz-sWRoY1_7q4rl3KiNMdhbjZf7UXsq3OpptJyJwarPT190olfaE4sJKCokS9kH_q1xnmKo0e2Sy54spb9WkxDG1aDgs6U2eImADCSmV2LxxSqA4eIXfu1fYRnAA86TiMma5Vg9RgVmul72S-AV0VY5L86tPnhGwnxiRnCk7pY36NnMq9SOfdAODi5Kc_u1z6olIn1vl30wyctTl758ak=w386-h686-no?authuser=3"
              className=""="img-fluid"
            />
          </Col>
          <Col>
            <Image
              src="https://lh3.googleusercontent.com/MhqDVmxcB-TLF_0XT_XkwOx6x7ZZHOn1CUel_yzHXl2LX1d_KfgUZPaEtN3KPo78ylttsX0u7VmGw7IC2g9Ozy6TH4jNQRTLZShHVML9KRZxTrtEBTR59Hc66eKSvyHe5aUC9Iz8MfRFHVet_11amuf4nV0mhXLWaNI1-MwJ35DM0BvCxDO4fpcOnI0QmOAxnIFtEviPXTkriVv7UT9LUUjL2R9mTivDtD5g7lSU8128SeVTdxSdpTlunOenVF_sDHFuB5D2p7dQX2-aZMdar8g4jdhkkfXZ6DYb1dekye8tpyf0_SwFOVXw8CPY51ckPSXhxVgJXe4w2lNqujriPHBAsq95A9vi3sCaiT9aYk3qAT2OFj43WGuvepdDACcrloBjnoY939J2CXHmwfAE1jruM36ApPzTPjD02Gh7nDd7jUUpLDCQAU_9MQDYVWZcYwVA2RFpc1fme6RTiUYS4YncpSfX2PAW9klAF8O2Zfaaqdi0OQGThI3sWQXH4pg7hYIDd93l9OQd3mzLAP3XxPvLUSK6T3GWZY1N2fPk-MfWPJzTr66cffZsGgSzgx_1Mc4pcl5wRrUdZxmSdiKVskxp5aT2qciYaliCMfuz7pXmKO-kvAVfQhx0vB2srDRdnJbg0I61YdTpLyeRCLOn3hkKzBN_POAOTZA5-29671znmyGKOTwpFzNuqNjuIX_SftcHBB9QHyN15pU9jRkQz_bpV-McBnVpHsl48vuzGwV03evNABrhSTeLoipGDP4k21INM29CS_vOHbqGDiAgRWJbYxGfRs3IT8_E-pgoQZ7EMiemKYLKuUy-ThritrusTOKR40oMyJJPktuaR9G7AAgxj9nMk7GqFhXw7MEnbRM=w515-h686-no?authuser=3"
              className=""="img-fluid"
            />
          </Col>
          <Col>
            <Image
              src="https://lh3.googleusercontent.com/pw/AM-JKLWcHeAuWGTAhy74Oo-vWwGqyHDuk46qd3P6Jkk-t0KDVeBpqsBGbG_UVUCreKNhe7-ErXZaY2b_0TfbpimjYvjLQAN8JyQeApJbsMqaoaz1-1gTObx9Gz8IbyRZJf57jdccIYE_KsRk6kSlEAp9BpfsDg=w915-h686-no?authuser=0"
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row className="text-center">
          <h2>Favorite Books</h2>
          <p>
            I started reading when I was four, featuring one of my favorite
            early-readers chapter books,{" "}
            <a
              href="https://www.amazon.com/s?k=the+princess+in+black&sprefix=the+princess+in+black%2Caps%2C350&ref=nb_sb_ss_ts-doa-p_1_21"
              target="_blank"
            >
              The Princess In Black
            </a>
            . After I read all of those books, I started reading{" "}
            <a
              href="https://www.amazon.com/s?k=danny+dragonbreath&crid=3SXS9SWXDV5K4&sprefix=danny+dragonbreath%2Caps%2C130&ref=nb_sb_noss_1"
              target="_blank"
            >
              Dragonbreath
            </a>
            , and once I was finished with those, I started reading books from
            what has become my favorite series:{" "}
            <a
              href="https://www.amazon.com/s?k=wings+of+fire&sprefix=wings+of+f%2Caps%2C701&ref=nb_sb_ss_ts-doa-p_1_10"
              target="_blank"
            >
              Wings of Fire
            </a>
            ! I started by just reading the graphic novels, but they hadn't put
            out the fifth graphic novel yet, so I started reading the novels
            just because my friend convinced me. I'm still reading them today...
            there are fifteen books in the series, not including the graphic
            novels. My favorite book out of the series was probably the book{" "}
            <a
              href="https://www.amazon.com/Wings-Fire-Book-Six-Rising-ebook/dp/B00KRN1WKC/ref=sr_1_1?keywords=wings+of+fire+moon+rising&qid=1658337743&sprefix=wings+of+fire+moon+%2Caps%2C138&sr=8-1"
              target="_blank"
            >
              Moon Rising
            </a>{" "}
            which was about a young Nightwing who had prophecy and mind-reading
            powers.
          </p>
          <Col>
            <a href="https://www.amazon.com/s?k=princess+in+black&sprefix=princess+in+bla%2Caps%2C299&ref=nb_sb_ss_ts-doa-p_1_15">
              <Image
                src="https://m.media-amazon.com/images/P/B0721L8V5J.01._SCLZZZZZZZ_SX500_.jpg"
                className="img-fluid"
              />
            </a>
          </Col>
          <Col>
          <a href="https://www.amazon.com/s?k=danny+dragonbreath&sprefix=danny+dragon%2Caps%2C141&ref=nb_sb_ss_ts-doa-p_2_12">
          <Image
            src="https://m.media-amazon.com/images/P/0142420956.01._SCLZZZZZZZ_SX500_.jpg"
            className="img-fluid"
          />
        </a>
          </Col>
          <Col>
            <a href="https://www.amazon.com/s?k=wings+of+fire&sprefix=wings+of+f%2Caps%2C701&ref=nb_sb_ss_ts-doa-p_1_10">
              <Image
                src="https://m.media-amazon.com/images/I/51PNh0IkhlL.jpg"
                className="img-fluid"
              />
            </a>
          </Col>
        </Row>
        <Row className="text-center">
          <h2>Fern the Leopard Book Series</h2>
          <Col>
          <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936905491281608754" target="_blank">
          <Image
            src="https://lh3.googleusercontent.com/CWIWo_z0-QOHtwyORxTt7RssEwD5BaXNPR4HvmwbZge3BNhnimMbtvekfRXOR1jwG_YLBvlzOBzRaIKsg5uXQsTPSST9XJ3G4Jndyg=w600"
            className="img-fluid"
          />
        </a>
          </Col>
          <Col>
          <p class="text-center">My love of books led me to making my own book, "Fern And The Toucan Village."  It's about a leopard named Fern who is princess of the rainforest, and she saves the Toucan Village from a wizard.  My one book led me to thinking that most of my books were a series, so I decided to make a Fern the Leopard Book Series.  Each book has 11 chapters and 3 main characters: Fern the Leopard, Bella the Mouse, and Tsunami the Purrmaid.  Purrmaids are half cat, half fish animals and live in any type of water.  Tsunami is a river purrmaid that lives in the Amazon River.  Tsunami's fourth best friend is Marsh the Caiman. A caiman is like an alligator, except fiercer and stronger, and lives in the Amazon.  Fern has a cousin named Flower who is about an inch tall, but still a leopard.  Flower lives in a field and calls the field Flower's Field.  Her meadow is filled with different kinds of flowers and an occasional baby tree.  Her house is inside a toadstool underneath some pieces of grass that she wove together.  In addition to being Fern's cousin, she is also Fern's best friend.  All of these characters help fern in her quests as she journeys through the rainforest righting all the wrongs.</p>
          </Col>
        </Row>
        <h2 className="text-center"><a href="https://opensea.io/collection/96dragons" target="_blank">Dragon Drawings</a></h2>
          <p class="text-center">The Wings of Fire Books led me to thinking, "Hey, what if I tried to draw some dragons?"  I started by just tracing the covers of the books with tracing paper, and then after I had traced them, took pictures of them on an app called <a href="https://procreate.art/" target="_blank">Procreate</a> and traced them on the iPad.  Then I colored them in, and added backgrounds.  Sometimes, I even made dragon eggs in the pictures.</p>
      <h3 class="text-center">There are seven different types of dragons:</h3>

        <Row className="text-center">
          <Col>
          <h4>Rainwings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936918685421142017">
          <Image
            src="https://lh3.googleusercontent.com/XC-OZVxQVKlWrdxE93_JsZP3zc4TENgAJY6JDBAXgZy2zRuvI6xHKxy6m9qE8r_qP0sRDPsBcJBdzQFUvoNwfyy1ppJl0L3-02TaSA=w600"
            className="img-fluid"
          />
        </a>
        <br />
        My favorite out of the dragons are Rainwings because they can spit a deadly venom and camouflage their scales.  They live in the rainforest and most of the other tribes think they are lazy.
          </Col>
        </Row>
        <Row>
          <Col>
          <h4>Sandwings</h4>
                <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936909889328119809">
              <Image
                src="https://lh3.googleusercontent.com/1pgLRFPH5C8cjxigZndPl7TF-UkyyjgSWiq2GSCJln_da75B9yCcsVTRnGjs2BDwd4nhs77tHx1dgF5IGAnmjlXK09ZpGxljRbMxr9c=w600"
                className="img-fluid"
              />
            </a>
            My second favorite are probably Sandwings since they have a deadly venemous tailbarb like a scorpion.  Their scales are the color of sand since they live in the desert.
          </Col>
          <Col>
          <h4>Nightwings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936916486397886465">
          <Image
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
          <Image
            src="https://lh3.googleusercontent.com/djtLxo8tInL1RtcHcF7C6wZe8ADl7Q5ixzSoCkNL6iU6Sb-Y0NR3IK1_1qyZ3rqxwDSi7J4AeBODOvOKrcaEyUYwIAJC6B8PENDyAA=w600"
            className="img-fluid"
          />
        </a>
        Icewings live in the arctic and have sharp icicles sticking out of their back, a deadly frost-breathe, and snow-colored scales. Also three words:  They. Hate. Nightwings.
          </Col>
          <Col>
          <h4>Mudwings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936908789816492033">
          <Image
            src="https://lh3.googleusercontent.com/rp2Q7aEodWJtGBDJctkIX6DcCvBW3rAsmeE8A33fpDeHXjVzpPAN4F_-06yQG_a_h4Ifkqt46e4XiBnDBndAR0cueoLhNQAuEIYO3A=w600"
            className="img-fluid"
          />
        </a>
        Mudwings have dual brownish, grayish, greenish scales, and their homes are the mudswamps.  Unlike the other tribes, Mudwings that are born from eggs the color of dragonblood are fireproof.  They live in groups and rely on each other to keep each other safe, unlike Skywings who sometimes even kill their brothers and sisters.
          </Col>
          <Col>
          <h4>Skywings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936906590793236481">
          <Image
            src="https://lh3.googleusercontent.com/185p3OjdqH-rvE-iCaHVn3hDhxm8UvskRjzD18-geSnGqNUAczMXVSe6Bt4heG3jLIWQwQqKYOhgrYKdsFwrlxrsjCvY7D-gLGM4ug=w600"
            className="img-fluid"
          />
        </a>
        All the dragons scales match their environment except the Skywings.  Skywings are the most powerful tribe because they can breathe fire for longer than any other dragon, fly at top speeds, and have excellent eyesight.  The only thing about them is that their scales are bright red, just the thing to attract attention, even if they're coming from a mile away in the sky.
          </Col>
          <Col>
          <h4>Seawings</h4>
            <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108611680744493308023694569108433614589881484166149125498427936910988839747585">
          <Image
            src="https://lh3.googleusercontent.com/PRpPprsVK6Zv56LS-5A0JlYPn28kWeGDF4qP3iNcyXQSCRSNyqk8siJ7hwcwaB0-zFWiI62gdmi5yxScfXNBrKQswnr9x7glFDdUqQ=w600"
            className="img-fluid"
          />
        </a>
        Seawings have glow in the dark aquamarine scales.  You can probably guess where they live and what color their scales are.  They can see in the dark and breathe under water.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
