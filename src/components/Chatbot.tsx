import { MessageCircle, X, Send, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Hello! How can we help you today?', isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedMessages = [
    'What is Smile Services?',
    'How do personalized calls work?',
    'Who makes the calls?',
    'Can I book international calls?',
    'How do I book a call?',
    'Tell me about gift packages',
  ];

  const autoResponses: Record<string, string> = {
    'what exactly is smile services': 'Smile Services is your online call center for heartfelt connections. We make personalized phone calls on your behalf to celebrate, encourage, appreciate, or simply spread love to your loved ones anywhere in the world.',
    'what is smile services': 'Smile Services is your online call center for heartfelt connections. We make personalized phone calls on your behalf to celebrate, encourage, appreciate, or simply spread love to your loved ones anywhere in the world.',
    'how do the personalized calls work': 'You book a call, provide us with the recipient details and your message. Our trained professionals then make the call on your behalf, delivering your message with warmth and authenticity. You receive confirmation afterward!',
    'how do personalized calls work': 'You book a call, provide us with the recipient details and your message. Our trained professionals then make the call on your behalf, delivering your message with warmth and authenticity. You receive confirmation afterward!',
    'who makes the calls': 'Our calls are made by trained and professional call specialists who are skilled in delivering messages with warmth, authenticity, and care. They are friendly conversationalists who ensure your loved one has a genuine and uplifting experience.',
    'can i choose who will make the call': 'While we carefully match our call specialists to each situation, you can share preferences or special requests when booking, and we will do our best to accommodate them.',
    'can i listen to or approve the message before': 'We work closely with you during booking to understand your message and tone. While pre-approval of the exact wording is not standard, we ensure the message aligns perfectly with your intentions before making the call.',
    'do you operate only in nigeria': 'We are based in Nigeria but we also make international calls! The rates vary depending on the destination country. Contact us through WhatsApp for a custom quote.',
    'also internationally': 'Yes, we make international calls! The rates vary depending on the destination country. Contact us through WhatsApp for a custom quote.',
    'what time of day are the calls made': 'We work with you to schedule calls at the perfect time for your loved one. We are available 24/7 and can accommodate various time zones and preferences.',
    'how do i know my loved one received the call': 'You will receive feedback and confirmation after the call is made, letting you know that your message was successfully delivered.',
    'how far in advance should i book': 'While we recommend booking a few days in advance for best scheduling, we are flexible and can often accommodate last-minute requests.',
    'can i make same-day or urgent bookings': 'Yes! We understand that special moments can come up unexpectedly. Contact us via WhatsApp and we will do our best to accommodate same-day or urgent bookings.',
    'what types of occasions can i book for': 'You can book for any occasion! Birthdays, anniversaries, graduations, weddings, new babies, promotions, apologies, thank you messages, encouragement during tough times, or even just because. Every moment is worth celebrating!',
    'how personal can the message be': 'Your message can be as personal as you want! We encourage you to share specific details, personal stories, and heartfelt sentiments. The more personal, the more meaningful the call will be.',
    'can i include specific details or inside jokes': 'Absolutely! Including specific details, inside jokes, or personal memories makes the call even more special and authentic. Share everything you want us to include when booking.',
    'how long does each call last': 'Our calls typically last between 5-15 minutes, depending on the type of service and the conversation flow. We ensure every call is meaningful and delivers your message effectively.',
    'can i record my own voice': 'Currently, our service focuses on live personalized calls made by our trained specialists. This ensures a genuine conversation experience. Contact us to discuss any special requirements.',
    'what happens if the recipient doesn\'t answer': 'If the recipient doesn\'t answer, we will make multiple attempts to reach them at different times. We keep you updated throughout the process and work with you to find the best time to connect.',
    'how does a self-love call work': 'A self-love call is a call you book for yourself! When you are going through a tough time or need a lift, we reach out to you with a warm, uplifting conversation designed to leave you feeling reassured, valued, and genuinely happy again.',
    'are these calls made by trained professionals': 'Yes! Our calls are made by trained professionals who are also friendly conversationalists. They are skilled in delivering messages with warmth, authenticity, and care to ensure a genuine and uplifting experience.',
    'can i book regular weekly or monthly': 'Yes! We can arrange regular weekly or monthly self-love calls or any other recurring call services. Contact us via WhatsApp to set up a recurring schedule that works for you.',
    'is my personal information kept private': 'Yes, absolutely! Your personal information and all details of your booking are kept completely confidential. We prioritize your privacy and security.',
    'what types of gift or surprise packages': 'We offer gift boxes, anniversary flower arrangements, celebration kits for graduations, new babies, or any special occasion, and fully custom surprises. Each package is thoughtfully curated and can be paired with a personalized call!',
    'can i customize the items in a gift box': 'Yes! We can customize gift boxes to include specific items or themes that your loved one will appreciate. Share your preferences when booking and we will create something special.',
    'how far in advance must i order for delivery': 'We recommend ordering gift packages at least 3-5 days in advance to ensure timely delivery and allow for customization. However, contact us for urgent requests and we will do our best to help!',
    'do you deliver gifts nationwide': 'We deliver gifts nationwide across Nigeria. For delivery to specific cities or locations, please contact us via WhatsApp to confirm availability.',
    'can i pair a gift with a call': 'Absolutely! Pairing a personalized call with a gift or surprise package creates an unforgettable experience. This is one of our most popular options!',
    'what if the recipient isn\'t home for delivery': 'We coordinate with delivery services to ensure successful delivery. If the recipient is not home, we will arrange for redelivery or a suitable drop-off solution and keep you informed.',
    'how do i book a call or package': 'You can book by clicking the "Book a Call Now" button on our website or by contacting us directly via WhatsApp at 234 9015544758. We will guide you through the simple booking process!',
    'what payment methods do you accept': 'We accept various payment methods including bank transfers, mobile money, and online payment platforms. Specific payment details will be provided when you book through WhatsApp.',
    'is payment required upfront': 'Yes, payment is required before the call or delivery is made. This helps us confirm your booking and schedule everything at the perfect time for your loved one.',
    'will i receive proof or confirmation after payment': 'Yes! You will receive confirmation of your booking after payment, and we will provide feedback after the call or delivery is completed.',
    'can i get a refund if i cancel': 'Please contact us via WhatsApp to discuss cancellations or changes. We handle each situation individually and will work with you to find the best solution.',
    'is my information safe with you': 'Yes! We take data security very seriously. Your personal information and all booking details are kept completely confidential and secure.',
    'do you share customer details with anyone': 'No, we never share customer details with anyone. Your privacy is our priority, and all information is kept strictly confidential.',
    'are calls recorded': 'Calls may be recorded for quality assurance and your peace of mind, but recordings are kept confidential and used only for service improvement. Contact us for specific recording requests.',
    'how do you ensure confidentiality': 'We have strict confidentiality policies in place. All staff are trained on privacy protocols, and your personal messages and information are handled with the utmost discretion and security.',
    'where are you based': 'We are based in Nigeria and proudly serve customers both locally and internationally. Our services are available 24/7 no matter where you or your loved ones are located.',
    'how do i book a call': 'You can book a call by clicking the "Book a Call Now" button on our website or by contacting us directly via WhatsApp at 234 9015544758.',
    'what services do you offer': 'We offer Celebratory Calls, Appreciation Calls, Encouragement/Reach-Out Calls, Self Love Calls, and Gift/Surprise Event Packages. Each service is designed to create meaningful connections.',
    'how much does it cost': 'Our pricing varies based on the type of service and any additional features. Please contact us via WhatsApp at 234 9015544758 for detailed pricing information tailored to your needs.',
    'can you make international calls': 'Yes, we make international calls! The rates vary depending on the destination country. Contact us through WhatsApp at 234 9015544758 for a custom quote.',
    'how long are the calls': 'Our calls typically last between 5-15 minutes, depending on the type of service and the conversation flow. We ensure every call is meaningful.',
    'tell me about gift packages': 'Our Gift/Surprise Event Packages include thoughtfully curated gifts delivered to your loved ones. From gift boxes and flower arrangements to custom celebration kits, we handle every detail and can pair them with personalized calls!',
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const lowerText = text.toLowerCase().trim();
      let response = "Thank you for your message! For specific inquiries, please contact us via WhatsApp at 234 9015544758 or call us directly. We're here to help!";

      const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
      if (greetings.some(greeting => lowerText === greeting || lowerText.startsWith(greeting + ' '))) {
        response = "Hello! Welcome to Smile Services. How can we help you today? Feel free to ask about our services, pricing, or booking process!";
      } else if (lowerText.includes('thank') || lowerText.includes('thanks')) {
        response = "You're welcome! If you have any other questions or would like to book a call, feel free to reach out via WhatsApp at 234 9015544758. Have a wonderful day!";
      } else if (lowerText.includes('bye') || lowerText === 'goodbye') {
        response = "Goodbye! Thank you for chatting with us. If you need anything else, we're always here to help. Have a great day!";
      } else {
        const keywords = Object.keys(autoResponses).sort((a, b) => b.length - a.length);

        for (const key of keywords) {
          const keywordParts = key.split(' ');
          const matchCount = keywordParts.filter(part => lowerText.includes(part)).length;

          if (matchCount >= Math.max(2, Math.ceil(keywordParts.length * 0.6))) {
            response = autoResponses[key];
            break;
          }
        }
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-yellow-400 to-orange-400 text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            1
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-black p-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Smile Services</h3>
                <p className="text-black/70 text-sm">We're here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-black/10 hover:bg-black/20 rounded-full p-2 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-black rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="p-4 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-3 font-semibold">Quick questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {suggestedMessages.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-left text-xs bg-gray-100 hover:bg-yellow-50 hover:border-yellow-400 p-2 rounded-xl transition-all border border-gray-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-400 text-sm"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="bg-gradient-to-br from-yellow-400 to-orange-400 text-black p-3 rounded-full hover:scale-105 transition-transform shadow-lg"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
