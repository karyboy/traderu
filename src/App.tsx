import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap, BrainCircuit, Bell, BarChart3, Headset as HeadSet, ChevronRight, CheckCircle, Users, MessageSquare, Clock, Code2, Rocket, Plus, Minus, Target } from 'lucide-react';
import { DemoRequestForm } from './components/DemoRequestForm';
import { Logo } from './components/Logo';

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

function FAQItem({ question, answer }: { question: string; answer: string }) {
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

function App() {
  const [showDemoForm, setShowDemoForm] = useState(false);

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
      icon: <BarChart3 className="w-12 h-12 text-green-500" />,
      title: "Backtesting & Analytics",
      description: "Validate your patterns over years of historical data to refine accuracy."
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
      title: "Discovery Call",
      description: "Schedule a free consultation to discuss your candlestick strategies."
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-500" />,
      title: "Model Development",
      description: "We build and train your custom AI model using advanced ML techniques."
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

  const plans = [
    {
      name: "Starter",
      price: "299",
      features: [
        "1 Custom Pattern Detection",
        "Basic Real-time Alerts",
        "Email Support",
        "Basic Backtesting"
      ]
    },
    {
      name: "Pro",
      price: "599",
      features: [
        "5 Custom Patterns",
        "Unlimited Real-time Alerts",
        "Priority Support",
        "Advanced Backtesting",
        "API Access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Patterns",
        "Dedicated Data Scientist",
        "Custom Integrations",
        "24/7 Support",
        "Private Cloud Deployment"
      ]
    }
  ];

  const faqs = [
    {
      question: "How accurate are your AI models?",
      answer: "Accuracy largely depends on the quality and scope of your data and pattern definitions. We collaborate closely to ensure your model aligns with your specific candlestick setups and continuously refine it based on performance metrics."
    },
    {
      question: "Can I integrate these AI signals with my trading platform?",
      answer: "Yes! Our models support various integrations and can provide alerts via email, SMS, Slack, or through an API for direct platform integration. We'll work with you to set up the most efficient delivery method for your workflow."
    },
    {
      question: "Do I need technical or coding knowledge to use this?",
      answer: "Not at all. We handle all the technical aspects. You just need to describe your patterns and preferences for how you want alerts delivered. Our team translates your trading knowledge into AI models."
    },
    {
      question: "What markets do you support?",
      answer: "We support any market that can be charted with candlesticks, including stocks, forex, crypto, and commodities. If you have specialized market needs, we're happy to discuss custom solutions."
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
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Empower Your Trading with AI-Customized Candlestick Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leverage next-generation AI models to detect patterns and trading setups—tailored to your unique candlestick strategy.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setShowDemoForm(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 transition duration-200"
                type="button"
              >
                <span>Request Demo</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg transition duration-200">
                Learn More
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <img
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=2000&q=80"
              alt="AI Trading Dashboard"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Mission Statement Section */}
      <section className="container mx-auto px-4 py-16 -mt-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex items-start space-x-6">
              <Target className="w-12 h-12 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe every trader has a unique perspective on the market, and our mission is to translate that perspective into a powerful AI solution. Our team is passionate about blending human expertise with advanced machine learning for truly personalized insights.
                </p>
              </div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <AnimatedSection key={index}>
              <div className="relative">
                <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition duration-200">
                  {step.icon}
                  <h3 className="text-xl font-semibold my-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-500/20 transform translate-x-1/2" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Traders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our clients say about their experience with our AI models.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-white/5 p-6 rounded-xl">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <p className="text-gray-300 mb-4">
                "I used to miss important candlestick reversals because of my busy schedule. Now, my custom AI flags them for me in real time!"
              </p>
              <p className="font-semibold">Alex R.</p>
              <p className="text-sm text-gray-400">Swing Trader</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/5 p-6 rounded-xl">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-gray-300 mb-4">
                "Their backtesting feature helped me spot flaws in my patterns. I refined them—and my model's accuracy improved!"
              </p>
              <p className="font-semibold">Jamie D.</p>
              <p className="text-sm text-gray-400">Day Trader</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/5 p-6 rounded-xl">
              <Bot className="w-12 h-12 text-purple-500 mb-4" />
              <p className="text-gray-300 mb-4">
                "It's like having an extra pair of eyes on hundreds of charts at once—my candlestick setups are never overlooked."
              </p>
              <p className="font-semibold">Morgan T.</p>
              <p className="text-sm text-gray-400">Crypto Trader</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your trading needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition duration-200">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-200">
                  Get Started
                </button>
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
              <span>Schedule a Demo</span>
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
    </div>
  );
}

export default App;