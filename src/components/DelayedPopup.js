// components/DelayedPopup.js

import React, { useState, useEffect } from 'react';
import styles from '../styles/DelayedPopup.module.css';

const POPUP_DELAY_MS = 2000; // 2 seconds delay
// 💡 CHANGED KEY to reflect using sessionStorage
const HAS_SEEN_POPUP_KEY = 'hasSeenPopupSession';

const DelayedPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only run logic on the client side (in the browser)
        if (typeof window !== 'undefined') {
            // 💡 USING sessionStorage INSTEAD OF localStorage
            const hasSeen = sessionStorage.getItem(HAS_SEEN_POPUP_KEY);

            if (!hasSeen) {
                // Set a timeout to show the popup after the specified delay
                const timer = setTimeout(() => {
                    setIsVisible(true);
                    // Mark as seen in sessionStorage
                    // This data is cleared when the tab/window is closed.
                    sessionStorage.setItem(HAS_SEEN_POPUP_KEY, 'true');
                }, POPUP_DELAY_MS);

                // Cleanup function
                return () => clearTimeout(timer);
            }
        }
    }, []);

    const closePopup = (e) => {
        e.preventDefault();
        setIsVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ⚠️ TODO: Add your actual form submission logic here (e.g., API call)
        console.log('Newsletter Form Submitted!');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <button className={styles.closeButton} onClick={closePopup}>
                    &times;
                </button>
                <div className={styles.popupHeader}>
                    <h3>Fuel Your Journey to Success!</h3>
                    <p>Join our mailing list for exclusive study tips & academic insights.</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.popupForm}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className={styles.formInput}
                    />
                    <button type="submit" className={styles.formSubmitBtn}>
                        Subscribe Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DelayedPopup;