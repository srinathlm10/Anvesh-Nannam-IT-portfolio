import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, Star, DollarSign, Brain, Wrench, Shield } from "lucide-react";

const KPI = () => {
  const performanceMetrics = [
    { 
      title: "Resolution Time", 
      current: "4.9h", 
      previous: "7.2h", 
      improvement: "32%",
      target: "6.0h",
      icon: Clock 
    },
    { 
      title: "First Contact Rate", 
      current: "78%", 
      previous: "68%", 
      improvement: "10%",
      target: "75%",
      icon: Users 
    },
    { 
      title: "Customer Satisfaction", 
      current: "4.5", 
      previous: "3.8", 
      improvement: "18%",
      target: "4.2",
      icon: Star 
    }
  ];

  const budgetAllocations = [
    {
      category: "Software & Licensing",
      amount: 442.65,
      icon: Wrench,
      details: "Microsoft 365 Business Premium, Jira Service Management"
    },
    {
      category: "Training & Development",
      amount: 598.95,
      icon: Brain,
      details: "CompTIA certification, LinkedIn Learning subscriptions"
    },
    {
      category: "Hardware & Equipment",
      amount: 579.98,
      icon: Wrench,
      details: "Ergonomic equipment, troubleshooting tools"
    },
    {
      category: "Professional Services",
      amount: 248.99,
      icon: Shield,
      details: "Security monitoring, data protection"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Monthly Supervisor Summary Report
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of IT support team's performance metrics and budget allocation
          </p>
        </div>
        
        {/* Executive Summary */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This report presents our IT support team's performance metrics for the past four weeks and outlines our monthly budget allocation. 
              The team has shown consistent improvement across all key performance indicators, with significant progress in ticket resolution times 
              and customer satisfaction scores.
            </p>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Team Performance Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                  <metric.icon className="h-6 w-6 text-muted-foreground/30" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{metric.current}</span>
                    <Badge variant="secondary" className="text-xs">
                      Target: {metric.target}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-sm text-success">+{metric.improvement}</span>
                    <span className="text-sm text-muted-foreground">from {metric.previous}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Budget Analysis */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Budget Analysis</h2>
          <p className="text-muted-foreground mb-6">
            Monthly budget of $1,870.57 allocated across key categories to support team effectiveness and growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {budgetAllocations.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{item.category}</h3>
                  </div>
                  <div className="text-2xl font-bold mb-2">
                    ${item.amount.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-6">
              <li>Continue current training initiatives to maintain performance improvements</li>
              <li>Implement automated ticket routing system to optimize resolution times</li>
              <li>Increase professional services budget by 15% to enhance security monitoring</li>
              <li>Conduct quarterly budget reviews to ensure alignment with industry trends</li>
              <li>Establish peer mentoring program to sustain knowledge transfer</li>
            </ul>
          </CardContent>
        </Card>

        {/* References */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>References</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Abbott, B. (2024). Effective IT budgeting: Strategies for prioritizing investments. TechRepublic.</p>
              <p>Gratas, B. (2024). Top 15 help desk metrics to measure IT support performance. InvGate.</p>
              <p>Lange, K. (2024). IT and technology spending & budgets for 2025: Trends & forecasts. Splunk.</p>
              <p>ManageEngine. (2024). 16 help desk KPIs & metrics to measure IT support performance.</p>
              <p>Sedgman, S. (2024). How much do companies spend training employees? LearnExperts.</p>
              <p>Wren, H. (2024). 12 help desk metrics to measure support performance. Zendesk.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KPI;