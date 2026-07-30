"use client";

import { useState } from "react";
import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "What is 3Layers.ai?",
    a: "A fully managed customer-support operation: an AI Bot for repetitive questions, our own human specialists who resolve what the bot can't, and — for the rare case that needs your systems or a decision only you can make — live coordination with your own team. All monitored in one console.",
  },
  {
    q: "Do I need my own support team?",
    a: "No. Layers one and two are a complete package we run for you: the AI Bot and our own human specialists handle the large majority of conversations end to end — nothing lands on your desk. Layer three is the exception, for the small number of cases that need your systems, your account access or a call only you can make: our team gets on a live session with yours — Zoom, Meet or a screen-share — and we close it together. That is typically under 5% of conversations.",
  },
  {
    q: "What happens to my existing support team?",
    a: "That's up to you. Most businesses run 3Layers as their entire support operation — the bot plus our specialists handle it end to end. If you already have a team, they are only pulled in for the rare case that needs your systems or a decision only you can make.",
  },
  {
    q: "How does the AI learn about my business?",
    a: "Only from what you approve: your website content, help-center articles, product information, procedures and internal documentation. If it is not in an approved source, the AI does not say it.",
  },
  {
    q: "What happens when the AI does not know the answer?",
    a: "It goes to one of our own human specialists — based on confidence, topic, urgency and your business rules — with a summary, the customer context, the relevant policy and a recommended response already prepared. Only the rare case that needs your systems or a decision only you can make is escalated further, live, to your own team.",
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
