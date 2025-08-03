import Image from "next/image";
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { List } from "@/components/ui/List";

const listItems = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export default function Hero() {
  return (
    <section className="w-full px-5 lg:px-0">
      <div className="mx-auto max-w-screen-lg h-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
          <div className="space-y-8 items-center flex flex-col justify-center z-10 relative lg:min-w-[516px]">
            <div>
              <Heading className="text-center lg:text-left px-4 lg:px-0">
                Want to Turn Social Media Into a Profitable Career?
              </Heading>

              <SubHeading className="text-center lg:text-left pb-4 lg:pb-2">
                Discover your way to success with Fametonic:
              </SubHeading>

              <List items={listItems} />

              <div className="flex flex-col-reverse lg:flex-col lg:pt-[20px] space-y-[10px] lg:mb-0 mb-8 text-white ">
                <div className="w-full lg:max-w-[313px] text-center ">
                  <Button>
                    GET STARTED
                    <Image
                      src="/chevron-right.svg"
                      width={11}
                      height={6}
                      alt="icon"
                      className="w-auto h-auto ml-[10px]"
                    />
                  </Button>

                  <Paragraph className="pt-[10px] font-normal">
                    1-minute quiz for personalized Insights
                  </Paragraph>
                </div>
                <div className="text-center lg:text-left">
                  <Paragraph className="text-[var(--gray)] mt-3 lg:px-0 px-8">
                    By clicking "Get Started", you agree with Terms and
                    Conditions, Privacy Policy, Subscription Terms
                  </Paragraph>
                  <Paragraph className="text-[10px] text-[var(--gray)] mt-5 mb-8 lg:mb-0">
                    Fametonic 2025 ©All Rights Reserved.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:-ml-14 lg:-mr-14 lg:-mt-8 z-0 ">
            <Image
              src="/hero.png"
              alt="Fametonic Success Story"
              width={666}
              height={679}
              className="w-full lg:min-w-[666px] lg:h-[700px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
