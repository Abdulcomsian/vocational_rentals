"use client";

import Image from "next/image";
import ProductImage from "../../../public/images/detail.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Link from "next/link";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { notification, Spin } from "antd";
import { useState } from "react";

const validationSchema = yup.object({
  name: yup.string().required("Name must be required"),
  email: yup
    .string()
    .email("Not Valid format")
    .required("Email must be required"),
  message: yup.string().required("Meessage info must be required"),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("email", values.email);
      formdata.append("message", values.message);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      setIsLoading(true);
      fetch(
        "https://admin.vacationrentals.tools/api/contact-form",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 200) {
            notification.success({
              description: result.msg,
            });

            resetForm();
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <>
      <section className="contact mt-5 pt-5">
        <div className="row mx-0">
          <div className="col-md-12 col-lg-4 offset-lg-4">
            <Link href="/" className="back">
              <i className="las la-long-arrow-alt-left"></i>
              <span>Back</span>
            </Link>
            <h3>Get in Touch</h3>
            <p>
              If you have any questions, feedback, or need support, please dont
              hesitate to reach out.
            </p>
            <form className="row g-3" onSubmit={formik.handleSubmit}>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="errorMessage">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="col-md-12">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="errorMessage">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="col-md-12">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <p className="errorMessage">{formik.errors.message}</p>
                ) : null}
              </div>
              <div className="col-12">
                <Spin spinning={isLoading}>
                  <button type="submit" className="btn submit">
                    SEND
                  </button>
                </Spin>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

// export default Contact;
