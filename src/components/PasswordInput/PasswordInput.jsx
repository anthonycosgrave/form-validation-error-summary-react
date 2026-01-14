import { useState } from "react";
import styles from "./PasswordInput.module.css";

function PasswordInput({
    id,
    value,
    requirements,
    onChange,
    error
}) {
    const [showPassword, setShowPassword] = useState(false);
    const describedBy = error ? `${id}-error ${id}-requirements` : `${id}-requirements`;

    return (
        <div>
            <label htmlFor={id}>Password</label>
            <div className={styles.inputWrapper}>
                <input
                    id={id}
                    name={id}
                    type={showPassword ? "text" : "password"}
                    value={value}
                    autoComplete="new-password"
                    spellCheck="false"
                    autoCapitalize="off"
                    onChange={onChange}
                    aria-invalid={error ? "true" : "false"}
                    aria-describedby={describedBy}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            <div className="visually-hidden" aria-live="polite">
                {showPassword ? "Your password is visible" : "Your password is hidden"}
            </div>
            {error && (
                <div id={`${id}-error`}>
                    <svg aria-hidden="true" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
                    </svg>
                    {error}
                </div>
            )}
            <div className={styles.requirements}>
                <p>Your password should have: </p>
                {/* 
                    removed list-style-type to stop NVDA announcing "bullet" before each <li>
                    for more: https://a11ysupport.io/tests/tech__html__ul
                */}
                {/* <ul role="list"> */}
                <ul>
                    {requirements.map((req, idx) => <li key={idx}>{req}.</li>)}
                    <li>At least one special character, for example, <span aria-hidden="true"> ! @ # ? ].</span><span className="visually-hidden"> exclamation mark, at sign, hash, question mark, bracket.</span></li>
                </ul>
            </div>
        </div>
    )
};

export default PasswordInput;