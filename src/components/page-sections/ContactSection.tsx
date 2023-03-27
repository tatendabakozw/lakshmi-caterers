import React, { useState } from "react";
import map from "@assets/map.jpg";

type Props = {};

const ContactSection = (props: Props) => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const send_message_Handler = async () => {
    try {
      setLoading(true);
      setEmail("");
      setMessage("");
      setFullName("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen grid items-center content-center justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-8 w-full">
        <div className="col-span-1">
          <p className="text-4xl pb-8 text-slate-900 font-semibold">
            Get in <span className=" text-services-green">Touch</span>
          </p>
          <p className="pb-8 text-slate-700">
            Indulge into the delicious affair! 
            <br />
            Get in touch with us now.
          </p>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 border border-slate-300 outline-none"
              placeholder="Full Name"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-slate-300 outline-none"
              placeholder="email"
            />
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 border border-slate-300 outline-none"
              placeholder="Full Name"
            />
            <button
              onClick={send_message_Handler}
              className=" bg-green-original text-white p-3"
            >
              Send
            </button>
          </div>
        </div>
        <div className="col-span-1 bg-slate-100 rounded-xl overflow-hidden">
          <img src={map} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
