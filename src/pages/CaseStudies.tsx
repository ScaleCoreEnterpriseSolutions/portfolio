import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  FileText,
  ShoppingCart,
  Globe,
  CheckCircle,
  Target,
  Users,
  Clock,
  Star,
  BarChart3,
  Zap,
  Shield,
  Database,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Enterprise GST Compliance Platform",
      client: "Leading Tax Technology Company",
      industry: "Tax & Compliance",
      challenge:
        "Process 1M+ daily GST transactions with real-time compliance monitoring for 10,000+ businesses",
      solution:
        "Built scalable real-time processing system with automated compliance checks and reporting",
      results: [
        {
          metric: "1M+",
          description: "Daily transactions processed",
          icon: Database,
        },
        {
          metric: "99.9%",
          description: "System uptime achieved",
          icon: TrendingUp,
        },
        {
          metric: "10K+",
          description: "Business clients served",
          icon: Users,
        },
        {
          metric: "70%",
          description: "Processing time reduction",
          icon: Zap,
        },
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Redis",
        "Angular",
        "PostgreSQL",
      ],
      duration: "24 months",
      roi: "300% ROI through automation",
      testimonial:
        "Exceptional technical expertise. The solution handles our complex GST requirements perfectly and scales seamlessly.",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: "Credit Underwriting Intelligence System",
      client: "Major NBFC & Banking Partner",
      industry: "Financial Services",
      challenge:
        "Automate loan underwriting process while reducing default rates and processing time",
      solution:
        "AI-powered credit scoring with real-time decision engine and fraud detection",
      results: [
        {
          metric: "$500M+",
          description: "Loan applications processed",
          icon: DollarSign,
        },
        {
          metric: "95%",
          description: "Automation rate achieved",
          icon: Target,
        },
        {
          metric: "40%",
          description: "Default rate reduction",
          icon: Shield,
        },
        {
          metric: "<30s",
          description: "Average decision time",
          icon: Clock,
        },
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "AWS Lambda",
        "Python",
      ],
      duration: "18 months",
      roi: "250% ROI through risk reduction",
      testimonial:
        "Transformed our lending process completely. The accuracy and speed improvements are remarkable.",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Global E-Procurement Platform",
      client: "Fortune 500 Enterprise",
      industry: "Enterprise Procurement",
      challenge:
        "Manage complex procurement workflows across multiple regions with vendor lifecycle management",
      solution:
        "End-to-end procurement platform with automated workflows and vendor analytics",
      results: [
        {
          metric: "$2B+",
          description: "Procurement value managed",
          icon: ShoppingCart,
        },
        {
          metric: "60%",
          description: "Cost reduction achieved",
          icon: TrendingUp,
        },
        {
          metric: "50K+",
          description: "Vendor network size",
          icon: Users,
        },
        {
          metric: "85%",
          description: "Process automation",
          icon: Zap,
        },
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "ActiveMQ",
        "SQL Server",
        "Angular",
        "Docker",
      ],
      duration: "30 months",
      roi: "400% ROI through cost savings",
      testimonial:
        "Streamlined our entire procurement process. The cost savings and efficiency gains exceeded expectations.",
      icon: ShoppingCart,
      color: "bg-purple-500",
    },
    {
      title: "International Bulk Processing System",
      client: "Global Technology Corporation",
      industry: "International Operations",
      challenge:
        "Scale operations across 15+ countries with different compliance requirements and time zones",
      solution:
        "Multi-region cloud platform with automated scaling and compliance framework",
      results: [
        {
          metric: "50M+",
          description: "Daily transactions handled",
          icon: Database,
        },
        {
          metric: "15+",
          description: "Countries deployed",
          icon: Globe,
        },
        {
          metric: "99.95%",
          description: "Uptime SLA achieved",
          icon: Shield,
        },
        {
          metric: "300%",
          description: "Scaling efficiency",
          icon: TrendingUp,
        },
      ],
      technologies: [
        "Java",
        "Spring Cloud",
        "Kubernetes",
        "AWS",
        "Redis",
        "Kafka",
      ],
      duration: "36 months",
      roi: "500% ROI through global scaling",
      testimonial:
        "Enabled our global expansion seamlessly. The platform handles our complex international requirements perfectly.",
      icon: Globe,
      color: "bg-orange-500",
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      projects: "25+",
      focus: "Banking, NBFC, Fintech",
      icon: DollarSign,
    },
    {
      name: "Tax & Compliance",
      projects: "15+",
      focus: "GST, Taxation, Regulatory",
      icon: FileText,
    },
    {
      name: "Enterprise Procurement",
      projects: "20+",
      focus: "E-procurement, Supply Chain",
      icon: ShoppingCart,
    },
    {
      name: "Global Operations",
      projects: "10+",
      focus: "International, Multi-region",
      icon: Globe,
    },
  ];

  const successMetrics = [
    {
      metric: "$3B+",
      description: "Total Transaction Value",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      metric: "100K+",
      description: "End Users Served",
      icon: Users,
      color: "text-blue-600",
    },
    {
      metric: "99.9%",
      description: "Average Uptime",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      metric: "25+",
      description: "Countries Deployed",
      icon: Globe,
      color: "text-orange-600",
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
                Proven Client Success Stories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Results That Speak
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                  {" "}
                  For Themselves
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Real client projects, measurable outcomes, and transformational
                results. See how our enterprise solutions drive business growth.
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-2">
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {metric.metric}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-4">
                  <Link to="/get-started" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4"
                >
                  <a
                    href="#contact-form"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed case studies showing real challenges solved and
                measurable business impact
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 ${study.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <study.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {study.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {study.duration}
                          </Badge>
                        </div>
                        <p className="text-primary-600 font-medium mb-1">
                          {study.client}
                        </p>
                        <p className="text-gray-500 text-sm mb-4">
                          {study.industry}
                        </p>
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                          <div className="text-lg font-bold text-primary-900 mb-2">
                            {study.roi}
                          </div>
                          <blockquote className="text-primary-800 italic">
                            "{study.testimonial}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    {/* Challenge & Solution */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 text-red-600 mr-2" />
                          Challenge
                        </h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          Solution
                        </h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                        Measurable Results
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {study.results.map((result, idx) => (
                          <Card key={idx} className="p-4 text-center">
                            <CardContent className="p-0">
                              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <result.icon className="w-5 h-5 text-primary-600" />
                              </div>
                              <div className="text-xl font-bold text-gray-900 mb-1">
                                {result.metric}
                              </div>
                              <div className="text-xs text-gray-600">
                                {result.description}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deep domain knowledge across multiple industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {industry.projects}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Projects Completed
                    </div>
                    <p className="text-xs text-gray-500">{industry.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our successful clients and transform your business with
              proven enterprise solutions. Get started with a free consultation.
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
                  Free Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;
