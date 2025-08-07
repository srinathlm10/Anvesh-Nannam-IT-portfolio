import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Users, Target } from "lucide-react";

const Gantt = () => {
  const projectPhases = [
    {
      phase: "1. Project Planning & Website Setup",
      duration: "Days 1-15",
      progress: 100,
      status: "Completed",
      tasks: [
        { name: "Executive Proposal", start: "Day 1", duration: 5, completed: true, color: "bg-purple-500" },
        { name: "Define Website Structure & Page Layout", start: "Day 6", duration: 10, completed: true, color: "bg-purple-500" },
      ]
    },
    {
      phase: "2. Coaching & Communication Toolkit",
      duration: "Days 16-30",
      progress: 85,
      status: "In Progress",
      tasks: [
        { name: "Design Coaching Templates", start: "Day 16", duration: 8, completed: true, color: "bg-green-500" },
        { name: "Create Team Communication Strategies", start: "Day 20", duration: 10, completed: false, color: "bg-purple-500" },
      ]
    },
    {
      phase: "3. Customer Service & Escalation",
      duration: "Days 31-45",
      progress: 60,
      status: "In Progress",
      tasks: [
        { name: "Create Customer Service Workflows", start: "Day 31", duration: 8, completed: false, color: "bg-green-500" },
        { name: "Build Escalation Policy Templates", start: "Day 35", duration: 10, completed: false, color: "bg-purple-500" },
      ]
    },
    {
      phase: "4. KPI Dashboard & Budget Tools",
      duration: "Days 46-60",
      progress: 40,
      status: "Planned",
      tasks: [
        { name: "Define KPIs for IT Supervision", start: "Day 46", duration: 8, completed: false, color: "bg-purple-500" },
        { name: "Develop Mini Budget Template", start: "Day 50", duration: 7, completed: false, color: "bg-purple-500" },
        { name: "Design KPI Dashboard for Website", start: "Day 54", duration: 6, completed: false, color: "bg-purple-500" },
      ]
    },
    {
      phase: "5. Team Leadership & HR Toolkit",
      duration: "Days 61-75",
      progress: 20,
      status: "Future",
      tasks: [
        { name: "Create Interview Templates", start: "Day 61", duration: 8, completed: false, color: "bg-purple-500" },
        { name: "Build Onboarding & Training Materials", start: "Day 65", duration: 10, completed: false, color: "bg-purple-500" },
      ]
    },
    {
      phase: "6. Ethics & Cultural Adaptation Plan",
      duration: "Days 76-85",
      progress: 0,
      status: "Future",
      tasks: [
        { name: "Draft Ethics Policy", start: "Day 76", duration: 5, completed: false, color: "bg-green-500" },
        { name: "Build Cultural Readiness Materials", start: "Day 78", duration: 7, completed: false, color: "bg-purple-500" },
      ]
    },
    {
      phase: "7. Final Design, Testing & Integration",
      duration: "Days 86-90",
      progress: 0,
      status: "Future",
      tasks: [
        { name: "Finalize Website Design", start: "Day 86", duration: 2, completed: false, color: "bg-green-500" },
        { name: "Test All Functional Components", start: "Day 87", duration: 2, completed: false, color: "bg-purple-500" },
        { name: "Implement Revisions and Final Integration", start: "Day 88", duration: 3, completed: false, color: "bg-red-500" },
      ]
    },
    {
      phase: "8. Video Presentation",
      duration: "Days 88-90",
      progress: 0,
      status: "Future",
      tasks: [
        { name: "Record Final Video Presentation", start: "Day 88", duration: 2, completed: false, color: "bg-green-500" },
        { name: "Publish Final Website and Submit Link", start: "Day 89", duration: 2, completed: false, color: "bg-purple-500" },
      ]
    }
  ];

  const milestones = [
    { name: "Website Structure Complete", day: "Day 15", type: "major" },
    { name: "Coaching Toolkit Launch", day: "Day 30", type: "major" },
    { name: "Customer Service Framework", day: "Day 45", type: "review" },
    { name: "KPI Dashboard Complete", day: "Day 60", type: "major" },
    { name: "HR Toolkit Ready", day: "Day 75", type: "major" },
    { name: "Ethics Framework Complete", day: "Day 85", type: "major" },
    { name: "Final Portfolio Delivery", day: "Day 90", type: "major" },
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
              <h3 className="font-semibold text-2xl text-primary">90</h3>
              <p className="text-muted-foreground text-sm">Total Days</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-semibold text-2xl text-success">7</h3>
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
              <h3 className="font-semibold text-2xl text-destructive">8</h3>
              <p className="text-muted-foreground text-sm">Project Phases</p>
            </CardContent>
          </Card>
        </div>

        {/* Legend */}
        <Card className="shadow-soft mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Timeline Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">Estimated time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="text-sm">Tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm">Behind schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span className="text-sm">Not yet started</span>
              </div>
            </div>
          </CardContent>
        </Card>

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
                          {task.start} • {task.duration} day{task.duration > 1 ? 's' : ''}
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
                    <p className="text-sm text-muted-foreground">{milestone.day}</p>
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