import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Cloud,
  DollarSign,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Clock,
  Users,
  Star,
  Target,
  Phone,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      title: "Enterprise Backend Development",
      subtitle: "Scalable Java/Spring Boot Systems",
      description:
        "Build robust, high-performance backend systems that handle millions of requests with enterprise-grade reliability and security.",
      icon: Code,
      color: "bg-blue-500",
      features: [
        "Microservices Architecture",
        "REST & GraphQL APIs",
        "Real-time Processing",
        "Database Optimization",
        "Performance Tuning",
        "Security Implementation",
      ],
      benefits: [
        "99.9% Uptime Guaranteed",
        "Handle 1M+ Daily Requests",
        "Scalable Architecture",
        "24/7 Monitoring",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      pricing: "Starting from $5,000",
      deliveryTime: "4-8 weeks",
      includes: [
        "Complete system architecture",
        "API documentation",
        "Performance testing",
        "Security audit",
        "Deployment support",
        "30-day support",
      ],
    },
    {
      title: "Financial System Integration",
      subtitle: "Banking & Fintech Solutions",
      description:
        "Secure, compliant financial systems with payment processing, risk assessment, and regulatory compliance built-in.",
      icon: DollarSign,
      color: "bg-green-500",
      features: [
        "Payment Gateway Integration",
        "Risk Assessment Models",
        "Fraud Detection Systems",
        "Compliance Automation",
        "Credit Scoring",
        "Real-time Transactions",
      ],
      benefits: [
        "$500M+ Safely Processed",
        "Bank-Grade Security",
        "Regulatory Compliant",
        "Real-time Monitoring",
      ],
      technologies: [
        "Java",
        "Spring Security",
        "Payment APIs",
        "MySQL",
        "Kubernetes",
        "AWS",
      ],
      pricing: "Starting from $8,000",
      deliveryTime: "6-12 weeks",
      includes: [
        "Security implementation",
        "Compliance documentation",
        "Integration testing",
        "Risk assessment setup",
        "Go-live support",
        "60-day support",
      ],
    },
    {
      title: "Cloud Infrastructure Solutions",
      subtitle: "AWS-Powered Scalability",
      description:
        "Modern cloud infrastructure with auto-scaling, disaster recovery, and multi-region deployment for global reach.",
      icon: Cloud,
      color: "bg-purple-500",
      features: [
        "Auto-scaling Infrastructure",
        "Multi-region Deployment",
        "Disaster Recovery",
        "CI/CD Pipelines",
        "Monitoring & Alerts",
        "Cost Optimization",
      ],
      benefits: [
        "300% Performance Boost",
        "99.99% Availability",
        "Global Reach",
        "Cost Reduction",
      ],
      technologies: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Jenkins",
        "Prometheus",
      ],
      pricing: "Starting from $4,000",
      deliveryTime: "3-6 weeks",
      includes: [
        "Infrastructure setup",
        "Monitoring configuration",
        "Security implementation",
        "Backup strategies",
        "Documentation",
        "Training session",
      ],
    },
    {
      title: "Compliance & Analytics Platforms",
      subtitle: "Automated Reporting & Insights",
      description:
        "Intelligent compliance monitoring and business analytics platforms with real-time reporting and predictive insights.",
      icon: TrendingUp,
      color: "bg-orange-500",
      features: [
        "Real-time Compliance Monitoring",
        "Automated Report Generation",
        "Business Intelligence Dashboards",
        "Predictive Analytics",
        "Data Visualization",
        "Alert Systems",
      ],
      benefits: [
        "70% Time Savings",
        "100% Compliance Rate",
        "Actionable Insights",
        "Automated Workflows",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Apache Spark",
        "Elasticsearch",
        "React",
        "PostgreSQL",
      ],
      pricing: "Starting from $6,000",
      deliveryTime: "5-10 weeks",
      includes: [
        "Dashboard development",
        "Report automation",
        "Data integration",
        "Training materials",
        "User documentation",
        "45-day support",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable solutions",
      icon: Zap,
      price: "Custom Quote",
      timeline: "8-16 weeks",
    },
    {
      title: "Database Optimization",
      description: "Performance tuning and optimization for large datasets",
      icon: Database,
      price: "Starting $2,500",
      timeline: "2-4 weeks",
    },
    {
      title: "Security Audit & Implementation",
      description: "Comprehensive security assessment and hardening",
      icon: Shield,
      price: "Starting $3,000",
      timeline: "3-5 weeks",
    },
    {
      title: "Global Scaling Solutions",
      description: "Multi-region deployment and international compliance",
      icon: Globe,
      price: "Custom Quote",
      timeline: "6-12 weeks",
    },
  ];

  const processSteps = [
    {
      step: "Discovery",
      description: "Requirements analysis and technical consultation",
      duration: "1-2 days",
    },
    {
      step: "Planning",
      description: "Architecture design and project roadmap",
      duration: "3-5 days",
    },
    {
      step: "Development",
      description: "Agile development with regular updates",
      duration: "Main timeline",
    },
    {
      step: "Deployment",
      description: "Go-live support and performance monitoring",
      duration: "1-2 weeks",
    },
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description: "$3B+ in transaction value processed successfully",
      icon: Target,
    },
    {
      title: "Enterprise Experience",
      description: "8+ years building systems for Fortune 500 companies",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support",
      icon: Clock,
    },
    {
      title: "Global Reach",
      description: "Successfully deployed in 25+ countries",
      icon: Globe,
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="px-4 py-2 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Enterprise-Grade Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Services That Drive
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                  {" "}
                  Business Growth
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive technical solutions designed to scale your
                business, reduce costs, and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-4">
                  <Link to="/get-started" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Free Consultation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4"
                >
                  <a
                    href="tel:+919879957167"
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call: +91 98799 57167
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized solutions backed by proven enterprise experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Proven Results
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="bg-green-50 border border-green-200 rounded-lg p-2 text-center"
                          >
                            <div className="text-sm font-medium text-green-800">
                              {benefit}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-lg font-bold text-primary-600">
                            {service.pricing}
                          </div>
                          <div className="text-sm text-gray-600">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {service.deliveryTime}
                          </div>
                        </div>
                        <Button asChild>
                          <Link
                            to="/get-started"
                            className="flex items-center gap-2"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>

                      {/* What's Included */}
                      <details className="text-sm">
                        <summary className="font-medium text-gray-900 cursor-pointer mb-2">
                          What's Included
                        </summary>
                        <ul className="text-gray-600 space-y-1">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized solutions for specific business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <div className="font-medium">{service.price}</div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.timeline}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <Link to="/get-started">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven expertise with measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Structured approach ensuring project success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center relative">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {step.step}
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
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and custom solution proposal tailored to
              your specific needs.
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
                  Schedule Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Link to="/case-studies" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  View Results
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
