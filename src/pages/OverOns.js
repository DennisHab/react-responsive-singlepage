import styles from './OverOns.module.css';
import Sally from '../assets/pictures/foto-sally.jpg';
import Michelle from '../assets/pictures/foto-michelle.jpg';
import HeaderText from "../components/HeaderText";

export default function OverOns({overOns}){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <HeaderText text="Over ons"/>
            </div>
            <div className={styles["team-overlay"]}>
                <div className={styles.team}>
                    {overOns ? <>
                    <div className={styles["team-card-one"]}>
                        <div className={styles["card-image-one"]}>
                            <img src={Sally}/>
                        </div>

                        <div className={styles["card-description-one"]}>
                            <h1 className={styles["card-description-header"]}>{overOns[0].name}</h1>
                            <h2 className={styles["card-description-sub"]}> {overOns[0].function}</h2>
                            <p className={styles["card-description-text"]}>
                                {overOns[0].description}
                            </p>
                        </div>
                    </div>
                    <div className={styles["team-card-two"]}>
                        <div className={styles["card-image-two"]}>
                            <img src={Michelle}/>
                        </div>
                        <div className={styles["card-description-two"]}>

                            <h1 className={styles["card-description-header"]}> {overOns[1].name} </h1>
                            <h2 className={styles["card-description-sub"]}> {overOns[1].function}</h2>
                            <p className={styles["card-description-text-two"]}>
                                {overOns[1].description}
                            </p>
                        </div>

                    </div></> : <h1>Loading</h1>}
                </div>
            </div>
        </div>
    )
}