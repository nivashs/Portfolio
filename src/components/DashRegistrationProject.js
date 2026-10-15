import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";
import dashPoster from "../../public/images/projects/dash-registration-detailed.jpg";

const registrationUrl = "https://dash.mindstretcher.com/registration/";

const DashRegistrationProject = () => (
  <article
    aria-labelledby="dash-project-title"
    className="overflow-hidden rounded-3xl border border-dark/20 bg-light text-dark shadow-xl dark:border-light/25 dark:bg-dark dark:text-light"
  >
    <div className="p-10 lg:p-8 sm:p-5">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
        <span className="text-primary dark:text-primaryDark">01 / Featured work</span>
        <span className="text-dark/60 dark:text-light/60">Mind Stretcher · Education technology</span>
      </div>

      <div className="grid grid-cols-[1.1fr_1fr] items-start gap-9 lg:grid-cols-1 lg:gap-7">
        <div>
          <ProjectPreview
            title="Dash AI registration assistant"
            image={dashPoster}
            videoSrc="/videos/dash-registration-highlights.mp4?v=2"
            link={registrationUrl}
            linkLabel="Open Mind Stretcher public registration in a new tab"
            previewLabel="12s"
            className="border border-dark/10 dark:border-light/20"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
          <p className="mt-3 text-xs leading-relaxed text-dark/65 dark:text-light/65">
            Hover to preview the workflow. Select the preview to open public registration.
          </p>
        </div>

        <div>
          <h2 id="dash-project-title" className="text-5xl font-bold tracking-tight xl:text-4xl sm:text-3xl">
            Dash
          </h2>
          <p className="mt-2 text-xl font-semibold leading-snug sm:text-lg">
            AI-Powered Registration Agent
          </p>
          <p className="mt-4 text-sm leading-7">
            Built a context-aware registration chatbot using Python, Django,
            PostgreSQL and the OpenAI API. Implemented LLM tool calling for class
            discovery, fee retrieval and form validation, with persistent
            conversation state and SSE response streaming. Designed signed action
            proposals and human-in-the-loop confirmation to connect AI-generated
            recommendations to controlled application updates.
          </p>
          <p className="mt-3 text-sm leading-7">
            Dash also includes an internal staff assistant using LangGraph for
            workflow orchestration and LangChain tools to connect specialist
            workflows to application data.
          </p>
          <ul aria-label="Technologies used across Dash AI workflows" className="mt-5 flex list-none flex-wrap gap-2">
            {["Python", "Django", "PostgreSQL", "OpenAI API", "LangChain", "LangGraph", "Tool calling", "SSE streaming"].map((tech) => (
              <li key={tech} className="rounded-full border border-dark/20 px-3 py-1 text-xs font-medium dark:border-light/25">{tech}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href={registrationUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-dark px-5 py-3 text-sm font-semibold text-light transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-light dark:text-dark">
              Open registration ↗
            </Link>
            <Link href="/videos/dash-registration-detailed-demo.mp4" target="_blank" rel="noreferrer" className="rounded-xl border border-dark/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-dark/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-light/40 dark:hover:bg-light/10">
              Watch detailed demo · 6:28
            </Link>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default DashRegistrationProject;
