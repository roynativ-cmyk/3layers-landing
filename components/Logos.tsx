import {
  AnthropicLogo,
  OpenAILogo,
  AWSLogo,
  ZendeskLogo,
} from "@/components/BrandLogos";
import { PlatformIcon } from "@/components/PlatformIcon";

/**
 * Two honest statements in one strip: the models it runs on, and the desks it
 * plugs into. Monochrome so it reads as infrastructure, not as endorsement.
 */
export function Logos() {
  return (
    <div className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 py-12 md:grid-cols-[auto_1px_auto] md:items-center md:gap-14 md:px-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            Runs on your models
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-6 text-white/55">
            <AWSLogo className="h-[26px] w-auto transition-colors duration-200 hover:text-white" />
            <span className="text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-white">
              Amazon Bedrock
            </span>
            <AnthropicLogo className="h-[14px] w-auto transition-colors duration-200 hover:text-white" />
            <OpenAILogo className="h-[17px] w-auto transition-colors duration-200 hover:text-white" />
          </div>
        </div>

        <div aria-hidden className="hidden h-16 w-px bg-line md:block" />

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            Plugs into your desk
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-6 text-white/55">
            <ZendeskLogo className="h-[24px] w-auto transition-colors duration-200 hover:text-white" />
            <span className="flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-white">
              <PlatformIcon platform="web" size={16} />
              Web &amp; in-app
            </span>
            <span className="flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-white">
              <PlatformIcon platform="ios" size={16} />
              <PlatformIcon platform="android" size={16} />
              iOS &amp; Android
            </span>
            <span className="flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-white">
              <PlatformIcon platform="whatsapp" size={16} />
              WhatsApp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
