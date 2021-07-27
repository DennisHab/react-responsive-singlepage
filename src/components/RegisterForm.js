import {useForm} from "react-hook-form";
import styles from './RegisterForm.module.css';
import Input from "./Input";
import Button from "./Button";

export default function RegisterForm({content}){
    const { register, handleSubmit, formState: { errors } } = useForm();
    return(
        <fieldset className={styles.container}>
            <form>
                <label htmlFor="form-name">
                    Naam:
                    <div className={styles.error}>{errors?.name?.message} </div>
                    <input
                        name="name"
                        id="form-name"
                        type="text"
                    />
                </label>
                <Button type="submit" text="Inschrijven"/>
            </form>
        </fieldset>
    )
}