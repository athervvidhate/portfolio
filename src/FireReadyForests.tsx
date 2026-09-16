import { useEffect } from "react"

type Page = "overview" | "process" | "results"

const pages: { id: Page; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
]

const assets = "/fire-ready-forests"

function Figure({ src, alt, caption, compact = false }: { src: string; alt: string; caption: string; compact?: boolean }) {
  return (
    <figure>
      <div className="border border-[#cbd5cd] bg-white p-2 sm:p-4">
        <img src={`${assets}/${src}`} alt={alt} className={`mx-auto w-full object-contain ${compact ? "max-h-[28rem]" : ""}`} />
      </div>
      <figcaption className="mt-3 max-w-2xl text-xs leading-5 text-[#65766a]">{caption}</figcaption>
    </figure>
  )
}

function CodeSample({ children }: { children: string }) {
  return (
    <pre className="fr-code overflow-x-auto border-l-2 border-[#6c8f72] bg-[#10271c] px-5 py-5 text-[12px] leading-6 text-[#dbe6dc]">
      <code>{children}</code>
    </pre>
  )
}

function ProcessStep({ number, title, summary, children }: { number: string; title: string; summary: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-7 border-t border-[#cfd8d0] py-14 md:grid-cols-[11rem_1fr] md:gap-14 md:py-20">
      <div>
        <p className="text-xs tabular-nums text-[#718277]">Sprint {number}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#16382a]">{title}</h2>
      </div>
      <div>
        <p className="max-w-2xl text-base leading-7 text-[#465a4d]">{summary}</p>
        <div className="mt-9 space-y-9">{children}</div>
      </div>
    </section>
  )
}

function ProjectHeader({ page, href, portfolioHref }: { page: Page; href: (page: Page) => string; portfolioHref: string }) {
  return (
    <header className="border-b border-[#cfd8d0] bg-[#f3f5f0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-6">
          <a href={href("overview")} className="font-semibold tracking-[-0.02em] text-[#16382a] hover:text-[#476753]">
            Fire-Ready Forests
          </a>
          <a href={portfolioHref} className="text-xs text-[#66776b] underline decoration-[#aab8ae] underline-offset-4 hover:text-[#16382a] md:hidden">
            atherv.com
          </a>
        </div>
        <div className="flex items-center justify-between gap-7">
          <nav aria-label="Fire-Ready Forests pages">
            <ul className="flex gap-5 text-sm">
              {pages.map((item) => (
                <li key={item.id}>
                  <a
                    href={href(item.id)}
                    aria-current={page === item.id ? "page" : undefined}
                    className={`border-b pb-1 transition-colors ${
                      page === item.id
                        ? "border-[#16382a] text-[#16382a]"
                        : "border-transparent text-[#718277] hover:text-[#16382a]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={portfolioHref} className="hidden text-xs text-[#66776b] underline decoration-[#aab8ae] underline-offset-4 hover:text-[#16382a] md:block">
            atherv.com
          </a>
        </div>
      </div>
      <div className="fr-canopy-scale h-1" aria-hidden="true" />
    </header>
  )
}

function Overview({ href }: { href: (page: Page) => string }) {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 md:grid-cols-[1fr_17rem] md:gap-20">
        <div>
          <p className="mb-5 text-sm text-[#5f7165]">2025 Fire-Ready Forests Data Challenge</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#16382a] sm:text-7xl md:text-8xl">
            From laser scans to simulation-ready trees
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#405448]">
            Wildfire models need more than a point cloud. They need the height, diameter, crown, and species of individual trees. We built a four-sprint pipeline to recover those attributes from field inventories and airborne and terrestrial LiDAR.
          </p>
        </div>

        <dl className="grid content-start gap-6 border-l border-[#cbd5cd] pl-5 text-sm">
          <div>
            <dt className="text-[#7a8a7f]">Team</dt>
            <dd className="mt-1 leading-6 text-[#263f30]">Atherv Vidhate<br />Pranav Rajaram</dd>
          </div>
          <div>
            <dt className="text-[#7a8a7f]">Study sites</dt>
            <dd className="mt-1 leading-6 text-[#263f30]">Independence Lake<br />Shaver Lake</dd>
          </div>
          <div>
            <dt className="text-[#7a8a7f]">Inputs</dt>
            <dd className="mt-1 leading-6 text-[#263f30]">FIA, field inventory, ALS, TLS, FastFuels</dd>
          </div>
          <div>
            <dt className="text-[#7a8a7f]">Output</dt>
            <dd className="mt-1 leading-6 text-[#263f30]">Labeled treelists for fire simulation</dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <Figure
          src="canopy-height-model.png"
          alt="Canopy height model of the Shaver Lake study area, colored from low purple vegetation to tall yellow vegetation"
          caption="A one-meter canopy height model made from airborne laser scanning at Shaver Lake. The color scale runs from exposed ground and low vegetation to trees just above 60 meters."
        />
        <div className="mt-4 flex items-center gap-3 text-[11px] text-[#6b7b70]">
          <span>0 m</span>
          <span className="fr-canopy-scale h-2 w-40" aria-hidden="true" />
          <span>60+ m</span>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#16382a]">The question</h2>
          <div className="space-y-5 text-base leading-7 text-[#465a4d]">
            <p>
              LiDAR can describe a forest in three dimensions, but a scan does not automatically tell us which points belong to a tree, what species that tree is, or where its crown begins. Field crews can answer those questions, but they cannot label every tree across a large site.
            </p>
            <p>
              Our job was to connect the two. We tested where broad FIA records agreed with local field measurements, converted airborne scans into individual treetops, and used labeled trees to estimate the attributes missing from sensor-only records.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d1d9d2] bg-[#e9eee8]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="max-w-3xl text-2xl font-medium leading-9 tracking-[-0.02em] text-[#203e2d]">
            The useful result was not one headline score. It was a chain of compatible outputs: a canopy raster, detected treetops, predicted structure, and labels organized by plot.
          </p>
          <ol className="mt-12 grid gap-px border border-[#bdc9c0] bg-[#bdc9c0] md:grid-cols-4">
            {[
              ["1", "Measure", "Compare FIA and field inventories"],
              ["2", "Detect", "Rasterize ALS and find treetops"],
              ["3", "Estimate", "Predict diameter, crown, and species"],
              ["4", "Label", "Summarize forest makeup by plot"],
            ].map(([number, title, description]) => (
              <li key={number} className="bg-[#f3f5f0] p-6">
                <span className="text-xs tabular-nums text-[#829087]">{number}</span>
                <h3 className="mt-8 text-lg font-semibold text-[#16382a]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6e61]">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2 md:gap-20">
        <a href={href("process")} className="group border-t border-[#9cad9f] pt-6">
          <p className="text-xs text-[#75867a]">Read the notebooks as a pipeline</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#16382a] group-hover:text-[#476753]">Process</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#526559]">The four sprints, the data joins, two model excerpts, and the sampling problem we found along the way.</p>
        </a>
        <a href={href("results")} className="group border-t border-[#9cad9f] pt-6">
          <p className="text-xs text-[#75867a]">See what worked and what did not</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#16382a] group-hover:text-[#476753]">Results</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#526559]">Validation plots, classification reports, and a direct account of where sparse labels made the metrics misleading.</p>
        </a>
      </section>
    </>
  )
}

function ProcessPage({ href }: { href: (page: Page) => string }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <section className="max-w-4xl pb-16 sm:pb-24">
        <p className="mb-4 text-sm text-[#5f7165]">Process</p>
        <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#16382a] sm:text-7xl">Four sprints, one treelist</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#465a4d]">
          Each sprint solved the dependency needed by the next one. We started with measurement agreement, then built forest structure, filled missing attributes, and finally assigned ecological labels.
        </p>
      </section>

      <ProcessStep
        number="1"
        title="Understand the measurements"
        summary="We compared FIA inventory records with field measurements at Independence Lake and Shaver Lake. The two sources had similar central diameter estimates, but FIA covered a much wider range and included extreme values the local field set did not."
      >
        <Figure
          src="field-vs-fia.png"
          alt="Two scatter plots comparing tree height and diameter from FIA and field data at Independence Lake"
          caption="The fitted slopes were close, but the FIA dataset covered many more trees and a wider size range."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ["0.30", "FIA diameter gain per foot of height"],
            ["0.27", "Field diameter gain per foot of height"],
            ["4.39 in", "Field RMSE from the FIA height-only model"],
          ].map(([value, label]) => (
            <div key={label} className="border-t border-[#aebbb1] pt-4">
              <p className="text-2xl font-semibold tabular-nums text-[#16382a]">{value}</p>
              <p className="mt-2 text-xs leading-5 text-[#65766a]">{label}</p>
            </div>
          ))}
        </div>
      </ProcessStep>

      <ProcessStep
        number="2A"
        title="Build the canopy model"
        summary="The airborne scan arrived as a LAZ point cloud. We filtered it to vegetation, removed outliers, calculated height above ground, and rasterized the maximum height in each one-meter cell. Local maxima in that raster became candidate treetops."
      >
        <CodeSample>{`geobox = pcr.build_geobox(als, resolution=1., crs="5070")

chm = pcr.rasterize(
    als,
    geobox,
    cell_func="max",
    chunksize=(1000, 1000),
    pdal_filters=[
        {"type": "filters.range", "limits": "Classification[1:5]"},
        {"type": "filters.hag_nn"},
        {"type": "filters.expression", "expression": "Z < 75"},
    ],
)`}</CodeSample>
        <Figure
          src="canopy-height-model.png"
          alt="Canopy height model showing clustered vegetation at Shaver Lake"
          caption="The raster contains 1,203 by 1,189 one-meter cells. A 100-meter buffer protected the edge of the study area during processing."
          compact
        />
      </ProcessStep>

      <ProcessStep
        number="2B"
        title="Check the sample against the forest"
        summary="FastFuels generated a population treelist for the Shaver Lake polygon and a smaller sample for comparison. The sample missed many small trees. That matters because a fire model built from the sample alone would represent a taller and thicker forest than the population estimate."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="sample-height.png"
            alt="Histogram of sampled tree heights"
            caption="The sample concentrates around mid-sized trees and has a long upper tail."
          />
          <Figure
            src="population-height.png"
            alt="Histogram of population tree heights"
            caption="The population estimate contains far more short trees than the sample captured."
          />
        </div>
        <p className="border-l-2 border-[#9d7952] pl-5 text-sm leading-6 text-[#526559]">
          This was a data problem, not a tuning problem. A model cannot recover a missing part of the size distribution if its training sample barely contains it.
        </p>
      </ProcessStep>

      <ProcessStep
        number="3"
        title="Predict missing tree structure"
        summary="The ALS treelist had location and height but lacked diameter, crown base height, and species. We trained random forests on the larger FastFuels treelist, then applied those models to the ALS-detected trees."
      >
        <CodeSample>{`features = ["HT"]

diameter_model = RandomForestRegressor()
diameter_model.fit(train[features], train["DIA"])

species_model = RandomForestClassifier()
species_model.fit(train[features], train["SPCD"])

crown_model = RandomForestRegressor()
crown_model.fit(train[features], train["CBH"])`}</CodeSample>
        <div className="grid gap-6 md:grid-cols-2">
          <Figure
            src="tls-vs-field.png"
            alt="Scatter plot comparing TLS and field diameter measurements at Shaver Lake"
            caption="TLS often measured a larger diameter than field crews for taller Shaver Lake trees."
          />
          <Figure
            src="diameter-validation.png"
            alt="Actual versus predicted tree diameter validation plot"
            caption="The diameter model tracked the validation line closely for common sizes, with larger misses among the biggest trees."
          />
        </div>
      </ProcessStep>

      <ProcessStep
        number="4"
        title="Attach ecological labels"
        summary="We joined field labels to TLS trees by inventory and tree ID. Five structural measurements then fed separate classifiers for plant functional type, genus, and species. The final tables report the predicted mix within each of 112 plot blocks."
      >
        <CodeSample>{`features = ["DBH", "Radius", "H", "BasalA", "crown_volume"]

tls_full = tls_treelist.merge(plot_inventory, on="plot_blk")
tls_full = tls_full.merge(
    field_labels,
    left_on=["inventory_id", "TreeID"],
    right_on=["inventory_id", "tree_id"],
)

pft_model = RandomForestClassifier(
    n_estimators=150,
    class_weight="balanced",
    random_state=12,
)`}</CodeSample>
        <div className="grid gap-px border border-[#bdc9c0] bg-[#bdc9c0] sm:grid-cols-3">
          {[
            ["1,382", "TLS rows before the field join"],
            ["275", "TLS rows with matching field labels"],
            ["112", "plot blocks in the final distribution tables"],
          ].map(([value, label]) => (
            <div key={label} className="bg-[#f3f5f0] p-6">
              <p className="text-3xl font-semibold tabular-nums text-[#16382a]">{value}</p>
              <p className="mt-2 text-xs leading-5 text-[#65766a]">{label}</p>
            </div>
          ))}
        </div>
      </ProcessStep>

      <div className="border-t border-[#9cad9f] pt-8">
        <a href={href("results")} className="text-lg font-semibold text-[#16382a] underline decoration-[#9cad9f] underline-offset-4 hover:text-[#476753]">
          Continue to the results
        </a>
      </div>
    </div>
  )
}

function ResultsPage({ href }: { href: (page: Page) => string }) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <p className="mb-4 text-sm text-[#5f7165]">Results</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#16382a] sm:text-7xl">Structure worked better than identity</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#465a4d]">
          Height carried enough information to estimate diameter and crown base height. It was much less reliable for species. The final ecological classifiers had a second problem: only a small, imbalanced slice of the TLS data had field labels.
        </p>
      </section>

      <section className="border-y border-[#d1d9d2] bg-[#e9eee8]">
        <div className="mx-auto max-w-6xl overflow-x-auto px-5 py-12 sm:px-8 sm:py-16">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#aebbb1] text-xs text-[#68796d]">
                <th className="pb-4 pr-6 font-medium">Task</th>
                <th className="pb-4 pr-6 font-medium">Training source</th>
                <th className="pb-4 pr-6 font-medium">Holdout result</th>
                <th className="pb-4 font-medium">Read on it</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[#344c3d]">
              {[
                ["Diameter", "FastFuels, height only", "R² 0.92, RMSE 8.17 cm", "Strong on common sizes"],
                ["Crown base height", "FastFuels, height only", "R² 0.85, RMSE 3.27 m", "Useful, with wide outliers"],
                ["Species code", "FastFuels, height only", "Accuracy 0.65, weighted F1 0.63", "Dominant species carried the score"],
                ["Genus", "275 matched TLS rows", "Accuracy 0.44, weighted F1 0.41", "Too little support for rare genera"],
                ["Species", "Filtered matched TLS rows", "Accuracy 0.47, weighted F1 0.44", "Rare species often had zero recall"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-[#c8d1c9] last:border-0">
                  {row.map((cell, index) => <td key={cell} className={`py-5 pr-6 ${index === 0 ? "font-semibold text-[#16382a]" : ""}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-16">
          <div>
            <p className="text-xs text-[#718277]">Tree structure</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#16382a]">The regressors held up</h2>
          </div>
          <div className="space-y-8">
            <p className="max-w-2xl text-base leading-7 text-[#465a4d]">
              Diameter predictions followed the validation line through most of the range. Crown base height was noisier, but the model still explained 85% of holdout variance. Both models weakened on the largest trees, which were scarce in the training data.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Figure
                src="diameter-validation.png"
                alt="Actual versus predicted tree diameter"
                caption="Diameter model validation. The red line marks a perfect prediction."
              />
              <Figure
                src="crown-base-validation.png"
                alt="Actual versus predicted crown base height"
                caption="Crown base height validation. Error grows as the measured crown base rises."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d1d9d2] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[15rem_1fr] md:gap-16">
          <div>
            <p className="text-xs text-[#718277]">Tree identity</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#16382a]">Species was the hard part</h2>
          </div>
          <div className="space-y-8">
            <p className="max-w-2xl text-base leading-7 text-[#465a4d]">
              A height-only classifier separated the common classes reasonably well, but it confused related conifers and failed on classes with only a handful of examples. White fir was often labeled Douglas-fir, grand fir, or California black oak. Jeffrey pine was usually missed despite high precision on the few trees it did label.
            </p>
            <Figure
              src="species-confusion.png"
              alt="Confusion matrix for the height-only species classifier"
              caption="Most correct predictions sit in a few common classes. Empty rows and columns show how little the model learned about rare species."
              compact
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-16">
          <div>
            <p className="text-xs text-[#718277]">Final labeling</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#16382a]">The headline score hid the failure</h2>
          </div>
          <div className="space-y-8">
            <p className="max-w-2xl text-base leading-7 text-[#465a4d]">
              The plant functional type model posted 98% holdout accuracy and a 0.97 weighted F1 score. It still recalled zero deciduous trees in the holdout set. There was only one deciduous example among 55 test rows, so predicting every row as evergreen almost solved the metric without solving the task.
            </p>
            <div className="border-l-2 border-[#9d7952] bg-[#f1ede6] px-5 py-4 text-sm leading-6 text-[#554737]">
              The checked-in model output labels 845 inference rows as evergreen and 5 as deciduous. The notebook prose below that output says 12 deciduous predictions. This site reports the saved output because it is the reproducible artifact.
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Figure src="pft-counts.png" alt="Plant functional type counts in the labeled TLS rows" caption="The matched labels are almost entirely evergreen conifers." />
              <Figure src="genus-counts.png" alt="Genus counts in the labeled TLS rows" caption="Pinus and Calocedrus dominate the matched data." />
              <Figure src="species-counts.png" alt="Species counts in the labeled TLS rows" caption="Two species account for most labeled TLS trees." />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d1d9d2] bg-[#16382a] text-[#edf3ed]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">What I would change next</h2>
          </div>
          <ul className="space-y-4 text-sm leading-6 text-[#cbd9ce]">
            <li className="border-t border-[#456552] pt-4">Split data by site or plot, not random rows, to test whether the models travel to a new forest.</li>
            <li className="border-t border-[#456552] pt-4">Collect more deciduous and rare-species labels before tuning another classifier.</li>
            <li className="border-t border-[#456552] pt-4">Add spectral and neighborhood features. Height alone cannot separate visually similar conifers.</li>
            <li className="border-t border-[#456552] pt-4">Audit the unmatched-row filter and reconcile the 5 versus 12 deciduous prediction mismatch.</li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <a href={href("process")} className="text-sm text-[#365843] underline decoration-[#9cad9f] underline-offset-4 hover:text-[#16382a]">Back to the process</a>
      </div>
    </>
  )
}

export default function FireReadyForests() {
  const onSubdomain = window.location.hostname.startsWith("fireready.")
  const base = onSubdomain ? "" : "/fire-ready-forests"
  const relativePath = onSubdomain ? window.location.pathname : window.location.pathname.slice(base.length)
  const page: Page = relativePath.startsWith("/process")
    ? "process"
    : relativePath.startsWith("/results")
      ? "results"
      : "overview"

  const href = (target: Page) => target === "overview" ? base || "/" : `${base}/${target}`
  const portfolioHref = onSubdomain ? "https://atherv.com" : "/"

  useEffect(() => {
    document.title = `${pages.find((item) => item.id === page)?.label} | Fire-Ready Forests`
  }, [page])

  return (
    <div className="min-h-screen bg-[#f3f5f0] text-[#263f30] selection:bg-[#16382a] selection:text-white">
      <ProjectHeader page={page} href={href} portfolioHref={portfolioHref} />
      <main>
        {page === "overview" && <Overview href={href} />}
        {page === "process" && <ProcessPage href={href} />}
        {page === "results" && <ResultsPage href={href} />}
      </main>
      <footer className="border-t border-[#cfd8d0]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-[#68796d] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Built by Atherv Vidhate and Pranav Rajaram for the 2025 Fire-Ready Forests Data Challenge.</p>
          <a
            href="https://github.com/pranavrajaram/fire-ready-forests-site"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[#aab8ae] underline-offset-4 hover:text-[#16382a]"
          >
            Source notebooks on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
