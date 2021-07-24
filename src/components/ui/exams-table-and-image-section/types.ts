export interface ExamsTableAndImageSectionProps {
  content: {
    text: string;
    img: StaticImageData;
    table: {
      theader: string[];
      rows: string[][];
    };
    styles: {
      headerStyles: { background: string; color: string };
      rowStyles: { background: string; color: string };
    };
  };
}
