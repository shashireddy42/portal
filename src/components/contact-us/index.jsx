import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
const Contactus = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm();
  const form = useRef();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    emailjs
      .sendForm(
        "service_lzvzf7b",
        "template_3q111bk",
        form.current,
        "X5JjmBS6YhOIqGnNp"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // toast("🦄 Wow so easy!", {
          //   position: "top-center",
          //   autoClose: 50000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-us pt-3">
      <div className="header">Let get in touch</div>
      <div className="social_media_handles">
        <div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/maddela-shivani-goud/"
                target="_blank"
              >
                <img src={linkedin} height={60} width={60}></img>
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:shashireddy903@gmail.com">
                <img src={gmail} height={60} width={60}></img>
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/maddela-shivani-goud/"
                target="_blank"
              >
                <img src={github} height={60} width={60}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="from_name"
            {...register("from_name")}
            className="input-box"
            placeholder="Name"
          />
          <input
            type="text"
            id="from_email"
            className="input-box"
            {...register("from_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid Email Address",
              },
            })}
            placeholder="Email"
          />
          <input
            type="tel"
            id="num"
            {...register("num")}
            className="input-box"
            placeholder="Phone no."
          />
          <textarea
            type="text"
            id="message"
            {...register("message")}
            className="desc-box"
            placeholder="Message"
          />
          <div className="snd-btn-position">
            <button type="submit" class="snd-btn">
              Send{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="footer pt-3">
        © Copyright 2023. Made by Shashidhar Reddy Patel
      </div>
    </div>
  );
};
export default Contactus;
