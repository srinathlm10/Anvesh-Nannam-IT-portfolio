import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

const Coaching = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Coaching Toolkit
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive employee development templates and performance frameworks
          </p>
        </div>
        
        <div className="mt-16">
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Coaching & Communication Toolkit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Effective leadership in information technology is built on a foundation of clear communication and dedicated coaching. A supervisor's ability to develop talent, foster collaboration and navigate challenges is directly linked to the quality of their interactions with the team. This toolkit provides a framework and practical resources designed to empower IT teams, enhance performance and build a culture of continuous improvement and psychological safety.
              </p>
              <h3 className="text-lg font-bold mt-6">The Coaching Framework for Technical Professionals</h3>
              <p className="text-muted-foreground">
                Coaching is more than just managing tasks; it is about unlocking an individual's potential to maximize their own performance. For technical professionals, who are often self-motivated and results-oriented, a structured coaching approach is essential. A highly effective and widely adopted method is the GROW model, which provides a simple yet powerful framework for navigating coaching conversations (Whitmore, 2017).
              </p>
              <p className="text-muted-foreground">
                By using this model, an IT supervisor can shift from being a directive problem-solver to a facilitative coach, empowering team members to develop their own solutions and take ownership of their professional growth.
              </p>
              <h4 className="text-md font-bold mt-6">Template: Coaching Plan (GROW Model)</h4>
              <p className="text-muted-foreground">
                Use this template to structure a developmental coaching conversation.
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Employee Name:</strong> _________________________</li>
                <li><strong>Date:</strong> _________________________</li>
                <li><strong>Coach/Supervisor:</strong> _________________________</li>
              </ul>
              <ol className="list-decimal pl-6">
                <li><strong>GOAL (What do you want to achieve?)</strong>
                  <ul className="list-disc pl-6">
                    <li>Objective: What is the specific, measurable goal you want to work on? (e.g., "I want to lead the next module deployment.")</li>
                    <li>Motivation: Why is this goal important to you right now? What makes it inspiring?</li>
                    <li>Success Criteria: How will you know you have achieved this goal? What does success look like?</li>
                  </ul>
                </li>
                <li><strong>REALITY (Where are you now?)</strong>
                  <ul className="list-disc pl-6">
                    <li>Current Situation: What is the current status of this goal? What steps have you already taken?</li>
                    <li>Strengths & Resources: What skills, knowledge, or resources do you currently have that will help you?</li>
                    <li>Challenges: What internal or external obstacles are standing in your way?</li>
                  </ul>
                </li>
                <li><strong>OPTIONS (What could you do?)</strong>
                  <ul className="list-disc pl-6">
                    <li>Brainstorm: What are all the possible actions you could take to move forward, no matter how small? (List at least 5 options).</li>
                    <li>Evaluation: Which of these options are the most promising? What are the pros and cons of each?</li>
                  </ul>
                </li>
                <li><strong>WAY FORWARD (What will you do?)</strong>
                  <ul className="list-disc pl-6">
                    <li>Action Steps: What specific actions will you commit to taking before our next meeting?</li>
                    <li>Support Needed: What support do you need from me or others to succeed?</li>
                    <li>Confidence Level: On a scale of 1-10, how confident are you that you will complete these steps?</li>
                  </ul>
                </li>
              </ol>
              <h3 className="text-lg font-bold mt-6">Essential Leadership Templates & Frameworks</h3>
              <h4 className="text-md font-bold mt-6">Template: One-on-One Meeting Agenda</h4>
              <p className="text-muted-foreground">
                Regular one-on-one meetings are the most important tool for a people leader. Use this structure to ensure conversations are consistently productive and employee-focused.
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Date:</strong> _________________________</li>
                <li><strong>Attendees:</strong> (Supervisor Name) & (Employee Name)</li>
              </ul>
              <ol className="list-decimal pl-6">
                <li><strong>Part 1: The Employee's Agenda (15-20 mins)</strong>
                  <ul className="list-disc pl-6">
                    <li>Top of Mind: What's going well? What challenges are you facing?</li>
                    <li>Priorities & Roadblocks: What are your main priorities this week? Are there any obstacles I can help remove?</li>
                    <li>Team & Company: Any thoughts on team dynamics, processes, or the company culture?</li>
                  </ul>
                </li>
                <li><strong>Part 2: The Supervisor's Agenda (10-15 mins)</strong>
                  <ul className="list-disc pl-6">
                    <li>Key Updates & Information: Sharing relevant company or team news.</li>
                    <li>Performance Feedback (Using SBI): Discussing recent work, both wins and areas for development.</li>
                    <li>Alignment on Priorities: Ensuring we are aligned on the most important work for the upcoming week/sprint.</li>
                  </ul>
                </li>
                <li><strong>Part 3: Looking Forward (5-10 mins)</strong>
                  <ul className="list-disc pl-6">
                    <li>Career & Development: How are you progressing toward your long-term career goals? What new skills do you want to develop?</li>
                    <li>Action Items: What are the key takeaways and action items from our conversation today?</li>
                  </ul>
                </li>
              </ol>
              <h4 className="text-md font-bold mt-6">Template: SBI Feedback Framework</h4>
              <p className="text-muted-foreground">
                The Situation-Behavior-Impact (SBI) model is a simple way to deliver feedback that is direct, specific and non-judgmental (Center for Creative Leadership, n.d.).
              </p>
              <p className="text-muted-foreground">
                <strong>Instructions:</strong> Before delivering feedback, fill out the three sections below to structure your thoughts.
              </p>
              <ul className="list-disc pl-6">
                <li><strong>SITUATION:</strong> Describe the specific context. Where and when did this happen?</li>
                <li>Example: "In yesterday's project planning meeting..."</li>
                <li><strong>BEHAVIOR:</strong> Describe the exact, observable behavior. Avoid judgments or interpretations. Stick to the facts of what the person said or did.</li>
                <li>Example: "...you provided a detailed breakdown of the potential security risks associated with the new API integration..."</li>
                <li><strong>IMPACT:</strong> Explain the impact of that behavior on you, the team, or the project.</li>
                <li>Example: "...and that helped the entire team understand the importance of the new security protocol. It clarified the risks and allowed us to build a better plan. Thank you."</li>
              </ul>
              <h4 className="text-md font-bold mt-6">Template: Conflict Resolution Framework</h4>
              <p className="text-muted-foreground">
                When mediating a disagreement, use this 5-step framework to guide the conversation toward a constructive, collaborative outcome (Gallo, 2017).
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Mediator:</strong> _________________________</li>
                <li><strong>Parties Involved:</strong> _________________________ & _________________________</li>
              </ul>
              <ol className="list-decimal pl-6">
                <li><strong>Step 1: Set the Stage</strong>
                  <ul className="list-disc pl-6">
                    <li>Goal: Acknowledge the conflict and establish ground rules for a respectful discussion.</li>
                    <li>Opening Statement: "Thank you both for being here. The goal of this meeting is not to assign blame, but to understand each other's perspectives and find a productive path forward. Let's agree to listen actively and speak respectfully."</li>
                  </ul>
                </li>
                <li><strong>Step 2: Understand the Perspectives</strong>
                  <ul className="list-disc pl-6">
                    <li>Goal: Allow each person to state their viewpoint without interruption.</li>
                    <li>Person A's Perspective: (Listen and summarize back: "So, if I understand correctly, you felt...")</li>
                    <li>Person B's Perspective: (Listen and summarize back: "And from your point of view, the issue was...")</li>
                  </ul>
                </li>
                <li><strong>Step 3: Identify Common Ground</strong>
                  <ul className="list-disc pl-6">
                    <li>Goal: Find the underlying interests and shared goals that both parties have.</li>
                    <li>Question: "Putting the disagreement aside for a moment, what is the ideal outcome we are both working toward? What do we both want for this project/team?"</li>
                  </ul>
                </li>
                <li><strong>Step 4: Brainstorm Solutions</strong>
                  <ul className="list-disc pl-6">
                    <li>Goal: Collaboratively generate potential solutions that address the common goals.</li>
                    <li>Activity: "Let's brainstorm all possible ways we could move forward to achieve our shared goal. No idea is a bad idea at this stage." (List all suggestions).</li>
                  </ul>
                </li>
                <li><strong>Step 5: Agree on a Path Forward</strong>
                  <ul className="list-disc pl-6">
                    <li>Goal: Choose a solution and define the specific, concrete steps each person will take.</li>
                    <li>Agreement: "Based on our discussion, it seems the best option is [Chosen Solution]. To make this happen, what is one thing each of you will commit to doing differently starting today?"</li>
                    <li>Person A's Commitment:</li>
                    <li>Person B's Commitment:</li>
                    <li>Follow-up: "I will check in with both of you in [Timeframe] to see how things are progressing. Thank you for your willingness to resolve this."</li>
                  </ul>
                </li>
              </ol>
              <h4 className="text-md font-bold mt-6">References</h4>
              <ul className="list-disc pl-6">
                <li>Center for Creative Leadership. (n.d.). Use Situation-Behavior-Impact (SBI)™ to Understand Intent. https://www.ccl.org/articles/leading-effectively-articles/closing-the-gap-between-intent-vs-impact-sbii/</li>
                <li>Gallo, A. (2025). How to Encourage the Right Kind of Conflict on Your Team. Harvard Business Review. https://hbr.org/2025/02/how-to-encourage-the-right-kind-of-conflict-on-your-team</li>
                <li>Preply. (2025). Strategies to improve communication in tech teams: 7 proven approaches. https://preply.com/en/blog/b2b-strategies-to-improve-communication-in-tech-teams/</li>
                <li>Whitmore, J. (2017). Coaching for performance: The principles and practice of coaching and leadership (5th ed.). Nicholas Brealey Publishing. https://books.google.co.in/books/about/Coaching_for_Performance_Fifth_Edition.html?id=TiWfDAAAQBAJ&redir_esc=y</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Coaching;