import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, User } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Our Mission",
      description: "To empower businesses with innovative solutions that drive growth and success in the digital age.",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Our Vision",
      description: "To be the leading provider of business solutions, recognized for excellence and innovation worldwide.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Our Values",
      description: "Integrity, innovation, excellence, and customer-centricity guide everything we do.",
    },
  ];

  const team = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      description: "Visionary leader with 15+ years of experience in business strategy and innovation.",
    },
    {
      name: "Lisa Martinez",
      role: "Chief Technology Officer",
      description: "Technology expert specializing in digital transformation and enterprise solutions.",
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      description: "Operations specialist focused on optimizing processes and delivering excellence.",
    },
    {
      name: "Rachel Foster",
      role: "Customer Success Director",
      description: "Dedicated to ensuring client satisfaction and building long-term partnerships.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BizSolutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to helping businesses thrive in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-6xl text-primary-foreground font-bold">BS</span>
                </div>
                <p className="text-2xl font-bold">Since 2015</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, BizSolutions has grown from a small startup to a trusted partner for businesses worldwide. Our journey has been driven by a commitment to excellence and a passion for innovation.
              </p>
              <p className="text-muted-foreground mb-4">
                We specialize in delivering cutting-edge business solutions that help organizations streamline operations, increase efficiency, and achieve their strategic goals.
              </p>
              <p className="text-muted-foreground">
                With a team of expert professionals and a track record of successful projects, we continue to push boundaries and set new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
