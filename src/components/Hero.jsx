const HERO_IMAGE =
  './src/assets/images/hero.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="MG sedan hiện đại trên phố đêm"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mg-dark via-mg-dark/85 to-mg-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-mg-dark via-transparent to-mg-dark/30" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-mg-red" />
          Trải nghiệm công nghệ • Dẫn đầu phong cách
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          SỞ HỮU XE MG
          <br />
          <span className="text-mg-red">NGAY HÔM NAY</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Ưu đãi lên đến 100 triệu đồng — Hỗ trợ trả góp tới 90%, lái thử tận nơi tại TP. Hồ Chí Minh.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#tu-van"
            className="inline-flex items-center justify-center rounded-full bg-mg-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-mg-red-dark hover:shadow-lg hover:shadow-mg-red/25"
          >
            Đăng ký lái thử
          </a>
          <a
            href="#tu-van"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Nhận báo giá ngay
          </a>
        </div>
      </div>
    </section>
  )
}
