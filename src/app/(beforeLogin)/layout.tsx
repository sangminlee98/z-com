import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Props = { children: ReactNode };
export default function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
