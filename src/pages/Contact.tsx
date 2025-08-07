import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Linkedin, Github, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "professional@email.com", href: "mailto:professional@email.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "City, State", href: "#" },
  ];

  const certifications = [
    { name: "Project Management Professional (PMP)", issuer: "PMI", year: "2023" },
    { name: "IT Infrastructure Library (ITIL) v4", issuer: "Axelos", year: "2023" },
    { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance", year: "2022" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2022" },
  ];

  const skills = [
    "Team Leadership", "Strategic Planning", "Project Management", "Performance Analytics",
    "Conflict Resolution", "Budget Management", "Process Optimization", "Change Management",
    "Stakeholder Communication", "Risk Assessment", "Quality Assurance", "Vendor Management"
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
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Portfolio
                  </a>
                </Button>
                <Button className="w-full justify-start bg-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Schedule Meeting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Available for consultations and interviews
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book a Call
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
                  Experienced IT professional with a proven track record of leading cross-functional teams 
                  and delivering strategic technology solutions. Passionate about bridging the gap between 
                  technical excellence and business objectives through collaborative leadership and continuous innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking IT supervisory roles where I can leverage my expertise in team management, 
                  project coordination, and stakeholder communication to drive organizational success and 
                  foster professional growth across diverse technical teams.
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
                      <Badge variant="outline" className="mt-2 text-xs">
                        {cert.year}
                      </Badge>
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