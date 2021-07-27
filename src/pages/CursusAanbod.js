import styles from './CursusAanbod.module.css';
import HeaderText from "../components/HeaderText";
import {useState} from 'react';
import puppy from '../assets/pictures/puppy.jpg';
import eg1 from '../assets/pictures/eg1.jpg';
import eg2 from '../assets/pictures/eg2.jpg';
import eg3 from '../assets/pictures/eg3.jpg';
import fun from '../assets/pictures/fun.jpg';
import Button from "../components/Button";
import RegisterForm from "../components/RegisterForm";

export default function CursusAanbod() {
    const data = require('../data/cursusaanbod.json');
    const images = {puppy, eg1, eg2, eg3, fun};
    const [image, setImage] = useState(images.puppy);
    const [content, setContent] = useState("puppy");
    const [form, toggleForm] = useState(false);

    function imageClick() {
        window.open(image)
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <HeaderText text="Cursus aanbod"/>
            </div>
            <div className={styles["cursus-center"]}>
                <div className={styles["cursus-center-menu"]}>
                    <ul>
                        <li className={content === "puppy" ? styles["cursus-center-menu-list-active"] : null}
                            onClick={() => setContent("puppy") & setImage(images.puppy)}>
                            Puppy cursus
                        </li>
                        <li className={content === "eg1" ? styles["cursus-center-menu-list-active"] : null}
                            onClick={() => setContent("eg1") & setImage(images.eg1)}>
                            EG1
                        </li>
                        <li className={content === "eg2" ? styles["cursus-center-menu-list-active"] : null}
                            onClick={() => setContent("eg2") & setImage(images.eg2)}>
                            EG2
                        </li>
                        <li className={content === "eg3" ? styles["cursus-center-menu-list-active"] : null}
                            onClick={() => setContent("eg3") & setImage(images.eg3)} >
                            EG3
                        </li>
                        <li className={content === "fun" ? styles["cursus-center-menu-list-active"] : null}
                            onClick={() => setContent("fun") & setImage(images.fun)}>
                            Fun cursus (hoopers)
                        </li>
                    </ul>
                </div>
                <div className={styles["cursus-center-content"]} style={{fontSize: content === "eg3" || "fun" ? "0.44em" : "0.47em"}}>
                    <h1>{data[content].title}</h1>
                    <p>{data[content].content}</p>
                    <div className={styles["cursus-center-content-list-image"]}
                         style={{justifyContent: !data[content].list && "center"}}>
                        <ul className={styles["cursus-center-content-list"]}
                            style={{width: !data[content].list && "0%"}}>
                            {data[content].list && data[content].list.map((listItem, key) => {
                                return (
                                    <li key={key}>{listItem}</li>)
                            })}
                        </ul>
                        <div className={styles["cursus-center-content-image"]}
                             style={{width: !data[content].list && "40%"}}>
                            <img
                                onClick={() => imageClick()}
                                src={image}
                                role="button"
                                style={{width: !data[content].list && "70%"}}
                                tabIndex="0"/>
                        </div>
                    </div>
                    <p>{data[content].duration}</p>
                    <h2>Prijs: {data[content].cost}</h2>
                    <div className={styles.form}>
                        <RegisterForm
                            content={content}
                        />
                    </div>
                    <div className={styles["cursus-center-register"]}>
                        <button className={styles["cursus-center-button"]} type="button"> Inschrijven</button>
                    </div>
                </div>
            </div>
        </div>

    )
}