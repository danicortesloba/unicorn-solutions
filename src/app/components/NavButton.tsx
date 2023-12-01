import Link from "next/link";
import styles from "./navbutton.module.css";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { UrlObject } from "url";

const NavButton = (props: { path: string | UrlObject; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
  <Link href={props.path}>
    <div className={styles.NavButton}>
      <span className={styles.Label}>{props.label}</span>
    </div>
  </Link>
);

export default NavButton;