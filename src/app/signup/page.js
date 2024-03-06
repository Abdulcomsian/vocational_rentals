"use client";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Link from "next/link";
import { useState } from "react";
import { BASE_URL } from "@/constant/utilities";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const validationSchema = Yup.object({
    name: Yup.string().required(" Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    tc_status: Yup.number().oneOf(
      [1],
      "Please accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      tc_status: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("tc_status", values.tc_status);

        const response = await fetch(`${BASE_URL}/api/register`, {
          method: "POST",
          header: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: formData,
        });

        console.log("RESP", response);
        // Handle the response as needed
        const data = await response.json();
        if (response.status === 200) {
          router.push("/thankyou");
        } else {
          // console.log(data);
          setError(data.msg);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
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
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <section className="signup-module">
              <Link href="/" className="back">
                <i className="las la-long-arrow-alt-left"></i>
                <span>Back</span>
              </Link>
              <h3 className="title">Sign Up</h3>
              <form onSubmit={formik.handleSubmit}>
                {error !== null && <p className="text-danger">{error}</p>}
                <div className="mb-4">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger mt-2 ">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger mt-2 ">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div className="pass-view">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <a href="javascript:void(0)" className="view-pass">
                      <i className="las la-eye"></i>
                    </a>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger mt-2 ">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="tc_status"
                    name="tc_status"
                    onChange={(e) =>
                      formik.setFieldValue(
                        "tc_status",
                        e.target.checked ? 1 : 0
                      )
                    }
                    onBlur={formik.handleBlur}
                    checked={formik.values.tc_status === 1}
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Please confirm that you have read and agree to our{" "}
                    <Link href="/term-conditions">terms & conditions</Link> and{" "}
                    <Link href="/privacy-policy">privacy policy</Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn submit mt-5"
                  disabled={isLoading}
                >
                  Sign Up
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
