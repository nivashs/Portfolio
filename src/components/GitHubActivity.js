import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

const PROFILE_URL = "https://github.com/nivashs";

const getDocumentColorScheme = () =>
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

const GitHubActivity = () => {
  const [colorScheme, setColorScheme] = useState(getDocumentColorScheme);

  useEffect(() => {
    const root = document.documentElement;
    const updateColorScheme = () => setColorScheme(getDocumentColorScheme());
    const observer = new MutationObserver(updateColorScheme);

    updateColorScheme();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="my-64 scroll-mt-16">
      <div className="mb-16 flex items-end justify-between gap-6 md:mb-10 sm:flex-col sm:items-start">
        <h2 className="font-bold text-5xl dark:text-light/75 md:text-4xl sm:text-3xl xs:text-2xl">
          GitHub Activity
        </h2>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Nivash's GitHub profile"
          className="text-2xl font-semibold text-primary underline decoration-2 underline-offset-8 transition-opacity hover:opacity-70 dark:text-primaryDark md:text-xl sm:text-lg"
        >
          @nivashs
        </a>
      </div>

      <div className="rounded-3xl border border-solid border-dark bg-light p-8 shadow-xl dark:border-light dark:bg-dark md:p-6 sm:rounded-2xl sm:p-4">
        <GitHubCalendar
          username="nivashs"
          year="last"
          colorScheme={colorScheme}
          blockSize={13}
          blockMargin={4}
          blockRadius={3}
          fontSize={14}
          showWeekdayLabels
          labels={{
            totalCount: "{{count}} contributions in the last year",
            legend: { less: "Less", more: "More" },
          }}
          theme={{
            light: ["#e5e7eb", "#B63E96"],
            dark: ["#252525", "#58E6D9"],
          }}
          tooltips={{
            activity: {
              text: ({ count, date }) =>
                `${count} contribution${count === 1 ? "" : "s"} on ${date}`,
              withArrow: true,
            },
          }}
          errorMessage="GitHub activity is temporarily unavailable. Use the @nivashs link above to view the profile."
        />
      </div>
    </section>
  );
};

export default GitHubActivity;
