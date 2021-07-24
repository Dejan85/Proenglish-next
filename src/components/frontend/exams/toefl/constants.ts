import toeflImg from "public/exams/exams-nav-page/toefl.jpg";
import gmatImg from "public/exams/exams-nav-page/GMAT.jpg";

export const headingContent = {
  h1: "TOEFL test",
  text: "TOEFL je test znanja engleskog i procenjuje vašu sposobnost da pratite nastavu na engleskom jeziku i da u njoj aktivno učestvujete. Zbog jezika i svrhe, TOEFL se naziva akademskim testom. Radi se o computer-based testu i svaki od delova se radi u posebnom softveru: čak i Speaking deo radite tako što govorite i snimate svoje odgovore, bez sagovornika naspram koga biste sedeli. Zbog toga se TOEFL često naziva i TOEFL Ibt testom, što je skraćenica za Internet Based Test, to je u suštini drugi naziv za isti međunarodni test.TOEFL test je namenjen studentima koji:a) žele da nastave osnovne studije u inostranstvub) upisuju osnovne studije u inostranstvu pa pored SAT testa treba da polažu i TOEFL ili IELTSc) žele da upišu master studije u inostranstvu. Dobro je znati da će vam za upis na biznis ili master studije u oblasti ekonomije biti potreban i GMAT ili GRE test",
  image: toeflImg,
  styles: { background: "#f69059", color: "#f69059" },
};

export const tableSectionContent = {
  tableTitle:
    "Tabela ispod prikazuje od čega se sastoji ispit, a najteži delovi ispita iz iskustva naših studenata su Reading i Speaking delovi ispita.",
  table: {
    theader: ["Deo ispita", "Trajanje", "Broj pitanja / zadataka"],
    rows: [
      ["Reading", "54-72 minuta", " 30-40 pitanja"],
      ["Listening", "41-57 minuta", "28-39 pitanja"],
      ["Pauza", "10 minuta", "--"],
      ["Speaking", "17 minuta", "4 zadatka"],
      ["Writing", "50 minuta", "2 zadatka"],
    ],
  },
  styles: {
    headerStyles: { background: "#f69059", color: "white" },
    rowStyles: { background: "#ffd096", color: "white" },
  },
};

export const tableAndImageSectionContent = {
  text: "Broj poena koji možete da ostvarite na TOEFL testu je maksimalno 120, tj. po 30 na svakom od delova. U zavisnosti od toga da li upisujete osnovne ili master studije, biće potrebno da ostvarite od 79 do 110 poena na TOEFL testu. Najlakši način da precizno i konkretno procenite svoje znanje u odnosu na TOEFL test su besplatne konsultacije. Na taj način eliminišete rizik i odgovorno pristupate svom budućem školovanju. Tabela ispod prikazuje koliko poena možete da dobijete u proseku u zavisnosti od trenutnog nivoa znanja.",
  img: gmatImg,
  table: {
    theader: ["CEFR skala", "TOEFL"],
    rows: [
      ["C2 - Proficiency", "110-120"],
      ["C1 - Advanced", "79-114"],
      ["B2 - Upper-intermediate", "53-93"],
      ["B1 - Intermediate", "35-64"],
      ["A2 - Pre-intermediate", "30-34"],
      ["A1 - Elementary", "0-30"],
    ],
  },
  styles: {
    headerStyles: { background: "#f69059", color: "white" },
    rowStyles: {
      background: "#feefe7",
      color: "black",
      borderTop: "2px solid #ffd096",
      borderBottom: "2px solid #ffd096",
      padding: "2rem 0 2rem 2rem",
    },
  },
};
