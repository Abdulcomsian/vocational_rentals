"use client";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import Link from "next/link";

import { useFormik } from "formik";
import * as yup from "yup";
import { BASE_URL } from "@/constant/utilities";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: yup.string().required("Password must be required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);

        console.log("CLICKED", formData, "VALUES", values);
        const resp = await fetch(`${BASE_URL}/api/login`, {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: formData,
        });

        console.log("RESP", resp);
        // if (!resp.ok)
        //   throw new Error(`Something went wrong with status: ${resp}`);

        const data = await resp.json();
        if (resp.status === 200) {
          localStorage.setItem("token", data.token.original.access_token);
          router.push("/dashboard");
        } else setError(data.error);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      <div className="container-mini">
        <header className="mt-3">
          <Image src={Logo} alt="" height={50} />
        </header>
        <section className="signin-module">
          <Link href="/" className="back">
            <i className="las la-long-arrow-alt-left"></i>
            <span>Back</span>
          </Link>
          <h3 className="title">Sign In</h3>
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
            <div className="mb-4 form-check text-end">
              <label className="form-check-label" for="exampleCheck1">
                <Link href="#">Forgot Password?</Link>
              </label>
            </div>
            <button
              type="submit"
              className="btn submit mt-5"
              disabled={isLoading}
            >
              Sign In
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signin;
