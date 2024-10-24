import Image from "next/image";
import styles from "./page.module.css";
import Sky from "./_components/Sky";
import Pond from "./_components/Pond";

export default function Home() {
  return (
    <div>
      <div className="skyBox">
        <Sky>
          <Pond />
        </Sky>
      

      </div>
   
    </div>
  );
}
