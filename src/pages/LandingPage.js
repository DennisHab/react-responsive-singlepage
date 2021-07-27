import Logo from "../components/Logo";
import TopMenu from "../components/TopMenu";
import Puppy from "../assets/pictures/puppy-transparant-background.png";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={styles["landing-page"]}>
            <header className={styles["landing-page-header"]}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles["menu-big"]}>
                    <TopMenu
                        children={
                            <>
                                <li><a href="#over-ons">Over ons</a></li>
                                <li><a href="#cursus-aanbod">Cursusaanbod</a></li>
                                <li>Agenda</li>
                                <li>Nieuws</li>
                                <li>Contact</li>
                            </>
                        }
                    />
                </div>
            </header>
            <div className={styles["landing-page-center"]}>
                <div className={styles["landing-page-text"]}>
                    <p id={styles["landing-page-text-top"]}> De hondenschool <br/> met een persoonlijke aanpak</p>
                    <p id={styles["landing-page-text-bottom"]}>Bij tip top wordt er in kleinere groepen gewerkt
                        waardoor iedere hond de aandacht krijgt die
                        hij verdient. Bekijk snel het cursusaanbod!</p>
                </div>
                <div className={styles["landing-page-picture"]}>
                    <img src={Puppy}/>
                </div>
            </div>
        </div>)
}