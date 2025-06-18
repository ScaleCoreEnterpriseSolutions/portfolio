import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Zap,
  Shield,
  Users,
  DollarSign,
  Globe,
  TrendingUp,
  Award,
  FileText,
  MapPin,
} from "lucide-react";

const GetStarted = () => {
  const contactMethods = [
    {
      title: "Schedule Free Consultation",
      description:
        "Book a 30-60 minute call to discuss your requirements and get expert recommendations",
      icon: Calendar,
      color: "bg-green-500",
      action: "Schedule Call",
      benefits: [
        "Free technical consultation",
        "Custom solution roadmap",
        "Project timeline & estimates",
        "No obligation discussion",
      ],
      href: "https://calendly.com/pratikvaishnav2013", // Replace with actual booking link
      primary: true,
    },
    {
      title: "Direct Phone Call",
      description:
        "Speak directly for immediate consultation and quick project discussions",
      icon: Phone,
      color: "bg-blue-500",
      action: "Call Now",
      benefits: [
        "Immediate response",
        "Real-time discussion",
        "Quick project assessment",
        "Instant technical guidance",
      ],
      href: "tel:+919879957167",
      primary: false,
    },
    {
      title: "Email Consultation",
      description:
        "Send detailed project requirements for comprehensive analysis and proposal",
      icon: Mail,
      color: "bg-purple-500",
      action: "Send Email",
      benefits: [
        "Detailed project analysis",
        "Written proposals",
        "Technical documentation",
        "Comprehensive quotes",
      ],
      href: "mailto:pratikvaishnav2013@gmail.com?subject=Enterprise Solution Consultation&body=Hi Pratik,%0D%0A%0D%0AI'm interested in discussing an enterprise solution for our business.%0D%0A%0D%0AProject Details:%0D%0A- Company: %0D%0A- Industry: %0D%0A- Project Type: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A%0D%0APlease let me know the best time to discuss this further.%0D%0A%0D%0AThank you!",
      primary: false,
    },
    {
      title: "WhatsApp Business",
      description:
        "Quick messaging for initial inquiries and instant communication",
      icon: MessageCircle,
      color: "bg-green-600",
      action: "Message Now",
      benefits: [
        "Instant messaging",
        "Quick responses",
        "File sharing capability",
        "Convenient communication",
      ],
      href: "https://wa.me/919879957167?text=Hi%20Pratik%2C%20I%27m%20interested%20in%20discussing%20an%20enterprise%20solution%20for%20our%20business.%20Could%20we%20schedule%20a%20consultation%3F",
      primary: false,
    },
  ];

  const projectTypes = [
    {
      type: "Enterprise Backend Development",
      examples: [
        "Microservices Architecture",
        "API Development",
        "Database Design",
      ],
      timeline: "4-12 weeks",
      investment: "$5,000 - $25,000",
      icon: Target,
    },
    {
      type: "Financial System Integration",
      examples: ["Payment Processing", "Risk Management", "Compliance Systems"],
      timeline: "6-16 weeks",
      investment: "$8,000 - $40,000",
      icon: DollarSign,
    },
    {
      type: "Cloud Infrastructure",
      examples: ["AWS Deployment", "Auto-scaling", "Multi-region Setup"],
      timeline: "3-8 weeks",
      investment: "$4,000 - $20,000",
      icon: Globe,
    },
    {
      type: "Analytics & Compliance",
      examples: ["Business Intelligence", "Automated Reporting", "Monitoring"],
      timeline: "5-12 weeks",
      investment: "$6,000 - $30,000",
      icon: TrendingUp,
    },
  ];

  const processSteps = [
    {
      step: "Initial Consultation",
      description:
        "Free 30-60 minute discussion about your requirements and challenges",
      duration: "Same day",
      deliverables: [
        "Requirements analysis",
        "Technical recommendations",
        "High-level approach",
      ],
    },
    {
      step: "Detailed Proposal",
      description:
        "Comprehensive project plan with architecture, timeline, and investment",
      duration: "3-5 business days",
      deliverables: [
        "Technical architecture",
        "Project timeline",
        "Detailed quote",
        "Risk assessment",
      ],
    },
    {
      step: "Project Kickoff",
      description:
        "Finalize contracts, setup development environment, and begin work",
      duration: "1 week",
      deliverables: [
        "Signed agreement",
        "Development setup",
        "Communication channels",
        "Project tracking",
      ],
    },
    {
      step: "Development & Delivery",
      description:
        "Agile development with regular updates and milestone demonstrations",
      duration: "Project timeline",
      deliverables: [
        "Regular updates",
        "Milestone demos",
        "Code deliveries",
        "Documentation",
      ],
    },
  ];

  const guarantees = [
    {
      title: "Free Consultation",
      description: "No cost initial discussion and project assessment",
      icon: Star,
    },
    {
      title: "24-48 Hour Response",
      description: "Quick response to all inquiries and project requests",
      icon: Clock,
    },
    {
      title: "No Hidden Costs",
      description: "Transparent pricing with detailed cost breakdown",
      icon: Shield,
    },
    {
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all deliverables",
      icon: Award,
    },
  ];

  const clientInfo = {
    name: "Pratik Vaishnav",
    title: "Lead Enterprise Solutions Architect",
    experience: "8+ Years",
    availability: "Available for immediate start",
    timezone: "IST (GMT+5:30)",
    workingHours: "Mon-Fri: 9 AM - 7 PM IST",
    languages: ["English", "Hindi", "Gujarati"],
    location: "India (Remote work globally)",
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="px-4 py-2 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Free Consultation Available
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Start Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                  {" "}
                  Transformation Today
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to build enterprise-grade solutions that scale? Let's
                discuss your project requirements and create a custom roadmap
                for success.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    24-48h
                  </div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    $3B+
                  </div>
                  <div className="text-sm text-gray-600">Value Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Preferred Way to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple ways to get started - pick what works best for you
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    method.primary ? "ring-2 ring-primary-500" : ""
                  }`}
                >
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center`}
                      >
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {method.title}
                          </h3>
                          {method.primary && (
                            <Badge className="bg-green-100 text-green-800 border-green-300">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        What You Get:
                      </h4>
                      <ul className="space-y-2">
                        {method.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      asChild
                      className={`w-full ${
                        method.primary
                          ? "bg-primary-600 hover:bg-primary-700"
                          : ""
                      }`}
                    >
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 justify-center"
                      >
                        <method.icon className="w-5 h-5" />
                        {method.action}
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types & Investment */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Project Types & Investment Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for different types of enterprise solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projectTypes.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <project.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {project.type}
                    </h3>
                    <div className="text-sm text-gray-600 mb-3">
                      {project.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-gray-400 mr-1" />
                          {example}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="text-sm text-gray-500 mb-1">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Timeline: {project.timeline}
                      </div>
                      <div className="text-sm font-medium text-primary-600">
                        Investment: {project.investment}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need a custom quote for your specific requirements?
              </p>
              <Button size="lg" asChild>
                <a
                  href="mailto:pratikvaishnav2013@gmail.com?subject=Custom Quote Request"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Request Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Process & Guarantees */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  How We Work Together
                </h2>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {step.step}
                            </h3>
                            <p className="text-gray-600 mb-2 text-sm">
                              {step.description}
                            </p>
                            <Badge variant="outline" className="text-xs mb-2">
                              <Clock className="w-3 h-3 mr-1" />
                              {step.duration}
                            </Badge>
                            <div className="text-xs text-gray-500">
                              <strong>Deliverables:</strong>{" "}
                              {step.deliverables.join(", ")}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Guarantees & Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Our Guarantees
                </h2>
                <div className="space-y-4 mb-8">
                  {guarantees.map((guarantee, index) => (
                    <Card key={index} className="p-4">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <guarantee.icon className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {guarantee.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {guarantee.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Contact Information */}
                <Card className="p-6 bg-gradient-to-r from-primary-50 to-accent/10">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Direct Contact Information
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary-600" />
                        <span className="font-medium">ScaleCore Solutions</span>
                        <Badge variant="outline" className="text-xs">
                          Enterprise Software
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary-600" />
                        <span className="font-medium">{clientInfo.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {clientInfo.title}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary-600" />
                        <span>
                          {clientInfo.experience} Enterprise Experience
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary-600" />
                        <a
                          href="tel:+919879957167"
                          className="text-primary-600 hover:underline"
                        >
                          +91 98799 57167
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary-600" />
                        <a
                          href="mailto:pratikvaishnav2013@gmail.com"
                          className="text-primary-600 hover:underline"
                        >
                          pratikvaishnav2013@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-600" />
                        <span>{clientInfo.workingHours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        <span>{clientInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-medium">
                          {clientInfo.availability}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't let technical challenges limit your growth. Get enterprise
              solutions that scale with your success. Start with a free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-4"
              >
                <a
                  href="https://calendly.com/pratikvaishnav2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetStarted;
