import { aboutFeatures } from '../data/cars'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1619767886555-ef9f95ac8973?w=800&q=80'

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-mg-red">
            Về thương hiệu
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            MORRIS GARAGES —
            <br />
            HƠN 100 NĂM DI SẢN
          </h2>
          <p className="mt-6 leading-relaxed text-white/60">
            MG là thương hiệu ô tô Anh Quốc nổi tiếng với di sản hơn một thế kỷ, mang đến những
            mẫu xe hiện đại với thiết kế sang trọng, công nghệ tiên tiến và mức giá cạnh tranh
            hàng đầu phân khúc.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mg-red/15 text-mg-red">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-mg-border">
            <img
              src={ABOUT_IMAGE}
              alt="MG7 Fastback"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-xl border border-mg-border bg-mg-card px-6 py-4 shadow-2xl sm:-left-8">
            <p className="text-sm font-bold text-white">MG — Drive Your Story</p>
            <p className="mt-0.5 text-xs text-white/50">Since 1924 · United Kingdom</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
