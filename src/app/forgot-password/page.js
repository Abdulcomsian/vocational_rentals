"use client";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import Link from "next/link";

import { useFormik } from "formik";
import * as yup from "yup";
import { BASE_URL } from "@/constant/utilities";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { parseJSON } from "jquery";

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVerified, setIsVarified] = useState(false);
  const [OTPvarified, setOTPvarified] = useState(false);
  const [passChangedSuccess, setPassChangedSuccess] = useState(false);
  const router = useRouter();

  const step1 = !isVerified;
  const step2 = isVerified && !OTPvarified;
  const step3 = OTPvarified && isVerified && !passChangedSuccess;

  console.log("STEP STATUS", step1, step2, step3);

  const verifyingUserEmail = useRef(null); //To persist useremail for varification
  console.log(verifyingUserEmail.current);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formdata = new FormData();
        formdata.append("email", values.email);

        const requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch(
          "https://admin.vacationrentals.tools/api/send-email-forgot-password",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            const parsedResult = JSON.parse(result);
            console.log(parsedResult);
            if (parsedResult.status === 200) {
              setIsVarified(true);
              setError(parsedResult.msg);
              verifyingUserEmail.current = values.email;
            }
            if (parsedResult.status === 400) {
              setError(parsedResult.msg);
              setIsVarified(null);
            }
          })
          .catch((error) => console.error(error));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const validateDigitSchema = yup.object({
    digit1: yup
      .number()
      .min(0)
      .max(9)
      .required("OTP Four digit code must be required"),
    digit2: yup
      .number()
      .min(0)
      .max(9)
      .required("OTP Four digit code must be required"),
    digit3: yup
      .number()
      .min(0)
      .max(9)
      .required("OTP Four digit code must be required"),
    digit4: yup
      .number()
      .min(0)
      .max(9)
      .required("OTP Four digit code must be required"),
  });

  const formikVarifyOTP = useFormik({
    initialValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
    },
    validationSchema: validateDigitSchema,
    onSubmit: async (values) => {
      const formdata = new FormData();
      formdata.append("email", verifyingUserEmail.current);
      formdata.append(
        "verificationCode",
        Number(
          `${values.digit1}${values.digit2}${values.digit3}${values.digit4}`
        )
      );

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://admin.vacationrentals.tools/api/verfiy-code",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const parsedResult = JSON.parse(result);
          if (parsedResult.status === 200) {
            setOTPvarified(true);
            setIsVarified(true);
            setPassChangedSuccess(false);
            setError(false);
          }
          if (parsedResult.status === 400) {
            setError(parsedResult.msg);
            setOTPvarified(false);
          }
          console.log(result);
        })
        .catch((error) => console.error(error));
    },
  });

  const newPasswordValidation = yup.object({
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formikNewPassword = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: newPasswordValidation,
    onSubmit: async (values) => {
      const requestOptions = {
        method: "POST",
        redirect: "follow",
      };

      fetch(
        `https://admin.vacationrentals.tools/api/update-password?email=${verifyingUserEmail}&new_password=${values.password}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const parsedResult = JSON.parse(result);
          if (parsedResult.status === 200) {
            setOTPvarified(false);
            setIsVarified(false);
            setError(false);
            console.log("Final step to signin", parsedResult.msg);
            router.push("/signin");
          }
          if (parsedResult.status === 400) {
            setError(parsedResult.msg);
            setOTPvarified(false);
            setIsVarified(null);
          }
          console.log(result);
        })
        .catch((error) => console.error(error));
    },
  });
  return (
    <>
      <div className="container-mini">
        <header className="mt-3">
          <Link href="/">
            <Image src={Logo} alt="" height={50} />
          </Link>
        </header>
        <section className="signin-module">
          <Link href="/" className="back">
            <i className="las la-long-arrow-alt-left"></i>
            <span>Back</span>
          </Link>
          <h3 className="title">Forgot Password</h3>

          {step1 && (
            <form onSubmit={formik.handleSubmit}>
              {error !== null && <p className="text-danger">{error}</p>}
              <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger mt-2 ">{formik.errors.email}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn submit mt-5"
                disabled={isLoading}
              >
                Verify
              </button>
            </form>
          )}
          {step2 && (
            <form onSubmit={formikVarifyOTP.handleSubmit}>
              <>
                {error !== null && <p className="text-danger">{error}</p>}
                <div className="mb-4">
                  <label for="exampleInputPassword1" className="form-label">
                    OTP code:
                  </label>
                  <div className="d-flex gap-3 pass-view">
                    <input
                      type="text"
                      className="form-control"
                      id="digit1"
                      name="digit1"
                      onChange={formikVarifyOTP.handleChange}
                      onBlur={formikVarifyOTP.handleBlur}
                      value={formikVarifyOTP.values.digit1}
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="digit2"
                      name="digit2"
                      onChange={formikVarifyOTP.handleChange}
                      onBlur={formikVarifyOTP.handleBlur}
                      value={formikVarifyOTP.values.digit2}
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="digit3"
                      name="digit3"
                      onChange={formikVarifyOTP.handleChange}
                      onBlur={formikVarifyOTP.handleBlur}
                      value={formikVarifyOTP.values.digit3}
                    />
                    <input
                      type="number"
                      className="form-control"
                      id="digit4"
                      name="digit4"
                      onChange={formikVarifyOTP.handleChange}
                      onBlur={formikVarifyOTP.handleBlur}
                      value={formikVarifyOTP.values.digit4}
                    />
                  </div>
                  {formikVarifyOTP.touched.digit4 &&
                  formikVarifyOTP.errors.digit4 ? (
                    <div className="text-danger mt-2 ">
                      {formikVarifyOTP.errors.digit1 ||
                        formikVarifyOTP.errors.digit2 ||
                        formikVarifyOTP.errors.digit3 ||
                        formikVarifyOTP.errors.digit4}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn submit mt-5"
                  disabled={isLoading}
                >
                  Confirm
                </button>
              </>
            </form>
          )}
          {step3 && (
            <form onSubmit={formikNewPassword.handleSubmit}>
              {error !== null && <p className="text-danger">{error}</p>}
              <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="New Password"
                  onChange={formikNewPassword.handleChange}
                  onBlur={formikNewPassword.handleBlur}
                  value={formikNewPassword.values.password}
                />
                {formikNewPassword.touched.password &&
                formikNewPassword.errors.password ? (
                  <div className="text-danger mt-2 ">
                    {formikNewPassword.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Confirm new password"
                  onChange={formikNewPassword.handleChange}
                  onBlur={formikNewPassword.handleBlur}
                  value={formikNewPassword.values.passwordConfirmation}
                />
                {formikNewPassword.touched.passwordConfirmation &&
                formikNewPassword.errors.passwordConfirmation ? (
                  <div className="text-danger mt-2 ">
                    {formikNewPassword.errors.passwordConfirmation}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn submit mt-5"
                disabled={isLoading}
              >
                Submit
              </button>
            </form>
          )}
        </section>
      </div>
    </>
  );
}

export default ForgotPassword;
