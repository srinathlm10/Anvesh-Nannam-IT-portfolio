import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Users, Target } from "lucide-react";

const Gantt = () => {
  const projectPhases = [
    {
      phase: "Phase 1: Foundation",
      duration: "Weeks 1-3",
      progress: 75,
      status: "In Progress",
      tasks: [
        { name: "Leadership Assessment", start: "Week 1", duration: 1, completed: true },
        { name: "Project Planning", start: "Week 2", duration: 1, completed: true },
        { name: "Coaching Framework", start: "Week 3", duration: 1, completed: false },
      ]
    },
    {
      phase: "Phase 2: Development",
      duration: "Weeks 4-8",
      progress: 25,
      status: "Planned",
      tasks: [
        { name: "KPI Dashboard Creation", start: "Week 4", duration: 2, completed: false },
        { name: "Performance Analytics", start: "Week 5", duration: 2, completed: false },
        { name: "Service Excellence Framework", start: "Week 7", duration: 2, completed: false },
      ]
    },
    {
      phase: "Phase 3: Integration",
      duration: "Weeks 9-12",
      progress: 0,
      status: "Future",
      tasks: [
        { name: "Ethics & Culture Planning", start: "Week 9", duration: 2, completed: false },
        { name: "Final Integration", start: "Week 11", duration: 1, completed: false },
        { name: "Portfolio Optimization", start: "Week 12", duration: 1, completed: false },
      ]
    }
  ];

  const milestones = [
    { name: "Coaching Toolkit Complete", week: "Week 4", type: "major" },
    { name: "KPI Dashboard Launch", week: "Week 6", type: "major" },
    { name: "Mid-Project Review", week: "Week 8", type: "review" },
    { name: "Ethics Framework Complete", week: "Week 10", type: "major" },
    { name: "Final Portfolio Delivery", week: "Week 12", type: "major" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-accent text-accent-foreground";
      case "Planned": return "bg-primary text-primary-foreground";
      case "Future": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getMilestoneColor = (type: string) => {
    switch (type) {
      case "major": return "bg-success";
      case "review": return "bg-accent";
      default: return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Project Management Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive project timeline showcasing advanced planning capabilities, milestone tracking, 
            and strategic resource allocation for IT leadership development.
          </p>
        </div>

        {/* Project Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-2xl text-primary">12</h3>
              <p className="text-muted-foreground text-sm">Total Weeks</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-semibold text-2xl text-success">5</h3>
              <p className="text-muted-foreground text-sm">Major Milestones</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-2xl text-accent">33%</h3>
              <p className="text-muted-foreground text-sm">Progress Complete</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-destructive mx-auto mb-2" />
              <h3 className="font-semibold text-2xl text-destructive">3</h3>
              <p className="text-muted-foreground text-sm">Project Phases</p>
            </CardContent>
          </Card>
        </div>

        {/* Gantt Chart Visualization */}
        <Card className="shadow-medium mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Project Timeline & Gantt Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {projectPhases.map((phase, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{phase.phase}</h3>
                      <p className="text-muted-foreground text-sm">{phase.duration}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(phase.status)}>
                        {phase.status}
                      </Badge>
                      <span className="text-sm font-medium">{phase.progress}%</span>
                    </div>
                  </div>
                  
                  <Progress value={phase.progress} className="h-3" />
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {phase.tasks.map((task, taskIndex) => (
                      <div 
                        key={taskIndex} 
                        className={`p-4 rounded-lg border ${task.completed ? 'bg-success/10 border-success/20' : 'bg-muted/30 border-border'}`}
                      >
                        <h4 className="font-medium text-sm mb-1">{task.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {task.start} • {task.duration} week{task.duration > 1 ? 's' : ''}
                        </p>
                        {task.completed && (
                          <Badge className="bg-success text-success-foreground text-xs mt-2">
                            Completed
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl">Project Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <div className={`w-3 h-3 rounded-full ${getMilestoneColor(milestone.type)}`}></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{milestone.name}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.week}</p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {milestone.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resource Allocation */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Resource Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Research & Planning</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Development & Creation</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Testing & Optimization</span>
                    <span>15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Documentation & Review</span>
                    <span>10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded border-l-4 border-l-destructive bg-destructive/5">
                  <h4 className="font-medium text-sm">High Priority</h4>
                  <p className="text-xs text-muted-foreground">Resource availability for Week 6-8</p>
                </div>
                <div className="p-3 rounded border-l-4 border-l-accent bg-accent/5">
                  <h4 className="font-medium text-sm">Medium Priority</h4>
                  <p className="text-xs text-muted-foreground">Integration complexity assessment</p>
                </div>
                <div className="p-3 rounded border-l-4 border-l-success bg-success/5">
                  <h4 className="font-medium text-sm">Low Priority</h4>
                  <p className="text-xs text-muted-foreground">Final presentation scheduling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gantt;