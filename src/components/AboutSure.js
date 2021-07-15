import React from "react";
import "../AboutSure.css";
import sudhamadam from "../images/sudhamadam.jpg";
import jagadeeshsir from "../images/jagadeeshsir.jpg";
import bharathsir from "../images/bharatsir.jpg";
import kumarsir from "../images/kumarsir.jpeg";
import baba from "../images/baba.jpg";
const AboutSure = () => {
  return (
    <main className="mainAboutContainer" style={{ marginTop: "6rem" }}>
      {/* <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      /> */}
      <div className="birthOfSureInitativeContainer">
        <div className="birthOfSureInitativeCenter">
          <h1>BIRTH OF THE SURE INITIATIVE</h1>
          <div className="birthOfSureInitativeImg">
            <img src={baba} alt="" />
          </div>
          <div
            className="birthOfSureInitativeContent"
            id="birthOfSureInitativeContent1"
          >
            <p>
              <b> A narration by the Founder, Prof. Radhakumari -- </b>
              <br />
              I have had the greatest privilege of being a student as well as
              faculty for 40 years in Sri Sathya Sai Institute of Higher
              Learning, Anantapur Campus, Andhra Pradesh, India, whose founder
              chancellor is Bhagawan Sri Sathya Sai Baba. While my dream was to
              continue to serve the Institution even after retirement, little
              did I realize that Bhagawan had different plans for me. The inborn
              passion for teaching and research; and the nature of “always move
              ahead with optimism amidst all adversities”, made my mind debate
              on how to put to use the vast knowledge acquired over this long
              period of teaching, for the benefit of youth, especially living in
              rural areas. So, I decided to set out on a journey to visit the
              villages, around Puttaparthi, Anantapur district of Andhra
              Pradesh, India, for assessing the requirements of educated
              unemployed rural youth. While I was waiting for an auspicious day
              to begin the journey, I spotted Mrs. Vandana Nagesh, in the
              Darshan grounds in Sai Kulwant Hall. After she departed from the
              department of Management & Commerce, Anantapur Campus in the
              mid-1990s on completion of her studies, this was the first time I
              met her. Having nurtured special love for all the students, I was
              pleasantly surprised to see her; and picked up conversation. On
              listening to my plan during the chat, Mrs. Vandana instantly
              offered to accompany me.
              <br />
              Our journey into the villages, thus, began, for identifying the
              missing skill sets in educated but unemployed rural youth.
              Delightful coincidences during the journey made us feel that Swami
              was hand holding and directing us in every step we undertook. The
              search brought to light the twin realities of rural areas. While
              most of the rural youth are qualified with professional degrees,
              majority of them are idling at home lacking the skill sets needed
              by the industry for employing them. This reality resulted in the
              dawn of the "Skill Upgradation for Rural-youth Empowerment – SURE"
              concept. Proceeding further, a brochure mentioning the programs
              that are offered to enhance their skill sets was circulated. In
              response, Mr. Jagadeesh, from a remote village in Anantapur
              district, Andhra Pradesh, India, approached us. A detailed
              discussion with Jagadeesh revealed that he is highly versatile
              with Python program, AI, ML,DL, DS, and DA. Having good
              communication skills and with Navodaya schooling background, he
              said he discontinued M.C.A integrated program from LPU, Punjab, to
              use his theoretical knowledge to build industry-related software
              solutions, and thus gain the required capability to set up a
              startup venture. completing PG diploma in AI and ML from IIIT,
              Bangalore. Jagadeesh is currently pursuing MS in AI and ML from
              Liverpool John Moores University, London, UK, through upGrad
              online platform. Simultaneously Mr. Jagadeesh is sincerely
              training batches of students in Python, AI, ML, DL, DS, and DA.
              <br />
              The overall understanding we gained from this village survey was
              that majority of rural youth besides possessing good academic
              degrees, have amazing talent and inexplicable zeal to learn new
              things. With a little guidance to channelize their latent talent
              in the right direction, they will undoubtedly become the dynamic
              soldiers of Indian economic growth. We express our heartfelt
              gratitude to Bhagawan Sri Sathya Sai Baba for promoting us to
              start this highly fulfilling service initiate, and sincerely pray
              for His continued guidance.
            </p>
          </div>
          <a
            id="birthOfSureInitativeContent1readmore"
            onClick={() => {
              var docStyle = document.getElementById(
                "birthOfSureInitativeContent1"
              ).style;
              docStyle.height = "initial";
              document.getElementById(
                "birthOfSureInitativeContent1readmore"
              ).style.display = "none";
              document.getElementById(
                "birthOfSureInitativeContent1readless"
              ).style.display = "block";
            }}
            style={{ color: "blue", cursor: "pointer" }}
          >
            read more....
          </a>
          <a
            id="birthOfSureInitativeContent1readless"
            onClick={() => {
              var docStyle = document.getElementById(
                "birthOfSureInitativeContent1"
              ).style;
              docStyle.height = "200px";
              document.getElementById(
                "birthOfSureInitativeContent1readmore"
              ).style.display = "block";
              document.getElementById(
                "birthOfSureInitativeContent1readless"
              ).style.display = "none";
            }}
            style={{ color: "blue", cursor: "pointer", display: "none" }}
          >
            read less....
          </a>
        </div>
      </div>
      <h1 className="aboutMainHeading">BOARD OF TRUSTEES</h1>
      <div className="mainAbout">
        <div className="flex-container Aboutflex-container">
          <div className="alternate_flex">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/edit%203593.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:66.64%25/rs=w:388,h:388,cg:true"
                alt=""
              />
            </section>
            <div></div>
            <article>
              <h4>
                <b>EXECUTIVE DIRECTOR & FOUNDER</b>
              </h4>
              <p>
                <b>Prof. Radhakumari Challa</b>
                <br />
                Retd. DMC, Anantapur Campus, SSSIHL.
                <br />
                Founded “Skill Upgradation for Rural Youth Empowerment" (SURE
                INITIATIVE), an online initiative, totally free of cost, to
                educated unemployed youth.{" "}
              </p>
              <a href="https://www.linkedin.com/in/prof-radhakumari-challa-a3850219b">
                Linkedin
              </a>
            </article>
          </div>
          <div className="alternate_flex flex-row-reverse">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/WhatsApp%20Image%202020-07-03%20at%201.17.57%20PM.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:388,cg:true"
                alt=""
                className="alternate_img"
              />
            </section>
            <article>
              <h4>
                <b> DIRECTOR & CO-FOUNDER</b>{" "}
              </h4>
              <p>
                <b>Ms. Vandana Nagesh</b>
                <br />
                Worked as Senior HR in US Consulate, Hyderabad.
                <br />
                Co-Founded “Skill Upgradation for Rural Youth Empowerment" (SURE
                INITIATIVE), an online initiative, totally free of cost, to
                educated unemployed youth.
              </p>
              <a href="https://www.linkedin.com/in/vandana-nagesh-5a0025a">
                Linkedin
              </a>
            </article>
            <div></div>
          </div>
          <div className="alternate_flex">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Krithika%20Ram.jfif/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true"
                alt=""
              />
            </section>
            <div></div>
            <article>
              <h4> </h4>
              <p>
                <b>Ms. Krithika Ram</b>
                <br />
                Chief Operating Officer,
                <br />
                Feminist Approach To Technology (FAT),
                <br />
                Delhi, India
              </p>
              <a href="https://www.linkedin.com/in/krithika-ram-she-her-ab47752b">
                Linkedin
              </a>
            </article>
          </div>

          <div className="alternate_flex flex-row-reverse">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Raman.jfif/:/cr=t:0%25,l:7.27%25,w:85.46%25,h:100%25/rs=w:388,h:388,cg:true"
                alt=""
                className="alternate_img"
              />
            </section>
            <article>
              <h4> </h4>
              <p>
                <b>Mr. Ramachandran Parthasarathy:</b>
                <br />
                Director -Six Six Clarity P Ltd ,
                <br />
                Hon. Advisor, India Vision Institute, Volunteer for Live well
                Institute of Rehabilitation Medicine, India
              </p>
              <a href="https://www.linkedin.com/in/ramachandran-ram-p-5109b05">
                Linkedin
              </a>
            </article>
            <div></div>
          </div>

          <div className="alternate_flex">
            <section>
              <img src={kumarsir} alt="" />
            </section>
            <div></div>
            <article>
              <h4> </h4>
              <p>
                <b>Dr. SSR Kumar:</b>
                <br />
                Dr. Kumar is based in Boston, MA, USA. He is currently involved
                with biotech startups having taken a break from his academic
                pursuits with most recent assignment as Managing Director at
                Harvard University managing its Energy Frontier Research Center
                (EFRC).
              </p>
              <a href="https://www.linkedin.com/in/kumar-challa-4a30284">
                Linkedin
              </a>
            </article>
          </div>

          <div className="alternate_flex flex-row-reverse">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Amar.jpeg/:/cr=t:0%25,l:0.95%25,w:98.1%25,h:100%25/rs=w:388,h:388,cg:true"
                alt=""
                className="alternate_img"
              />
            </section>
            <article>
              <h4> </h4>
              <p>
                <b>Mr. Amaresh:</b>
                <br />
                Director & CEO of Grey scientific labs and few other companies
                in USA, Canada and India.
              </p>
              <a href="https://www.linkedin.com/in/mvamareshkumar/">Linkedin</a>
            </article>
            <div></div>
          </div>

          <div className="alternate_flex">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Krishna%20Kanth.jfif/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true"
                alt=""
              />
            </section>
            <div></div>
            <article>
              <h4> </h4>
              <p>
                <b>Mr. Sai Krishna kanth:</b>
                <br />
                Lead Analyst – Wipro Digital Operations and Platforms.
                Experienced and accomplished Team Leader with over 7+ years of
                client-facing experience looking to leverage extensive
                background in Software implementation, Financial Reporting in
                Private Equity (LP & GP), Structured Finance and Retail Banking.
              </p>
              <a href="https://www.linkedin.com/in/saikrishnakanthprasad-kk">
                Linkedin
              </a>
            </article>
          </div>
        </div>
      </div>

      <h1 className="aboutMainHeading">GOVERNING COUNCIL</h1>
      <h2 className="aboutSubHeading">Senior Executive Members</h2>
      <div className="mainAbout">
        <div className="flex-container Aboutflex-container">
          <div className="alternate_flex flex-row-reverse">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/WhatsApp%20Image%202020-07-05%20at%2011.35.51%20AM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:600,cg:true"
                alt=""
                className="alternate_img"
              />
            </section>
            <article>
              <p>
                <b>Sri Chandramohan</b>
                <br />
                Group President Finance and Investment Tractor and Farm
                Equipment Limited Chennai, India
              </p>
              <a href="https://www.linkedin.com/in/chandramohan-sitaraman-8017a11">
                Linkedin
              </a>
            </article>
            <div></div>
          </div>

          <div className="alternate_flex">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/dr%20cm%20kumar.png/:/cr=t:8.05%25,l:0%25,w:100%25,h:83.9%25/rs=w:600,h:600,cg:true"
                alt=""
              />
            </section>
            <div></div>
            <article>
              <p>
                <b>Dr. C. Muralikrishna Kumar </b>
                <br />
                Former Senior Adviser, NITI Aayog. During his career spanning
                over 34 years, Dr. C.M Kumar headed divisions responsible for
                the development of Information &CommunicationTechnology, Science
                & Technology and Innovation.
              </p>
              <a href="https://www.linkedin.com/in/muralikrishna-kumar-c-9b735a41">
                Linkedin
              </a>
            </article>
          </div>
        </div>
      </div>
      <h2 className="aboutSubHeading">Executive Members</h2>
      <div className="mainAbout">
        <div className="flex-container Aboutflex-container">
          <div className="alternate_flex flex-row-reverse">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Mr.%20Vijayalakshmi.jfif/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600"
                alt=""
                className="alternate_img"
              />
            </section>
            <article>
              <p>
                <b>Mrs. Vijayalakshmi Suresh </b>
                <br />
                Actively involved in Vidyavahini, Sri Sathya Sai Central
                Trust;Volunteered as Sai Spiritual Education Guru, Dubai &
                Toronto, for several years; Volunteered as Special needs
                educator in Dubai Center for Special Needs.
              </p>
              <a href="#">Linkedin</a>
            </article>
            <div></div>
          </div>

          <div className="alternate_flex">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Usha.jfif/:/cr=t:0%25,l:0.3%25,w:97.7%25,h:73.53%25/rs=w:600,h:600,cg:true,m"
                alt=""
              />
            </section>
            <div></div>
            <article>
              <p>
                <b>Mrs. G Usha </b>
                <br />
                Scientist / Engineer "SE", Solar Panel Division, Power Systems
                Group,U R RAO SATELLITE CENTER, Bangalore.
              </p>
              <a href="#">Linkedin</a>
            </article>
          </div>
          <div className="alternate_flex flex-row-reverse">
            <section>
              <img src={sudhamadam} alt="" className="alternate_img" />
            </section>
            <article>
              <p>
                <b> Mrs. Sai Sudha Nunna </b>
                <br />
                CFA, MBA, Btech Co-Founder & COO, Smartnerd Future Communities,
                India.
              </p>
              <a href="https://www.linkedin.com/in/sai-sudha-nunna">Linkedin</a>
            </article>
            <div></div>
          </div>
          <div className="alternate_flex">
            <section>
              <img src={jagadeeshsir} alt="" />
            </section>
            <div></div>
            <article>
              <p>
                <b> Mr. Jagadeesh Gajula </b>
                <br />
                BCA PGD (AIML), MSc (AIML) - Liver Poole John Moores University,
                London; Technical Manager - Grey Slide Imaging; Junior Research
                Fellow - IIT, Hyderabad. The very first proud product of the
                SURE TRUST
              </p>
              <a href="https://www.linkedin.com/in/jagadeeshgajula1">
                Linkedin
              </a>
            </article>
          </div>
          <div className="alternate_flex flex-row-reverse">
            <section>
              <img src={bharathsir} alt="" className="alternate_img" />
            </section>
            <article>
              <p>
                <b>Mr. Bharat Reddy Bora </b>
                <br />
                Btech (ECE) Graduate student in Robotics from the University of
                Maryland College Park, USA. Currently working as ROS (Robotics
                Operating System) Developer, TheDush Robotics, Coimbatore, TN.
              </p>
              <a href="https://www.linkedin.com/in/bharath-reddy-bora-820172154">
                Linkedin
              </a>
            </article>
            <div></div>
          </div>
        </div>
      </div>

      <h1 className="aboutMainHeading">BOARD OF ADVISORS</h1>
      <div className="mainAbout">
        <div className="flex-container Aboutflex-container">
          <div className="alternate_flex">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/sir.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
                alt=""
              />
            </section>
            <div></div>
            <article>
              <p>
                <b> Advisor-Networking </b>
                <br />
                Mr. Rama Kotapally,
                <br />
                Founder, TSilicon; Consultant-Semtech;
                <br />
                Project manager-SMTS AMD, Consultant-Synopsys;
                <br />
                Staff Engineer-Montalvo Systems.
              </p>
              <a href="https://www.linkedin.com/in/rama-kotapally-442820">
                Linkedin
              </a>
            </article>
          </div>
          <div className="alternate_flex flex-row-reverse">
            <section>
              <img
                src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Sarah%20--%20new%20(1).png/:/"
                alt=""
                className="alternate_img"
              />
            </section>
            <article>
              <p>
                {" "}
                <b> Advisor-Communications & Outreach</b>
                <br />
                Ms. Sarah Berry:
                <br />
                Sarah Berry brings with her 25 years of diverse professional
                experience in the domains of training, public
                diplomacy/advocacy, writing, communications and outreach
                (including partnerships and networking). She has written more
                than 500 articles covering diverse topics.{" "}
              </p>
              <a href="https://www.linkedin.com/in/sarah-berry-a8a253129">
                Linkedin
              </a>
            </article>
            <div></div>
          </div>
        </div>
      </div>
      <hr />
    </main>
  );
};

export default AboutSure;
