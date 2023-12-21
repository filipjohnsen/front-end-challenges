import Link from "next/link";

const Card = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      className="rounded-lg border-[0.5px] border-gray-400 p-4 transition-shadow hover:shadow-md"
      href={href}
    >
      <p className="text-xl font-semibold">{title}</p>
    </Link>
  );
};

export default async function Home() {
  return (
    <main className="mx-auto mt-24 grid max-w-[1280px] grid-cols-3 gap-8">
      <Card href="/challenges/blog-preview-card" title="Blog preview card" />
      <Card href="/challenges/newsletter" title="Newsletter" />
    </main>
  );
}
