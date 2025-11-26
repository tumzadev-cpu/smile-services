import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { Phone, Facebook, Instagram, MessageCircle, Mail, MapPin, Clock, Heart, Gift, Calendar } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'contact';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const bookingUrl = 'https://wa.me/message/PKYOFMM62K6GB1';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService Needed: ${formData.service}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2349015544758?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');

    setSubmitMessage('Redirecting you to WhatsApp...');
    setTimeout(() => {
      setFormData({ name: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
      setSubmitMessage('');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call or WhatsApp',
      value: '+2349015544758, +2348145147626',
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
      icon: Mail,
      title: 'Email',
      value: 'smileserviceshq@gmail.com',
      link: 'mailto:smileserviceshq@gmail.com',
      linkText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Enugu & Abuja (Online)',
      link: '#',
      linkText: 'Service Areas',
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
          <h1 className="text-6xl sm:text-7xl font-extrabold text-black mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium">
            We're Here to Help You Create a Moment They'll Never Forget
          </p>
          <p className="text-lg text-black/70 max-w-3xl mx-auto mt-4">
            Reach out to book a surprise call, order a gift package, plan an event, or ask any questions.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-black mb-4">Quick Contact Form</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Service Needed:
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Surprise Call">Surprise Call</option>
                  <option value="Gift Package">Gift Package</option>
                  <option value="Event Planning">Event Planning</option>
                  <option value="Custom Request">Custom Request</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us more about what you need..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submitMessage && (
                <p className="text-center text-green-600 font-semibold">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Clock className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold text-black mb-4">Working Hours</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-200">
            <div className="space-y-4 text-center">
              <div>
                <p className="text-xl font-bold text-black mb-2">Monday – Saturday</p>
                <p className="text-2xl font-extrabold text-yellow-600">7:30 AM – 9:00 PM</p>
              </div>
              <div className="border-t border-yellow-300 pt-4">
                <p className="text-xl font-bold text-black mb-2">Sunday</p>
                <p className="text-2xl font-extrabold text-yellow-600">12:00 PM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black mb-8">Social Media</h2>
          <p className="text-xl text-gray-600 mb-8">Follow us for updates, promos, and customer reviews:</p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://instagram.com/smileservice_s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://facebook.com/smileservices"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-black rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-6">
            Let's help you put a smile on your loved ones face today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-2xl"
            >
              Book a Surprise Call
              <Phone className="w-6 h-6" />
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-2xl"
            >
              Order a Gift Package
              <Gift className="w-6 h-6" />
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-2xl"
            >
              Plan an Event
              <Heart className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Chatbot />
    </div>
  );
}
