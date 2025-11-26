import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';

type Page = 'home' | 'services' | 'contact';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const bookingUrl = 'https://wa.me/message/PKYOFMM62K6GB1';

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      value: '234 9015544758',
      link: 'tel:2349015544758',
      linkText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Direct',
      value: 'Chat with us instantly',
      link: bookingUrl,
      linkText: 'Start Chat',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: 'Smile Services',
      link: 'https://facebook.com/smileservices',
      linkText: 'Visit Page',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@smileservice_s',
      link: 'https://instagram.com/smileservice_s',
      linkText: 'Follow Us',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="contact" onNavigate={onNavigate} />

      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/5.JPG" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-400 opacity-90"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-black rounded-full text-sm font-semibold mb-6 border border-white/30">GET IN TOUCH</span>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-black mb-6 leading-tight">Want to Reach Out?</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium">
            We're here to help you spread love and happiness. Get in touch with us through any of
            the following channels.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors">{method.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{method.value}</p>
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    {method.linkText}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-500 rounded-3xl p-16 text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-black rounded-full filter blur-3xl animate-pulse"></div>
            </div>
            <div className="relative">
              <MessageCircle className="w-16 h-16 text-black mx-auto mb-6" />
              <h2 className="text-5xl font-extrabold text-black mb-6">Ready to Get Started?</h2>
              <p className="text-2xl text-black/80 mb-10 max-w-2xl mx-auto font-medium">
                Book a call today and let us help you create meaningful connections that matter
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-2xl"
              >
                Book a Call Now
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6">We're Always Here</h2>
          <p className="text-2xl text-gray-400 mb-10">
            Available 24/7 to help you spread love and happiness to those who matter most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:2349015544758"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" />
              Call Us Now
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Chatbot />
    </div>
  );
}
