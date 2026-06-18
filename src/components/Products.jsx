import { cars } from '../data/cars'

export default function Products() {
  return (
    <section id="san-pham" className="bg-mg-card/40 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-mg-red">Sản phẩm</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Các dòng xe nổi bật
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/55">
            Từ sedan thể thao đến SUV cao cấp và MPV đa dụng — chọn chiếc xe phù hợp với phong
            cách của bạn.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.id}
              className="group overflow-hidden rounded-2xl border border-mg-border bg-mg-card transition-all hover:border-mg-red/40 hover:shadow-xl hover:shadow-mg-red/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`Xe ${car.name}`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mg-card via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{car.name}</h3>
                    <p className="text-sm text-mg-red">{car.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
                    Giá {car.price}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {car.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/55">
                      <span className="mt-0.5 text-mg-red">›</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#tu-van"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-mg-border py-2.5 text-sm font-semibold text-white transition-colors hover:border-mg-red hover:bg-mg-red/10"
                >
                  Tư vấn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
