import { Figtree } from "next/font/google";
import "./style.css";
import cardHeader from "./images/illustration-article.svg";
import avatar from "./images/image-avatar.webp";
import Image from "next/image";
import Link from "next/link";

const figtree = Figtree({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const title = "Blog preview card";

export default function BlogPreviewCard() {
  return (
    <div className={figtree.className}>
      <div className="grid h-screen w-screen place-items-center bg-[var(--yellow)] px-6">
        <Link
          href="#"
          className="group w-full max-w-[425px] rounded-3xl border border-black bg-white p-6 shadow-[var(--black)_10px_10px] outline-none transition-shadow hover:shadow-[var(--black)_20px_20px] focus:shadow-[var(--black)_20px_20px]"
        >
          <Image
            className="w-full rounded-lg"
            src={cardHeader}
            alt="Card header illustration"
          />
          <div className="mt-6 space-y-4">
            <div className="space-y-3">
              <div className="w-fit rounded-lg bg-[var(--yellow)] px-4 py-2 font-extrabold text-[var(--black)]">
                <p>Learning</p>
              </div>
              <div>
                <p className="text-[14px] text-[var(--black)]">
                  Published at 21 Dec 2023
                </p>
              </div>
            </div>
            <h2 className="text-[24px] font-extrabold text-[var(--black)] transition-colors group-hover:text-[var(--yellow)] group-focus:text-[var(--yellow)]">
              HTML & CSS foundations
            </h2>
            <div className="space-y-5">
              <p className="text-[var(--gray)]">
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </p>
              <div className="flex items-center gap-2">
                <div>
                  <Image className="h-10 w-10" src={avatar} alt="User icon" />
                </div>
                <p className="font-extrabold text-[var(--black)]">
                  Greg Hopper
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
