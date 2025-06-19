import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Globe,
  Target,
  CheckCircle,
  Star,
  DollarSign,
  Zap,
  Code,
  Database,
  Calendar,
  MessageCircle,
  ArrowRight,
  Trophy,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const keyDifferentiators = [
    {
      title: "Proven Enterprise Experience",
      description:
        "8+ years building mission-critical systems for Fortune 500 companies with $3B+ in transaction value processed",
      icon: Trophy,
      stats: "100+ Enterprise Clients",
      color: "bg-blue-500",
      benefits: [
        "Deep understanding of enterprise requirements",
        "Proven track record with large-scale systems",
        "Experience with complex compliance needs",
        "Established best practices and methodologies",
      ],
    },
    {
      title: "Guaranteed Performance & Reliability",
      description:
        "Industry-leading 99.9% uptime with performance guarantees and 24/7 monitoring across all deployments",
      icon: Shield,
      stats: "99.9% Uptime Guarantee",
      color: "bg-green-500",
      benefits: [
        "SLA-backed performance commitments",
        "Proactive monitoring and alerting",
        "Disaster recovery and backup strategies",
        "24/7 technical support availability",
      ],
    },
    {
      title: "Rapid Development & Delivery",
      description:
        "Agile methodologies and proven frameworks enable faster time-to-market without compromising quality",
      icon: Zap,
      stats: "70% Faster Delivery",
      color: "bg-purple-500",
      benefits: [
        "Accelerated development cycles",
        "Regular milestone deliveries",
        "Parallel development streams",
        "Early feedback integration",
      ],
    },
    {
      title: "Global Scale & Compliance",
      description:
        "Successfully deployed across 25+ countries with automated compliance frameworks for international regulations",
      icon: Globe,
      stats: "25+ Countries Deployed",
      color: "bg-orange-500",
      benefits: [
        "Multi-region deployment expertise",
        "International compliance automation",
        "Cross-timezone operational support",
        "Localization and customization",
      ],
    },
  ];

  const technicalExpertise = [
    {
      category: "Backend Development",
      technologies: [
        "Java/Spring Boot",
        "Microservices",
        "REST APIs",
        "Apache Kafka",
      ],
      experience: "8+ years",
      projects: "50+",
      icon: Code,
    },
    {
      category: "Cloud Infrastructure",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
      experience: "5+ years",
      projects: "30+",
      icon: Database,
    },
    {
      category: "Financial Systems",
      technologies: [
        "Payment Gateways",
        "Risk Management",
        "Compliance",
        "Security",
      ],
      experience: "6+ years",
      projects: "25+",
      icon: DollarSign,
    },
    {
      category: "Enterprise Integration",
      technologies: ["ESB", "Message Queues", "ETL", "Data Processing"],
      experience: "7+ years",
      projects: "40+",
      icon: Target,
    },
  ];

  const clientBenefits = [
    {
      benefit: "Cost Reduction",
      description: "Average 60% reduction in operational costs",
      icon: DollarSign,
      examples: [
        "Automated manual processes",
        "Optimized resource utilization",
        "Reduced infrastructure costs",
        "Eliminated redundant systems",
      ],
    },
    {
      benefit: "Performance Improvement",
      description: "Average 300% improvement in system performance",
      icon: TrendingUp,
      examples: [
        "Faster response times",
        "Higher throughput capacity",
        "Reduced latency",
        "Improved user experience",
      ],
    },
    {
      benefit: "Risk Mitigation",
      description: "99.9% uptime with comprehensive security",
      icon: Shield,
      examples: [
        "Disaster recovery plans",
        "Security vulnerability assessments",
        "Compliance monitoring",
        "Backup and failover systems",
      ],
    },
    {
      benefit: "Scalability",
      description: "Handle 10x traffic growth without system changes",
      icon: Zap,
      examples: [
        "Auto-scaling infrastructure",
        "Microservices architecture",
        "Load balancing",
        "Performance optimization",
      ],
    },
  ];

  const recognition = [
    {
      title: "3x Employee of the Month",
      organization: "Bluevine Technologies",
      description:
        "Recognized for exceptional ownership and delivery of critical systems",
      icon: Award,
    },
    {
      title: "BIAS Award",
      organization: "Bluevine Technologies",
      description:
        "Honored for upholding core values while leading backend services",
      icon: Star,
    },
    {
      title: "Technical Leadership",
      organization: "Current Role",
      description:
        "Leading GST product vertical with real-time processing systems",
      icon: Target,
    },
  ];

  const supportModel = [
    {
      phase: "Pre-Development",
      services: [
        "Free technical consultation",
        "Requirements analysis",
        "Architecture planning",
        "Risk assessment",
      ],
      timeline: "1-2 weeks",
    },
    {
      phase: "Development",
      services: [
        "Regular progress updates",
        "Milestone demonstrations",
        "Code reviews",
        "Testing and validation",
      ],
      timeline: "Project duration",
    },
    {
      phase: "Deployment",
      services: [
        "Production deployment",
        "Performance monitoring",
        "User training",
        "Documentation handover",
      ],
      timeline: "1-2 weeks",
    },
    {
      phase: "Post-Launch",
      services: [
        "24/7 monitoring",
        "Bug fixes and patches",
        "Performance optimization",
        "Enhancement planning",
      ],
      timeline: "Ongoing",
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
                Trusted by 100+ Enterprise Clients
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Why Choose Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                  {" "}
                  Enterprise Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Proven expertise, guaranteed results, and dedicated support that
                transforms businesses. Here's what sets us apart in delivering
                enterprise-grade solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-4">
                  <Link to="/get-started" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4"
                >
                  <Link to="/case-studies" className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four key advantages that ensure your project success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {keyDifferentiators.map((diff, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className={`w-16 h-16 ${diff.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <diff.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {diff.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{diff.description}</p>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          {diff.stats}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {diff.benefits.map((benefit, idx) => (
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Deep Technical Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized knowledge across enterprise technology stack
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalExpertise.map((expertise, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <expertise.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {expertise.category}
                    </h3>
                    <div className="text-sm text-gray-600 mb-3">
                      <div className="font-medium">
                        {expertise.experience} • {expertise.projects} projects
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {expertise.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quantifiable benefits our clients achieve
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {benefit.benefit}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3 text-sm">
                      {benefit.description}
                    </p>
                    <ul className="space-y-1">
                      {benefit.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 flex items-start"
                        >
                          <ArrowRight className="w-3 h-3 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition & Awards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Recognition
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Awards and recognition for technical excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recognition.map((award, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <award.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2 text-sm">
                      {award.organization}
                    </p>
                    <p className="text-sm text-gray-600">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Model */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Support Model
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end support throughout your project lifecycle
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {supportModel.map((phase, index) => (
                <Card key={index} className="p-6 relative">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-center">
                      {phase.phase}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs mb-4 w-full justify-center"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {phase.timeline}
                    </Badge>
                    <ul className="space-y-2">
                      {phase.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  {index < supportModel.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values & Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every client engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Client-First Focus
                  </h3>
                  <p className="text-sm text-gray-600">
                    Every decision prioritizes client success and business
                    outcomes
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quality Guarantee
                  </h3>
                  <p className="text-sm text-gray-600">
                    Rigorous testing and quality assurance on every delivery
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Innovation Drive
                  </h3>
                  <p className="text-sm text-gray-600">
                    Continuous learning and adoption of cutting-edge
                    technologies
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Integrity & Trust
                  </h3>
                  <p className="text-sm text-gray-600">
                    Transparent communication and honest recommendations always
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Difference
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 100+ successful enterprises who chose our proven approach.
              Start your transformation with a free consultation.
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
                <a href="#contact-form" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
