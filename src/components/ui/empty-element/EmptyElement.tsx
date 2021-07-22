import { EmptyElementProps } from "./types";

const EmptyElement: React.FC<EmptyElementProps> = ({
  as = "div",
  className,
  style = {},
}): JSX.Element => {
  const Wrapper: keyof JSX.IntrinsicElements = as;
  return <Wrapper style={style} className={className} />;
};

export default EmptyElement;
