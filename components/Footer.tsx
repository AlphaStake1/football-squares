import { Twitter, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'How to Play', href: '#how-to-play' },
    { label: 'Rules', href: '#rules' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Follow us on Twitter' },
    { icon: Instagram, href: '#', label: 'Follow us on Instagram' },
    { icon: MessageCircle, href: '#', label: 'Join our Discord' },
  ];

  return (
    <footer className="bg-[#4e2a1e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Football Squares</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The ultimate destination for NFL squares games and fantasy football resources. 
              Join thousands of fans making every game more exciting.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for football fans</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-[#ffd940] transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-200 hover:scale-110 transform"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stay updated with the latest games, tips, and community highlights.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Football Squares. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              This website is not affiliated with or endorsed by the National Football League.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;