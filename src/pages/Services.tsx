import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { Heart, MessageCircle, Phone, Smile, Gift, CheckCircle } from 'lucide-react';

type Page = 'home' | 'services' | 'contact';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const bookingUrl = 'https://wa.me/message/PKYOFMM62K6GB1';

  const servicesList = [
    {
      icon: Heart,
      title: 'Celebratory Calls',
      description:
        "A personalized call to your loved ones, delivered on your behalf to celebrate their special moments—whether it's a birthday, anniversary, new baby, graduation, induction, wedding, or any milestone worth honoring.",
      occasions: [
        'Birthdays',
        'Anniversaries',
        'Graduations',
        'Weddings',
        'New Baby',
        'Promotions',
      ],
      image: '/2.JPG',
    },
    {
      icon: MessageCircle,
      title: 'Appreciation Calls',
      description:
        'A personalized, heartfelt call to your loved one, gently expressing remorse for a misstep and paving the way for genuine reconciliation.',
      occasions: [
        'Apologies',
        'Thank You Messages',
        'Reconciliation',
        'Gratitude Expressions',
      ],
      image: '/smile.JPG',
    },
    {
      icon: Phone,
      title: 'Encouragement / Reach-Out Calls',
      description:
        "A heartfelt call to uplift your loved one, offering encouragement and gentle motivation to keep going—whether they're facing illness, feeling lost, or navigating a challenging season.",
      occasions: [
        'Health Challenges',
        'Difficult Times',
        'Career Changes',
        'Personal Struggles',
      ],
      image: '/4.JPG',
    },
    {
      icon: Smile,
      title: 'Self Love Calls',
      description:
        "A call you can book just for yourself. Going through a tough time or simply need a lift? We'll reach out with a warm, uplifting conversation to leave you feeling reassured, valued, and genuinely happy again.",
      occasions: [
        'Personal Growth',
        'Mental Health Support',
        'Motivation Boost',
        'Self-Care Moments',
      ],
      image: '/5.JPG',
    },
    {
      icon: Gift,
      title: 'Surprise/Gift Packages',
      description:
        'Delight your loved ones with more than just a call—pair it with a thoughtfully curated gift or full surprise event, delivered right to their door. From gift boxes and anniversary flower arrangements to custom celebration kits for graduations, new babies, or "just because" moments, we handle every detail.',
      occasions: [
        'Gift Boxes',
        'Flower Arrangements',
        'Celebration Kits',
        'Custom Surprises',
      ],
      image: '/6.JPG',
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
            From celebratory moments to heartfelt apologies, we offer a range of personalized call
            services designed to bring people closer together.
          </p>
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
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">{service.title}</h2>
                  <p className="text-gray-700 text-xl leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.occasions.map((occasion, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-yellow-500" />
                        <span className="text-gray-700 font-medium">{occasion}</span>
                      </div>
                    ))}
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">SIMPLE PROCESS</span>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Four easy steps to spread love and happiness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-black shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-yellow-500 transform hover:scale-105 transition-all shadow-2xl"
            >
              Get Started Now
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
      <Chatbot />
    </div>
  );
}
