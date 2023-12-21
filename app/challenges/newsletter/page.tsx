import { Roboto } from "next/font/google";
import "./style.css";
import desktopIllustration from "./images/illustration-sign-up-desktop.svg";
import mobileIllustration from "./images/illustration-sign-up-mobile.svg";
import listIcon from "./images/icon-list.svg";
import Image from "next/image";
import { Form } from "./form";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Newsletter() {
  return (
    <div className={font.className}>
      <div className="min-h-screen w-screen bg-[var(--dark-slate-grey)] md:grid md:place-items-center">
        <div className="mx-auto min-h-screen w-full max-w-[800px] bg-[var(--white)] shadow-2xl md:flex md:min-h-fit md:flex-row-reverse md:items-center md:gap-8 md:rounded-3xl md:py-6 md:pl-10 md:pr-6">
          <div className="md:w-[50%]">
            <Image
              className="hidden md:block"
              src={desktopIllustration}
              alt="Illustration"
              role="presentation"
            />
            <Image
              className="block max-h-[250px] w-full object-cover object-bottom md:hidden"
              src={mobileIllustration}
              alt="Illustration"
              role="presentation"
            />
          </div>
          <div className="mt-8 p-4 md:mt-0 md:w-[50%] md:p-0">
            <div>
              <h2 className="text-5xl font-bold text-[var(--charcoal-grey)]">
                Stay updated!
              </h2>
            </div>
            <div className="mt-6">
              <p className="text-[var(--charcoal-grey)]">
                Join 60,000+ product managers receiving monthly updated on:
              </p>
            </div>
            <div className="mt-6">
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src={listIcon}
                    alt="Check icon"
                    role="presentation"
                  />
                  <span className="text-[var(--charcoal-grey)]">
                    Product discovery and building what matters
                  </span>
                </li>
                <li className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src={listIcon}
                    alt="Check icon"
                    role="presentation"
                  />
                  <span className="text-[var(--charcoal-grey)]">
                    Measuring to ensure updates are a success
                  </span>
                </li>
                <li className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src={listIcon}
                    alt="Check icon"
                    role="presentation"
                  />
                  <span className="text-[var(--charcoal-grey)]">
                    And much more!
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
