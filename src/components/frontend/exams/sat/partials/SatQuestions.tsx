import {
  Container,
  ContentContainer,
  Heading,
  SubContainer,
} from "src/components/ui";
import React from "react";
import Link from "next/link";

const SatQuestions: React.FC = (): JSX.Element => {
  return (
    <Container className="toefl__questions">
      <SubContainer className="toefl">
        <Heading className="toefl__questions-heading" as="h3">
          Česta pitanja
        </Heading>
        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Gde i kada mogu da polažem SAT ispit?
          </Heading>
          <p className="toefl__questions-text">
            U Beogradu se SAT trenutno održava na tri lokacije, od kojih je prva
            i najpopularnija Međunarodni akademski centar. U zavisnosti od broja
            prijavljenih učenika za polaganje SAT ispita, u Beogradu se otvaraju
            i drugi centri. SAT možete da polažete samo u centrima koji imaju
            licencu i dozvolu College Boarda da organizuju polaganje. College
            Board je organizacija zadužena na svetskom nivou za sve u vezi sa
            SAT ispitom. Što se tiče datuma polaganja, pogledajte na našem{" "}
            <Link href="/dogadjaji">
              <a>kalendaru</a>
            </Link>{" "}
            ili na zvaničnoj stranici College Board-a{" "}
            <Link href="https://collegereadiness.collegeboard.org/?uid=bbe381a3-b57c-469c-b2b7-82a3be054d9b">
              <a>
                https://collegereadiness.collegeboard.org/?uid=bbe381a3-b57c-469c-b2b7-82a3be054d9b
              </a>
            </Link>{" "}
            . Iako svaki rok ima tačno naznačen datum do kog treba da se
            prijavite za test, naša preporuka je da prijavu uradite dva meseca
            ranije jer je u Beogradu velika gužva i većina termina su već
            unapred popunjeni, pošto je Beograd jedini grad u Srbiji gde možete
            da polažete SAT. Ako ne želite da razmišljate o tome da ćete možda
            morati da polažete van Srbije, prijavite se ranije: mesta se
            popunjavaju velikom brzinom. Ipak, ukoliko su sva mesta za polaganje
            SAT ispita u Beogradu popunjena, ne brinite. Na svu sreću, države iz
            našeg okruženja takođe organizuje polaganje SAT ispita, tako da
            možete test da polažete u Podgorici, Sarajevu ili Zagrebu. Ovo može
            da ima svojih prednosti: van Beogradu uglavnom nema prevelike gužve
            tako da ćete možda biti pod manjim pritiskom uprkos logističkim
            poteškoćama u organizaciji prevoza.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Kako da se prijavite za SAT test?
          </Heading>
          <p className="toefl__questions-text">
            Prijava za SAT se vrši online, preko interneta, na sledećem linku:{" "}
            <Link href="https://collegereadiness.collegeboard.org/?uid=bbe381a3-b57c-469c-b2b7-82a3be054d9b">
              <a>
                https://collegereadiness.collegeboard.org/?uid=bbe381a3-b57c-469c-b2b7-82a3be054d9b
              </a>
            </Link>{" "}
            . Nemojte da brinete, prijava je dovoljno jednostavna da možete sami
            da je uradite. Kada kliknete na link, videćete uputstva. Za početak
            je potrebno da kreirate nalog, kao što biste radili i na društvenim
            mrežama, a onda kreće registracija koja se odvija korak po korak. U
            toku registracije će se od vas tražiti da popunite par upitnika u
            vezi sa predmetima i ocenama koje ste imali u srednjoj školi. Bitno
            je da znate da se ove informacije ne šalju dalje, fakultetima na
            kojima ćete studirati, već je u pitanju interna anketa College
            Boarda koji želi da ima uvid u profil učenika radi statističkih
            podataka. Poslednji korak u prijavi je plaćanje testa. Ispit se
            plaća karticama za elektronsko plaćanje u inostranstvu kao što su
            Visa, PayPal i slične. Servis je potpuno bezbedan i ne treba da
            brinete o zaštiti podataka.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Da li da polažem SAT ili SAT Subject test?
          </Heading>
          <p className="toefl__questions-text">
            U većini slučajeva fakulteti i koledži traže da imate položen SAT.
            SAT Subject test traže pojedini koledži i najbolje je da stupite sa
            njima u kontakt ili da istražite na sajtovima da li vam je potreban
            Subject test. On se polaže iz matematike, fizike, biologije, hemije
            i stranih jezika, ali najčešće vam neće biti potreban. Počevši od
            2021 Subject test je ukinut za studente iz Amerike, dok će za
            učenike koji se prijavljuju iz drugih zemalja biti atkuelan do kraja
            2021.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Koliko puta mogu da polažem SAT?
          </Heading>
          <p className="toefl__questions-text">
            SAT test možete da polažete neograničen broj puta, a svome fakultetu
            šaljete najbolji skor. To što ste više puta polagali SAT neće
            negativno uticati na vaše šanse za upis na fakultet.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Koliko dugo važe rezultati SAT ispita?
          </Heading>
          <p className="toefl__questions-text">
            Strogo govoreći, rezultati SAT testa ne mogu da isteknu, ali potpuno
            je logično da nećete napraviti pauzu od pet godina nakon srednje
            škole i onda se vratiti na osnovne studije. SAT je najbolje da
            polažete par meseci pre samog upisa na osnovne studije.
          </p>
        </ContentContainer>

        <ContentContainer className="toefl__questions-text-container">
          <Heading as="h5" className="toefl__questions-heading--h5">
            Kada da počnete sa pripremama?
          </Heading>
          <p className="toefl__questions-text">
            Ne postoji univerzalan recept koji važi za svakog srednjoškolca, jer
            je svačije znanje engleskog različito, a i nije potreban svima isti
            broj poena. Najbolje je da se o SAT ispitu informišete u toku treće
            godine srednje škole kako biste dobili procenu svog znanja, a sa
            pripremama možete da počnete u drugom polugodištu treće godine ili u
            toku leta pre početka četvrtog razreda da biste sebi ostavili
            dovoljno vremena da izađete na test i drugi put ako prvi put ne
            dobijete dovoljno poena. Ako imate dodatnih pitanja, ostavite nam
            poruku{" "}
            <Link href="/dogadjaji">
              <a>ovde</a>
            </Link>{" "}
            .
          </p>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default SatQuestions;
