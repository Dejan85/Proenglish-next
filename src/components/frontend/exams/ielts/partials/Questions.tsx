import {
  Container,
  ContentContainer,
  Heading,
  SubContainer,
} from "src/components/ui";
import React from "react";
import Link from "next/link";

const Questions: React.FC = (): JSX.Element => {
  return (
    <Container className="toefl__questions">
      <SubContainer className="toefl">
        <Heading className="toefl__questions-heading" as="h3">
          Česta pitanja
        </Heading>
        <p className="toefl__questions-text">
          Koliko dugo važi sertifikat o položenom IELTS testu i koliko puta mogu
          da polažem? Sertifikat o položenom IELTS testu važi 2 godine, a test
          možete polagati i više puta, tj. dok ne dobijete potreban rezultat.
        </p>
        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Koliko dugo traju pripreme za IELTS test?
          </Heading>
          <p className="toefl__questions-text">
            Na ovo pitanje ne postoji univerzalan odgovor: ako ste čuli
            suprotno, verovatno ste pitali na pogrešnom mestu. Vreme potrebno za
            pripremu se određuje nakon što se uradi procena vašeg trenutnog
            aktivnog znanja engleskog (Speaking), vaša tačnost u izradi pasivnog
            dela testa (Listening i Reading) i vaše veštine pisanja na engleskom
            (Writing). Nažalost, samo na osnovu usmenog testiranja i provere
            znanja gramatike ne može se reći koliko ćete dobro uraditi test.
            Zbog nepotpunih procena se često dešava da ljudi prijave ispit,
            plate prijavu i ne dobiju zadovoljavajuću ocenu. Zato je bitno da
            imate surovo realnu sliku svog znanja i da radite dok objektivno ne
            ostvarite potreban napredak. U zavisnosti od iskustva sa engleskim,
            samopouzdanja, godina i brzine u učenju, za pripremu će vam biti
            potrebno određeno vreme. Mi imamo iskustva sa polaznicima koje smo
            uspeli da spremimo za potrebnu ocenu za 3 nedelje, a i sa onima
            kojima je bilo potrebno 5 i više meseci. Mnogo zavisi od vaše
            polazne tačke, vremena i kapaciteta koje imate za učenje engleskog,
            kao i potrebne ocene. Besplatne konsultacije mogu da vam pomognu da
            shvatite koliko vas koraka i vremena dele od polaganja IELTS i
            studija ili migracije. Agencije sa kojima naši učenici uspešno
            sarađuju su ovlašćena agencija u Australiji{" "}
            <Link href="https://www.australianaserba.com/jelena-kis">
              <a>https://www.australianaserba.com/jelena-kis</a>
            </Link>{" "}
            za ostatak sveta.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Kako, kada i gde se prijavljujem za IELTS?
          </Heading>
          <p className="toefl__questions-text">
            Prijava za IELTS test se vrši preko sajta Britanskog saveta, a na
            ovom linku:{" "}
            <Link href="https://www.britishcouncil.rs/exam/ielts/dates-fees-locations">
              <a>
                https://www.britishcouncil.rs/exam/ielts/dates-fees-locations
              </a>
            </Link>{" "}
            Proces prijave je jednostavan i potrebno je da pratite uputstva na
            linku korak po korak. Uplatu možete da izvršite online jednom od
            kartica za online plaćanje ili lično u Britanskom savetu. Neophodno
            je da ispit prijavite i uplatite 5 nedelja pre samog polaganja.
            Prijava je moguća i kasnije, pod uslovom da ima slobodnih mesta za
            polaganje. IELTS test se održava barem jednom mesečno na papiru, a 2
            ili više puta online. Cena je 26.000,00 dinara, a novac uplaćujete
            Britanskom savetu koji je ovlašćeni centar za IELTS testiranje.Ovo
            je novac koji ne uplaćujete nijednoj školi, već Britanskom savetu
            koji je ovlašćeni centar za IELTS testiranje. U zavisnosti od broja
            prijavljenih, British Council organizuje polaganje IELTS test na
            nekoj od svojih lokacija za polaganje. Najčešće se IELTS test polaže
            u Sava centru, a zvanično obaveštenje o mestu i satnici će stići na
            vaš mejl 10ak dana pre samog polaganja.Naš savet je da polažete kada
            ste spremni, a mi Vam možemo pomoći da odredite datum besplatnim
            konsultacijama (prijaviti se{" "}
            <Link href="/kontakt">
              <a>ovde</a>
            </Link>{" "}
            ).
          </p>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default Questions;
