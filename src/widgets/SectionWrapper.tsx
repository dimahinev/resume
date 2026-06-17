export function SectionWrapper({
  id,
  title,
  fullWidth,
  children,
}: {
  id: string;
  title: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section data-cv-block={id}>
      <div
        className={`relative flex flex-col gap-4 py-8 ${
          fullWidth
            ? "md:flex-col md:gap-8"
            : "md:flex-row md:gap-8"
        } print:flex-col print:gap-2 print:py-2`}
      >
        <div
          className={`top-4 flex h-fit ${
            fullWidth ? "basis-full" : "basis-1/4 lg:basis-1/3"
          } flex-col ${!fullWidth ? "md:sticky" : ""} print:basis-full`}
        >
          <h2 className="font-mono text-xl font-bold text-sky-700 uppercase dark:text-sky-400 print:mt-2">
            <span className="bg-stroke bg-[length:100%_100%] bg-no-repeat">
              {title}
            </span>
          </h2>
        </div>
        <div
          className={`flex ${
            fullWidth ? "basis-full" : "basis-3/4 lg:basis-2/3"
          } flex-col gap-4 print:basis-full print:gap-2`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
