import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "What is 3Layers.ai?",
    a: "A customer-support platform that combines an AI Bot for repetitive questions, AI assistance for your support agents, and human support specialists for the conversations that need judgment — all monitored in one console.",
  },
  {
    q: "Do I need an existing support team?",
    a: "No. We work with businesses that already have a support team, and we also provide the human layer ourselves as a managed service. You can start with one layer and add the others later.",
  },
  {
    q: "Will the AI replace my support team?",
    a: "No. The platform removes repetitive work and increases your team's capacity. Complex, sensitive and high-value conversations stay with people — that is the third layer, not an afterthought.",
  },
  {
    q: "How does the AI learn about my business?",
    a: "Only from what you approve: your website content, help-center articles, product information, procedures and internal documentation. If it is not in an approved source, the AI does not say it.",
  },
  {
    q: "What happens when the AI does not know the answer?",
    a: "It escalates — based on confidence, topic, urgency and your own business rules — and the agent receives a summary, the customer context, the relevant policy and a recommended response. Customers can also ask for a human at any point.",
  },
  {
    q: "Can the AI access private customer information?",
    a: "Only where you connect it. Access depends on your systems, permissions, security requirements and the integrations you choose; those controls are defined during implementation, before anything goes live.",
  },
  {
    q: "Which channels and tools does it work with?",
    a: "Website chat, email, help centers, ticketing platforms, CRM and messaging channels. We design the setup around your current operation rather than asking you to rebuild it.",
  },
  {
    q: "How long does implementation take?",
    a: "It depends on channels, integrations and how much knowledge has to be organised. A limited pilot on one high-volume use case normally launches well before a full deployment.",
  },
  {
    q: "How do you measure success?",
    a: "AI resolution rate, cost per conversation, first-response and resolution time, escalation rate, agent productivity, customer satisfaction and estimated savings — reported per layer, so you can see where the money actually goes.",
  },
];


export function Faq() {
  return (
    <Section id="faq">
      <SectionHead eyebrow="FAQ" title="Straight answers." />

      <div className="mt-12 border-t border-line">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 50}>
            <details className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start gap-6 py-6 text-[15px] font-medium tracking-[-0.01em] transition-colors hover:text-fg-muted">
                <span className="flex-1">{faq.q}</span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-fg-dim transition-transform duration-300 group-open:rotate-45"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[74ch] pb-7 pr-10 text-[13.5px] leading-relaxed text-fg-muted">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
