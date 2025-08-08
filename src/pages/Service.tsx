import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const Service = () => {
  useEffect(() => {
    const title = "Customer Service Standards | IT Support Excellence";
    const description =
      "Customer service standards statement, IT incident documentation form, escalation matrix, and sample helpdesk ticket response.";

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    const ld = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Customer Service Standards Statement",
      author: { "@type": "Person", name: "Anvesh Nannam" },
      datePublished: "2025-06-22",
      description,
      mainEntityOfPage: window.location.href,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Customer Service Standards Statement
          </h1>
          <p className="text-muted-foreground">Information Technology Field Experience-EX20</p>
          <p className="text-muted-foreground">Anvesh Nannam • Dr. Michael Moifolley • Cumberland University</p>
          <p className="text-muted-foreground">June 22, 2025</p>
        </header>

        <main className="mt-10 space-y-12">
          <article className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">My Philosophy of IT Customer Service</h2>
            <p className="text-muted-foreground">
              My core philosophy of IT customer service is that technology support should be a partnership, not a transaction. End-users are not just “users”, they are colleagues and partners in achieving organizational goals. Therefore, IT’s role is to empower them by making technology accessible, reliable and understandable. This means treating every individual with respect, patience and empathy. As noted by the Information Technology Infrastructure Library (ITIL), the focus of service management is on co-creating value with customers, which requires a deep understanding of their needs and perspectives (AXELOS, 2019). We must move beyond simply fixing technical problems and instead focus on delivering a positive and supportive experience that builds trust and confidence in the IT department.
            </p>
          </article>

          <article className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Defining and Delivering Great Service</h2>
            <p className="text-muted-foreground">
              Great IT service is defined by three key principles: responsiveness, clarity and resolution. Responsiveness means acknowledging a user’s request promptly and keeping them informed throughout the support process. Clarity involves communicating technical information in simple, jargon-free language that the user can easily understand. As suggested by Solomon (2016), clear communication is the bedrock of excellent customer service, preventing misunderstandings and managing expectations effectively. Finally, a successful resolution is not just about closing a ticket; it’s about ensuring the user’s issue is fully resolved to their satisfaction and they are equipped with the knowledge to prevent similar issues in the future, if possible. Delivering on these principles consistently is the hallmark of a truly great service organization.
            </p>
          </article>

          <article className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Professional Complaint Resolution</h2>
            <p className="text-muted-foreground">
              When a customer is dissatisfied, my approach is to listen first and then act. A complaint is an opportunity to identify a weakness in our service and turn a negative experience into a positive one. The first step is to actively listen to the user’s full story without interruption, showing empathy for their frustration. This act alone can de-escalate tension. The second step is to take ownership of the problem, even if the issue is complex or involves multiple teams. I would clearly state, “I understand why you are frustrated and I will personally ensure we find a solution”. Finally, I would outline the immediate steps we will take to investigate and resolve the issue, providing a clear timeline for follow-up. This structured, empathetic approach ensures that the user feels heard, valued and confident that their problem is a priority (Harris, 2013).
            </p>
          </article>

          <aside aria-labelledby="references-heading" className="space-y-3">
            <h2 id="references-heading" className="text-2xl font-semibold text-foreground">References</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                AXELOS. (2019). ITIL foundation: ITIL 4 edition. TSO (The Stationery Office). {" "}
                <a className="underline" href="https://abim.go.ug/sites/files/%28ITIL%29%20Axelos%20-%20ITIL%20Foundation%204%20edition-Axelos%20%282019%29%5B1%5D.pdf" target="_blank" rel="noopener noreferrer">Link</a>
              </li>
              <li>
                Harris, E. K. (2013). Customer service: A practical approach (6th ed.). Pearson. {" "}
                <a className="underline" href="https://www.pearson.com/en-us/subject-catalog/p/customer-service-a-practical-approach/P200000005913/9780137546381" target="_blank" rel="noopener noreferrer">Link</a>
              </li>
              <li>
                Solomon, M. (2016). The heart of hospitality. SelectBooks. {" "}
                <a className="underline" href="https://books.google.co.in/books/about/The_Heart_of_Hospitality.html?id=t25tjwEACAAJ&redir_esc=y" target="_blank" rel="noopener noreferrer">Link</a>
              </li>
            </ul>
          </aside>

          <Separator />

          <section aria-labelledby="incident-form" className="space-y-6">
            <h2 id="incident-form" className="text-2xl font-semibold text-foreground">IT Incident Documentation Form</h2>
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Incident Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="incidentId">Incident ID</Label>
                    <Input id="incidentId" placeholder="e.g., INC-2025-0001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reportedBy">Reported by</Label>
                    <Input id="reportedBy" placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact</Label>
                    <Input id="contact" placeholder="Email / Phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Priority</Label>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { id: "critical", label: "Critical" },
                      { id: "high", label: "High" },
                      { id: "medium", label: "Medium" },
                      { id: "low", label: "Low" },
                    ].map((p) => (
                      <label key={p.id} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox id={`priority-${p.id}`} />
                        <span className="text-sm text-muted-foreground">{p.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brief">Brief Description</Label>
                  <Textarea id="brief" placeholder="What happened?" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label>Systems / Applications Affected</Label>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Email",
                      "Network",
                      "Database",
                      "Website",
                      "Phone System",
                      "File Server",
                      "Other",
                    ].map((name) => (
                      <label key={name} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="errors">Error Messages / Symptoms</Label>
                  <Textarea id="errors" placeholder="Paste exact messages or describe symptoms" rows={3} />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryContact">Primary Contact / Reporter</Label>
                    <Input id="primaryContact" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="itAssigned">IT Personnel Assigned</Label>
                    <Input id="itAssigned" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Affected Users / Departments</Label>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "All Users",
                      "IT Department",
                      "Sales",
                      "Finance",
                      "HR",
                      "Operations",
                      "Other",
                    ].map((name) => (
                      <label key={name} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendors">External Vendors (if applicable)</Label>
                  <Input id="vendors" />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="usersAffected">Number of Users Affected</Label>
                    <Input id="usersAffected" type="number" min={0} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration of Outage</Label>
                    <Input id="duration" placeholder="e.g., 45 minutes" />
                  </div>
                  <div className="space-y-2">
                    <Label>Business Operations Impact</Label>
                    <div className="grid gap-2">
                      {[
                        "Complete system down",
                        "Partial functionality",
                        "Performance degraded",
                        "No business impact",
                      ].map((name) => (
                        <label key={name} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox />
                          <span className="text-sm text-muted-foreground">{name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Services Unavailable</Label>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Email",
                      "Internet",
                      "File access",
                      "Database",
                      "Printing",
                      "Phone",
                      "Other",
                    ].map((name) => (
                      <label key={name} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="financial">Estimated Financial Impact ($)</Label>
                    <Input id="financial" type="number" min={0} />
                  </div>
                  <div className="space-y-2">
                    <Label>Customer Impact</Label>
                    <div className="flex gap-6">
                      {[
                        { id: "yes", label: "Yes" },
                        { id: "no", label: "No" },
                      ].map((opt) => (
                        <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox id={`customer-${opt.id}`} />
                          <span className="text-sm text-muted-foreground">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Response Actions & Resolution Timeline</Label>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        <div className="md:col-span-2">
                          <Input placeholder="Time" aria-label={`Time ${i}`} />
                        </div>
                        <div className="md:col-span-8">
                          <Input placeholder="Action" aria-label={`Action ${i}`} />
                        </div>
                        <div className="md:col-span-2">
                          <Input placeholder="By" aria-label={`By ${i}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rootCause">Root Cause (if known)</Label>
                    <Textarea id="rootCause" rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="finalResolution">Final Resolution</Label>
                    <Textarea id="finalResolution" rows={3} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="restoredDate">Service Restored - Date</Label>
                    <Input id="restoredDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="restoredTime">Time</Label>
                    <Input id="restoredTime" type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="restoredBy">By</Label>
                    <Input id="restoredBy" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Follow-up Actions</Label>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Software update",
                      "Hardware replacement",
                      "Process change",
                      "Training",
                      "Documentation update",
                    ].map((name) => (
                      <label key={name} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{name}</span>
                      </label>
                    ))}
                  </div>

                  {[1, 2, 3].map((i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-3">
                      <div className="md:col-span-8">
                        <Input placeholder={`Action Item ${i}`} />
                      </div>
                      <div className="md:col-span-2">
                        <Input placeholder="Due" />
                      </div>
                      <div className="md:col-span-2">
                        <Input placeholder="Owner" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="completedBy">Completed by</Label>
                    <Input id="completedBy" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reviewedBy">Reviewed by</Label>
                    <Input id="reviewedBy" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="escalation-matrix" className="space-y-4">
            <h2 id="escalation-matrix" className="text-2xl font-semibold text-foreground">IT Support Escalation Matrix</h2>
            <p className="text-muted-foreground">Structured incident management workflow for efficient problem resolution.</p>
            <figure className="mt-2">
              <img
                src="/lovable-uploads/d5e4ff4b-469a-42b1-bc3c-b482d22e048a.png"
                alt="IT support escalation matrix tiers and criteria: Tier 1, Tier 2, Tier 3"
                loading="lazy"
                className="w-full h-auto rounded-md shadow"
              />
              <figcaption className="text-sm text-muted-foreground mt-2">Escalation tiers, personnel, services, and criteria.</figcaption>
            </figure>
            <div>
              <h3 className="sr-only">References</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Wrangle Blog – Ticket escalation process: {" "}
                  <a className="underline" href="https://www.wrangle.io/post/ticket-escalation-process" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
                <li>
                  AXELOS. (2019). ITIL foundation: ITIL 4 edition. {" "}
                  <a className="underline" href="https://abim.go.ug/sites/files/%28ITIL%29%20Axelos%20-%20ITIL%20Foundation%204%20edition-Axelos%20%282019%29%5B1%5D.pdf" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
                <li>
                  Auxilion – IT support levels: {" "}
                  <a className="underline" href="https://www.auxilion.com/insights/it-support-levels" target="_blank" rel="noopener noreferrer">Link</a>
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="helpdesk-response" className="space-y-6">
            <h2 id="helpdesk-response" className="text-2xl font-semibold text-foreground">Sample Helpdesk Ticket Response</h2>
            <Card className="border border-border bg-card">
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground">Subject: Regarding Your Ticket [TICKET-ID]: “Email Not Working”</p>
                <p className="text-muted-foreground">
                  Dear User,
                </p>
                <p className="text-muted-foreground">
                  Thank you for reaching out to the IT Helpdesk. I understand how frustrating it must be to have your email down and I want to assure you that I am here to help get this resolved for you as quickly as possible. To begin troubleshooting, could you please let me know if you are accessing your email through the Outlook desktop application or via the web browser? Knowing this will help me investigate the right area. In the meantime, I have already checked the status of our email server and it appears to be running normally, which suggests the issue may be localized to your device or account. I will keep your ticket open and await your reply to determine the next steps.
                </p>
                <p className="text-muted-foreground">Best regards,</p>
                <p className="text-muted-foreground">Anvesh Nannam<br/>IT Helpdesk Technician</p>
                <Separator />
                <div>
                  <h3 className="sr-only">References</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      Wrangle Blog – 15 Essential IT Help Desk Ticket Response Templates: {" "}
                      <a className="underline" href="https://www.wrangle.io/post/help-desk-ticket-response-templates" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Hiver – Help Desk Ticket Templates: {" "}
                      <a className="underline" href="https://hiverhq.com/blog/helpdesk-ticket-template" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Service;