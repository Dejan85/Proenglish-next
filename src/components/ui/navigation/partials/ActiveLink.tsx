import { useRouter } from "next/router";
const activeClassName: string = "active";
const linkClassName: string = "navigation__link";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const className =
    router.asPath === href
      ? `${activeClassName} ${linkClassName}`
      : linkClassName;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ActiveLink;
