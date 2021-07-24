export interface ExamsTableSectionProps {
  content: {
    tableTitle: string;
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
