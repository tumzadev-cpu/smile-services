import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { Heart, MessageCircle, Phone, Smile, Gift, CheckCircle, Calendar } from 'lucide-react';

type Page = 'home' | 'services' | 'contact';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const bookingUrl = 'https://wa.me/message/PKYOFMM62K6GB1';

  const servicesList = [
    {
      icon: Phone,
      title: 'Surprise Call Services',
      subtitle: 'We can help you say what your heart feels, even when you can\'t be there in person',
      description:
        'We deliver your message with warmth, emotion, and accuracy. Whether it\'s love, apology, encouragement, or birthdays — we speak from your heart.',
      callTypes: [
        {
          name: 'Celebratory Calls',
          detail: 'A personalized call to your loved ones, delivered on your behalf to celebrate their special moments—whether it\'s a birthday, anniversary, new baby, graduation, induction, wedding, or any milestone worth honoring.',
        },
        {
          name: 'Appreciation Calls',
          detail: 'A personalized, heartfelt call to your loved one, gently expressing remorse for a misstep and paving the way for genuine reconciliation.',
        },
        {
          name: 'Reach Out/ Encouragement Calls',
          detail: 'A heartfelt call to uplift your loved one, offering encouragement and gentle motivation to keep going—whether they\'re facing illness, feeling lost, or navigating a challenging season.',
        },
        {
          name: 'Self Love Calls',
          detail: 'A call you can book just for yourself. Going through a tough time or simply need a lift? We\'ll reach out with a warm, uplifting conversation to leave you feeling reassured, valued, and genuinely happy again.',
        },
      ],
      image: '/2.JPG',
    },
    {
      icon: Gift,
      title: 'Gift Packages',
      subtitle: 'Thoughtful, beautifully arranged gifts for every occasion',
      description:
        'Send beautifully curated gifts anywhere within your city. Perfect for birthdays, anniversaries, surprises, and "just because."',
      callTypes: [
        {
          name: 'Birthday gift boxes',
          detail: '',
        },
        {
          name: 'Anniversary packages',
          detail: '',
        },
        {
          name: 'Chocolate & flower bundles',
          detail: '',
        },
        {
          name: '"Just because" surprise gifts',
          detail: '',
        },
        {
          name: 'Mini celebration packs',
          detail: '',
        },
        {
          name: 'Corporate gift bundles',
          detail: '',
        },
      ],
      image: '/6.JPG',
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      subtitle: 'We create simple, beautiful setups for intimate celebrations',
      description:
        'Let\'s help you plan small to medium events with elegance and ease.',
      callTypes: [
        {
          name: 'Surprise setups',
          detail: '',
        },
        {
          name: 'Proposals',
          detail: '',
        },
        {
          name: 'Home & room décor',
          detail: '',
        },
        {
          name: 'Mini birthdays',
          detail: '',
        },
        {
          name: 'Anniversaries',
          detail: '',
        },
        {
          name: 'Small outdoor events',
          detail: '',
        },
      ],
      image: '/4.JPG',
    },
  ];

  const howItWorksSteps = [
    {
      number: '1',
      title: 'Choose the Type of Call',
      description: 'Select from our range of personalized call services',
    },
    {
      number: '2',
      title: 'Provide the Details',
      description: "Tell us who, what, and when—we'll handle the rest",
    },
    {
      number: '3',
      title: 'Pay Securely',
      description: 'Complete your booking with our secure payment process',
    },
    {
      number: '4',
      title: 'We Make the Call',
      description: 'Receive feedback afterward confirming the delivery',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="services" onNavigate={onNavigate} />

      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/smile.JPG" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-400 opacity-90"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-black rounded-full text-sm font-semibold mb-6 border border-white/30">OUR SERVICES</span>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-black mb-6 leading-tight">Our Services</h1>
          <p className="text-xl text-black/80 max-w-3xl mx-auto font-medium">
            We offer three core services designed to help you create joy, connection, and unforgettable moments.
          </p>
          <p className="text-lg text-black/70 max-w-3xl mx-auto mt-4">Choose what you need — we'll handle the rest.</p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <Icon className="w-12 h-12 text-black" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4">{service.title}</h2>
                  <p className="text-lg font-semibold text-gray-700 mb-6">{service.subtitle}</p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.callTypes.map((type, i) => (
                      <div key={i}>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-900 font-bold">{type.name}</p>
                            {type.detail && <p className="text-gray-600 text-sm mt-1">{type.detail}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
                    >
                      {index === 0 ? 'Book a Surprise Call' : index === 1 ? 'Order a Gift Package' : 'Plan an Event'}
                      <Icon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-6">
            Need something special?
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            We can customize any surprise, call, or gift.
          </p>
          <p className="text-xl text-gray-600 mb-10">
            Just tell us what you imagine — we'll make it happen.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-5 rounded-full text-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
          >
            Chat With Us on WhatsApp
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Chatbot />
    </div>
  );
}
