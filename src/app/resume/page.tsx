import type { Metadata } from "next";
import Link from "next/link";

const resumePath = "/Kyaw-Zin-Lin-Resume.pdf";

export const metadata: Metadata = {
  title: "Resume | Kyaw Zin Lin",
  description: "Review and download Kyaw Zin Lin's resume.",
};

export default function ResumePage() {
  return (
    <main className="resume-viewer flex min-h-screen flex-col bg-[#ededed] text-neutral-950">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-white px-4 py-3 shadow-sm sm:px-6">
        <div>
          <p className="text-sm font-semibold">Kyaw Zin Lin</p>
          <p className="text-xs text-neutral-500">Full-Stack Developer Resume</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold transition hover:bg-neutral-50"
          >
            Back to portfolio
          </Link>
          <a
            href={resumePath}
            download="Kyaw-Zin-Lin-Resume.pdf"
            className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Download PDF
          </a>
        </div>
      </header>

      <iframe
        src={`${resumePath}#view=FitH`}
        title="Kyaw Zin Lin resume preview"
        className="min-h-[720px] w-full flex-1 border-0 bg-[#ededed]"
      />
    </main>
  );
}
