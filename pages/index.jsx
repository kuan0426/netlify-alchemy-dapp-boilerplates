import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      < link rel="icon" href="https://i.seadn.io/gae/ZFwSEkFGjvZUF6H51whQekBEi7tgxgh42WwNcCHTFYFsWH35P6iueCinhZzN_GuD5EBG6nXkvC13ADPvN9T6zR7OEQJ_tb0Q2J4?auto=format&dpr=1&w=90" type="image/x-icon" / >
      <main className={styles.main}>
        <InstructionsComponent>123456</InstructionsComponent>
        Hi
      </main>
    </div>
  );
}
