import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="https://gravatar.com/userimage/157602719/354ab170de7bc9e413cf26172b6473bc.jpeg?size=256"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
