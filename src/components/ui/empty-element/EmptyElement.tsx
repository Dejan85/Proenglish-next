import { EmptyElementProps } from "./types";

const EmptyElement: React.FC<EmptyElementProps> = ({
  as = "div",
  className,
}): JSX.Element => {
  const Wrapper: keyof JSX.IntrinsicElements = as;
  return <Wrapper className={className} />;
};

export default EmptyElement;
