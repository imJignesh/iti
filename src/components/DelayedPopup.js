// components/DelayedPopup.js

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/navigation";

// IMPORTANT: Update this path to where PopupContext is exported from (_app.js)
import { PopupContext } from '../pages/_app';

import Image from '@/components/CustomImageWrapper';
const POPUP_DELAY_MS = 10000;
const HAS_SEEN_POPUP_KEY = 'hasSeenPopupSession';

const DelayedPopup = () => {
    // 1. Consume context for manual trigger state and its close function
    const { isManualOpen, closeManualPopup } = useContext(PopupContext);

    const router = useRouter();

    // Renamed original state to track only the delayed visibility
    const [isDelayedVisible, setIsDelayedVisible] = useState(false);
    const [pageInfo, setPageInfo] = useState('');

    const isVisible = isDelayedVisible || isManualOpen;

    // ... (rest of existing form data state)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        curriculum: "International Baccalaureate (IB)", // Set initial value here
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasSeen = sessionStorage.getItem(HAS_SEEN_POPUP_KEY);

            if (!hasSeen) {
                const timer = setTimeout(() => {
                    setIsDelayedVisible(true);
                    sessionStorage.setItem(HAS_SEEN_POPUP_KEY, 'true');
                }, POPUP_DELAY_MS);

                const url = window.location.href;
                const title = window.document.title || window.location.pathname;
                setPageInfo(`URL: ${url} | Title/Path: ${title}`);


                return () => clearTimeout(timer);
            }

            // Get page info on client side load even if popup is suppressed
            const url = window.location.href;
            const title = window.document.title || window.location.pathname;
            setPageInfo(`URL: ${url} | Title/Path: ${title}`);
        }
    }, []);

    const closePopup = (e) => {
        if (e) e.preventDefault();

        if (!loading) {
            // Close the internal delayed state
            setIsDelayedVisible(false);

            // Reset the context state if it was manually opened
            if (isManualOpen) {
                closeManualPopup();
            }

            setErrors({});
            setSubmissionStatus(null);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
            isValid = false;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{6,15}$/.test(formData.phone.trim())) {
            newErrors.phone = "Phone must be 6-15 digits.";
            isValid = false;
        }
        if (formData.curriculum === '-Select-') { // Ensure this matches a non-selectable option if you have one
            newErrors.curriculum = "Please select a curriculum.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);

        if (!validate()) {
            return;
        }

        setLoading(true);

        try {
            const dataToSend = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                curriculum: formData.curriculum,
                pageinfo: pageInfo,
                formType: 'POPUP_FORM',
            };

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                closePopup();

                if (result.redirectUrl) {
                    router.push(result.redirectUrl);
                } else {
                    router.push('/thank-you-default');
                }
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="popupOverlay">
            <div className="popupContent">
                <button
                    className="closeButton"
                    onClick={closePopup}
                    disabled={loading}
                >
                    &times;
                </button>

                <form onSubmit={handleSubmit} className="popupForm">
                    <h3>Fuel Your Journey to Success!</h3>
                    <p>Register for a free consultation and study resources.</p>
                    {submissionStatus === 'error' && (
                        <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>Submission failed. Please try again.</p>
                    )}

                    {/* Name */}
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="formInput"
                    />
                    {errors.name && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.name}</p>}

                    {/* Email */}
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="formInput"
                    />
                    {errors.email && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.email}</p>}

                    {/* Phone */}
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number (digits only)"
                        required
                        className="formInput"
                    />
                    {errors.phone && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.phone}</p>}

                    {/* Curriculum (Dropdown) - Corrected options to use value property */}
                    <label>Curriculum</label>
                    <select
                        name="curriculum"
                        value={formData.curriculum} // This controls which option is selected
                        onChange={handleChange}
                        required
                        className="formInput"
                    >
                        {/* Removed selected="true" to fix React warning */}
                        <option value="International Baccalaureate (IB)">International Baccalaureate (IB)</option>
                        <option value="IGCSE/GCSE">IGCSE/GCSE</option>
                        <option value="A-Levels">A-Levels</option>
                        <option value="EmSAT">EmSAT</option>
                        <option value="Advanced Placements (AP)">Advanced Placements (AP)</option>
                        <option value="ACT">ACT</option>
                    </select>
                    {errors.curriculum && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem' }}>{errors.curriculum}</p>}

                    <button type="submit" className="formSubmitBtn buttonSkyBlue mainCardBtn" disabled={loading}>
                        <em>{loading ? 'Submitting...' : 'Submit'}</em>
                        <Image
                            src="/images/right-arrow-blue.png"
                            width={40}
                            height={40}
                            quality={100}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DelayedPopup;