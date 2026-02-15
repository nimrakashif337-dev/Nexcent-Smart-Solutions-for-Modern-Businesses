import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Top Section */}
      <div className="px-6 md:px-20 py-16 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Nexcent</h2>
          <p className="text-gray-400 leading-relaxed">
            Nexcent delivers scalable digital solutions designed
            to enhance productivity, ensure enterprise-grade security,
            and empower businesses to grow with confidence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/service" className="hover:text-white transition">Service</Link></li>
            <li><Link to="/feature" className="hover:text-white transition">Feature</Link></li>
            <li><Link to="/product" className="hover:text-white transition">Product</Link></li>
            <li><Link to="/testimonial" className="hover:text-white transition">Testimonial</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Support Center</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-3">
            Email: support@nexcent.com
          </p>
          <p className="text-gray-400 mb-3">
            Phone: +1 (234) 567-890
          </p>
          <p className="text-gray-400">
            Address: 123 Business Avenue,
            Tech City, Global 45678
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nexcent. All rights reserved.
      </div>

    </footer>
  );
}




















