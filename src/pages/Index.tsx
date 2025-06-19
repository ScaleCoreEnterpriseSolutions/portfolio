import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Database,
  Cloud,
  Code,
  Users,
  Star,
  Phone,
  Mail,
  Calendar,
  Target,
  Award,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  buttonTransitionVariants,
  linkTransitionVariants,
} from "@/hooks/usePageTransition";

const Index = () => {
  const clientProblems = [
    {
      problem: "Legacy systems slowing down your business?",
      solution: "Modern, scalable backend architectures",
      icon: Zap,
    },
    {
      problem: "Need to process millions of transactions daily?",
      solution: "High-performance real-time systems",
      icon: Database,
    },
    {
      problem: "Struggling with compliance and regulations?",
      solution: "Automated compliance & reporting solutions",
      icon: Shield,
    },
    {
      problem: "Want to expand globally but lack infrastructure?",
      solution: "Cloud-native international solutions",
      icon: Globe,
    },
  ];

  const services = [
    {
      title: "Enterprise Backend Development",
      description:
        "Scalable Java/Spring Boot systems handling millions of requests",
      features: [
        "Microservices Architecture",
        "Real-time Processing",
        "API Development",
      ],
      icon: Code,
      result: "99.9% Uptime Guaranteed",
    },
    {
      title: "Financial System Integration",
      description: "Secure, compliant solutions for banking and fintech",
      features: [
        "Payment Gateway Integration",
        "Risk Assessment",
        "Fraud Detection",
      ],
      icon: DollarSign,
      result: "$500M+ Processed Safely",
    },
    {
      title: "Cloud Infrastructure Solutions",
      description: "AWS-powered scalable infrastructure and deployment",
      features: [
        "Auto-scaling",
        "Multi-region Deployment",
        "Disaster Recovery",
      ],
      icon: Cloud,
      result: "300% Performance Improvement",
    },
    {
      title: "Compliance & Analytics Platforms",
      description: "Automated compliance monitoring and business intelligence",
      features: [
        "Real-time Monitoring",
        "Custom Dashboards",
        "Automated Reporting",
      ],
      icon: TrendingUp,
      result: "70% Time Savings",
    },
  ];

  const clientResults = [
    {
      metric: "$3B+",
      description: "Transaction Value Processed",
      icon: DollarSign,
    },
    {
      metric: "99.9%",
      description: "System Uptime Achieved",
      icon: TrendingUp,
    },
    {
      metric: "100K+",
      description: "End Users Served",
      icon: Users,
    },
    {
      metric: "25+",
      description: "Countries Deployed",
      icon: Globe,
    },
  ];

  const testimonials = [
    {
      quote:
        "Exceptional technical expertise and delivery. The GST solution handles our complex requirements perfectly.",
      client: "Enterprise Client",
      industry: "Tax Technology",
      rating: 5,
    },
    {
      quote:
        "Reduced our processing time by 70% and improved accuracy significantly. Outstanding results.",
      client: "Financial Services Firm",
      industry: "Due Diligence",
      rating: 5,
    },
    {
      quote:
        "Seamless international deployment across 15+ countries. Exceeded all our expectations.",
      client: "Global Corporation",
      industry: "International Operations",
      rating: 5,
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery Call",
      description: "Understand your challenges and requirements",
      duration: "30-60 minutes",
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom architecture and implementation plan",
      duration: "1-2 weeks",
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with regular updates",
      duration: "4-12 weeks",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Go-live support and ongoing maintenance",
      duration: "Ongoing",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Mobile-First Web3 Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Web3 Background with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-white to-accent/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary-500/5"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <div className="max-w-5xl mx-auto">
              {/* Mobile-First Trust Badge */}
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg shadow-primary-500/10">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-primary-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Trusted by 100+ Enterprise Clients
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent to-primary-700 animate-gradient-x">
                  ScaleCore
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 sm:mt-3">
                  Enterprise Solutions
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-600 mt-1 sm:mt-2">
                  That Scale & Deliver
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
                Transform your business with proven enterprise-grade backend
                systems, financial integrations, and cloud solutions that handle
                millions of transactions with 99.9% uptime.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  variants={buttonTransitionVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    asChild
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 rounded-2xl"
                  >
                    <Link
                      to="/get-started"
                      className="flex items-center justify-center gap-2"
                    >
                      Start Your Project
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonTransitionVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-xl border-white/30 hover:bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
                  >
                    <Link
                      to="/case-studies"
                      className="flex items-center justify-center gap-2"
                    >
                      View Results
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonTransitionVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 rounded-2xl border border-transparent hover:border-white/20"
                  >
                    <a
                      href="tel:+919879957167"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Call Now: </span>
                      <span className="sm:hidden">Call: </span>
                      +91 98799 57167
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Quick Results - Mobile-First Glassmorphism Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {clientResults.map((result, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500/20 to-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <result.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-600 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Problems & Solutions - Web3 Glassmorphism */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Solving Real Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                Challenges
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Don't let technical limitations hold back your business growth.
              Get enterprise solutions that scale with your success.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            {clientProblems.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] hover:bg-white/50 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg leading-tight">
                      {item.problem}
                    </h3>
                    <div className="flex items-start gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base leading-relaxed">
                        {item.solution}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                See All Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview - Mobile-First Web3 Design */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-accent/10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary-300/20 to-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Enterprise-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent animate-gradient-x">
                Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Comprehensive technical solutions backed by 8+ years of enterprise
              experience
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] hover:bg-white/70 group"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500/20 to-accent/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-white/50 backdrop-blur-sm border border-white/60 rounded-full text-gray-700 hover:bg-primary-50 transition-colors duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-sm border border-green-200/50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-green-800 text-sm sm:text-base">
                      Proven Result: {service.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses who trusted us with their
              critical systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-medium text-gray-900">
                      {testimonial.client}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.industry}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures your project success from day
              one
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center relative">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join 100+ successful enterprises who've transformed their operations
            with our solutions. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-4"
            >
              <Link to="/get-started" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
            >
              <a href="tel:+919879957167" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: +91 98799 57167
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="text-lg px-8 py-4 text-white hover:bg-white/20"
            >
              <a
                href="mailto:info@scalecore.xyz"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Direct
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
