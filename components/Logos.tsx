import {
  AnthropicLogo,
  OpenAILogo,
  AWSLogo,
  ZendeskLogo,
} from "@/components/BrandLogos";
import { PlatformIcon, type Platform } from "@/components/PlatformIcon";

/**
 * Two honest statements: the models it runs on, and the channels it plugs
 * into. Heights are set per wordmark so they carry the same optical weight
 * rather than the same pixel height.
 */

const channels: { label: string; platform: Platform }[] = [
  { label: "Web", platform: "web" },
  { label: "iOS", platform: "ios" },
  { label: "Android", platform: "android" },
  { label: "WhatsApp", platform: "whatsapp" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
      {children}
    </p>
  );
}

const hover = "transition-colors duration-200 hover:text-white";

export function Logos() {
  return (
    <div className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1120px] items-start gap-10 px-6 py-12 md:grid-cols-2 md:gap-0 md:px-8">
        <div className="md:pr-12">
          <Label>Runs on your models</Label>
          <div className="mt-6 flex flex-wrap items-center gap-x-9 gap-y-5 text-white/55">
            <AWSLogo className={`h-[22px] w-auto ${hover}`} />
            <AnthropicLogo className={`h-[12px] w-auto ${hover}`} />
            <OpenAILogo className={`h-[18px] w-auto ${hover}`} />
            <span
              className={`text-[15px] font-medium tracking-[-0.01em] ${hover}`}
            >
              Amazon Bedrock
            </span>
          </div>
        </div>

        <div className="md:border-l md:border-line md:pl-12">
          <Label>Plugs into your desk</Label>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-5 text-white/55">
            <ZendeskLogo className={`h-[19px] w-auto ${hover}`} />
            {channels.map((channel) => (
              <span
                key={channel.label}
                className={`flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] ${hover}`}
              >
                <PlatformIcon platform={channel.platform} size={16} />
                {channel.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
