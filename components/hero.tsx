import Image from "next/image";
import { Heading, Paragraph, SubHeading } from "./ui/typography";
import { Button } from "./ui/Button";
import { List } from "./ui/List";

const listItems = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export default function Hero() {
  return (
    <section className="w-full ">
      <div className="mx-auto max-w-screen-lg h-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 items-center flex flex-col justify-center z-10 relative lg:min-w-[516px]">
            <div>
              <Heading>
                Want to Turn Social Media Into a Profitable Career?
              </Heading>

              <SubHeading>
                Discover your way to success with Fametonic:
              </SubHeading>

              <List items={listItems} />

              <div className="flex flex-col items-center lg:items-start space-y-2 text-white">
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

                <Paragraph>1-minute quiz for personalized Insights</Paragraph>
              </div>
              <Paragraph className="text-[var(--gray)] mt-5">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </Paragraph>
              <Paragraph className="text-[10px] text-[var(--gray)] mt-5">
                Fametonic 2025 ©All Rights Reserved.
              </Paragraph>
            </div>
          </div>

          <div className="relative  mb-8 lg:mb-0 lg:-ml-20 lg:-mr-20 z-0">
            <Image
              src="/hero.png"
              alt="Fametonic Success Story"
              width={500}
              height={679}
              className="w-auto h-[679px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
