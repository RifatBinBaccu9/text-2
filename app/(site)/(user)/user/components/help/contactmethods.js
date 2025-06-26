import { FaEnvelope, FaHeadset, FaPhoneAlt } from "react-icons/fa";

const ContactMethod = () =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
        <div className="border p-5 rounded-xl shadow hover:shadow-lg transition border-y-bgNormal border-l-bgNormal">
          <FaPhoneAlt className="text-2xl text-primary mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p className="text-sm text-gray-600">+880 1234-567890</p>
        </div>
        <div className="border p-5 rounded-xl shadow hover:shadow-lg transition border-y-bgNormal">
          <FaEnvelope className="text-2xl text-primary mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Email Support</h2>
          <p className="text-sm text-gray-600">support@ecomars.com</p>
        </div>
        <div className="border p-5 rounded-xl shadow hover:shadow-lg transition border-y-bgNormal border-r-bgNormal">
          <FaHeadset className="text-2xl text-primary mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Live Chat</h2>
          <p className="text-sm text-gray-600">Available 9am – 10pm</p>
        </div>
      </div>
    )
}
export default ContactMethod;