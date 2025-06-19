import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Linkedin,
  Github,
  Download,
  MessageSquare,
} from "lucide-react";

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  value: string;
  action: string;
  href: string;
  primary?: boolean;
  available?: boolean;
}

const Contact = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      title: "Professional Email",
      description: "For project inquiries and collaborations",
      value: "info@scalecore.xyz",
      action: "Send Email",
      href: "mailto:info@scalecore.xyz",
      primary: true,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking and work history",
      value: "linkedin.com/in/yourprofile",
      action: "View Profile",
      href: "https://www.linkedin.com/in/yourprofile",
      available: true,
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Code repositories and open source contributions",
      value: "github.com/yourusername",
      action: "View Projects",
      href: "https://github.com/yourusername",
      available: true,
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a meeting for detailed discussions",
      value: "Schedule a consultation call",
      action: "Book Now",
      href: "https://calendly.com/scalecore-info",
      available: true,
    },
  ];

  const availability = {
    status: "Available",
    type: "Remote Work & Freelance",
    location: "Remote (Worldwide)",
    response: "Within 24 hours",
    workingHours: "Monday - Friday, 9 AM - 5 PM (Your Timezone)",
    preferredContact: "Email for initial contact"
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your next backend project? I'm available for
              freelance work, remote opportunities, and consulting.
            </p>
          </div>

          {/* Availability Status */}
          <Card className="p-6 mb-8 border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-white">
            <CardContent className="p-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    Currently Available
                  </h2>
                  <p className="text-gray-600">
                    Open for new opportunities and exciting projects
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-300">
                  {availability.status}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 font-medium">Working Hours</p>
                    <p className="text-gray-500">{availability.workingHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 font-medium">Preferred Contact</p>
                    <p className="text-gray-500">{availability.preferredContact}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 font-medium">Location</p>
                    <p className="text-gray-500">{availability.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 font-medium">Response Time</p>
                    <p className="text-gray-500">{availability.response}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-shadow duration-300 ${
                  method.primary
                    ? "ring-2 ring-primary-200 bg-primary-50/30"
                    : ""
                } ${method.available === false ? "opacity-60" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        method.primary ? "bg-primary-100" : "bg-gray-100"
                      }`}
                    >
                      <method.icon
                        className={`w-6 h-6 ${
                          method.primary ? "text-primary-600" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        {method.title}
                        {method.primary && (
                          <Badge variant="secondary" className="text-xs">
                            Preferred
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm text-gray-800 font-medium mb-3">
                        <a
                          href={method.href}
                          target={!method.href.startsWith('#') ? "_blank" : undefined}
                          rel={!method.href.startsWith('#') ? "noopener noreferrer" : undefined}
                          className="text-primary-600 hover:underline break-all"
                        >
                          {method.value}
                        </a>
                      </p>

                      {method.available !== false ? (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant={method.primary ? "default" : "outline"}
                            asChild
                          >
                            <a
                              href={method.href}
                              target={!method.href.startsWith('#') ? "_blank" : undefined}
                              rel={!method.href.startsWith('#') ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-2"
                            >
                              {method.action === "Send Email" ? (
                                <Mail className="w-4 h-4" />
                              ) : method.action === "Book Now" ? (
                                <Calendar className="w-4 h-4" />
                              ) : (
                                <ExternalLink className="w-4 h-4" />
                              )}
                              {method.action}
                            </a>
                          </Button>
                        </div>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What I'm Looking For */}
          <Card className="p-8 mb-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                What I'm Looking For
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Freelance Projects
                  </h3>
                  <p className="text-sm text-gray-600">
                    Backend development, API integrations, and cloud
                    architecture projects
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Remote Opportunities
                  </h3>
                  <p className="text-sm text-gray-600">
                    Full-time or contract positions with innovative companies
                    worldwide
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ExternalLink className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Consulting</h3>
                  <p className="text-sm text-gray-600">
                    Architecture reviews, performance optimization, and
                    technical guidance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" asChild>
              <a
                href="#contact-form"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <p className="text-sm text-gray-600">
              Ready to discuss your project? Get in touch through the contact form or email.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
