import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import {
  Heart,
  Gift,
  Phone,
  MessageCircle,
  Smile,
  Clock,
  DollarSign,
  Shield,
  Star,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const bookingUrl = 'https://wa.me/message/PKYOFMM62K6GB1';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Heart,
      title: 'Celebratory Calls',
      description:
        "A personalized call to your loved ones, delivered on your behalf to celebrate their special moments—whether it's a birthday, anniversary, new baby, graduation, induction, wedding, or any milestone worth honoring.",
      image: '/2.JPG',
    },
    {
      icon: MessageCircle,
      title: 'Appreciation Calls',
      description:
        'A personalized, heartfelt call to your loved one, gently expressing remorse for a misstep and paving the way for genuine reconciliation.',
      image: '/smile.JPG',
    },
    {
      icon: Phone,
      title: 'Reach Out Calls',
      description:
        "A heartfelt call to uplift your loved one, offering encouragement and gentle motivation to keep going—whether they're facing illness, feeling lost, or navigating a challenging season.",
      image: '/4.JPG',
    },
    {
      icon: Smile,
      title: 'Self Love Calls',
      description:
        "A call you can book just for yourself. Going through a tough time or simply need a lift? We'll reach out with a warm, uplifting conversation to leave you feeling reassured, valued, and genuinely happy again.",
      image: '/5.JPG',
    },
    {
      icon: Gift,
      title: 'Gift/Surprise Event Packages',
      description:
        'Delight your loved ones with more than just a call—pair it with a thoughtfully curated gift or full surprise event, delivered right to their door. From gift boxes and anniversary flower arrangements to custom celebration kits for graduations, new babies, or "just because" moments, we handle every detail.',
      image: '/6.JPG',
    },
  ];

  const whyChooseUs = [
    { icon: Clock, title: 'Fast and Reliable', description: 'Quick service when you need it' },
    { icon: DollarSign, title: 'Affordable Excellence', description: 'Premium quality at great value' },
    { icon: Phone, title: 'Available 24/7', description: 'Always here for you' },
    { icon: Shield, title: 'Confidentiality Guaranteed', description: 'Your data is safe and secure' },
    {
      icon: Star,
      title: 'A Call That Feels Different',
      description: 'Warm, personal, and truly uplifting',
    },
  ];

  const testimonials = [
    {
      name: 'Maryjane',
      text: 'Please tell me why I\'m crying. GOD BLESS YOU for your excellent service. You\'re awesome at what you do. Thank you for helping me make my mom feel so special. You need to see the way my mom was blushing and emotional at the same time.',
    },
    {
      name: 'Divine',
      text: 'She was really happy. Thanks much. This brand is trustworthy. I swear u really tried. You are the best.',
    },
    {
      name: 'Clinton',
      text: 'I wished I was around to see their joy... But at least their joy over the phone made my day!!! I appreciate you once again...',
    },
    {
      name: 'Faith',
      text: 'This is beautiful. I\'m literally crying. Thank you. You delivered more than I expected. Haaa God bless you.',
    },
    {
      name: 'Tunde',
      text: 'Bless you too, thank you for putting smiles on their faces. She was happy, she called and was crying. She said she will call back make she gather herself first. Only online she sees things like that.',
    },
    {
      name: 'Oma',
      text: 'I just listened to this now. WOW. You\'re so good at what you do. Nice job. Am impressed.',
    },
  ];

  const faqs = [
    {
      question: 'How long does each call usually last?',
      answer: 'Our calls typically last between 5-15 minutes, depending on the type of service and the conversation flow. We ensure every call is meaningful and delivers your message effectively.',
    },
    {
      question: 'What are the available payment options when booking a call?',
      answer: 'We accept various payment methods including bank transfers, mobile money, and online payment platforms. Specific payment details will be provided when you book through WhatsApp.',
    },
    {
      question: 'Should I complete payment before the call happens, or can I pay afterward?',
      answer: 'Payment is required before the call is made. This helps us confirm your booking and schedule the call at the perfect time for your loved one.',
    },
    {
      question: 'Who handles or places the call on my behalf?',
      answer: 'Our trained and professional call specialists handle all calls. They are skilled in delivering messages with warmth, authenticity, and care to ensure your loved one has a genuine and uplifting experience.',
    },
    {
      question: 'Can you place calls outside Nigeria, and what are the rates for international calls?',
      answer: 'Yes, we can place international calls! The rates vary depending on the destination country. Please contact us through WhatsApp with your specific requirements for a custom quote.',
    },
    {
      question: "What's the cost or price per call?",
      answer: 'Our pricing varies based on the type of call service and any additional features like gift packages. Contact us via WhatsApp for detailed pricing information tailored to your specific needs.',
    },
    {
      question: "What happens if the recipient doesn't answer the call?",
      answer: "If the recipient doesn't answer, we'll make multiple attempts to reach them at different times. We'll keep you updated throughout the process and work with you to find the best time to connect.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="home" onNavigate={onNavigate} />

      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/smile.JPG" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-400 opacity-50"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
            <Smile className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Trusted by thousands across Nigeria</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            We Spread Love<br />And Happiness
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Your online call center for heartfelt connections. Whether it's a special occasion or an
            ordinary day, we'll deliver your warm message to loved ones via personalized phone calls
            or delightful surprise packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl"
            >
              Book a Call Now
              <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/30 transition-all border-2 border-white/30"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">OUR SERVICES</span>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-4">
              Call Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the perfect way to connect with your loved ones</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-gradient-to-br from-yellow-400 to-orange-400 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">WHY US</span>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
              Why Choose Smile Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We go above and beyond to create meaningful connections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Icon className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">TESTIMONIALS</span>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-4">
              Stories of Smiles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real experiences from our amazing clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="font-bold text-black text-lg">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-yellow-400 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-black pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-yellow-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                >
                  <div className="p-6 pt-0 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-500"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-black rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 text-black mx-auto mb-6 animate-bounce" />
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-6">
            Ready to Spread Some Love?
          </h2>
          <p className="text-2xl text-black/80 mb-12 font-medium">
            Book a call today and make someone's day brighter
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-gray-900 transform hover:scale-105 transition-all shadow-2xl"
          >
            Book a Call Now
            <Phone className="w-7 h-7" />
          </a>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Chatbot />
    </div>
  );
}
