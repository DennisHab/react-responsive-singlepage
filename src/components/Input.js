import styles from './Input.module.css'
import {useForm} from "react-hook-form";

export default function Input({id, name, validation, type, text}){
    const { register, handleSubmit, formState: { errors } } = useForm();
    return(
        <label htmlFor={id}>
            {text}
            <div className={styles.error}>{errors?.name?.message} </div>
            <input
                className={styles.input}
                name={name}
                id={id}
                type={type}

                />
        </label>
    )
}