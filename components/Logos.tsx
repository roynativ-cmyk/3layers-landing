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
      <div className="mx-auto grid w-full max-w-[1120px] items-start gap-8 px-6 py-10 md:grid-cols-2 md:gap-0 md:px-8 md:py-12">
        <div className="md:pr-12">
          <Label>Runs on your models</Label>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4 text-white/55 sm:mt-6 sm:gap-x-9 sm:gap-y-5">
            <AWSLogo className={`h-[17px] w-auto sm:h-[22px] ${hover}`} />
            <AnthropicLogo className={`h-[10px] w-auto sm:h-[12px] ${hover}`} />
            <OpenAILogo className={`h-[14px] w-auto sm:h-[18px] ${hover}`} />
            <span
              className={`text-[13px] font-medium tracking-[-0.01em] sm:text-[15px] ${hover}`}
            >
              Amazon Bedrock
            </span>
          </div>
        </div>

        <div className="md:border-l md:border-line md:pl-12">
          <Label>Plugs into your desk</Label>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4 text-white/55 sm:mt-6 sm:gap-x-8 sm:gap-y-5">
            <ZendeskLogo className={`h-[15px] w-auto sm:h-[19px] ${hover}`} />
            {channels.map((channel) => (
              <span
                key={channel.label}
                className={`flex items-center gap-2 text-[13px] font-medium tracking-[-0.01em] sm:text-[15px] ${hover}`}
              >
                <PlatformIcon platform={channel.platform} size={14} />
                {channel.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
