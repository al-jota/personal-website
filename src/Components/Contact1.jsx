// // import Image from "../images/contact-picture.jpg";
// import { useState, useEffect } from "react";
// import * as yup from "yup";

// const initialValues = {
//   name: "", 
//   email: "",
//   phone: "",
//   message: "",
// }

// const validationError = {
//   nameValid: "Name must be at least 3-20 characters",
//   emailValid: "Must be a valid email address",
//   messageValid: "Must have a message to send",
// };

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(3, validationError.nameValid)
//     .max(20, validationError.nameValid)
//     .trim(),
//   email: yup
//     .string()
//     .email(validationError.emailValid)
//     .required("Email is required")
//     .matches(
//       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       "Invalid email format"
//     ),
//   message: yup.string().required(validationError.messageValid).trim(),
//   phone: yup.string(),
// });

// export default function Contact() {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({ name: "", email: "", message: ""});
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     schema.isValid(values).then((isValid) => {
//       setEnabled(isValid);
//     });
//   }, [values.name, values.email, values.message]);

//   const validate = (key, value) => {
//     yup
//     .reach(schema, key)
//     .validate(value)
//     .then(() => {
//       setErrors({ ...errors, [key]: "" });
//     }); 
//     // .catch((err) => {
//     //   setErrors({ ...errors, [key]: err.errors[0] });
//     // });
//   };

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setValues({ ...values, [name]: value });
//     validate(name, value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(values);
//   };

//   return (
//   <>
//     <div className="contact-section">
//       <div className="header-image">
//         <img
//           className="image"
//           src={Image}
//           alt="Allan Perry"
//           />
//       </div>

//       <h1>Contact Me</h1>

//       <h3>Email: <a className="contact-link" href="mailto: alperry21@gmail.com">alperry21@gmail.com</a></h3>
//       <h3>Phone: <a className="contact-link" href="tel:18018848607">(801) 884-8607</a></h3>
//       <h3>LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/allanperry/">LinkedIn</a></h3>
//       <h3>GitHub: <a className="contact-link" href="https://github.com/al-jota">GitHub</a></h3>

//       <h3>Location: Salt Lake Valley, UT</h3>

//       <div className="form-section">
//         <h2>Send Me A Message!</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="inputs">
//             <label htmlFor="name">Your Name</label>
//             <div>
//               <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter Your Name"
//               value={values.name}
//               onChange={handleChange}
//               />
//             </div>
//           </div>

//           {errors.name && <div className="error">{errors.name}</div>}

//           <div className="inputs">
//             <label htmlFor="email">Your Email</label>
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 value={values.email}
//                 onChange={handleChange}
//                 />
//             </div>
//           </div>
//           {errors.email && <div className="error">{errors.email}</div>}

//           <div className="inputs">
//             <label htmlFor="phone">
//               Your Phone Number (<span>OPTIONAL</span>)
//             </label>
//             <div>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 placeholder="Enter Your Phone Number"
//                 value={values.phone}
//                 onChange={handleChange}
//                 />
//             </div>
//           </div>

//           <div className="inputs">
//             <label htmlFor="message">Your Message</label>
//             <div>
//               <textarea
//                 type="textarea"
//                 id="message"
//                 name="message"
//                 placeholder="Enter Your Message"
//                 value={values.message}
//                 onChange={handleChange}
//                 />
//             </div>
//           </div>
//           {errors.message && <div className="error">{errors.message}</div>}

//           <input type="submit" disabled={!enabled} />

//         </form>
//       </div>
//     </div>
//     </>
//   );
// } 