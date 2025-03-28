import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1A2F] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button className="w-full py-3 rounded-lg bg-blue-400 text-white font-semibold hover:bg-blue-500 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/80">
                  <FiMapPin className="text-blue-400" />
                  <span>Financial District, New York</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <FiPhone className="text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <FiMail className="text-blue-400" />
                  <span>contact@finstory.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Facebook"].map((platform) => (
                  <motion.div
                    key={platform}
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    {platform[0]}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;
