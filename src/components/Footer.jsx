export default function Footer() {
  return (
    <footer className="border-t border-mg-border bg-mg-card/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-white">
              MG<span className="text-mg-red">AUTO</span> VIỆT NAM
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Đại lý ủy quyền chính hãng MG tại khu vực TP. Hồ Chí Minh — Bình Dương.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Liên hệ
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>24 KP Bình Hoà, P. Lái Thiêu, TP. HCM</li>
              <li>
                <a href="tel:0394441713" className="transition-colors hover:text-mg-red">
                  0394 441 713
                </a>
              </li>
              <li>
                <a
                  href="mailto:tlpanmgbd@gmail.com"
                  className="transition-colors hover:text-mg-red"
                >
                  tlpanmgbd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Kết nối
            </h4>
            <p className="mt-4 text-sm text-white/50">MG Thuận An</p>
          </div>
        </div>

        <div className="mt-10 border-t border-mg-border pt-6 text-center text-xs text-white/35">
          © 2026 MG Auto Việt Nam. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
