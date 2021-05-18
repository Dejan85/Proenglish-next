import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(e.target.href);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__msg">
          <h1 className="footer__h1">ProEnglish</h1>
          <p className="footer__p">
            We are Education, your passion for knowledge and inspiration. Step
            inside our school and make English your comfort zone. Follow us to
            get the latest news and your piece of knowledge.
            <br />
            <br />
            Predstavljamo novi vid obrazovanja gde budimo strast i inspiraciju
            za učenje jezika. Zakorači u naš svet i nek ti engleski bude tvoja
            zona komfora. Kontaktiraj nas da bi postao deo novog trenda učenja.
          </p>
        </div>
        <div className="footer__content-container">
          <div className="footer__course">
            <h1 className="footer__h1">Kursevi</h1>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="/kursevi"
                  onClick={handleClick}
                  className="footer__link"
                >
                  Kurs konverzacije
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/kursevi"
                  onClick={handleClick}
                  className="footer__link"
                >
                  a2
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/kursevi"
                  onClick={handleClick}
                  className="footer__link"
                >
                  b1
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/kursevi"
                  onClick={handleClick}
                  className="footer__link"
                >
                  b2
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/kursevi"
                  onClick={handleClick}
                  className="footer__link"
                >
                  c1
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__certificate">
            <h1 className="footer__h1">Sertifikati</h1>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="/ispiti"
                  onClick={handleClick}
                  className="footer__link"
                >
                  Toefl
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/ispiti"
                  onClick={handleClick}
                  className="footer__link"
                >
                  Ielts
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/ispiti"
                  onClick={handleClick}
                  className="footer__link"
                >
                  Gmat
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/ispiti"
                  onClick={handleClick}
                  className="footer__link"
                >
                  Gre
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/ispiti"
                  onClick={handleClick}
                  className="footer__link"
                >
                  Sat
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__follow">
            <h1 className="footer__h1">Pratite nas</h1>
            <ul className="footer__list">
              <li className="footer__item">
                <i className="fab fa-facebook-square footer__icon facebook" />
                <a
                  href="https://www.facebook.com/pripremezaispite"
                  className="footer__link "
                  onClick={handleClick}
                >
                  facebook.com
                </a>
              </li>
              <li className="footer__item">
                <i className="fab fa-instagram footer__icon instagram" />
                <a
                  href="https://www.instagram.com/proenglish_skola_beograd/?igshid=16nsjmy5wedpu"
                  className="footer__link"
                  onClick={handleClick}
                >
                  Instagram
                </a>
              </li>
              <li className="footer__item">
                <i className="fab fa-linkedin footer__icon linkedin" />
                <a
                  href="https://www.linkedin.com/in/pro-english-a01051209"
                  className="footer__link"
                  onClick={handleClick}
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h1 className="footer__h1">Kontakt</h1>
            <ul className="footer__list">
              <li className="footer__item">
                <i className="fas fa-phone phone" />
                <p className="footer__link">0669637588</p>
              </li>
              <li className="footer__item">
                <i className="fab fa-viber footer__icon viber" />
                <p className="footer__link">0669637588</p>
              </li>
              <li className="footer__item">
                <i className="far fa-envelope footer__icon gmail" />
                <p className="footer__link ">hello.proenglish@gmail.com</p>
              </li>
              <li className="footer__item">
                <i className="fas fa-map-marker-alt footer__icon gmail" />
                <p className="footer__link ">Zeleni venac 2a, Beograd</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__devxad">
        <h2 className="footer__h2">
          © {`${new Date().getFullYear()}`} - MERN APP - All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
