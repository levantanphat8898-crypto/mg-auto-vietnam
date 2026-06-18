import { commitments } from '../data/cars'

export default function Commitments() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
          Cam kết khách hàng
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {commitments.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center rounded-2xl border border-mg-border bg-mg-card p-6 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mg-red/15 text-mg-red">
                <CheckIcon />
              </div>
              <p className="text-sm font-medium text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
