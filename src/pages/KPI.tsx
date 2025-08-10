import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table";
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
        {/* KPI Dashboard Section */}
        <section className="mt-2 space-y-8" aria-labelledby="kpi-dashboard-title">
          <div>
            <h2 id="kpi-dashboard-title" className="text-3xl font-bold text-foreground mb-2">
              KPI Dashboard (4-Week Tracking Chart)
            </h2>
            <p className="text-muted-foreground">
              Selected Key Performance Indicators based on current industry standards for IT support teams (Wren, 2024).
            </p>
          </div>

          {/* KPI 1 */}
          <Card>
            <CardHeader>
              <CardTitle>KPI 1: Average Ticket Resolution Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4 space-y-1">
                <p>Unit of Measurement: Hours</p>
                <p>Industry Benchmark: 4–8 hours (Gratas, 2024)</p>
                <p>Goal: ≤ 6 hours average</p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Week</TableHead>
                      <TableHead>Resolution Time (Hours)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Goal Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Week 1</TableCell>
                      <TableCell>7.2</TableCell>
                      <TableCell>Above Target</TableCell>
                      <TableCell>80%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 2</TableCell>
                      <TableCell>5.8</TableCell>
                      <TableCell>On Target</TableCell>
                      <TableCell>103%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 3</TableCell>
                      <TableCell>5.4</TableCell>
                      <TableCell>On Target</TableCell>
                      <TableCell>111%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 4</TableCell>
                      <TableCell>4.9</TableCell>
                      <TableCell>Excellent</TableCell>
                      <TableCell>122%</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption>Four-week tracking of average resolution time.</TableCaption>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* KPI 2 */}
          <Card>
            <CardHeader>
              <CardTitle>KPI 2: First Contact Resolution Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4 space-y-1">
                <p>Unit of Measurement: Percentage</p>
                <p>Industry Benchmark: 70–75% (ManageEngine, 2024)</p>
                <p>Goal: ≥ 75%</p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Week</TableHead>
                      <TableHead>Resolution Rate (%)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Goal Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Week 1</TableCell>
                      <TableCell>68%</TableCell>
                      <TableCell>Below Target</TableCell>
                      <TableCell>91%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 2</TableCell>
                      <TableCell>72%</TableCell>
                      <TableCell>Below Target</TableCell>
                      <TableCell>96%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 3</TableCell>
                      <TableCell>76%</TableCell>
                      <TableCell>On Target</TableCell>
                      <TableCell>101%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 4</TableCell>
                      <TableCell>78%</TableCell>
                      <TableCell>Excellent</TableCell>
                      <TableCell>104%</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption>Four-week tracking of first contact resolution rate.</TableCaption>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* KPI 3 */}
          <Card>
            <CardHeader>
              <CardTitle>KPI 3: Customer Satisfaction Score (CSAT)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4 space-y-1">
                <p>Unit of Measurement: Rating (1–5 scale)</p>
                <p>Industry Benchmark: 4.0+ (Wren, 2024)</p>
                <p>Goal: ≥ 4.2</p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Week</TableHead>
                      <TableHead>CSAT Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Goal Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Week 1</TableCell>
                      <TableCell>3.8</TableCell>
                      <TableCell>Below Target</TableCell>
                      <TableCell>90%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 2</TableCell>
                      <TableCell>4.1</TableCell>
                      <TableCell>Below Target</TableCell>
                      <TableCell>98%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 3</TableCell>
                      <TableCell>4.3</TableCell>
                      <TableCell>On Target</TableCell>
                      <TableCell>102%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Week 4</TableCell>
                      <TableCell>4.5</TableCell>
                      <TableCell>Excellent</TableCell>
                      <TableCell>107%</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableCaption>Four-week tracking of customer satisfaction score.</TableCaption>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* References for KPI Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle>References</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li>
                  Gratas, B. (2024). Top 15 help desk metrics to measure IT support performance. InvGate. {" "}
                  <a className="underline" href="https://blog.invgate.com/service-desk-kpi" target="_blank" rel="noreferrer">
                    https://blog.invgate.com/service-desk-kpi
                  </a>
                </li>
                <li>
                  ManageEngine. (2024). 16 help desk KPIs & metrics to measure IT support performance. {" "}
                  <a className="underline" href="https://www.manageengine.com/products/service-desk/help-desk-software/help-desk-metrics-kpi.html" target="_blank" rel="noreferrer">
                    https://www.manageengine.com/products/service-desk/help-desk-software/help-desk-metrics-kpi.html
                  </a>
                </li>
                <li>
                  Wren, H. (2024). 12 help desk metrics to measure support performance. Zendesk. {" "}
                  <a className="underline" href="https://www.zendesk.com/blog/top-10-help-desk-metrics/" target="_blank" rel="noreferrer">
                    https://www.zendesk.com/blog/top-10-help-desk-metrics/
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Mini Budget Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Mini Budget Plan (Monthly IT Team Budget)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">Monthly Budget Breakdown for a 5-person IT support team (Schwarz, 2024).</p>

              {/* Software & Licensing */}
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-xl">Software & Licensing Category</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Unit Cost</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Monthly Total</TableHead>
                        <TableHead>Purpose</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Microsoft 365 Business Premium</TableCell>
                        <TableCell>$22.00</TableCell>
                        <TableCell>5 users</TableCell>
                        <TableCell>$110.00</TableCell>
                        <TableCell>Email, Office suite, collaboration tools</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Zoom Pro License</TableCell>
                        <TableCell>$14.99</TableCell>
                        <TableCell>5 users</TableCell>
                        <TableCell>$74.95</TableCell>
                        <TableCell>Video conferencing for remote support</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>TeamViewer Business</TableCell>
                        <TableCell>$50.90</TableCell>
                        <TableCell>3 licenses</TableCell>
                        <TableCell>$152.70</TableCell>
                        <TableCell>Remote desktop support</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jira Service Management</TableCell>
                        <TableCell>$21.00</TableCell>
                        <TableCell>5 users</TableCell>
                        <TableCell>$105.00</TableCell>
                        <TableCell>Ticket management system</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={4} className="font-medium">Subtotal</TableCell>
                        <TableCell className="font-bold">$442.65</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Training & Development */}
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-xl">Training & Development Category</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Unit Cost</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Monthly Total</TableHead>
                        <TableHead>Purpose</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>CompTIA Certification Prep</TableCell>
                        <TableCell>$199.00</TableCell>
                        <TableCell>1 course</TableCell>
                        <TableCell>$199.00</TableCell>
                        <TableCell>Professional development</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>LinkedIn Learning Team</TableCell>
                        <TableCell>$19.99</TableCell>
                        <TableCell>5 users</TableCell>
                        <TableCell>$99.95</TableCell>
                        <TableCell>Ongoing skills training</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>IT Conference Registration</TableCell>
                        <TableCell>$300.00</TableCell>
                        <TableCell>1 person</TableCell>
                        <TableCell>$300.00</TableCell>
                        <TableCell>Industry knowledge updates</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={4} className="font-medium">Subtotal</TableCell>
                        <TableCell className="font-bold">$598.95</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Hardware & Equipment */}
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-xl">Hardware & Equipment Category</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Unit Cost</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Monthly Total</TableHead>
                        <TableHead>Purpose</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Ergonomic Office Chairs</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>1 chair</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Workplace comfort (amortized)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Backup External Drives</TableCell>
                        <TableCell>$89.99</TableCell>
                        <TableCell>2 drives</TableCell>
                        <TableCell>$179.98</TableCell>
                        <TableCell>Data backup solutions</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Network Testing Equipment</TableCell>
                        <TableCell>$150.00</TableCell>
                        <TableCell>1 kit</TableCell>
                        <TableCell>$150.00</TableCell>
                        <TableCell>Troubleshooting tools</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={4} className="font-medium">Subtotal</TableCell>
                        <TableCell className="font-bold">$579.98</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Professional Services */}
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Services Category</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Unit Cost</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Monthly Total</TableHead>
                        <TableHead>Purpose</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cloud Backup Service</TableCell>
                        <TableCell>$49.99</TableCell>
                        <TableCell>1 service</TableCell>
                        <TableCell>$49.99</TableCell>
                        <TableCell>Data protection</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Security Monitoring</TableCell>
                        <TableCell>$199.00</TableCell>
                        <TableCell>1 service</TableCell>
                        <TableCell>$199.00</TableCell>
                        <TableCell>Threat detection</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={4} className="font-medium">Subtotal</TableCell>
                        <TableCell className="font-bold">$248.99</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <p className="text-sm text-foreground font-semibold">Total Monthly Budget: $1,870.57</p>
              <p className="text-xs text-muted-foreground">
                Reference: Schwarz, L. (2024). IT services budgeting: How-to & what to include. NetSuite. {" "}
                <a className="underline" href="https://www.netsuite.com/portal/resource/articles/financial-management/it-budgeting.shtml" target="_blank" rel="noreferrer">
                  https://www.netsuite.com/portal/resource/articles/financial-management/it-budgeting.shtml
                </a>
              </p>
            </CardContent>
          </Card>
        </section>

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