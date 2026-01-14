import { useRef, useEffect } from "react";
import styles from './ErrorSummary.module.css'

function ErrorSummary({ errors }) {
    const summaryRef = useRef(null);

    useEffect(() => {
        // Set focus when errors are present
        summaryRef.current?.focus();
    }, [errors]);
    
    return (
        /* eBay: role="region" to create significant landmark for users to find */
        <div className={styles.container} ref={summaryRef} tabIndex="-1" role="region" aria-labelledby="error-summary-title">
            <h2 className={styles.heading} id="error-summary-title">
                {Object.keys(errors).length === 1 
                    ? "There is a problem" 
                    : `There are ${Object.keys(errors).length} problems`}.
            </h2>
            <ol className={styles.list}>
                {Object.entries(errors).map(([fieldId, message]) => (
                    <li key={fieldId}>
                        <a href={`#${fieldId}`}>{message}</a>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ErrorSummary;