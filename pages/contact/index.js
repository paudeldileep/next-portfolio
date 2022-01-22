import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <div className="py-0 px-4">
      <Header />
      <div className="min-h-screen w-full">
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap mt-[8%]">
          <div className="w-11/12 md:w-1/2  mx-auto">
            <h2 className="text-center text-3xl mb-10">Contact Me</h2>
          </div>
          <div className="w-11/12 md:w-1/2 mx-auto px-auto md:pr-10 my-4">
            {/* contact me form */}
            <div className="font-mono w-11/12 mx-auto">
              <form>
                <div className="md:flex md:justify-between items-center mb-8">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-500"
                      id="inline-full-name"
                      name="userFullName"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:justify-between items-center mb-8">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
                    />
                  </div>
                </div>
                <div className="md:flex md:justify-between items-center mb-8">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex w-full justify-center items-center mb-8 ">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3 text-center">
                    <button className="bg-violet-500 w-2/3 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
