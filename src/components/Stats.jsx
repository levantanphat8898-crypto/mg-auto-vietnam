const stats = [
  { value: '100+', label: 'Năm lịch sử' },
  { value: '5', label: 'Dòng xe chủ lực' },
  { value: '90%', label: 'Vay ngân hàng' },
]

export default function Stats() {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 rounded-2xl border border-mg-border bg-mg-card/90 p-6 backdrop-blur-xl sm:p-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-extrabold text-mg-red sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium text-white/50 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
