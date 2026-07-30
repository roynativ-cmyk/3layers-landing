"use client";

import { useState } from "react";
import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "What is 3Layers.ai?",
    a: "A customer-support platform that combines an AI Bot for repetitive questions, AI assistance for your support agents, and intelligent escalation to your own specialists for the conversations that need judgment — all monitored in one console.",
  },
  {
    q: "Who are the human experts in layer 3 — yours or mine?",
    a: "Yours. We do not supply support staff. Layer 3 is your existing team, and what we provide is the intelligence around it: the AI recognises when a conversation genuinely needs a person, escalates it under your rules, and hands your agent the full history, the customer context and a recommended response. Layer 2 then makes those same agents faster. You can start with layer 1 alone and switch on the others as your operation grows.",
  },
  {
    q: "Will the AI replace my support team?",
    a: "No. The platform removes repetitive work and increases your team's capacity. Complex, sensitive and high-value conversations stay with your people — that is the third layer, not an afterthought.",
  },
  {
    q: "How does the AI learn about my business?",
    a: "Only from what you approve: your website content, help-center articles, product information, procedures and internal documentation. If it is not in an approved source, the AI does not say it.",
  },
  {
    q: "What happens when the AI does not know the answer?",
    a: "It escalates to your team — based on confidence, topic, urgency and your own business rules — and your agent receives a summary, the customer context, the relevant policy and a recommended response. Customers can also ask for a human at any point.",
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


function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-start gap-6 py-6 text-left text-[15px] font-medium tracking-[-0.01em] transition-colors hover:text-fg-muted"
      >
        <span className="flex-1">{q}</span>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-fg-dim transition-transform duration-300 group-aria-expanded:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </button>
      <div className="faq-body" data-state={open ? "open" : "closed"}>
        <div className="overflow-hidden">
          <p className="max-w-[74ch] pb-7 pr-10 text-[13.5px] leading-relaxed text-fg-muted">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <SectionHead eyebrow="FAQ" title="Straight answers." />

      <div className="mt-12 border-t border-line">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 50}>
            <FaqItem q={faq.q} a={faq.a} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
