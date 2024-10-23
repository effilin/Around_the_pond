import Image from "next/image";
import styles from "./page.module.css";
import Sky from "./_components/Sky";

export default function Home() {
  return (
    <div>
      <h1> Welcome</h1>
      <div className="skyBox">
        <Sky/>
      </div>
   
    </div>
  );
}
