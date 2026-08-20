// components/DelayedPopup.js

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { PopupContext } from '../pages/_app';
const GlobalPhoneInput = dynamic(() => import('./GlobalPhoneInput'), {
    ssr: false,
    loading: () => <div style={{ height: '50px', width: '100%', borderRadius: '40px', border: '1.5px solid rgba(0,0,0,0.15)' }} />
});

const POPUP_DELAY_MS = 15000;
const HAS_SEEN_POPUP_KEY = 'hasSeenPopupSession';

const DelayedPopup = () => {
    const { isManualOpen, closeManualPopup } = useContext(PopupContext);
    const router = useRouter();

    const [isDelayedVisible, setIsDelayedVisible] = useState(false);
    const [pageInfo, setPageInfo] = useState('');

    const isVisible = isDelayedVisible || isManualOpen;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        curriculum: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
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

            const url = window.location.href;
            const title = window.document.title || window.location.pathname;
            setPageInfo(`URL: ${url} | Title/Path: ${title}`);
        }
    }, []);

    const closePopup = (e) => {
        if (e) e.preventDefault();
        if (!loading) {
            setIsDelayedVisible(false);
            if (isManualOpen) {
                closeManualPopup();
            }
            setErrors({});
            setTouched({});
            setSubmissionStatus(null);
        }
    };

    const getValidationErrors = (data) => {
        const newErrors = {};

        if (!data.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!data.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Email address is invalid.";
        }

        if (!data.phone || !data.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[\d\s()+-]{6,20}$/.test(data.phone.trim())) {
            newErrors.phone = "Invalid phone format.";
        }

        if (!data.curriculum) {
            newErrors.curriculum = "Please select a curriculum.";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextData = {
            ...formData,
            [name]: value,
        };

        setFormData(nextData);
        setSubmissionStatus(null);
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...getValidationErrors(nextData),
        }));

        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prevTouched => ({ ...prevTouched, [name]: true }));
        setErrors(getValidationErrors(formData));
    };

    const handleSelectBlur = () => {
        setTouched(prevTouched => ({ ...prevTouched, curriculum: true }));
        setErrors(getValidationErrors(formData));
    };

    const handlePhoneBlur = () => {
        setTouched(prevTouched => ({ ...prevTouched, phone: true }));
        setErrors(getValidationErrors(formData));
    };

    // New handler for the GlobalPhoneInput to capture formattedValue
    const handlePhoneChange = (formattedValue) => {
        const nextData = {
            ...formData,
            phone: formattedValue,
        };

        setFormData(nextData);
        setSubmissionStatus(null);
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...getValidationErrors(nextData),
        }));
    };

    const validate = () => {
        const newErrors = getValidationErrors(formData);
        setErrors(newErrors);
        setTouched({
            name: true,
            email: true,
            phone: true,
            curriculum: true,
        });
        return Object.keys(newErrors).length === 0;
    };

    const isFormValid = Object.keys(getValidationErrors(formData)).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);

        if (!validate()) return;

        setLoading(true);

        try {
            const dataToSend = {
                ...formData,
                pageinfo: pageInfo,
                formType: 'POPUP_FORM',
            };

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                closePopup();
                if (result.redirectUrl) {
                    window.location.href = result.redirectUrl;
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

    if (!isVisible) return null;

    return (
        <div className="popupOverlay">
            <div className="popupContent">
                <button className="closeButton" onClick={closePopup} disabled={loading}>
                    &times;
                </button>

                <form onSubmit={handleSubmit} className="popupForm">
                    <h3>Prepare Like A Top Scorer This Season</h3>
                    <p>Register for a free consultation and study resources.</p>

                    {submissionStatus === 'error' && (
                        <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>Submission failed. Please try again.</p>
                    )}

                    <div className="row g-2">
                        <div className="col-6">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your name"
                                className="formInput"
                            />
                            {touched.name && errors.name && <p className="error-text">{errors.name}</p>}
                        </div>
                        <div className="col-6">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your email"
                                className="formInput"
                            />
                            {touched.email && errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Updated Phone Field */}
                    <label>Phone</label>
                    <GlobalPhoneInput
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        error={touched.phone && errors.phone}
                        onBlur={handlePhoneBlur}
                    />

                    <label>Curriculum</label>
                    <div className="selectWrapper">
                        <select
                            name="curriculum"
                            value={formData.curriculum}
                            onChange={handleChange}
                            onBlur={handleSelectBlur}
                            className="formInput"
                        >
                            <option value="" disabled>Select curriculum</option>
                            <option value="IB Diploma">IB Diploma</option>
                            <option value="IB MYP">IB MYP</option>
                            <option value="IGCSE/GCSE">IGCSE/GCSE</option>
                            <option value="A Levels">A Levels</option>
                            <option value="Homeschooling">Homeschooling</option>
                            <option value="ACT">ACT</option>
                            <option value="UCAT">UCAT</option>
                            <option value="Advanced Placements">Advanced Placements</option>
                            <option value="STEM (Undergraduate)">STEM (Undergraduate)</option>
                            <option value="STEM (Others)">STEM (Others)</option>
                        </select>
                    </div>
                    {touched.curriculum && errors.curriculum && <p className="error-text">{errors.curriculum}</p>}

                    <button type="submit" className="btn popup-cust-text fw-bold d-flex align-items-center rounded-pill " disabled={loading || !isFormValid}
                        style={{
                            background: "linear-gradient(90deg,#161664, #3F88BA)",
                            color: 'white',
                            border: 'none',
                            transition: 'opacity 0.3s ease',
                            fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                            margin: "15px auto 0 0",

                        }}
                        onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.target.style.opacity = "1"}
                    >
                        {loading ? 'Submitting...' : 'SUBMIT'}
                        <div
                            className="popup-custom-height rounded-circle d-flex align-items-center justify-content-center"

                            style={{
                                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                                animationDelay: "0.75s",
                                marginLeft: "2.1rem "
                            }}
                        >
                            <img src="/assets/arrowright.webp" alt="ibdp tutor in dubai" width={16} height={16} />
                        </div>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default DelayedPopup;
