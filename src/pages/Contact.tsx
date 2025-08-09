import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "anvesh4878@gmail.com", href: "mailto:anvesh4878@gmail.com" },
    { icon: Phone, label: "Phone", value: "5014429354", href: "tel:5014429354" },
    { icon: MapPin, label: "Location", value: "Little Rock, AR 72204", href: "#" },
  ];

  const certifications: { name: string; issuer: string; year?: string }[] = [
    { name: "Information Theory and Coding", issuer: "Coursera" },
    { name: "Introduction to the Internet of Things and Embedded Systems", issuer: "Coursera" },
    { name: "Developing Innovative Ideas for New Companies", issuer: "Coursera" },
    { name: "NSE1 and NSE2 Cybersecurity", issuer: "Fortinet" },
    { name: "Data Analysis using Python", issuer: "APSSDC" },
    { name: "Core Java Certification", issuer: "Internshala" },
  ];

  const skills = [
    "Basics of Python", "Java (intermediate)", "MathWorks MATLAB", "C programming",
    "National Instruments LabVIEW", "MySQL", "Excel", "Assembly language (MCU 8051)",
    "Ansys HFSS", "Arduino IDE", "Quick learner", "Management skills",
    "Problem-solving", "Goal oriented", "Active listening"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss IT leadership opportunities and collaborative partnerships.
            Let's connect and explore how I can contribute to your organization's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a 
                        href={item.href} 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Professional Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button className="w-full justify-start bg-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

          </div>

          {/* Professional Summary & Skills */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pursuing an opportunity that will allow me to grow professionally while effectively utilizing my versatile
                  skill set to help promote your corporate mission and exceed team goals under any circumstances.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Results-driven professional prepared for this role with a strong background in achieving high-impact outcomes.
                  Skilled in problem-solving, critical thinking, and effective communication. Known for fostering team collaboration
                  and adapting to evolving needs. Adept at utilizing analytical skills and innovative solutions to drive success.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
                      <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.year ? (
                        <Badge variant="outline" className="mt-2 text-xs">{cert.year}</Badge>
                      ) : null}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-accent">Career Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To secure an IT supervisory position where I can apply my technical expertise and 
                  leadership skills to drive team performance, implement innovative solutions, and 
                  contribute to organizational growth while fostering a collaborative and inclusive 
                  work environment that encourages professional development and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;