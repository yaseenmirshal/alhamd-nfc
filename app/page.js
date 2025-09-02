import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaGlobe,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";

export default function NFCApp() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10">
      {/* Banner / Logo */}
      <div className="w-full max-w-md bg-white mt-8 rounded-2xl border border-gray-200 shadow-sm p-6 text-center relative">
        <div className="w-24 h-24 mx-auto rounded-full bg-[#80000020] flex items-center justify-center shadow-sm -mt-16">
          <span className="text-[#800000] font-bold text-lg">Logo</span>
        </div>
        <h1 className="text-2xl font-bold text-[#800000] mt-4">
          Alhamd Traders
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Electrical | Plumbing | Sanitaryware | Hardware | Light | Paint
        </p>
      </div>

      {/* Save Contact + Call Button */}
      <div className="flex justify-center mt-8 gap-3">
        <button className="bg-[#800000] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow hover:bg-[#5a0000] transition">
          <FaDownload size={16} /> Save Contact
        </button>
        <a
          href="tel:9061304796"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#800000] text-white shadow hover:bg-[#5a0000] transition"
        >
          <FaPhoneAlt size={16} />
        </a>
      </div>

      {/* Social Icons */}
      <section className="flex flex-wrap justify-center gap-4 mt-8">
        {[
          { Icon: FaInstagram, href: "https://instagram.com" },
          { Icon: FaWhatsapp, href: "https://wa.me/919061304796" },
          { Icon: FaMapMarkerAlt, href: "https://maps.google.com" },
          { Icon: FaGlobe, href: "https://alhamdtraders.com" },
          { Icon: FaEnvelope, href: "mailto:alhamdclt@gmail.com" },
        ].map(({ Icon, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#800000] text-white shadow hover:bg-[#5a0000] transition"
          >
            <Icon size={20} />
          </a>
        ))}
      </section>

      {/* Services Section */}
      <section className="w-full max-w-md mt-10">
        <h2 className="text-lg font-semibold text-[#800000] mb-3 text-center">
          Our Services
        </h2>
        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          <li className="bg-gray-50 rounded-lg py-2 text-center border border-gray-200">
            Electrical
          </li>
          <li className="bg-gray-50 rounded-lg py-2 text-center border border-gray-200">
            Plumbing
          </li>
          <li className="bg-gray-50 rounded-lg py-2 text-center border border-gray-200">
            Sanitaryware
          </li>
          <li className="bg-gray-50 rounded-lg py-2 text-center border border-gray-200">
            Hardware
          </li>
          <li className="bg-gray-50 rounded-lg py-2 text-center border border-gray-200">
            Light
          </li>
          <li className="bg-gray-50 rounded-lg py-2 text-center border border-gray-200">
            Paint
          </li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="w-full max-w-md mt-12 mb-8">
        <h2 className="text-lg font-semibold text-[#800000] mb-4 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Abbas", role: "CEO" },
            { name: "Irshad", role: "Manager" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl border border-gray-200 text-center shadow-sm"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-200" />
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{member.role}</p>
              <div className="flex justify-center gap-3">
                <a
                  href="tel:9061304796"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#800000] text-white hover:bg-[#5a0000]"
                >
                  <FaPhoneAlt size={16} />
                </a>
                <a
                  href="https://wa.me/919061304796"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#800000] text-white hover:bg-[#5a0000]"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
