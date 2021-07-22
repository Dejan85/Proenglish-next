export interface WrapperProps {
  children: JSX.Element | JSX.Element[] | string | number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: object;
}
