"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const GlobalPhoneInput = dynamic(() => import("../GlobalPhoneInput"), {
  ssr: false,
  loading: () => <div className="phonePlaceholder" aria-hidden="true" />,
});

const COURSE_OPTIONS = [
  "IB Diploma",
  "IB MYP",
  "IGCSE / GCSE",
  "A-Levels",
  "Advanced Placements (AP)",
  "ACT",
  "Homeschooling",
  "Other",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  grade: "",
  course: "",
  message: "",
};

export default function GmbFormSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [phoneCountry, setPhoneCountry] = useState(null);
  const [pageInfo, setPageInfo] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const title = window.document.title || window.location.pathname;
    setPageInfo(`URL: ${url} | Title/Path: ${title}`);
  }, []);

  const getCountryLabel = () => String(phoneCountry?.name || "country").trim() || "country";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handlePhoneChange = (value) => {
    setFormData((current) => ({ ...current, phone: value }));
    setErrors((current) => ({ ...current, phone: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.grade.trim()) nextErrors.grade = "Grade is required.";
    if (!formData.course.trim()) nextErrors.course = "Please select a course.";

    const selectedIso2 = String(phoneCountry?.iso2 || "").toUpperCase();
    const parsedPhone = formData.phone
      ? parsePhoneNumberFromString(String(formData.phone), selectedIso2 || undefined)
      : null;

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!parsedPhone || !parsedPhone.isPossible() || !parsedPhone.isValid()) {
      nextErrors.phone = `Enter a valid ${getCountryLabel()} phone number.`;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus(null);

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "GMB_FORM",
          pageinfo: pageInfo,
        }),
      });
      const result = await response.json();

      if (response.ok && result.success && result.redirectUrl) {
        window.location.href = result.redirectUrl;
        return;
      }

      setSubmissionStatus("error");
    } catch (error) {
      console.error("GMB form submission failed:", error);
      setSubmissionStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="gmbForm" aria-labelledby="gmb-form-title">
      <div className="sectionContainer">
        <div
          className="formPanel fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          style={{ "--reveal-delay": "0.15s" }}
        >
          <div className="formLayout">
            <div className="formIntro">
              <h2 className="SubHeading">Start Here</h2>
              <h3 id="gmb-form-title" className="testTitle">
                Book a free demo at our <span className="highlight">JLT centre</span>
              </h3>
              <p>
                Tell us what support you need and our academic team will contact you to arrange the right tutor and demo class.
              </p>

              <div className="formHighlights" aria-label="Demo class benefits">
                <span>No commitment</span>
                <span>Matched with the right tutor</span>
              </div>

              <div className="availability">
                <strong>Open daily</strong>
                <span>9 am to 9 pm · Online and in-person</span>
              </div>
            </div>

            <form className="formCard" onSubmit={handleSubmit} noValidate>
              <div className="formCardHeader">
                <span>Free consultation</span>
                <h4>Tell us about the student</h4>
              </div>

              <div className="formGrid">
              <div className="fieldGroup nameGroup">
                <label htmlFor="gmb-name">Name</label>
                <input
                  id="gmb-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="fieldError">{errors.name}</span>}
              </div>

              <div className="fieldGroup emailGroup">
                <label htmlFor="gmb-email">Email</label>
                <input
                  id="gmb-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="fieldError">{errors.email}</span>}
              </div>

              <div className="fieldGroup phoneGroup">
                <label>Phone</label>
                <GlobalPhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  error={errors.phone}
                  onCountryChange={setPhoneCountry}
                />
              </div>

              <div className="fieldGroup gradeGroup">
                <label htmlFor="gmb-grade">Grade / Year</label>
                <input
                  id="gmb-grade"
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  placeholder="Student grade or year"
                  aria-invalid={Boolean(errors.grade)}
                />
                {errors.grade && <span className="fieldError">{errors.grade}</span>}
              </div>

              <div className="fieldGroup courseGroup">
                <label htmlFor="gmb-course">Course</label>
                <select
                  id="gmb-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.course)}
                >
                  <option value="" disabled>Select a course</option>
                  {COURSE_OPTIONS.map((course) => (
                    <option value={course} key={course}>{course}</option>
                  ))}
                </select>
                {errors.course && <span className="fieldError">{errors.course}</span>}
              </div>

              <div className="fieldGroup messageGroup">
                <label htmlFor="gmb-message">Message <span>(optional)</span></label>
                <textarea
                  id="gmb-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us the subject, curriculum or support required"
                  rows="3"
                />
              </div>
              </div>

              <div className="formFooter">
                <p>We’ll contact you to confirm the right tutor and a suitable demo slot.</p>
                <button type="submit" disabled={loading}>
                  <span>{loading ? "Submitting..." : "Book a free demo"}</span>
                  <img src="/assets/rar.webp" alt="" width="36" height="36" aria-hidden="true" />
                </button>
              </div>

              {submissionStatus === "error" && (
                <div className="formStatus" role="alert">
                  Submission failed. Please check your details and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gmbForm { background: #fff; }
        .sectionContainer { width: 90vw; margin: 0 auto; }
        .formPanel { overflow: hidden; background: linear-gradient(120deg, #eaf5ff 0%, #f5fbff 58%, #edf9f6 100%); border: 1px solid #dcecf4; border-radius: 34px; box-shadow: 0 22px 55px rgba(22, 22, 100, 0.08); }
        .formLayout { display: grid; grid-template-columns: minmax(280px, 0.78fr) minmax(560px, 1.35fr); align-items: stretch; }
        .formIntro { display: flex; flex-direction: column; justify-content: center; padding: 54px 48px; }
        .formIntro :global(.SubHeading) { width: fit-content; align-self: flex-start; text-align: left; }
        .formIntro :global(.testTitle) { margin-bottom: 20px; text-align: left; }
        .formIntro > p { max-width: 520px; margin: 0; color: var(--grey-text); font-size: clamp(15px, 1vw, 18px); line-height: 1.65; opacity: 0.72; }
        .formHighlights { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .formHighlights span { position: relative; padding: 9px 13px 9px 31px; color: var(--blue-color); background: rgba(255,255,255,.72); border: 1px solid rgba(22,22,100,.12); border-radius: 999px; font-size: 12px; font-weight: 600; }
        .formHighlights span::before { position: absolute; top: 50%; left: 12px; width: 8px; height: 8px; background: var(--green-text); border-radius: 50%; content: ""; transform: translateY(-50%); box-shadow: 0 0 0 4px rgba(0,157,132,.08); }
        .availability { display: flex; flex-direction: column; gap: 4px; margin-top: 34px; padding-top: 22px; border-top: 1px solid rgba(22,22,100,.12); color: var(--blue-color); }
        .availability strong { font-size: 14px; text-transform: uppercase; letter-spacing: .08em; }
        .availability span { color: var(--grey-text); font-size: 14px; opacity: .72; }
        .formCard { margin: 24px; padding: 32px; background: rgba(255,255,255,.94); border: 1px solid rgba(22,22,100,.1); border-radius: 24px; box-shadow: 0 14px 38px rgba(22,22,100,.09); font-family: inherit; }
        .formCardHeader { margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid rgba(22,22,100,.1); }
        .formCardHeader span { display: block; margin-bottom: 6px; color: #008e78; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .formCardHeader h4 { margin: 0; color: var(--blue-color); font-family: inherit; font-size: clamp(21px,1.45vw,28px); font-weight: 600; line-height: 1.2; }
        .formGrid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px 20px; }
        .fieldGroup { min-width: 0; }
        .courseGroup, .messageGroup { grid-column: 1 / -1; }
        .fieldGroup label { display: block; margin: 0 0 8px; color: var(--blue-color); font-size: 12px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
        .fieldGroup label span { font-weight: 500; opacity: .55; text-transform: none; }
        .fieldGroup input, .fieldGroup select, .fieldGroup textarea { width: 100%; color: var(--blue-color); background: #f8fbff; border: 1px solid #cadbe8; border-radius: 13px; outline: none; font-family: inherit; font-size: 14px; transition: border-color .2s ease,background .2s ease,box-shadow .2s ease; }
        .fieldGroup input, .fieldGroup select { min-height: 50px; padding: 0 15px; }
        .fieldGroup select { padding-right: 46px; appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 16 10'%3E%3Cpath d='M2 2l6 6 6-6' fill='none' stroke='%23161664' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 18px center; background-size: 14px auto; }
        .fieldGroup textarea { min-height: 86px; padding: 14px 15px; resize: vertical; }
        .fieldGroup input::placeholder, .fieldGroup textarea::placeholder { color: #77829a; opacity: .72; }
        .fieldGroup input:focus, .fieldGroup select:focus, .fieldGroup textarea:focus { background: #fff; border-color: #00a98f; box-shadow: 0 0 0 3px rgba(0,169,143,.1); }
        .fieldGroup input[aria-invalid="true"], .fieldGroup select[aria-invalid="true"] { border-color: #c66a3d; }
        .fieldError { display: block; margin-top: 5px; color: #a34125; font-size: 11px; font-weight: 600; }
        .formFooter { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-top: 22px; padding-top: 20px; border-top: 1px solid rgba(22,22,100,.1); }
        .formFooter p { max-width: 390px; margin: 0; color: var(--grey-text); font-size: 12px; line-height: 1.55; opacity: .68; }
        .formFooter button { display: inline-flex; min-width: 220px; align-items: center; justify-content: space-between; gap: 16px; padding: 8px 8px 8px 20px; color: var(--blue-color); background: linear-gradient(90deg,var(--green-text),#e7f6ff); border: 0; border-radius: 999px; font-family: inherit; font-size: 13px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; cursor: pointer; }
        .formFooter button:disabled { cursor: wait; opacity: .72; }
        .formStatus { margin-top: 16px; padding: 11px 14px; color: #6b2400; background: #ffe29f; border-radius: 11px; font-size: 13px; font-weight: 600; text-align: center; }
        .phoneGroup :global(.react-tel-input) { width: 100%; min-height: 50px; }
        .phoneGroup :global(.react-tel-input .form-control) { width: 100% !important; min-height: 50px !important; color: var(--blue-color) !important; background: #f8fbff !important; border-color: #cadbe8 !important; font-family: inherit !important; font-size: 14px !important; padding-left: 60px !important; border-radius: 13px !important; }
        .phoneGroup :global(.react-tel-input .form-control:focus) { background: #fff !important; border-color: #00a98f !important; box-shadow: 0 0 0 3px rgba(0,169,143,.1) !important; }
        .phonePlaceholder { width: 100%; min-height: 50px; background: #f8fbff; border: 1px solid #cadbe8; border-radius: 13px; }
        @media (max-width: 1100px) { .formLayout { grid-template-columns: 1fr; } .formIntro { padding: 44px 42px 18px; } .formIntro > p { max-width: 700px; } .availability { margin-top: 25px; } .formCard { margin: 24px 32px 32px; } }
        @media (max-width: 767px) { .sectionContainer { width: 90vw; } .formPanel { border-radius: 24px; } .formIntro { padding: 34px 22px 15px; } .formIntro :global(.testTitle) { margin-bottom: 15px; } .formIntro > p { font-size: 14px; line-height: 22px; } .formHighlights { margin-top: 20px; } .availability { margin-top: 22px; padding-top: 18px; } .formCard { margin: 18px 12px 12px; padding: 24px 16px; border-radius: 19px; } .formGrid { grid-template-columns: 1fr; gap: 16px; } .courseGroup, .messageGroup { grid-column: auto; } .formFooter { flex-direction: column; align-items: stretch; } .formFooter p { text-align: center; } .formFooter button { width: 100%; min-width: 0; } }
      `}</style>
    </section>
  );
}
