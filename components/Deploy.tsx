import { Section, SectionHead, Bullets } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const options = [
  {
    tag: "Recommended",
    title: "In your own AWS account",
    body: "The whole stack deploys into your account as infrastructure-as-code you can read line by line: models on Amazon Bedrock in your region, conversations in your DynamoDB, transcripts in your S3, traffic inside your VPC. Nothing crosses your perimeter — not the transcripts, not the prompts.",
    bullets: [
      "Terraform you own and review",
      "Your KMS keys, your retention policy",
      "Your Bedrock region, quotas and model approvals",
      "SSO for reviewers, audit trail for every verdict",
    ],
  },
  {
    tag: "Managed",
    title: "Hosted by us",
    body: "The same stack in our account when you want to move first and decide later. Bring your own model keys, export everything on demand, and migrate into your own account when procurement is ready — same code, no re-platforming.",
    bullets: [
      "Live in days, not a quarter",
      "Priced per resolved ticket — you pay for outcomes",
      "Full data export whenever you ask",
      "Identical review and regression tooling",
    ],
  },
];

export function Deploy() {
  return (
    <Section id="deploy">
      <SectionHead
        eyebrow="Deployment"
        title="Runs where your data already lives."
        lead="On-premise in the cloud sense of the word: your AWS account, your network boundary, your compliance story. The alternative is available, not assumed."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {options.map((option, i) => (
          <Reveal
            key={option.title}
            delay={i * 80}
            className="panel flex flex-col rounded-2xl p-7 md:p-9"
          >
            <span className="inline-flex w-fit items-center rounded-full border border-line px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.2em] text-fg-muted">
              {option.tag}
            </span>
            <h3 className="mt-6 text-[clamp(1.3rem,2.2vw,1.6rem)] font-semibold tracking-[-0.025em]">
              {option.title}
            </h3>
            <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">
              {option.body}
            </p>
            <Bullets items={option.bullets} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
