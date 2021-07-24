export interface ExamsTableProps {
  [x: string]: any;
  TheaderContainer: any;
  children: JSX.Element | JSX.Element[];
  ExamsTable: { TheaderContainer: JSX.Element };
}

export interface TableTheaderProps {
  children: number | string;
  style?: {};
}
