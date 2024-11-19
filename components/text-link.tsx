import { LinkProps as NextLinkProps } from "next/link";
import TextBorderAnimation from "./animata/text/text-border-animation";
import Link from "next/link";

type LinkProps = NextLinkProps & {
  text: string;
  className?: string;
};

const FooterLink = ({ text, ...props }: { text: string } & LinkProps) => {
  return (
    <Link {...props}>
      <TextBorderAnimation
        text={text}
        className="text-base font-semibold leading-6"
      />
    </Link>
  );
};

export default FooterLink;
