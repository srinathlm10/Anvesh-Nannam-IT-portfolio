import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Home = () => {
  const keyStrengths = [
    { icon: Users, title: "Team Leadership", description: "Proven ability to manage and inspire technical teams" },
    { icon: Target, title: "Strategic Vision", description: "Aligning IT initiatives with business objectives" },
    { icon: TrendingUp, title: "Performance Management", description: "Data-driven approach to team optimization" },
    { icon: Award, title: "Professional Growth", description: "Committed to continuous learning and development" },
  ];

  const achievements = [
    "Advanced Project Management Certification",
    "Team Leadership Excellence Award",
    "IT Operations Optimization Expert",
    "Cross-functional Collaboration Specialist",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground w-fit">
                  IT Leadership Professional
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transforming Teams Through
                  <span className="block text-accent"> Collaborative Leadership</span>
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-2xl">
                  Bridging the gap between technical excellence and business success through
                  transparent leadership, strategic vision, and team empowerment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <Link to="/gantt">
                    Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-foreground/20 text-foreground hover:bg-foreground/10"
                >
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroPortrait} 
                  alt="Professional IT Leader" 
                  className="rounded-2xl shadow-strong w-full max-w-lg mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl transform translate-x-4 translate-y-4"></div>
            {/* Image removed as requested */}
              Leadership Vision & Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              I aspire to become a collaborative IT leader who effectively combines deep technical knowledge 
              with exceptional people management skills. My leadership philosophy emphasizes transparency, 
              clear communication, and team empowerment at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStrengths.map((strength, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <strength.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Core Values & Principles
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                My core values include integrity, continuous learning, and fostering inclusive work 
                environments where diverse teams can excel and deliver outstanding results.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-gradient-to-r from-primary to-primary/80">
                  <Link to="/ethics">
                    View Ethics & Culture Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-l-4 border-l-primary">
                <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Years in IT</p>
              </Card>
              <Card className="p-6 text-center border-l-4 border-l-accent">
                <h3 className="text-2xl font-bold text-accent mb-2">15+</h3>
                <p className="text-muted-foreground">Team Members Led</p>
              </Card>
              <Card className="p-6 text-center border-l-4 border-l-success">
                <h3 className="text-2xl font-bold text-success mb-2">98%</h3>
                <p className="text-muted-foreground">Project Success Rate</p>
              </Card>
              <Card className="p-6 text-center border-l-4 border-l-primary">
                <h3 className="text-2xl font-bold text-primary mb-2">3</h3>
                <p className="text-muted-foreground">Major Certifications</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore My Professional Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover comprehensive tools, frameworks, and real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Project Management", desc: "Interactive Gantt charts & planning", link: "/gantt" },
              { title: "Coaching Toolkit", desc: "Employee development frameworks", link: "/coaching" },
              { title: "KPI Dashboard", desc: "Performance metrics & analytics", link: "/kpi" },
              { title: "Customer Service", desc: "Service excellence strategies", link: "/service" },
              { title: "Ethics & Culture", desc: "Diversity initiatives & team building", link: "/ethics" },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="sm"
                    className="p-0 h-auto group-hover:text-primary"
                  >
                    <Link to={item.link}>
                      Explore <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;