import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BarChart, Code, Database, Globe, Lightbulb, Settings, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and challenges.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that drive engagement and conversions.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "IT Consulting",
      description: "Expert guidance to optimize your technology infrastructure and digital strategy.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Business Intelligence",
      description: "Make informed decisions with comprehensive BI tools and reporting systems.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Digital Transformation",
      description: "Modernize your operations and embrace digital innovation for competitive advantage.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      features: [
        "Basic consulting services",
        "Email support",
        "Monthly reports",
        "Access to knowledge base",
        "1 user account",
      ],
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      features: [
        "Advanced consulting services",
        "Priority support 24/7",
        "Weekly reports",
        "Custom integrations",
        "5 user accounts",
        "Dedicated account manager",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      features: [
        "Full-service solutions",
        "24/7 premium support",
        "Real-time analytics",
        "Unlimited integrations",
        "Unlimited users",
        "Dedicated success team",
        "Custom SLA",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing Plans</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
