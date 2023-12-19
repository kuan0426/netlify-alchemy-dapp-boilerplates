import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      < link rel="icon" href="https://www.webdesigns.com.tw/images/logo.ico" type="image/x-icon" / >
      <main className={styles.main}>
        <InstructionsComponent>123456</InstructionsComponent>
        Hi
      </main>
    </div>
  );
}
