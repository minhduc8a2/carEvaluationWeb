"use client"
import React from "react"
import { Formik, Field } from "formik"
import { useState, useEffect } from "react"
const Home = () => {
  const [nhan, setNhan] = useState("")
  const [domain, setDomain] = useState("https://minhduc8a2.pythonanywhere.com")
  return (
    <div className="container mx-auto mt-24 px-4 mb-24">
      <h1 className="text-5xl text-center mb-16 bg-blue-400 p-4 rounded-lg text-white">
        Mô hình đánh giá xe ô tô Car Evaluation
      </h1>
      <h2 className="text-3xl mb-8">Nhóm học phần CT294/02</h2>
      <h3 className="text-2xl mb-4">Các thành viên:</h3>
      <ul className="">
        <li className="mb-4">
          <h4 className="text-xl mb-4">1. Lê Minh Đức</h4>
        </li>
        <li className="mb-4">
          <h4 className="text-xl mb-4">2. Nguyễn Hoàng Duy</h4>
        </li>
        <li className="mb-4">
          <h4 className="text-xl mb-4">3. Giang Đại Huy</h4>
        </li>
      </ul>
      <div className="my-8 border w-fit p-4">
        <h3 className="text-xl my-4">Nhập Domain API</h3>
        <input
          type="text"
          value={domain}
          className="border"
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>

      <Formik
        initialValues={{
          buying: "vhigh",
          maint: "vhigh",
          doors: "2",
          persons: "2",
          lug_boot: "small",
          safety: "low",
        }}
        validate={(values) => {
          const errors = {}

          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const sentData = {
              buying: values.buying,
              maint: values.maint,
              doors: values.doors,
              persons: values.persons,
              lug_boot: values.lug_boot,
              safety: values.safety,
            }
            console.log(sentData)
            const response = await fetch(domain + "/predict", {
              cache: "no-cache",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(sentData),
            })
            const data = await response.json()
            console.log(data)
            if (data.result) setNhan(data.result)
            else alert("Lỗi API! Vui lòng nhập lại Domain name của API.")
          } catch (error) {
            alert("Lỗi API! Vui lòng nhập lại Domain name của API.")
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl mb-4">
              Mời bạn chọn giá trị các thuộc tính để đánh giá
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div
                role="group"
                aria-labelledby="buying-group"
                className="border p-8 border-blue-400"
              >
                <h5 className="text-xl mb-2 font-semibold">Buying:</h5>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="buying"
                    value="vhigh"
                  />
                  vhigh
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="buying"
                    value="high"
                  />
                  high
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="buying"
                    value="med"
                  />
                  med
                </label>
                <label className="mr-4 ">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="buying"
                    value="low"
                  />
                  low
                </label>
                <div className="mt-4">
                  Bạn đã chọn:{" "}
                  <span className="font-bold text-red-500">
                    {values.buying}
                  </span>
                </div>
              </div>
              <div
                role="group"
                aria-labelledby="maint-group"
                className="border p-8 border-blue-400"
              >
                <h5 className="text-xl mb-2 font-semibold">Maint:</h5>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="maint"
                    value="vhigh"
                  />
                  vhigh
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="maint"
                    value="high"
                  />
                  high
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="maint"
                    value="med"
                  />
                  med
                </label>
                <label className="mr-4 ">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="maint"
                    value="low"
                  />
                  low
                </label>
                <div className="mt-4">
                  Bạn đã chọn:{" "}
                  <span className="font-bold text-red-500">{values.maint}</span>
                </div>
              </div>
              <div
                role="group"
                aria-labelledby="doors-group"
                className="border p-8 border-blue-400"
              >
                <h5 className="text-xl mb-2 font-semibold">doors:</h5>
                <label className="mr-4">
                  <Field className="mr-2" type="radio" name="doors" value="2" />
                  2
                </label>
                <label className="mr-4">
                  <Field className="mr-2" type="radio" name="doors" value="3" />
                  3
                </label>
                <label className="mr-4">
                  <Field className="mr-2" type="radio" name="doors" value="4" />
                  4
                </label>
                <label className="mr-4 ">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="doors"
                    value="5more"
                  />
                  5more
                </label>
                <div className="mt-4">
                  Bạn đã chọn:{" "}
                  <span className="font-bold text-red-500">{values.doors}</span>
                </div>
              </div>
              <div
                role="group"
                aria-labelledby="persons-group"
                className="border p-8 border-blue-400"
              >
                <h5 className="text-xl mb-2 font-semibold">persons:</h5>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="persons"
                    value="2"
                  />
                  2
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="persons"
                    value="4"
                  />
                  4
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="persons"
                    value="more"
                  />
                  more
                </label>

                <div className="mt-4">
                  Bạn đã chọn:{" "}
                  <span className="font-bold text-red-500">
                    {values.persons}
                  </span>
                </div>
              </div>
              <div
                role="group"
                aria-labelledby="lug_boot-group"
                className="border p-8 border-blue-400"
              >
                <h5 className="text-xl mb-2 font-semibold">lug_boot:</h5>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="lug_boot"
                    value="small"
                  />
                  small
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="lug_boot"
                    value="med"
                  />
                  med
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="lug_boot"
                    value="big"
                  />
                  big
                </label>

                <div className="mt-4">
                  Bạn đã chọn:{" "}
                  <span className="font-bold text-red-500">
                    {values.lug_boot}
                  </span>
                </div>
              </div>
              <div
                role="group"
                aria-labelledby="safety-group"
                className="border p-8 border-blue-400"
              >
                <h5 className="text-xl mb-2 font-semibold">safety:</h5>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="safety"
                    value="low"
                  />
                  low
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="safety"
                    value="med"
                  />
                  med
                </label>
                <label className="mr-4">
                  <Field
                    className="mr-2"
                    type="radio"
                    name="safety"
                    value="high"
                  />
                  high
                </label>

                <div className="mt-4">
                  Bạn đã chọn:{" "}
                  <span className="font-bold text-red-500">
                    {values.safety}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white rounded-lg mt-4 py-2 px-4"
            >
              Dự đoán nhãn
            </button>
          </form>
        )}
      </Formik>
      <h2 className="text-3xl my-8">Nhãn được dự đoán là: {nhan}</h2>
    </div>
  )
}

export default Home
