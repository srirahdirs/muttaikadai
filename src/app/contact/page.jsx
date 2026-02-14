"use client";

import { useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaAddressBook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";

const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=10.878676414489746,77.15547180175781&z=17&hl=en";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (json.success) {
        setStatus({ type: "success", message: "Message sent! We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", address: "", comment: "" });
      } else {
        setStatus({ type: "error", message: json.error || "Failed to send message" });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="h-[650px] pt-12 relative">
        <iframe
          src="https://www.google.com/maps?q=10.878676414489746,77.15547180175781&z=17&output=embed"
          width="600"
          height="450"
          className="absolute inset-0 z-[-1] w-full h-[650px]"
          style={{ border: 0 }}
          allowFullScreen
        />
        <Header />
      </header>

      <Container className="pt-[100px] pb-[100px] md:pb-[140px]">
        <header className="mb-10">
          <span className="inline-block mb-5 text-base text-gold tracking-[5px]">
            #Contact
          </span>
          <h4 className="text-dark-gray mb-1 font-bold uppercase text-2xl">
            Get in touch any time for
          </h4>
          <h4 className="uppercase text-2xl text-gold mb-2">any help!</h4>
          <span className="h-[2px] w-14 bg-gold inline-block" />
        </header>

        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="basis-[730px] shadow-card-3 pt-24 pl-6 lg:pl-[100px] pb-16 pr-6">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 md:gap-[10px]">
              <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[30px]">
                <div className="bg-mint w-full px-5 relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="bg-mint w-full px-5 relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[30px]">
                <div className="bg-mint w-full px-5 relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="tel"
                    name="phone"
                    id="contact"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="bg-mint w-full px-5 relative">
                  <input
                    className="h-[46px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent"
                    type="text"
                    name="address"
                    placeholder="Address*"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="bg-mint w-full px-5 relative">
                <textarea
                  className="h-[197px] text-light-gray pr-5 outline-none pb-5 w-full pt-3 bg-transparent resize-none"
                  name="comment"
                  placeholder="Comment*"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                />
              </div>
              {status && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-green-600" : "text-orange"
                  }`}
                >
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="h-[66px] rounded-sm duration-500 transition-all hover:bg-purple bg-gold w-full sm:w-[188px] grid place-content-center text-lg font-medium text-white mt-[35px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Message Me"}
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex gap-10 items-center">
              <div className="text-gold text-6xl">
                <FaAddressBook />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-dark-gray text-2xl uppercase">Address</h6>
                <div className="text-light-gray text-sm">
                  <p>Karthikeyan N</p>
                  <p>Poo thottam (near BSNL tower)</p>
                  <p>Vadavalli, V.N Palayam (post)</p>
                  <p>Sulur (taluk) Coimbatore-641669.</p>
                  <Link
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline mt-2 inline-block"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <div className="text-gold text-6xl">
                <FaPhoneSquareAlt />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-dark-gray text-2xl uppercase">Phone</h6>
                <div className="text-light-gray text-sm">
                  <p>+91 9663460555</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <div className="text-gold text-6xl">
                <MdAlternateEmail />
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="text-dark-gray text-2xl uppercase">Email</h6>
                <div className="text-light-gray text-sm">
                  <p>sales@muttaikadai.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactPage;
