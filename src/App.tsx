import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap, BrainCircuit, Bell, BarChart3, Headset as HeadSet, ChevronRight, CheckCircle, Users, MessageSquare, Clock, Code2, Rocket, Plus, Minus, Target, Database, Lock, Lightbulb, Play, X } from 'lucide-react';
import { DemoRequestForm } from './components/DemoRequestForm';
import { Logo } from './components/Logo';
import backgroundVideo from './assets/video1.mov';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-blue-500" />
        ) : (
          <Plus className="w-5 h-5 text-blue-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
}

function VideoModal({ isOpen, onClose, videoUrl }: { isOpen: boolean; onClose: () => void; videoUrl: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative w-full aspect-video">
          <iframe
            src={videoUrl}
            title="Explainer Video"
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // YouTube embed URL for the explainer video
  const videoUrl = "https://www.youtube.com/embed/Uftx4kz9h_8?rel=0&modestbranding=1";

  const handleDemoSubmit = (data: { email: string; useCase: string }) => {
    // Here you would typically send this data to your backend
    console.log('Demo request submitted:', data);
  };

  const features = [
    {
      icon: <BrainCircuit className="w-12 h-12 text-blue-500" />,
      title: "Customizable AI Models",
      description: "Our experts train each model based on your exact candlestick interpretations."
    },
    {
      icon: <Bell className="w-12 h-12 text-purple-500" />,
      title: "Real-Time Alerts",
      description: "Receive instant notifications whenever your specified patterns appear in the market."
    },
    {
      icon: <Lock className="w-12 h-12 text-green-500" />,
      title: "Data Privacy First",
      description: <>
        Your strategy data stays private.<br/>
        We don't share, sell, or reuse your inputs.
      </>
    },
    {
      icon: <HeadSet className="w-12 h-12 text-yellow-500" />,
      title: "Dedicated Support",
      description: "One-on-one consultations to ensure your AI model aligns with your trading strategy."
    }
  ];

  const process = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "Discovery Sync",
      description: "We learn about your trading style and candlestick strategies using intuitive tooling designed to make sharing your approach easy and seamless."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Data Gathering",
      description: "We translate your approach into data—exactly how you see candlestick formations."
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-500" />,
      title: "Model Development",
      description: "We build and train your custom AI model using advanced machine learning techniques."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Testing & Validation",
      description: "Rigorous backtesting to ensure reliable signals."
    },
    {
      icon: <Rocket className="w-8 h-8 text-yellow-500" />,
      title: "Deployment",
      description: "Access real-time scanning and alerts with ongoing support."
    }
  ];

  const faqs = [
    {
      question: "How accurate are your AI models?",
      answer: "Accuracy largely depends on the quality and scope of your data and pattern definitions. We collaborate closely to ensure your model aligns with your specific candlestick setups and continuously refine it based on performance metrics and advanced machine learning techniques. For perspective, our in-house trading models achieve approximately 97% accuracy."
    },
    {
      question: "Can I integrate these AI signals with my trading platform?",
      answer: "Yes! Our models support various integrations and can provide alerts via email, SMS, Slack, or through an API for direct platform integration. We'll work with you to set up the most efficient delivery method for your workflow."
    },
    {
      question: "Do I need technical or coding knowledge to use this?",
      answer: "None. You'll simply highlight candlestick setups directly on a chart in our webapp — no coding needed. We take care of translating your marked patterns into AI-powered logic."
    },
    {
      question: "What markets do you support?",
      answer: "We support any market that can be charted with candlesticks, including stocks, forex, crypto, and commodities. If you have specialized market needs, we're happy to discuss custom solutions."
    },
    {
      question: "How much does it cost?",
      answer: <>Each AI model is custom. <button onClick={() => setShowDemoForm(true)} className="text-blue-400 hover:text-blue-300 underline">Click here to request a quote</button>.</>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#process" className="hover:text-blue-400">How It Works</a>
            <a href="#faq" className="hover:text-blue-400">FAQ</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            src={backgroundVideo}
            aria-label="Background visualization of AI-powered candlestick pattern analysis"
            title="Tailored AI Models for Your Unique Candlestick Trading Strategy"
            role="presentation"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/60 to-gray-900 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50 pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] leading-tight">
                Your trading brain,<br />encoded in an AI model
              </h1>
              
              {/* Video Button */}
              <div className="mb-10">
                <button
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30 group"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                  <span className="font-medium">Watch Explainer Video</span>
                </button>
              </div>

              <h2 className="text-xl text-gray-50 mb-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] leading-relaxed max-w-2xl mx-auto font-normal">
                We build custom AI models that spot your proven candlestick setups 24/7 across multiple markets. No missed opportunities, no emotional decisions—just your strategy, automated with precision
              </h2>
              <div className="flex flex-col items-center mt-16">
                <button 
                  onClick={() => setShowDemoForm(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 transition duration-200 shadow-lg hover:shadow-blue-500/20"
                  type="button"
                >
                  <span>Tell Us How You Trade</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom fade for smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </section>

      {/* Mission Statement Section */}
      <section className="container mx-auto px-4 py-16 -mt-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-xl p-6 shadow-lg border border-blue-700/30">
              <div className="flex items-center mb-2">
                <Lightbulb className="w-6 h-6 text-blue-400 mr-2" />
                <span className="font-semibold text-white text-lg">How is it different from generic technical indicators?</span>
              </div>
              <ul className="list-disc pl-5 text-gray-200 space-y-2 mb-2">
                <li><span className="font-bold text-blue-300">Generic technical indicators</span> rely on rigid mathematical formulas to define market behavior.</li>
                <li>They try to describe every pattern with math, but <span className="font-bold">not every pattern can be captured by a formula</span>.</li>
                <li>There are <span className="font-bold">visual nuances</span>—the specific shape of a candle, its wick length, or its position relative to other candles—that formulas simply cannot see.</li>
                <li><span className="font-bold text-purple-300">Our AI is fundamentally different:</span> It doesn't use formulas; it learns to <span className="font-bold">see the market through your eyes</span>.</li>
                <li>By training on <span className="font-bold">visual examples of your proven setups</span>, it learns to recognize the subtle, intuitive patterns that you, the trader, identify.</li>
              </ul>
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200 mt-2">
                It captures the <b>art</b> of your trading, not just a mathematical approximation of it.
              </blockquote>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform brings advanced pattern recognition to your trading strategy.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition duration-200">
                {feature.icon}
                <h3 className="text-xl font-semibold my-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your journey to AI-powered trading success starts here.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {process.slice(0, 3).map((step, index) => (
            <AnimatedSection key={index}>
              <div className="relative h-full">
                <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition duration-200 h-full flex flex-col">
                  {step.icon}
                  <h3 className="text-xl font-semibold my-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {process.slice(3).map((step, index) => (
            <AnimatedSection key={index + 3}>
              <div className="relative h-full">
                <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition duration-200 h-full flex flex-col">
                  {step.icon}
                  <h3 className="text-xl font-semibold my-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our AI-powered trading solutions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto bg-white/5 rounded-xl p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI-powered pattern recognition today and never miss a trading opportunity again.
            </p>
            <button 
              onClick={() => setShowDemoForm(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 mx-auto transition duration-200"
              type="button"
            >
              <span>Tell Us How You Trade</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <div className="text-gray-400">
            © 2025 TradeNetAI. All rights reserved.
          </div>
        </div>
      </footer>

      {showDemoForm && (
        <DemoRequestForm
          onClose={() => setShowDemoForm(false)}
          onSubmit={handleDemoSubmit}
        />
      )}

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
}

export default App;