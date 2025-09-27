import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              IELTS Academy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering students worldwide to achieve their IELTS dreams with 
              expert guidance, innovative AI technology, and proven learning methods.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-primary transition-all cursor-pointer">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-primary transition-all cursor-pointer">
                <Twitter className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-primary transition-all cursor-pointer">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-primary transition-all cursor-pointer">
                <Youtube className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Home</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Courses</a></li>
              <li><a href="/features" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Features</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Legal & Resources</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">About Us</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Terms of Service</a></li>
              <li><a href="#refund" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">Refund Policy</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-primary transition-colors hover:glow-primary">IELTS Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Email</span>
                  <br />
                  <span className="text-white font-medium">info@ieltsacademy.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Phone</span>
                  <br />
                  <span className="text-white font-medium">+91 98765 43210</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Locations</span>
                  <br />
                  <span className="text-white font-medium">Delhi | Mumbai | Bangalore</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-300 text-sm text-center lg:text-left">
              © 2025 IELTS Academy. All rights reserved. | Designed with ❤️ for IELTS success
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">🏆 #1 IELTS Institute</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">✓ 5000+ Success Stories</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">🎯 95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;