import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7f597bc3-e3d4-4510-b858-89c3dc4bbd96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className=" bg-gradientTwo overflow-hidden pt-5 -mb-1">
      <div className="max-w-6xl  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:items-stretch lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="px-4 mx-auto flex flex-col justify-between lg:py-5">
            <div className=" relative">
              <h2 className="text-3xl font-poppins font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
              Let’s create something amazing together!
              </h2>
              <p className="max-w-xl mx-auto md:mx-0 mt-4 font-mono text-base leading-relaxed  text-quaternary opacity-80">
              I'm passionate about creating seamless digital experiences that not only look great but also perform flawlessly. Whether you're building a brand-new product or improving an existing one, I'm here to help you bring your vision to life.
              </p>
              
              <img
                className=" absolute w-full translate-x-24 translate-y-8 md:block"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                alt=''
              />
            </div>
            <div className=" mt-10 ">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <blockquote className="mt-1">
                <p className="text-md leading-relaxed text-quaternary opacity-80 font-mono">
                Working with you was incredibly smooth. Everything was delivered faster than expected, and the quality was top-notch. You made everything feel simple and clear.
                </p>
              </blockquote>
              <div className="flex items-center mt-4">
                <div className=" w-12 h-12">
                  <img
                    className="flex-shrink-0 object-cover w-full h-full rounded-full top-52 " 
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-semibold text-quaternary opacity-90 font-bebas">
                    Jenny Wilson
                  </p>
                  <p className="ml-0.5 text-xs font-bebas text-quaternary opacity-60">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 w-full">
            <div className="overflow-hidden  bg-white rounded-md">
              <div className="py-6 px-2.5 ">
                <h3 className="text-3xl text-center uppercase font-semibold text-black font-poppins">
                Get in Touch
                </h3>
                <p className="text-center mt-4 text-base text-gray-600 font-mono ">
                Feel free to get in touch using the form below. I’m always open to new collaborations and opportunities.
                </p>
                <form action="#" onSubmit={onSubmit} method="POST" className="mt-4 lg:px-1.5">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor
                        className="text-xs uppercase font-semibold font-bebas text-gray-900 "
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="text"
                          id="text"
                          placeholder="Enter your full name"
                          className="block font-mono text-sm w-full px-4 py-4 text-black placeholder-gray-400 transition-all duration-200 bg-gray-100 border border-gray-200 rounded-md "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor
                        className="text-xs uppercase font-semibold font-bebas text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name='email'
                          id='email'
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black font-mono text-sm placeholder-gray-400 transition-all duration-200 bg-gray-100 border border-gray-200 rounded-md focus:outline-none "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor
                        className="text-xs uppercase font-semibold font-bebas text-gray-900"
                      >
                        {" "}
                        Your Message{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name='message'
                          required
                          placeholder="Enter your message"
                          className="block w-full px-4 py-4 text-black font-mono text-sm placeholder-gray-400 transition-all duration-200 bg-gray-100 border border-gray-200 rounded-md resize-y focus:outline-none "
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-quaternary  font-poppins transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-gray-900 cursor-pointer"
                      >
                        Send Message
                      </button>
                    </div>
                    <span className="  text-xs font-mono font-medium">{result}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
