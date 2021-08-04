import {useForm} from "react-hook-form";
import styles from './RegisterForm.module.css';
import Button from "./Button";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";

export default function RegisterForm({content, startDate}) {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const courseData = require('../data/cursusaanbod.json');

    async function onSubmit(data) {

    }

    return (
        <fieldset className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label className={styles.label} htmlFor="cursus">
                    Cursus:
                    <div className={styles.error}>{errors?.cursus?.message} </div>
                    <input
                        name="cursus"
                        disabled="true"
                        id="cursus-name"
                        type="text"
                        value={capitalizeFirstLetter(content) + " cursus"}
                        {...register("cursus")}
                    />
                </label>
                <label className={styles.label} htmlFor="form-name">
                    Naam:
                    <div className={styles.error}>{errors?.name?.message} </div>
                    <input
                        name="name"
                        id="form-name"
                        type="text"
                        {...register("name", {required: "Dit veld is verplicht"})}
                    />
                </label>
                <label className={styles.label} htmlFor="email">
                    E-mail:
                    <div className={styles.error}>{errors?.name?.message} </div>
                    <input
                        name="eMail"
                        id="email"
                        type="email"
                        {...register("email", {required: "Dit veld is verplicht"})}
                    />
                </label>
                <label className={styles.label} htmlFor="pet-name">
                    Naam hond:
                    <div className={styles.error}>{errors?.petName?.message} </div>
                    <input
                        name="petName"
                        id="pet-name"
                        type="text"
                        {...register("petName", {required: "Dit veld is verplicht"})}
                    />
                </label>
                {courseData[content].startDates &&
                <label className={styles.label} htmlFor="start-date">
                    Start datum:
                    <div className={styles.error}>{errors?.date?.message} </div>
                    <select
                        id="start-date"
                        name="date"
                        size={courseData[content].startDates.length}
                        {...register("date", {required: "Dit veld is verplicht"})}
                    >
                        {courseData[content].startDates.map((date) => {
                            return (
                                <option value={date}>{date}</option>
                            )
                        })}
                    </select>
                </label>}
                <Button id={styles.button} type="submit" text="Inschrijven"/>
            </form>
        </fieldset>
    )
}