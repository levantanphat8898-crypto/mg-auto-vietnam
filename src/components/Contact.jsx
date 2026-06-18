import { useState } from 'react'
import { cars } from '../data/cars'

const RECIPIENT_EMAIL = 'tlpanmgbd@gmail.com'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    car: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[MG Thuận An] Tư vấn từ ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          'Họ và tên': form.name,
          'Số điện thoại': form.phone,
          Email: form.email || 'Không có',
          'Dòng xe quan tâm': form.car || 'Chưa chọn',
          'Nội dung yêu cầu': form.message || 'Không có',
        }),
      })

      if (!response.ok) {
        throw new Error('Gửi thất bại')
      }

      setSubmitted(true)
    } catch {
      setError('Không gửi được thông tin. Vui lòng thử lại hoặc gọi 0394 441 713.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="tu-van" className="bg-mg-card/40 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-mg-red">Đăng ký</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Nhận tư vấn &amp; báo giá
            </h2>
            <p className="mt-4 leading-relaxed text-white/55">
              Để lại thông tin, đội ngũ MG Thuận An sẽ liên hệ tư vấn dòng xe phù hợp và lịch lái
              thử miễn phí.
            </p>

            <ul className="mt-10 space-y-5">
              <ContactItem
                icon={<PhoneIcon />}
                label="0394 441 713"
                href="tel:0394441713"
              />
              <ContactItem
                icon={<EmailIcon />}
                label="tlpanmgbd@gmail.com"
                href="mailto:tlpanmgbd@gmail.com"
              />
              <ContactItem
                icon={<LocationIcon />}
                label="24 KP Bình Hoà, P. Lái Thiêu, TP.HCM"
              />
            </ul>
          </div>

          <div className="rounded-2xl border border-mg-border bg-mg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mg-red/15 text-mg-red">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-bold text-white">Đã gửi thông tin!</h3>
                <p className="mt-2 text-sm text-white/55">
                  Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Họ và tên" required>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Số điện thoại" required>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09xx xxx xxx"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Email">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Dòng xe quan tâm">
                  <select
                    name="car"
                    value={form.car}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Chọn dòng xe</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Nội dung yêu cầu">
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tôi muốn tư vấn về..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-mg-red py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-mg-red-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Đang gửi...' : 'Gửi thông tin'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-xl border border-mg-border bg-mg-dark px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-mg-red/50 focus:ring-1 focus:ring-mg-red/30'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-mg-red"> *</span>}
      </span>
      {children}
    </label>
  )
}

function ContactItem({ icon, label, href }) {
  const content = (
    <span className="flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mg-red/15 text-mg-red">
        {icon}
      </span>
      <span className="text-sm text-white/80">{label}</span>
    </span>
  )

  if (href) {
    return (
      <li>
        <a href={href} className="transition-colors hover:text-mg-red">
          {content}
        </a>
      </li>
    )
  }

  return <li>{content}</li>
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
