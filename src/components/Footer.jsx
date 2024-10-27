
import footerLogo  from "../assets/footer-logo.png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
<footer className="bg-gray-900 text-white py-10 px-4">
  {/* Bottom Section */}
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
    {/* Left Side - Privacy Links */}
    <ul className="flex gap-6 mb-4 md:mb-0">
      <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
      <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
    </ul>

    {/* Right Side - Social Icons */}
    <div className="flex gap-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        <FaFacebook size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        <FaInstagram size={24} />
      </a>
    </div>
  </div>
</footer>

  )
}

export default Footer