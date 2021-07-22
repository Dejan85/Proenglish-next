import {
  Container,
  ContentContainer,
  Heading,
  SubContainer,
  Text,
} from "src/components/ui";
import React from "react";
import { h3 } from "../constants";
import Link from "next/link";

const Questions: React.FC = (): JSX.Element => {
  return (
    <Container className="toefl__questions">
      <SubContainer className="toefl">
        <Heading className="toefl__questions-heading" as="h3">
          {h3}
        </Heading>
        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Kada i gde mogu da polažem TOEFL test?
          </Heading>
          <p className="toefl__questions-text">
            Polaganje TOEFL testa se organizuje 50 puta na godišnjem nivou, a
            mesečno postoje 4 ili više termina, u zavisnosti od meseca. U našem{" "}
            <Link href="/dogadjaji">
              <a>kalendaru</a>
            </Link>{" "}
            pogledajte termine TOEFL 2021. U Beogradu TOEFL test možete polagati
            na tri lokacije, a znaćete koja lokacija je slobodna kada počnete sa
            prijavom za test. U Srbiji, TOEFL test možete da polažete još i u
            Subotici i Nišu. Razlike u težini testa nema, kao ni u načinu
            ocenjivanja. Bitno je da znate za ove dve lokacije jer može da se
            desi da su svi termini u Beogradu popunjeni u trenutku kad odlučite
            da se prijavite za test.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Kako se prijavljujem za TOEFL test?
          </Heading>
          <p className="toefl__questions-text">
            Za TOEFL test se prijavljujete preko zvaničnog TOEFL sajta. Na{" "}
            <Link href="https://v2.ereg.ets.org/ereg/public/jump?_p=TEL">
              <a>https://v2.ereg.ets.org/ereg/public/jump?_p=TEL</a>
            </Link>{" "}
            početku, budući da ste novi korisnik, treba da napravite svoj nalog
            na: a zatim da pratite uputstva do kraja prijave.Kao i prijava, i
            uplata se vrši preko sajta, i to jednom od kartica za elektronsko
            plaćanje: American Express®, Discover®, JCB®, China Union Pay®,
            Diners Club®, Mastercard®, VISA® ili preko vašeg PayPal® naloga.
            Aktuelna cena testa je 220 američkih dolara. Najbrži i najmanje
            stresan način je preko PayPal naloga. U slučaju da imate poteškoće
            sa prijavom za test,{" "}
            <Link href="/kontakt">
              <a>obratite nam se</a>
            </Link>{" "}
            – rado ćemo pomoći.Za TOEFL je najbolje da se prijavite mesec dana
            ranije, a naši učenici procesu prijave pristupaju zajedno sa
            profesorom. Ukoliko ima slobodnih mesta, za TOEFL možete da se
            prijavite najkasnije 4 dana pre samog testa. Moguća je prijava sa
            zakašnjenjem, pod uslovom da ima slobodnih mesta. U tom slučaju
            plaćate 40 dolara zbog kašnjenja. Na ispit morate da ponesete ličnu
            kartu i potvrdu da ste se prijavili za ispit, a koja vam stiže na
            mejl kad završite prijavu. Sve ostalo što je potrebno ćete dobiti na
            polaganju.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Kada dobijate rezultate TOEFL testa?
          </Heading>
          <p className="toefl__questions-text">
            Rezulati TOEFL testa stižu na vaš nalog u proseku 5 radnih dana
            nakon polaganja testa a sertifikat važi 2 godine. U slučaju da ne
            dobijete potreban skor, TOEFL test možete da polažete neograničen
            broj puta, s tim što između dva polaganja mora da prođe 12 dana. Ako
            se desi da više puta polažete ispit jer vam uvek nedostaje nekoliko
            poena, TEOFL je omogućio da kombinujete rezultate sa više polaganja,
            pod uslovom da ih niste polagali u većem vremenskom razmaku od 2
            godine. To znači da možete da polažete TOEFL više puta, izaberete
            rezultate koji vam su vam najbolji iz više testova, iskombinujete ih
            i prijavite koristeći MyBest Score. Ipak, prijateljsko upozorenje:
            postoji određeni broj fakulteta koji to prihvata. Ako želite da
            vidite da li je i vaš fakultet među njima, pogledajte ovde{" "}
            <Link href="https://www.ets.org/toefl/score-users/scores-admissions/set/mybest-acceptance">
              <a>
                https://www.ets.org/toefl/score-users/scores-admissions/set/mybest-acceptance
              </a>
            </Link>{" "}
            .
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Ko sve priznaje TOEFL test?
          </Heading>
          <p className="toefl__questions-text">
            Ukoliko ste se samostalno upustili u odlazak na studije u
            inostranstvo, verovatno ste stupili u kontakt sa željenim fakultetom
            i saznali da li priznaju TOEFL test i koji broj boena vam je
            potreban. Ako niste, preporučujemo da im pišete, a na ovom linku
            možete proveriti koje sve obrazovne institucije priznaju TOEFL:{" "}
            <Link href="http://www.toeflgoanywhere.org/search-who-accepts-toefl">
              <a>http://www.toeflgoanywhere.org/search-who-accepts-toefl</a>
            </Link>{" "}
            .Treća opcije jeste da pronadjete agencije za studije u inostranstvu
            i da kod njih dodjete do potrebnih informacija. U Beogradu postoji
            par popularnih i iskusnih agencija, pa biste mogli da se obratite i
            njima za konkretnije informacije. Najsigurniji put do potrebnog
            broja bodova, iz iskustva naših polaznika je da se detaljno
            informišete o testu, utvrdite svoj nivo znanja engleskog, saznate
            koliko vam je poena potrebno i bacite se na posao – TOEFL jeste
            težak i zahteva posvećen rad. Ako imate dodatnih pitanja, ostavite
            nam poruku{" "}
            <Link href="/kontakt">
              <a>ovde</a>
            </Link>{" "}
            .
          </p>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default Questions;
