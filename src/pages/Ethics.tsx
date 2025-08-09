import { Helmet } from "react-helmet-async";

const Ethics = () => {
  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/ethics`
      : "https://example.com/ethics";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ethics & Culture in IT Leadership",
    description:
      "Ethics & Culture: Causal loop diagram, ethical dilemma response, personal code of ethics, and U.S. cultural adaptation for IT leadership.",
    author: { "@type": "Person", name: "Anvesh Nannam" },
    image: [
      "/lovable-uploads/b4754eec-eae3-4f7f-b2dc-b697c8659295.png",
    ],
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <div className="min-h-screen py-12">
      <Helmet>
        <title>Ethics & Culture | IT Leadership</title>
        <meta
          name="description"
          content="Ethics & Culture: Causal loop, ethical dilemma response, personal ethics, and U.S. cultural adaptation for IT leadership."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ethics & Culture
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical frameworks and commitments guiding ethical leadership and cross-cultural effectiveness.
          </p>
        </header>

        <main className="mt-12 space-y-16">
          {/* Causal Loop Diagram */}
          <section id="causal-loop" className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Causal Loop Diagram: Supervisor Communication and Team Output
            </h2>
            <p className="text-muted-foreground">
              A Causal Loop Diagram is a systems thinking tool that visualizes how variables influence one another, revealing patterns and leverage points (Senge, 2006). This reinforcing loop shows how clear supervisor communication elevates understanding and morale, driving quality output and project success—further encouraging effective communication.
            </p>
            <figure className="flex flex-col items-center gap-4">
              <img
                src="/lovable-uploads/b4754eec-eae3-4f7f-b2dc-b697c8659295.png"
                alt="Causal loop diagram illustrating a reinforcing loop of positive communication leading to understanding, morale, quality output, and project success"
                loading="lazy"
                className="w-full max-w-2xl rounded-md border bg-card"
              />
              <figcaption className="text-sm text-muted-foreground">
                Reinforcing Loop of Positive Communication
              </figcaption>
            </figure>
            <p className="text-sm text-muted-foreground">
              Reference: Senge, P. M. (2006). The Fifth Discipline.{' '}
              <a
                className="underline"
                href="https://books.google.co.in/books/about/The_Fifth_Discipline.html?id=5jCLbnlmEuYC&redir_esc=y"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </section>

          {/* Ethical Dilemma Response */}
          <section id="ethical-dilemma" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Ethical Dilemma Response: Pressure to Alter Performance Data
            </h2>
            <h3 className="text-xl font-semibold">The Ethical Scenario</h3>
            <p className="text-muted-foreground">
              As an IT Supervisor, I am faced with a significant ethical challenge. A senior manager has instructed me to falsify the performance metrics of a struggling team member to avoid scrutiny from executive leadership. The manager presented this as a temporary fix, but it places me in direct conflict with my core duties as a leader.
            </p>
            <h3 className="text-xl font-semibold">Description of the Issue</h3>
            <p className="text-muted-foreground">
              The central issue is a clash between following a directive and upholding my ethical obligations. To alter the data would be an act of deception, fundamentally dishonest to the organization and deeply unfair to every other team member who is evaluated based on their actual performance. This action would destroy team morale and undermine the integrity of the entire performance management system. As leadership expert Peter Northouse (2021) notes, a leader's honesty sets the ethical standard for the entire team.
            </p>
            <h3 className="text-xl font-semibold">My Decision and Guiding Principle</h3>
            <p className="text-muted-foreground">
              Therefore, my decision is to unequivocally refuse to alter the performance data. This decision is guided by the principle of Integrity. This principle demands an unwavering commitment to honesty and fairness, especially under pressure, which aligns with research suggesting that ethical leaders possess the moral courage to make decisions that are right, not just convenient (Brown & Treviño, 2006).
            </p>
            <h3 className="text-xl font-semibold">Leadership Justification</h3>
            <p className="text-muted-foreground">
              My justification is threefold. First, my duty to my team requires me to be a fair and trustworthy leader; manipulating scores would be a betrayal of that trust. Second, the organization relies on accurate data for crucial decisions about training and resource allocation. Providing false information harms the company's ability to function effectively. Finally, allowing this dishonesty would set a dangerous precedent, fostering a culture where ethical compromises are acceptable.
            </p>
            <h3 className="text-xl font-semibold">A Constructive Alternative</h3>
            <p className="text-muted-foreground">
              Instead of complying, I will respectfully inform the manager of my decision and propose a constructive alternative: to immediately implement a formal Performance Improvement Plan (PIP). This approach addresses the root cause of the problem honestly and supports both the employee's growth and the department's long-term health.
            </p>
            <p className="text-sm text-muted-foreground">
              References:{' '}
              <a
                className="underline"
                href="https://doi.org/10.1016/j.leaqua.2006.10.004"
                target="_blank"
                rel="noreferrer"
              >
                Brown & Treviño (2006)
              </a>{' '}
              •{' '}
              <a
                className="underline"
                href="https://books.google.co.in/books/about/Leadership.html?id=6qYLEAAAQBAJ&redir_esc=y"
                target="_blank"
                rel="noreferrer"
              >
                Northouse (2021)
              </a>
            </p>
          </section>

          {/* Personal Code of Ethics */}
          <section id="personal-code" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Personal Code of Ethics for an IT Supervisor
            </h2>
            <p className="text-muted-foreground">
              A personal code of ethics is my professional compass, guiding decisions and building trust across the organization (PMI, 2021). Below are five core principles and how I apply them:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-foreground">
              <li>
                <p className="font-semibold">Accountability</p>
                <p className="text-muted-foreground">
                  I take ownership of team actions and performance—treating mistakes as learning opportunities and crediting contributors for successes.
                </p>
              </li>
              <li>
                <p className="font-semibold">Transparency</p>
                <p className="text-muted-foreground">
                  I communicate openly, sharing the why behind decisions and basing evaluations on clear, pre-communicated criteria.
                </p>
              </li>
              <li>
                <p className="font-semibold">Fairness and Equity</p>
                <p className="text-muted-foreground">
                  I distribute work and development opportunities based on merit and goals, fostering an inclusive, unbiased environment.
                </p>
              </li>
              <li>
                <p className="font-semibold">Respect for Privacy</p>
                <p className="text-muted-foreground">
                  I rigorously follow policies and laws concerning data privacy and instill the same standards across the team.
                </p>
              </li>
              <li>
                <p className="font-semibold">Commitment to Professional Growth</p>
                <p className="text-muted-foreground">
                  I mentor team members, align work with their goals, and advocate for resources they need to grow.
                </p>
              </li>
            </ol>
            <p className="text-sm text-muted-foreground">
              Reference: Project Management Institute (2021).{' '}
              <a
                className="underline"
                href="https://www.pmi.org/-/media/pmi/documents/public/pdf/ethics/pmi-code-of-ethics.pdf?sc_lang_temp=en"
                target="_blank"
                rel="noreferrer"
              >
                PMI Code of Ethics
              </a>
            </p>
          </section>

          {/* U.S. Cultural Adaptation Reflection */}
          <section id="cultural-adaptation" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              U.S. Cultural Adaptation Reflection for IT Leadership
            </h2>
            <p className="text-muted-foreground">
              Using Erin Meyer's Culture Map, I compare high-context norms from my home culture with the U.S.'s low-context, direct style and adapt my leadership accordingly.
            </p>
            <h3 className="text-xl font-semibold">Comparing Communication and Feedback Styles</h3>
            <p className="text-muted-foreground">
              In high-context cultures, messages are implicit and layered; in the U.S., communication is explicit and precise. Feedback in my home context is often indirect, while U.S. practice favors direct, constructive critique oriented toward development.
            </p>
            <h3 className="text-xl font-semibold">My Personal Adaptation Strategy</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>
                <span className="font-semibold">Practice Low-Context Communication:</span>{' '}
                Provide explicit instructions and written recaps to confirm understanding.
              </li>
              <li>
                <span className="font-semibold">Reframe Feedback:</span>{' '}
                Deliver direct yet respectful task-focused feedback and receive it openly as a growth tool.
              </li>
              <li>
                <span className="font-semibold">Lead with Questions:</span>{' '}
                Ask clarifying questions to ensure alignment and create a culture that welcomes clarity.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Reference: Meyer, E. (2014). The Culture Map.{' '}
              <a
                className="underline"
                href="https://books.google.co.in/books/about/The_Culture_Map.html?id=VbXrswEACAAJ&redir_esc=y"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Ethics;
