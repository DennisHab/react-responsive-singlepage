import styles from './OverOns.module.css';
import Sally from '../assets/pictures/foto-sally.jpg';
import Michelle from '../assets/pictures/foto-michelle.jpg';
import HeaderText from "../components/HeaderText";

export default function OverOns(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <HeaderText text="Over ons"/>
            </div>
            <div className={styles["team-overlay"]}>
                <div className={styles.team}>
                    <div className={styles["team-card-one"]}>
                        <div className={styles["card-image-one"]}>
                            <img src={Sally}/>
                        </div>
                        <div className={styles["card-description-one"]}>
                            <h1 className={styles["card-description-header"]}>Sally Vromen</h1>
                            <h2 className={styles["card-description-sub"]}> Instructrice</h2>
                            <p className={styles["card-description-text"]}>
                                Mijn naam is Sally Vromen en woon samen met mijn partner Patrick Janssen en ons zoontje Senn.  Wij zijn in het bezit van 1 Labrador Retriever, 1 Bouvier, een Husky/Samojeed mix en een Boomertje.
                            </p>
                            <p className={styles["card-description-text"]}>
                                Een aantal jaar geleden heb ik samen met Diana Franssen - Wellens de Hondenschool Outdoor Retriever Trainingen opgericht. Helaas is Diana eind 2014  gestopt en heb ik de hondenschool voortgezet. In 2018 is de naam verandert in Hondenschool Tip Top .
                            </p>
                            <p className={styles["card-description-text"]}>
                                Ten opzichte van vele andere hondenscholen trainen wij met kleinere groepen waardoor wij individueel meer aandacht kunnen bieden , de lessen zijn variërend en gezellig . Daarnaast  staat bij ons 'trainen met plezier' voorop !
                            </p>
                        </div>
                    </div>
                    <div className={styles["team-card-two"]}>
                        <div className={styles["card-image-two"]}>
                            <img src={Michelle}/>
                        </div>
                        <div className={styles["card-description-two"]}>

                            <h1 className={styles["card-description-header"]}> Michelle van der Beek </h1>
                            <h2 className={styles["card-description-sub"]}> Instructrice</h2>
                            <p className={styles["card-description-text-two"]}>
                                Hallo ik ben Michelle van der Beek. Van kleins af aan heb ik het honden virus al te pakken. En toen de kansen zich voordeden, om mij beter in deze mooie dieren te verdiepen, heb ik deze met beide handen aangepakt. Tijdens Mijn studie dier & management heb ik mij verdiept in de honden, hierbij heb ik mijn Honden Besluit behaald. Na deze opleiding ben ik begonnen aan mijn papiertje voor honden instructeur. Ik wil altijd graag meer leren over honden en blijf daarom cursussen volgen in het trainen en het gedrag van de hond.
                            </p>
                            <p className={styles["card-description-text-two"]}>
                                Tijdens mijn studie heb ik mijn allereerste hondje gekocht. Tyson mijn keeshond kruising. Ik heb heel veel cursussen met hem gevolgd. Hij is echt mijn maatje, ik kan lezen en schrijven met hem. Met Ty doe ik nu nog veel trainingen hij heeft er altijd veel plezier in, ondanks dat hij een jaartje ouder aan het worden is.
                            </p>
                            <p className={styles["card-description-text-two"]}>
                                Na een aantal jaartjes is Aiko ons gezin komen versterken hij is een dalmatiër. Aiko is er gekomen, omdat ik serieuzer met een hond aan gehoorzaamheid wou beginnen. Ty is daar niet de geschikte hond voor, daar doe ik hem geen plezier mee. En dan denkt u een dalmaat en geen herder? Jazeker ik hou erg van een uitdaging en daarom heb ik voor Aiko gekozen.
                            </p>
                            <p className={styles["card-description-text-two"]}>
                                Vanaf September 2018 kom ik Hondenschool Tip Top versterken
                                Hopelijk tot snel!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}