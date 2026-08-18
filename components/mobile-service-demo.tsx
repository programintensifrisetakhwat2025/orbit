'use client'

import { useState } from 'react'
import {
  Bell,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  Clock3,
  Home,
  MapPin,
  PackageCheck,
  Search,
  Shirt,
  Sparkles,
  Store,
  UserRound,
  Waves,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ThemeKey = 'laundry' | 'rental' | 'field'

type ThemeContent = {
  label: string
  eyebrow: string
  title: string
  description: string
  cta: string
  unit: string
  price: string
  service: string
  meta: string
  category: string
  icon: typeof Shirt
}

const themes: Record<ThemeKey, ThemeContent> = {
  laundry: {
    label: 'Laundry',
    eyebrow: 'Antar jemput gratis',
    title: 'Pakaian bersih, tanpa keluar rumah.',
    description: 'Pilih layanan, atur waktu penjemputan, lalu pantau prosesnya dari satu tempat.',
    cta: 'Pesan laundry',
    unit: '/kg',
    price: 'Rp8.000',
    service: 'Cuci Kering Reguler',
    meta: 'Selesai 2–3 hari',
    category: 'Paling sering dipilih',
    icon: Shirt,
  },
  rental: {
    label: 'Rental',
    eyebrow: 'Unit terverifikasi',
    title: 'Kendaraan siap untuk perjalananmu.',
    description: 'Cek ketersediaan, pilih durasi sewa, dan pesan unit dengan harga yang transparan.',
    cta: 'Sewa sekarang',
    unit: '/hari',
    price: 'Rp325.000',
    service: 'Honda Brio Automatic',
    meta: 'Tersedia hari ini',
    category: 'Pilihan populer',
    icon: Car,
  },
  field: {
    label: 'Lapangan',
    eyebrow: 'Konfirmasi instan',
    title: 'Main tepat waktu, tanpa antre.',
    description: 'Temukan lapangan terdekat dan amankan slot bermain dalam beberapa langkah.',
    cta: 'Pilih jadwal',
    unit: '/jam',
    price: 'Rp120.000',
    service: 'Arena Futsal Sintetis',
    meta: 'Slot 19.30 tersedia',
    category: 'Dekat dari lokasimu',
    icon: Waves,
  },
}

const slots = ['17.00', '18.00', '19.30']

export function MobileServiceDemo() {
  const [theme, setTheme] = useState<ThemeKey>('laundry')
  const [selectedSlot, setSelectedSlot] = useState('19.30')
  const content = themes[theme]
  const ServiceIcon = content.icon

  return (
    <div className="mobile-stage" data-theme={theme}>
      <div className="mobile-app">
        <header className="safe-top sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/95 px-4 pb-3 backdrop-blur-sm">
          <a href="#main-content" className="sr-only focus:not-sr-only">Lewati ke konten</a>
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Sparkles aria-hidden="true" className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Selamat datang</span>
              <strong className="text-base leading-5">Loka Service</strong>
            </div>
          </div>
          <Button aria-label="Lihat notifikasi" variant="outline" size="icon" className="size-11 rounded-md bg-surface">
            <Bell aria-hidden="true" />
          </Button>
        </header>

        <main id="main-content" className="flex flex-col gap-8 px-4 pb-28 pt-5">
          <section aria-labelledby="theme-title" className="flex flex-col gap-3">
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Demo tema</p>
                <h2 id="theme-title" className="text-lg font-bold">Satu sistem, tiga bisnis</h2>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Mobile 430px</span>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-muted p-1" role="group" aria-label="Pilih tema bisnis">
              {(Object.keys(themes) as ThemeKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={theme === key}
                  onClick={() => setTheme(key)}
                  className={cn(
                    'min-h-11 rounded-md px-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-ring',
                    theme === key ? 'bg-surface text-foreground shadow-sm' : 'text-muted-foreground',
                  )}
                >
                  {themes[key].label}
                </button>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Check aria-hidden="true" className="size-4" />
                {content.eyebrow}
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="max-w-sm text-balance text-3xl font-bold leading-tight">{content.title}</h1>
                <p className="text-pretty text-sm leading-6 opacity-85">{content.description}</p>
              </div>
              <Button className="h-12 w-full rounded-md bg-surface text-base font-bold text-foreground hover:bg-surface/90">
                {content.cta}
                <ChevronRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>
            <div className="flex items-center justify-between gap-3 bg-accent px-5 py-3 text-accent-foreground">
              <span className="text-sm font-semibold">Tersedia di area Sukolilo</span>
              <MapPin aria-hidden="true" className="size-5" />
            </div>
          </section>

          <section aria-labelledby="service-title" className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <h2 id="service-title" className="text-xl font-bold">Rekomendasi untukmu</h2>
              <button className="min-h-11 text-sm font-semibold text-primary">Lihat semua</button>
            </div>
            <article className="flex gap-4 rounded-lg border border-border bg-surface p-4 text-surface-foreground">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <ServiceIcon aria-hidden="true" className="size-8" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <span className="text-xs font-semibold text-primary">{content.category}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-pretty text-base font-bold leading-5">{content.service}</h3>
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock3 aria-hidden="true" className="size-4" />
                    {content.meta}
                  </p>
                </div>
                <p className="text-lg font-bold tabular-nums">{content.price}<span className="text-sm font-medium text-muted-foreground">{content.unit}</span></p>
              </div>
            </article>
          </section>

          <section aria-labelledby="schedule-title" className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 id="schedule-title" className="text-lg font-bold">Pilih waktu</h2>
                <p className="text-sm text-muted-foreground">Hari ini, 18 Agu</p>
              </div>
              <CalendarDays aria-hidden="true" className="size-5 text-primary" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  aria-pressed={selectedSlot === slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={cn(
                    'min-h-11 rounded-md border px-2 text-sm font-semibold tabular-nums transition-colors',
                    selectedSlot === slot
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground',
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </section>

          <section aria-label="Keunggulan layanan" className="grid grid-cols-3 gap-2">
            {[
              { icon: PackageCheck, label: 'Harga jelas' },
              { icon: Store, label: 'Mitra lokal' },
              { icon: Search, label: 'Mudah dicari' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg bg-muted p-3 text-center">
                <Icon aria-hidden="true" className="size-5 text-primary" />
                <span className="text-xs font-semibold leading-4">{label}</span>
              </div>
            ))}
          </section>
        </main>

        <nav aria-label="Navigasi utama" className="bottom-nav fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-mobile items-center justify-around border-t border-border bg-surface px-2 pt-2 shadow-sticky">
          {[
            { icon: Home, label: 'Beranda', active: true },
            { icon: CalendarDays, label: 'Pesanan', active: false },
            { icon: UserRound, label: 'Akun', active: false },
          ].map(({ icon: Icon, label, active }) => (
            <button key={label} type="button" aria-current={active ? 'page' : undefined} className={cn('flex min-h-14 min-w-20 flex-col items-center justify-center gap-1 rounded-md text-xs font-semibold', active ? 'text-primary' : 'text-muted-foreground')}>
              <Icon aria-hidden="true" className="size-5" />
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
