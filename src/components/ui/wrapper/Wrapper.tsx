import { WrapperProps } from "./types";

const Wrapper: React.FC<WrapperProps> = ({
  as = "div",
  className,
  children,
  style,
}): JSX.Element => {
  const Wrapper: keyof JSX.IntrinsicElements = as;
  return (
    <Wrapper style={style} className={className}>
      {children}
    </Wrapper>
  );
};

export default Wrapper;
