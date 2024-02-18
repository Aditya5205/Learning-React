import React from "react";

const Contact = () => {
  return (
    <div
      className="panels flex h-screen w-screen flex-none shrink-0 snap-start items-center justify-end "
      id="contact-id"
    >
      <div className="mr-28 mt-16 h-fit w-1/3 rounded-xl bg-slate-400/50 p-4 text-center text-white">
        <div className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
          Contact Me
        </div>
        <form className="mt-12 flex h-fit flex-col text-xl">
          <label htmlFor="name-input" className="text-left text-xl">
            Name
          </label>
          <input
            type="text"
            id="name-input"
            // placeholder="Demo..."
            className="mt-3 h-10 rounded-xl bg-slate-200/50 indent-2 outline-none "
          />
          <label htmlFor="email-input" className="mt-6 text-left text-xl">
            Email
          </label>
          <input
            type="text"
            id="email-input"
            className="mt-3 h-10 rounded-xl bg-slate-200/50 indent-2 outline-none "
          />
          <label htmlFor="message-input" className="mt-6 text-left text-xl">
            Message
          </label>
          <textarea
            type="textbox"
            id="message-input"
            className="mt-3 h-32 min-h-10 resize-y rounded-xl bg-slate-200/50 p-2 outline-none "
          />
          <button
            type="submit"
            className="mt-3 rounded-3xl bg-blue-500 p-2 hover:bg-blue-600/70"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
