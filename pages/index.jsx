import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      < link rel="icon" href="https://gravatar.com/userimage/157602719/354ab170de7bc9e413cf26172b6473bc.jpeg?size=50" type="image/x-icon" / >
      <main className={styles.main}>
        <InstructionsComponent>123456</InstructionsComponent>
        Hi
      </main>
    </div>
  );
}
