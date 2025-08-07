import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Download, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      week: "Week 1",
      title: "Leadership Assessment & Foundation",
      description: "Comprehensive analysis of current leadership capabilities and development areas.",
      deliverables: ["Self-assessment report", "Leadership style analysis", "Growth plan outline"],
      status: "Completed",
      date: "2024-01-15",
      category: "Assessment"
    },
    {
      week: "Week 2", 
      title: "Project Proposal & Website Planning",
      description: "Strategic planning for professional portfolio website showcasing IT leadership readiness.",
      deliverables: ["Project proposal document", "Website architecture plan", "Content strategy"],
      status: "In Progress",
      date: "2024-01-22",
      category: "Planning"
    },
    {
      week: "Week 3",
      title: "Coaching & Communication Framework",
      description: "Development of employee coaching tools and communication strategies.",
      deliverables: ["Coaching templates", "Communication guidelines", "Feedback frameworks"],
      status: "Planned",
      date: "2024-01-29",
      category: "Coaching"
    },
    {
      week: "Week 4",
      title: "Performance Management Systems",
      description: "Creation of KPI dashboards and performance tracking methodologies.",
      deliverables: ["KPI framework", "Performance metrics", "Dashboard prototypes"],
      status: "Planned", 
      date: "2024-02-05",
      category: "Analytics"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-success-foreground";
      case "In Progress": return "bg-accent text-accent-foreground";
      case "Planned": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Assessment": return "border-l-primary";
      case "Planning": return "border-l-accent";
      case "Coaching": return "border-l-success";
      case "Analytics": return "border-l-destructive";
      default: return "border-l-muted";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Portfolio Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of weekly course submissions, project outcomes, and 
            practical applications demonstrating IT leadership development.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className={`shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 ${getCategoryColor(item.category)}`}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {item.week}
                      </Badge>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl">
                      {item.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {item.description}
                </p>

                <div>
                  <h4 className="font-medium mb-3">Key Deliverables:</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {item.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  {item.status === "Completed" && (
                    <>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </>
                  )}
                  {item.status === "In Progress" && (
                    <Button variant="outline" size="sm" disabled>
                      <Clock className="mr-2 h-4 w-4" />
                      In Development
                    </Button>
                  )}
                  {item.status === "Planned" && (
                    <Button variant="outline" size="sm" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Scheduled
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Milestones Summary */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Project Milestones Overview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-4 text-primary">Milestone 1</h3>
              <p className="text-muted-foreground mb-4">
                Foundational coaching and communication tools, including one-on-one meeting templates 
                and conflict resolution frameworks.
              </p>
              <Badge className="bg-success text-success-foreground">Weeks 1-4</Badge>
            </Card>
            
            <Card className="text-center p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-semibold mb-4 text-accent">Milestone 2</h3>
              <p className="text-muted-foreground mb-4">
                Sophisticated KPI dashboards, budget management systems, and team performance analytics.
              </p>
              <Badge variant="outline">Weeks 5-8</Badge>
            </Card>
            
            <Card className="text-center p-6 border-l-4 border-l-success">
              <h3 className="text-xl font-semibold mb-4 text-success">Milestone 3</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive ethics planning, culture-building strategies, and final website optimization.
              </p>
              <Badge variant="outline">Weeks 9-12</Badge>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;