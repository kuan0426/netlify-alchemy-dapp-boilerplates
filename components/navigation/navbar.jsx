import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="https://i.seadn.io/gae/ZFwSEkFGjvZUF6H51whQekBEi7tgxgh42WwNcCHTFYFsWH35P6iueCinhZzN_GuD5EBG6nXkvC13ADPvN9T6zR7OEQJ_tb0Q2J4?auto=format&dpr=1&w=90"></img>
			</a>
			<ConnectButton label="Sign in"></ConnectButton>
		</nav>
	);
}
