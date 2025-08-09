import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, Users, Target, Brain, AlertTriangle } from "lucide-react";

const TeamLeadership = () => {
  const days = [
    {
      day: "Day 1",
      title: "Welcome and Orientation",
      activities: [
        { time: "9:00 AM – 10:00 AM", task: "Welcome session and office tour. Meet the team and get introduced to company culture." },
        { time: "10:00 AM – 12:00 PM", task: "HR session about policies, code of conduct, safety, and company values." },
        { time: "12:00 PM – 1:00 PM", task: "Lunch with supervisor and team lead." },
        { time: "1:00 PM – 3:00 PM", task: "Set up work systems – email, VPN, ServiceNow, Slack, and Jira." },
        { time: "3:00 PM – 5:00 PM", task: "Shadow a senior IT support member. Observe ticket handling." }
      ],
      icon: Users
    },
    {
      day: "Day 2",
      title: "Tools and Hands-On Work",
      activities: [
        { time: "9:00 AM – 10:30 AM", task: "Overview of internal tools like Active Directory, SCCM, remote access software, and monitoring." },
        { time: "10:30 AM – 12:00 PM", task: "Shadowing continues – password resets, printer issues, account unlocks." },
        { time: "1:00 PM – 3:00 PM", task: "Start working on low-priority tasks with senior staff support." },
        { time: "3:00 PM – 5:00 PM", task: "Learn about KPIs: response time, resolution time, user satisfaction." }
      ],
      icon: BookOpen
    },
    {
      day: "Day 3",
      title: "Independent Work and Goal Setting",
      activities: [
        { time: "9:00 AM – 12:00 PM", task: "Handle 2–3 easy tickets independently with supervisor observation." },
        { time: "1:00 PM – 3:00 PM", task: "1-on-1 meeting with supervisor. Set 30-day learning goals." },
        { time: "3:00 PM – 5:00 PM", task: "Start LinkedIn Learning course on ITIL Foundation. Plan certifications." }
      ],
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Onboarding Plan */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                3-Day Onboarding Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured approach to welcome and integrate new IT team members effectively (Bauer, 2014)
              </p>
            </div>

            {/* Objective */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The goal of this onboarding plan is to help a new IT team member feel welcome, understand their responsibilities, 
                  and start contributing effectively from the first week.
                </p>
              </CardContent>
            </Card>

            {/* Daily Schedule */}
            <div className="mt-12 space-y-8">
              {days.map((day, dayIndex) => (
                <Card key={dayIndex} className="relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <day.icon className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {day.day} – {day.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="grid md:grid-cols-[200px,1fr] gap-2">
                          <div className="font-medium text-primary">{activity.time}</div>
                          <div className="text-muted-foreground">{activity.task}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* HR Warning Memo Template */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  HR Warning Memo Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Date:</strong> [Insert Date]</p>
                  <p><strong>To:</strong> [Employee Name]</p>
                  <p><strong>From:</strong> Anvesh Nannam, IT Supervisor</p>
                  <p><strong>Subject:</strong> Warning Notice for Workplace Conduct Violation</p>
                  <p><strong>Violation Summary:</strong> On [insert date], you were found violating company conduct policy by [briefly describe behavior – e.g., repeated tardiness, inappropriate communication, or non-compliance with IT protocols].</p>
                  <p><strong>Supervisor Statement:</strong> Your actions negatively impacted team performance and workplace culture. As your supervisor, I expect you to maintain professionalism and follow all company policies moving forward.</p>
                  <p><strong>Corrective Action Plan:</strong></p>
                  <ul className="list-disc pl-6">
                    <li>Attend a mandatory behavior improvement session by [insert date].</li>
                    <li>Submit a written apology (if applicable).</li>
                    <li>Follow improved conduct for the next 30 days.</li>
                  </ul>
                  <p><strong>Timeline for Improvement:</strong> You are expected to show progress by [insert review date]. A follow-up meeting will be scheduled to evaluate your behavior and compliance.</p>
                  <p><strong>Next Steps if Issue Persists:</strong> Further violation will result in a formal Performance Improvement Plan (PIP) and could lead to suspension or termination (<a href="https://primo.qatar-weill.cornell.edu/permalink/974WCMCIQ_INST/edcfms/alma991000607346806691">Falcone, 2020</a>).</p>
                  <p><strong>Signatures:</strong></p>
                  <p>Employee: _______________________ Date: ___________</p>
                  <p>Supervisor: ______________________ Date: ___________</p>
                </div>
              </CardContent>
            </Card>

            {/* Real-World Example */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Real-World Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Progressive discipline helps companies correct employee behavior in a fair and consistent way. According to <a href="https://www.epgdlaw.com/progressive-discipline-in-the-workplace/">EPGD Law (2025)</a>, this method allows employers to give employees multiple chances to improve before taking serious action like termination. For example, an HR team may first give a verbal warning, then a written warning, and finally a final notice if the problem continues. This step-by-step process helps avoid legal risks and gives employees time to change their behavior (<a href="https://www.epgdlaw.com/progressive-discipline-in-the-workplace/">EPGD Law, 2025</a>).
                </p>
              </CardContent>
            </Card>

            {/* References */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>References</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Bauer, T. N. (2014). Onboarding new employees: Maximizing success. SHRM Foundation.</p>
                  <p>SHRM. (n.d.). Employee Onboarding Guide.</p>
                  <p>Snell, A. (2006). Researching onboarding best practice: Using research to connect onboarding processes with employee satisfaction. Strategic HR Review, 5(6), 32–35.</p>
                  <p>Trisca, L. (2025). How Google onboards new hires (and how you can easily replicate it). Global HR.</p>
                  <p>Employment Practices Group Defense (EPGD) Law. (2025). Understanding progressive discipline in the workplace. <a href="https://www.epgdlaw.com/progressive-discipline-in-the-workplace/">EPGD Law</a>.</p>
                  <p>Falcone, P. (2010). 101 sample write-ups for documenting employee performance problems : a guide to progressive discipline & termination (2nd ed.). American Management Association. <a href="https://primo.qatar-weill.cornell.edu/permalink/974WCMCIQ_INST/edcfms/alma991000607346806691">Link</a>.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeadership;
