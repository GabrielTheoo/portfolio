import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/content/capabilities";
import { toolkit } from "@/content/profile";

/** "What You Get" — five deliverable blocks plus the capability strip. */
export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-surface px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          heading={capabilities.heading}
          intro={capabilities.intro}
        />

        {/* First item spans both columns so the grid does not read as a
            uniform 2×3 block with a hole in it. */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.items.map((item, i) => (
            <div
              key={item.index}
              className={
                "rounded-2xl bg-surface-container p-8 transition-colors duration-300 hover:bg-surface-high" +
                (i === 0 ? " md:col-span-2" : "")
              }
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-sm leading-none text-primary">
                  {item.index}
                </span>
                <h3 className="font-headline text-2xl leading-none text-on-surface md:text-3xl">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-on-surface-variant">
                {item.body}
              </p>

              <p className="mt-6 text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
                {item.meta}
              </p>
            </div>
          ))}
        </div>

        {/* Capability strip — the flat list, for scanning. */}
        <ul className="mt-10 flex flex-wrap gap-2">
          {toolkit.capabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-light text-on-surface-variant"
            >
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
