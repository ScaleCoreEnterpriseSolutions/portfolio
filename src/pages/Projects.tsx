import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  ExternalLink,
  Github,
  Calendar,
  Layers,
  TrendingUp,
  Users,
  Globe,
  DollarSign,
  FileText,
  ShoppingCart,
  BarChart3,
  Database,
  Cloud,
  Zap,
  Shield,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const projectCategories = [
    {
      title: "Financial Services & Due Diligence",
      description: "Advanced financial analysis and risk assessment systems",
      icon: DollarSign,
      color: "bg-green-500",
      projects: [
        {
          title: "Due Diligence Analysis Platform",
          description:
            "Comprehensive platform for financial due diligence analysis, risk assessment, and compliance verification for investment decisions.",
          impact: "Reduced analysis time by 70% and improved accuracy by 85%",
          keyFeatures: [
            "Automated financial ratio analysis",
            "Risk scoring algorithms",
            "Regulatory compliance checks",
            "Interactive dashboards and reports",
            "Document management system",
          ],
          technologies: [
            "Java",
            "Spring Boot",
            "Angular",
            "PostgreSQL",
            "AWS",
            "Apache Kafka",
          ],
          metrics: {
            "Processing Time": "70% faster",
            "Accuracy Improvement": "85%",
            "Documents Processed": "50K+ monthly",
            "Risk Models": "25+ algorithms",
          },
          clientType: "Investment Banks & PE Funds",
          duration: "18 months",
        },
        {
          title: "Credit Underwriting System",
          description:
            "Intelligent credit underwriting platform with machine learning models for automated loan approval and risk assessment.",
          impact: "Processed $500M+ in loan applications with 95% automation",
          keyFeatures: [
            "ML-powered credit scoring",
            "Real-time decision engine",
            "Bureau data integration",
            "Fraud detection algorithms",
            "Workflow automation",
          ],
          technologies: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL",
            "AWS Lambda",
            "Python",
          ],
          metrics: {
            "Loan Volume": "$500M+",
            "Automation Rate": "95%",
            "Decision Time": "<30 seconds",
            "Default Reduction": "40%",
          },
          clientType: "NBFC & Banks",
          duration: "24 months",
        },
      ],
    },
    {
      title: "Tax & Compliance Solutions",
      description: "GST analysis and tax compliance automation systems",
      icon: FileText,
      color: "bg-blue-500",
      projects: [
        {
          title: "GST Analyser & Compliance Suite",
          description:
            "Comprehensive GST analysis platform with real-time invoice processing, compliance monitoring, and automated return filing.",
          impact:
            "Serving 10K+ businesses with 99.9% uptime and real-time processing",
          keyFeatures: [
            "Real-time invoice reconciliation",
            "Automated GST return generation",
            "Compliance gap analysis",
            "Multi-state GST handling",
            "Bulk data processing engine",
          ],
          technologies: [
            "Java",
            "Spring Boot",
            "Kafka",
            "Redis",
            "Angular",
            "PostgreSQL",
          ],
          metrics: {
            "Daily Transactions": "1M+",
            "Business Clients": "10,000+",
            Uptime: "99.9%",
            "Processing Speed": "<500ms",
          },
          clientType: "Enterprises & SMEs",
          duration: "Ongoing (2+ years)",
        },
        {
          title: "Tax Data Analytics Platform",
          description:
            "Advanced analytics platform for tax pattern analysis, anomaly detection, and predictive compliance insights.",
          impact: "Identified $50M+ in tax savings opportunities for clients",
          keyFeatures: [
            "Pattern recognition algorithms",
            "Anomaly detection system",
            "Predictive analytics dashboard",
            "Custom reporting engine",
            "API integration hub",
          ],
          technologies: [
            "Java",
            "Spring Framework",
            "Apache Spark",
            "Elasticsearch",
            "React",
          ],
          metrics: {
            "Tax Savings Identified": "$50M+",
            "Data Points Analyzed": "100M+",
            "Accuracy Rate": "96%",
            "Report Generation": "<5 minutes",
          },
          clientType: "Tax Consultants & CAs",
          duration: "15 months",
        },
      ],
    },
    {
      title: "E-Procurement Solutions",
      description:
        "Enterprise procurement platforms and vendor management systems",
      icon: ShoppingCart,
      color: "bg-purple-500",
      projects: [
        {
          title: "Enterprise Procurement Platform",
          description:
            "End-to-end e-procurement solution with auction management, tender processing, RFP/RFQ automation, and vendor lifecycle management.",
          impact: "Managed procurement worth $2B+ with 60% cost reduction",
          keyFeatures: [
            "Multi-stage auction system",
            "Automated tender evaluation",
            "Vendor performance analytics",
            "Contract management suite",
            "Integration with ERP systems",
          ],
          technologies: [
            "Java",
            "Spring Boot",
            "ActiveMQ",
            "SQL Server",
            "Angular",
            "Docker",
          ],
          metrics: {
            "Procurement Value": "$2B+",
            "Cost Reduction": "60%",
            "Vendor Network": "50K+",
            "Process Automation": "85%",
          },
          clientType: "Government & Large Enterprises",
          duration: "30 months",
        },
        {
          title: "Banking Procurement Integration",
          description:
            "Specialized e-procurement solution for banking sector with integration to Axis Bank, ICICI, and e-GEM platforms.",
          impact: "Streamlined banking procurement with 90% digitization",
          keyFeatures: [
            "Multi-bank payment gateway integration",
            "e-GEM platform connectivity",
            "Compliance workflow automation",
            "Real-time approval tracking",
            "Audit trail management",
          ],
          technologies: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Payment APIs",
            "Microservices",
          ],
          metrics: {
            "Bank Integrations": "5+",
            "Transaction Volume": "$100M+",
            "Digitization Rate": "90%",
            "Processing Time": "80% faster",
          },
          clientType: "Banking Sector",
          duration: "12 months",
        },
      ],
    },
    {
      title: "International Client Solutions",
      description:
        "Bulk delivery systems and scalable solutions for overseas clients",
      icon: Globe,
      color: "bg-orange-500",
      projects: [
        {
          title: "Global Bulk Delivery Platform",
          description:
            "High-performance bulk processing system for international clients with multi-region deployment and automated scaling.",
          impact: "Processing 50M+ transactions daily across 15+ countries",
          keyFeatures: [
            "Multi-region cloud deployment",
            "Auto-scaling infrastructure",
            "Real-time monitoring dashboard",
            "Data synchronization engine",
            "Compliance framework for multiple jurisdictions",
          ],
          technologies: [
            "Java",
            "Spring Cloud",
            "Kubernetes",
            "AWS",
            "Redis",
            "Apache Kafka",
          ],
          metrics: {
            "Daily Transactions": "50M+",
            "Countries Served": "15+",
            "Uptime SLA": "99.95%",
            "Scaling Efficiency": "300%",
          },
          clientType: "International Enterprises",
          duration: "36 months",
        },
        {
          title: "Cross-Border Data Processing System",
          description:
            "Secure data processing platform for overseas clients with GDPR compliance and multi-timezone support.",
          impact: "Enabled seamless operations across 20+ time zones",
          keyFeatures: [
            "GDPR compliance automation",
            "Multi-timezone processing",
            "Data encryption and security",
            "Cross-region failover",
            "Performance optimization engine",
          ],
          technologies: [
            "Java",
            "Spring Security",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Terraform",
          ],
          metrics: {
            "Time Zones Supported": "20+",
            "Data Security": "100% compliant",
            "Failover Time": "<30 seconds",
            "Performance Gain": "200%",
          },
          clientType: "Global Corporations",
          duration: "24 months",
        },
      ],
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Performance Excellence",
      value: "99.9%",
      description: "Average system uptime across all projects",
    },
    {
      icon: Users,
      title: "User Impact",
      value: "100K+",
      description: "End users served across all platforms",
    },
    {
      icon: Database,
      title: "Data Processed",
      value: "1B+",
      description: "Records processed monthly across systems",
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: "25+",
      description: "Countries with active deployments",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Project Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Enterprise-level solutions spanning financial services, tax
                compliance, e-procurement, and international client platforms.
                Each project demonstrates technical excellence and measurable
                business impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Services
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Tax & Compliance
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  E-Procurement
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Solutions
                </Badge>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                      {achievement.value}
                    </div>
                    <div className="font-medium text-gray-900 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects by Category */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {projectCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                {/* Category Header */}
                <div className="flex items-center mb-12">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mr-6`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Projects in Category */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <Card
                      key={projectIndex}
                      className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">
                            {project.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="text-xs whitespace-nowrap"
                          >
                            {project.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Target className="w-5 h-5 text-primary-600 mr-2" />
                            <span className="font-medium text-primary-900">
                              Impact
                            </span>
                          </div>
                          <p className="text-primary-800 font-medium">
                            {project.impact}
                          </p>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.keyFeatures.map((feature, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 flex items-start"
                              >
                                <ArrowRight className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Code className="w-5 h-5 text-blue-600 mr-2" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
                            Key Metrics
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.entries(project.metrics).map(
                              ([metric, value], index) => (
                                <div
                                  key={index}
                                  className="bg-gray-50 rounded-lg p-3"
                                >
                                  <div className="text-lg font-bold text-gray-900">
                                    {value}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {metric}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Client Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">
                              {project.clientType}
                            </span>
                          </div>
                          <Badge className="bg-green-100 text-green-800 border-green-300">
                            <Shield className="w-3 h-3 mr-1" />
                            Production
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Next Enterprise Solution?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              With proven experience in delivering complex enterprise systems, I
              can help you build scalable, efficient solutions that drive real
              business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-4"
              >
                <a href="/contact" className="flex items-center gap-2">
                  Let's Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <a
                  href="#"
                  className="flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Resume Available on Request
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
