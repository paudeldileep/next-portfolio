import { motion } from "framer-motion";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  leftEnterVariants,
  rightEnterVariants,
} from "../../utils/motionVariants";

const Contact = () => {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || userEmail === "" || userMessage === "") {
      setError("Please fill all the fields");
    } else {
      setError(null);
      console.log(userName, userEmail, userMessage);

      //send mesage to api end point
      fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          message: userMessage,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setSuccess(data.success);
            setUserName("");
            setUserEmail("");
            setUserMessage("");
          }
        });
    }
  };

  //remove success or error message after 5 seconds
  React.useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(null);
      }, 5000);
    }
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [success, error]);

  return (
    <div className="py-0 px-4 dark:bg-gray-700">
      <Header />
      <div className="min-h-screen w-full">
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap mt-[8%]">
          <div className="w-11/12 md:w-1/2  mx-auto">
            <motion.h2
              variants={leftEnterVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-center text-3xl mb-10 text-gray-600 dark:text-gray-50"
            >
              Contact Me
            </motion.h2>
          </div>
          <div className="w-11/12 md:w-1/2 mx-auto px-auto md:pr-10 my-4">
            {/* contact me form */}
            <motion.div
              variants={rightEnterVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="font-mono w-11/12 mx-aut "
            >
              <form onSubmit={handleSubmit}>
                <div className="md:flex md:justify-between items-center mb-8">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 dark:text-gray-50 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-500"
                      id="inline-full-name"
                      name="userName"
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                    />
                  </div>
                </div>
                <div className="md:flex md:justify-between items-center mb-8">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 dark:text-gray-50 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Your Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-500"
                      id="inline-email"
                      type="email"
                      name="userEmail"
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
                    />
                  </div>
                </div>
                <div className="md:flex md:justify-between items-center mb-8">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 dark:text-gray-50 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-message"
                    >
                      Your Message
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <textarea
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-500"
                      id="inline-message"
                      name="userMessage"
                      rows={4}
                      cols={50}
                      onChange={(e) => setUserMessage(e.target.value)}
                      value={userMessage}
                    ></textarea>
                  </div>
                </div>
                {error && (
                  <div className="md:flex w-full justify-center items-center mb-8 ">
                    <p className="text-red-500">*{error}</p>
                  </div>
                )}
                {success && (
                  <div className="md:flex w-full justify-center items-center mb-8 ">
                    <p className="text-violet-500 dark:text-gray-50">
                      {success}
                    </p>
                  </div>
                )}
                <div className="md:flex w-full justify-center items-center mb-8 ">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3 text-center">
                    <button className="bg-violet-600 w-2/3 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm hover:shadow-violet-400 dark:shadow-slate-50 dark:hover:shadow-md dark:hover:shadow-slate-50">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
