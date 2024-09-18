import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import NFTGallery from '../components/NFT_Gallery';




export default function Home() {
  return (
    <div>
      <h1>歡迎來到我的 DApp</h1>
      <p>這是首頁的介紹段落。</p>
      < link rel="icon" href="https://i.seadn.io/gae/ZFwSEkFGjvZUF6H51whQekBEi7tgxgh42WwNcCHTFYFsWH35P6iueCinhZzN_GuD5EBG6nXkvC13ADPvN9T6zR7OEQJ_tb0Q2J4?auto=format&dpr=1&w=90" type="image/x-icon" / >
      <main className={styles.main}>
        <NFT_Gallery />
        <InstructionsComponent>123456</InstructionsComponent>
        Hi
      </main>
    </div>
  );
}
