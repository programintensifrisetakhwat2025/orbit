# Sistem Desain Mobile Multi-Layanan

Versi 1.0 — sumber aturan untuk website laundry, rental, dan sewa lapangan.

## 1. Tujuan dan prinsip

Sistem ini dirancang untuk transaksi layanan lokal yang cepat di layar kecil. Struktur, perilaku, dan komponen tetap sama antarproduk; tema, istilah, gambar, dan data dapat berubah.

### Prinsip utama

1. **Satu tugas utama per layar.** Setiap layar harus memiliki satu tujuan dan satu CTA dominan.
2. **Mobile sebagai produk utama.** Desain dimulai dari 360–390px, lalu diverifikasi pada 320px dan 430px.
3. **Kontras tinggi, hierarki tegas.** Gunakan satu warna merek kuat, permukaan netral, border jelas, dan tipografi sans tegas.
4. **Cepat dipindai.** Harga, ketersediaan, status, dan CTA harus mudah ditemukan tanpa membaca seluruh kartu.
5. **Komponen sama, konteks berbeda.** `ServiceCard` dapat menampilkan paket laundry, kendaraan, atau lapangan.
6. **Aksesibel sejak awal.** Target sentuh, kontras, focus ring, label, serta error adalah bagian komponen.
7. **Dekorasi harus berfungsi.** Hindari shadow, gradien, ikon, statistik, dan ornamen yang tidak menambah pemahaman.

### Karakter visual

- Flat, solid, padat tetapi tidak sesak.
- Radius medium dan konsisten.
- Border lebih diutamakan daripada shadow.
- Satu aksen kuat; jangan memakai banyak warna kategori.
- Maksimal lima warna visual dalam satu tema: brand, accent, background, surface, foreground. Status boleh memakai token semantik tersendiri hanya saat diperlukan.
- Gunakan maksimal dua keluarga font: sans untuk seluruh UI dan mono hanya untuk kode/nomor referensi bila diperlukan.

### Jangan lakukan

- Jangan mengubah layar menjadi layout desktop multi-kolom.
- Jangan memakai emoji sebagai ikon UI.
- Jangan memakai warna sebagai satu-satunya penanda status.
- Jangan membuat target interaksi kurang dari 44×44px.
- Jangan mencampur radius atau ukuran ikon tanpa alasan.
- Jangan memakai placeholder sebagai label input.
- Jangan menaruh dua tombol primary berdampingan.
- Jangan menggunakan carousel untuk informasi penting.

---

## 2. Token semantik

Komponen wajib memakai nama peran, bukan nama warna. Gunakan `bg-primary`, bukan `bg-green-500`; gunakan `text-muted-foreground`, bukan `text-gray-500`.

### Warna inti

| Token | Fungsi | Aturan |
|---|---|---|
| `background` | Latar aplikasi | Selalu dipasang pada elemen `html` |
| `foreground` | Teks utama | Kontras minimum 4.5:1 |
| `surface` | Card, sheet, input | Berbeda jelas dari background |
| `surface-foreground` | Teks di surface | Jangan diasumsikan sama dengan foreground |
| `primary` | CTA dan pilihan aktif | Satu warna brand dominan |
| `primary-foreground` | Konten di primary | Wajib diuji kontras |
| `accent` | Sorotan sekunder | Bukan CTA utama |
| `accent-foreground` | Konten di accent | Wajib diuji kontras |
| `muted` | Area nonaktif/subtil | Tidak untuk teks utama |
| `muted-foreground` | Metadata | Tetap minimum 4.5:1 untuk teks kecil |
| `border` | Pemisah dan outline | Terlihat di background dan surface |
| `ring` | Focus-visible | Harus terlihat di semua surface |
| `destructive` | Aksi merusak/error | Selalu sertakan ikon/teks |
| `success` | Berhasil/tersedia | Selalu sertakan ikon/teks |
| `warning` | Perlu perhatian | Jangan dipakai sebagai dekorasi |

### Tema contoh

Semua tema mempertahankan neutral yang sama agar komponen konsisten.

| Produk | Primary | Accent | Background | Surface | Foreground |
|---|---:|---:|---:|---:|---:|
| Semua layanan | `#0000F2` | `#DFE1FF` | `#F7F7FB` | `#FFFFFF` | `#111225` |

Laundry, rental, dan lapangan memakai palet biru modern yang sama. Perbedaan produk dibangun melalui konten, ikon, foto, serta istilah—bukan mengganti warna brand. Tema tidak boleh mengubah spacing, radius, ukuran komponen, atau hierarki CTA.

### Tipografi

Gunakan font sans yang mudah di-host: **Geist**, **Inter**, atau **Plus Jakarta Sans**. Pilih satu untuk satu produk. Gunakan `font-sans` pada aplikasi.

| Gaya | Ukuran / line-height | Weight | Penggunaan |
|---|---|---:|---|
| Display | 32 / 38px | 700 | Hero singkat, jarang digunakan |
| H1 | 28 / 34px | 700 | Judul layar |
| H2 | 22 / 28px | 700 | Judul section |
| H3 | 18 / 24px | 650–700 | Judul card/sheet |
| Body | 16 / 24px | 400 | Teks utama dan input |
| Body small | 14 / 20px | 400–500 | Metadata dan bantuan |
| Label | 14 / 20px | 600 | Label form/chip |
| Caption | 12 / 16px | 500 | Hanya status pendek; bukan body |
| Price | 20 / 24px | 700 | Harga utama |

- Body tidak boleh lebih kecil dari 14px.
- Judul memakai `text-balance`; deskripsi memakai `text-pretty`.
- Gunakan tabular numbers untuk harga, waktu, OTP, dan jumlah.
- Maksimum dua bobot dominan pada satu layar: regular dan semibold/bold.

### Spacing 4px

Gunakan skala: `0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px`.

- Gutter layar: 16px; 20px pada lebar ≥390px jika ruang memungkinkan.
- Jarak ikon–label: 8px.
- Jarak label–input: 8px.
- Jarak antarelemen card: 12px.
- Padding card: 16px.
- Jarak antarcard: 12px.
- Jarak antarsection: 32px.
- Padding vertikal halaman: 24px, ditambah safe area.
- Gunakan `gap`; jangan memakai `space-*`.
- Jangan mencampur `gap` dengan margin anak untuk ritme yang sama.

### Radius, border, dan elevation

| Token | Nilai | Penggunaan |
|---|---:|---|
| `radius-sm` | 6px | Badge, chip kecil |
| `radius-md` | 10px | Input, button, card ringkas |
| `radius-lg` | 12px | Card utama, dropdown, popover |
| `radius-xl` | 16px | Dialog dan panel besar |
| `radius-sheet` | 24px | Hanya sudut atas bottom sheet |
| `radius-full` | 999px | Avatar, status dot, pill |

- Border standar: 1px solid `border`.
- Border selected: 2px solid `primary`; kurangi padding 1px agar ukuran tidak berubah.
- Shadow standar: tidak ada.
- Floating/sticky: satu shadow lembut saja, `0 -8px 24px rgb(0 0 0 / 0.08)`.
- Jangan memakai shadow untuk setiap card.

### Opacity, z-index, motion

| Token | Nilai |
|---|---:|
| Disabled opacity | 0.48 |
| Scrim | 0.48 |
| z-header | 30 |
| z-sticky | 40 |
| z-overlay | 50 |
| z-toast | 60 |
| Fast | 120ms |
| Base | 180ms |
| Slow | 240ms |

Gunakan easing `cubic-bezier(.2,.8,.2,1)`. Animasi hanya untuk perubahan status, sheet, dialog, dan feedback tindakan. Dalam `prefers-reduced-motion: reduce`, hilangkan transform dan gunakan transisi instan atau opacity singkat.

---

## 3. Layout mobile

### Viewport target

- Minimum didukung: 320px.
- Target desain: 360px dan 390px.
- Maksimum kanvas produk: 430px.
- Tinggi menggunakan `100dvh`, bukan hanya `100vh`.
- Semua konten harus tetap berguna pada zoom browser 200%.

Tambahkan metadata viewport melalui Next.js:

```tsx
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f7f7fb',
}
```

Jangan menonaktifkan zoom dengan `maximumScale` atau `userScalable: false`.

### Shell halaman

```tsx
<body className="font-sans">
  <div className="mobile-stage">
    <div className="mobile-app">
      <header>{/* sticky header */}</header>
      <main>{/* route content */}</main>
      <nav>{/* bottom navigation */}</nav>
    </div>
  </div>
</body>
```

```css
html {
  min-height: 100%;
  background: var(--app-backdrop);
}

body {
  min-height: 100dvh;
  margin: 0;
  background: var(--app-backdrop);
}

.mobile-stage {
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  background: var(--app-backdrop);
}

.mobile-app {
  position: relative;
  width: 100%;
  max-width: 430px;
  min-height: 100dvh;
  overflow-x: clip;
  background: var(--background);
  color: var(--foreground);
}

@media (min-width: 431px) {
  .mobile-app {
    border-inline: 1px solid var(--border);
  }
}
```

### Aturan mobile-only

Mode mobile-only berarti UI tidak pernah melebar menjadi dashboard desktop.

1. Tetapkan `max-width: 430px` pada shell aplikasi.
2. Pusatkan shell saat viewport lebih besar.
3. Gunakan backdrop netral di luar shell; jangan menduplikasi konten untuk mengisi desktop.
4. Jangan menggunakan breakpoint untuk mengubah navigasi bawah menjadi sidebar.
5. Breakpoint hanya boleh memperbaiki gutter atau mode pointer, bukan arsitektur layar.
6. Modal pada desktop tetap dibatasi oleh lebar kanvas; pada mobile gunakan bottom sheet.
7. Elemen fixed harus melekat ke `.mobile-app`, bukan viewport desktop. Gunakan sticky bila memungkinkan.
8. Jangan memalsukan user-agent atau memblokir desktop. Desktop tetap dapat memakai aplikasi di dalam kanvas mobile.

Contoh Tailwind:

```tsx
<div className="min-h-dvh bg-app-backdrop">
  <div className="relative mx-auto min-h-dvh w-full max-w-mobile overflow-x-clip border-border bg-background min-[431px]:border-x">
    {children}
  </div>
</div>
```

### Safe area

```css
.safe-top { padding-top: max(16px, env(safe-area-inset-top)); }
.safe-bottom { padding-bottom: max(16px, env(safe-area-inset-bottom)); }
.bottom-nav { padding-bottom: max(8px, env(safe-area-inset-bottom)); }
.sticky-cta { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
```

Jangan menambahkan safe-area dua kali pada parent dan child.

### Grid dan ritme

- Layout utama memakai flex column.
- Gunakan grid dua kolom hanya untuk kategori, slot waktu, atau item yang setara.
- Card produk utama sebaiknya satu kolom agar informasi tidak terpotong.
- Awal section harus konsisten: heading, optional action, lalu konten dengan gap 12–16px.
- Konten utama diberi padding bawah sebesar tinggi bottom nav/CTA ditambah 16px.

### Sticky dan keyboard

- Header sticky maksimum 56–64px, dengan background solid.
- Bottom navigation maksimum 72px ditambah safe area.
- Sticky CTA memiliki satu tombol utama atau pasangan primary + text action.
- Saat keyboard terbuka, jangan biarkan sticky CTA menutupi input. Gunakan normal flow pada form panjang atau Virtual Keyboard API sebagai enhancement, bukan syarat.
- Fokus input harus di-scroll ke area terlihat dengan `scroll-margin-bottom`.
- Bottom sheet memiliki `max-height: min(88dvh, 760px)` dan konten internal yang dapat di-scroll.

---

## 4. Ikon dan imagery

### Ikon

Gunakan satu pustaka outline, disarankan **Lucide**. Jangan mencampur Lucide, Heroicons, dan SVG acak.

- Ukuran inline: 16px.
- Ukuran button/navigation: 20px.
- Ikon fitur utama: 24px.
- Stroke default: 2px; konsisten di seluruh aplikasi.
- Ikon dekoratif memakai `aria-hidden="true"`.
- Icon-only button wajib memiliki `aria-label`.
- Ikon harus menyertai teks untuk status penting dan aksi yang berisiko.
- Jangan memakai ikon merek generik untuk kategori layanan; pakai ikon yang literal dan mudah dikenali.

```tsx
<button aria-label="Buka keranjang" className="icon-button">
  <ShoppingBag aria-hidden="true" size={20} strokeWidth={2} />
</button>
```

### Gambar

- Thumbnail daftar: rasio 4:3.
- Hero/detail: rasio 16:10 atau 4:3.
- Avatar/vendor: 1:1.
- Gunakan `object-cover`; sediakan focal point untuk gambar yang dipotong.
- Semua gambar informatif wajib memiliki alt yang menjelaskan objek, bukan mengulang judul.
- Placeholder menggunakan surface + ikon netral, bukan URL gambar acak.
- Hindari teks penting yang ditanam di dalam gambar.

---

## 5. Komponen

Setiap komponen memiliki state: default, hover bila pointer tersedia, pressed, focus-visible, disabled, loading, dan error/selected bila relevan.

### Button

**Ukuran**

| Size | Tinggi | Padding | Teks |
|---|---:|---:|---:|
| Small | 40px | 12px | 14/20 semibold |
| Medium | 48px | 16px | 16/24 semibold |
| Large | 56px | 20px | 16/24 bold |

- Default mobile adalah medium.
- Primary: background primary, teks primary-foreground.
- Secondary: surface + border, teks foreground.
- Ghost: tanpa surface, teks foreground/primary.
- Destructive: hanya untuk tindakan destruktif.
- Full-width untuk CTA utama pada checkout dan form.
- Loading mempertahankan lebar; label tetap tersedia untuk pembaca layar.
- Disabled tidak boleh hanya mengandalkan opacity; tambahkan `disabled` dan cursor yang tepat.

### Icon button

- Area sentuh 44×44px minimum; ikon 20px.
- Bentuk radius-md, bukan lingkaran kecuali konteks mengharuskan.
- Wajib tooltip untuk desktop pointer dan `aria-label` untuk aksesibilitas.
- Badge angka diletakkan di sudut tanpa mengecilkan target.

### Card

**Base card:** `surface`, border 1px, radius-lg, padding 16px, tanpa shadow.

Varian:

1. **Service card:** gambar, kategori, judul, metadata, harga, availability, CTA.
2. **Compact list card:** thumbnail 80×80px, isi fleksibel, trailing price/action.
3. **Selectable card:** seluruh card dapat dipilih, border primary 2px saat selected, check indicator dan `aria-pressed`/radio semantics.
4. **Status card:** nomor pesanan, status berikon, timeline ringkas, next action.
5. **Summary card:** baris biaya, divider, total; tidak interaktif.

Jika seluruh card adalah tautan, jangan menaruh tombol interaktif lain di dalamnya. Gunakan satu anchor stretched atau pisahkan area aksi secara semantik.

### Chip dan badge

- Chip filter: tinggi 36–40px, padding 12px, radius-full.
- Selected: primary + primary-foreground.
- Unselected: surface + border.
- Badge status: tinggi minimal 24px; ikon 14–16px + teks 12–14px.
- Badge bukan tombol kecuali memakai elemen button dan memiliki state interaktif lengkap.

### Input, select, textarea

- Label selalu terlihat di atas kontrol.
- Tinggi input/select: 48px minimum.
- Padding horizontal: 12–16px.
- Radius-md, surface, border 1px.
- Focus: ring 2px + offset 2px; jangan menghilangkan outline tanpa pengganti.
- Helper/error berada di bawah kontrol; error menyebut solusi.
- Gunakan `inputMode`, `autoComplete`, dan tipe input yang benar.
- Textarea minimal 3 baris dan dapat bertambah; jangan batasi resize tanpa alasan.
- Optional ditulis `(opsional)` pada label; jangan menandai semua required dengan bintang.

### Search

- Tinggi 48px, ikon search di awal, tombol clear 44px saat ada isi.
- Placeholder spesifik: “Cari layanan atau paket”.
- Submit dengan keyboard tetap tersedia.
- Hasil kosong menampilkan query dan saran, bukan layar kosong.

### Quantity stepper

- Tombol minus dan plus masing-masing 44×44px.
- Nilai terbaca screen reader; perubahan diumumkan dengan `aria-live="polite"` bila perlu.
- Minus disabled saat minimum tercapai.
- Batas kuantitas harus dijelaskan, bukan hanya menonaktifkan tombol.

### Segmented control dan tabs

- Segmented control untuk 2–4 pilihan yang mengubah mode pada layar yang sama.
- Tabs untuk kelompok konten setara; jangan lebih dari 4 tab tetap.
- Jika label tidak muat, gunakan horizontal scroll dengan indikator, bukan mengecilkan font.
- Selected memiliki teks, warna, dan indikator bentuk; bukan warna saja.

### Accordion dan list row

- Accordion trigger minimal 48px dan memakai `aria-expanded`.
- Chevron berputar untuk memberi feedback, tetapi state juga terbaca screen reader.
- List row tinggi minimum 56px; susunan leading icon/image, title + metadata, trailing value/action.
- Divider dimulai sejajar konten teks, bukan selalu full bleed.

### Alert, toast, dialog, bottom sheet

- Alert inline untuk pesan yang harus tetap terlihat.
- Toast untuk konfirmasi singkat, bukan error yang membutuhkan tindakan kompleks.
- Toast maksimum dua baris dan tidak menutupi bottom nav/CTA.
- Dialog hanya untuk konfirmasi penting; fokus terkunci dan kembali ke trigger.
- Bottom sheet adalah pola utama pilihan/filter di mobile: handle opsional, title wajib, close button berlabel, footer sticky bila ada CTA.
- Aksi destruktif menuliskan objek: “Batalkan pesanan”, bukan hanya “Ya”.

### Empty, loading, error, skeleton

- Empty state: judul, penjelasan singkat, satu CTA relevan.
- Error state: apa yang gagal + langkah pemulihan + tombol coba lagi.
- Skeleton mengikuti bentuk konten dan tidak bergerak agresif.
- Hindari spinner layar penuh untuk muatan lokal.
- Pertahankan layout untuk mencegah content shift.

### Calendar dan time slot

- Kalender hanya digunakan jika tanggal bebas diperlukan; untuk 7–14 hari terdekat gunakan horizontal date strip.
- Date cell minimal 44×44px.
- Slot waktu grid dua atau tiga kolom sesuai panjang label; tinggi minimal 44px.
- Status slot: tersedia, dipilih, hampir penuh, penuh; masing-masing menggunakan teks/ikon/disabled selain warna.
- Tampilkan zona waktu bila pengguna atau lokasi dapat berbeda zona.

### Ringkasan harga

Urutan standar:

1. Subtotal item.
2. Durasi/kuantitas.
3. Biaya tambahan.
4. Diskon.
5. Divider.
6. Total dengan visual paling kuat.

Harga menggunakan format `Rp125.000`, tanpa desimal untuk rupiah. Jangan menyembunyikan biaya wajib hingga langkah terakhir.

### Sticky CTA

- Surface solid + border-top atau satu shadow ke atas.
- Kiri: total/konteks singkat; kanan: tombol utama, atau tombol full-width.
- Tinggi konten maksimum 80px ditambah safe area.
- CTA tidak boleh menutupi validation error atau item terakhir.

### Header

- Tinggi 56px; back button 44px; title satu baris dengan ellipsis jika perlu.
- Home boleh menggunakan greeting dua baris dengan tinggi adaptif.
- Maksimum dua aksi trailing.
- Header sticky harus memiliki border bawah saat konten di-scroll.

### Bottom navigation

- Gunakan 3–5 destinasi utama.
- Setiap item memiliki ikon 20px dan label minimal 12px.
- Active state memakai warna + weight/shape indicator.
- Jangan taruh aksi kontekstual seperti “Bayar” di bottom nav.
- Badge harus singkat (`9+`) dan memiliki accessible name.

---

## 6. Pola domain

### Model bersama

| Pola | Laundry | Rental | Sewa lapangan |
|---|---|---|---|
| Item | Paket/layanan | Kendaraan/barang | Lapangan |
| Unit harga | per kg/per item | per hari/per jam | per jam |
| Availability | area & waktu pickup | stok & periode | tanggal & slot |
| Opsi | parfum, express | transmisi, add-on | durasi, fasilitas |
| Fulfilment | pickup/delivery | ambil/antar | hadir di lokasi |
| Status | dijemput–dicuci–selesai | dipesan–aktif–kembali | menunggu–terkonfirmasi–selesai |
| CTA | Pesan laundry | Sewa sekarang | Pilih jadwal |

### Laundry

Alur utama: lokasi → pilih layanan → berat estimasi/item → pickup → opsi → ringkasan → pembayaran/status.

- Nyatakan apakah harga final bergantung pada penimbangan.
- Bedakan express dan reguler dengan label serta estimasi selesai.
- Alamat pickup dan instruksi kurir harus mudah diedit.
- Status order menggunakan timeline vertikal, bukan progress bar tanpa label.

### Rental

Alur utama: periode → katalog → detail unit → persyaratan → add-on → ringkasan → booking.

- Availability selalu terkait tanggal mulai dan selesai.
- Harga menampilkan unit waktu dan estimasi total.
- Deposit, batas kilometer, jaminan, dan kebijakan keterlambatan terlihat sebelum CTA final.
- Foto unit harus konsisten dan mewakili unit sebenarnya bila bisnis menjanjikannya.

### Sewa lapangan

Alur utama: lokasi/olahraga → lapangan → tanggal → slot → durasi → fasilitas → pembayaran.

- Slot waktu adalah elemen utama, bukan dropdown panjang.
- Tampilkan durasi dan waktu selesai setelah pengguna memilih beberapa slot.
- Jelaskan fasilitas, aturan pembatalan, dan status pembayaran.
- Jika slot berubah saat checkout, tampilkan konflik spesifik dan kembali ke pemilih slot.

---

## 7. Aksesibilitas dan konten

### Interaksi

- Target sentuh minimum 44×44px dengan jarak aman antaraksi.
- Urutan fokus mengikuti urutan visual.
- `:focus-visible` selalu tampak.
- Semua dialog, sheet, tab, accordion, dan menu mengikuti pola ARIA yang sesuai.
- Gunakan elemen native: `button`, `a`, `input`, `select`, `nav`, `main`, `header`.
- Informasi dinamis penting memakai live region secara hemat.
- Jangan auto-submit saat Enter sedang mengonfirmasi IME CJK; cek `event.nativeEvent.isComposing` atau `event.keyCode === 229`.

### Kontras

- Teks normal: minimum 4.5:1.
- Teks besar: minimum 3:1.
- Komponen, border penting, focus indicator: minimum 3:1 terhadap sekitar.
- Disabled dapat lebih rendah, tetapi label harus tetap dapat dikenali.

### Bahasa Indonesia

- Gunakan kalimat ringkas, langsung, dan konsisten.
- Tombol memakai kata kerja: “Pilih jadwal”, “Simpan alamat”, “Bayar sekarang”.
- Hindari “OK” jika aksi dapat dinamai dengan jelas.
- Error membantu: “Nomor WhatsApp harus terdiri dari 10–15 digit.”
- Konfirmasi menyebut hasil: “Pesanan laundry berhasil dibuat.”
- Tanggal: `Sen, 18 Agu 2026`; waktu: `19.30`; rentang: `19.30–21.00`.
- Harga: `Rp125.000`; diskon: `−Rp10.000`.
- Nomor telepon ditampilkan berkelompok tetapi disimpan dalam format terstandardisasi.

---

## 8. Tailwind CSS v4

Letakkan token berikut di `app/globals.css`. Nilai default menggunakan tema laundry dan dapat dioverride dengan atribut `data-theme`.

```css
@import "tailwindcss";

:root,
[data-theme="laundry"] {
  --background: #f4f7f5;
  --foreground: #10201c;
  --surface: #ffffff;
  --surface-foreground: #10201c;
  --primary: #126b5a;
  --primary-foreground: #ffffff;
  --accent: #bdeedc;
  --accent-foreground: #10201c;
  --muted: #e7ece9;
  --muted-foreground: #53635e;
  --border: #ccd6d1;
  --ring: #126b5a;
  --destructive: #b42318;
  --destructive-foreground: #ffffff;
  --success: #18794e;
  --warning: #9a6700;
  --app-backdrop: #dfe5e2;
}

[data-theme="rental"] {
  --background: #f4f6f9;
  --foreground: #121b26;
  --surface: #ffffff;
  --surface-foreground: #121b26;
  --primary: #1e4e8c;
  --primary-foreground: #ffffff;
  --accent: #c9ddf7;
  --accent-foreground: #121b26;
  --muted: #e7ebf0;
  --muted-foreground: #536070;
  --border: #cdd5df;
  --ring: #1e4e8c;
  --app-backdrop: #dfe4eb;
}

[data-theme="field"] {
  --background: #f5f7f2;
  --foreground: #142019;
  --surface: #ffffff;
  --surface-foreground: #142019;
  --primary: #177245;
  --primary-foreground: #ffffff;
  --accent: #c8e88b;
  --accent-foreground: #142019;
  --muted: #e8ede4;
  --muted-foreground: #566252;
  --border: #ced8c8;
  --ring: #177245;
  --app-backdrop: #e0e6dc;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-foreground: var(--surface-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-app-backdrop: var(--app-backdrop);

  --font-sans: "Geist", "Geist Fallback", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  --spacing-mobile: 26.875rem;

  --shadow-sticky: 0 -8px 24px rgb(0 0 0 / 0.08);

  --ease-ui: cubic-bezier(.2, .8, .2, 1);
  --animate-duration-fast: 120ms;
  --animate-duration-base: 180ms;
  --animate-duration-slow: 240ms;
}

@layer base {
  * { border-color: var(--border); }

  html {
    min-height: 100%;
    background: var(--app-backdrop);
  }

  body {
    min-height: 100dvh;
    margin: 0;
    background: var(--app-backdrop);
    color: var(--foreground);
  }

  :focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

Catatan: Tailwind memakai namespace ukuran lewat `--spacing-*`; `max-w-mobile` menghasilkan batas 430px dari `--spacing-mobile`.

### Recipe shell

```tsx
export function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-app-backdrop">
      <div className="relative mx-auto min-h-dvh w-full max-w-mobile overflow-x-clip border-border bg-background text-foreground min-[431px]:border-x">
        {children}
      </div>
    </div>
  )
}
```

### Recipe button

```tsx
<button
  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 font-sans text-base font-semibold text-primary-foreground transition-[background-color,transform] duration-150 ease-ui outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
>
  Pesan sekarang
</button>
```

### Recipe card

```tsx
<article className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 text-surface-foreground">
  <div className="flex items-start justify-between gap-3">
    <div className="flex min-w-0 flex-col gap-1">
      <h3 className="text-pretty text-lg font-bold leading-6">Cuci Kering Reguler</h3>
      <p className="text-sm leading-5 text-muted-foreground">Selesai dalam 2–3 hari</p>
    </div>
    <span className="shrink-0 text-xl font-bold tabular-nums">Rp8.000/kg</span>
  </div>
</article>
```

### Recipe input

```tsx
<label className="flex flex-col gap-2 text-sm font-semibold">
  Nomor WhatsApp
  <input
    type="tel"
    inputMode="tel"
    autoComplete="tel"
    className="min-h-12 rounded-md border border-border bg-surface px-4 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
    aria-describedby="phone-help"
  />
  <span id="phone-help" className="text-sm font-normal text-muted-foreground">
    Digunakan untuk pembaruan status pesanan.
  </span>
</label>
```

### Recipe sticky CTA

```tsx
<div className="sticky bottom-0 z-40 border-t border-border bg-surface px-4 pt-3 shadow-sticky [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
  <div className="flex items-center gap-4">
    <div className="flex min-w-0 flex-1 flex-col">
      <span className="text-sm text-muted-foreground">Total</span>
      <strong className="truncate text-xl tabular-nums">Rp125.000</strong>
    </div>
    <button className="min-h-12 rounded-md bg-primary px-5 font-semibold text-primary-foreground">
      Lanjutkan
    </button>
  </div>
</div>
```

### Recipe selected slot

```tsx
<button
  type="button"
  aria-pressed="true"
  className="min-h-11 rounded-md border-2 border-primary bg-accent px-3 text-sm font-semibold text-accent-foreground"
>
  19.30–21.00
</button>
```

---

## 9. Struktur implementasi yang disarankan

```text
components/
  ui/                 # primitive: button, input, sheet, dialog
  shared/             # service-card, price-summary, status-badge
  booking/            # date-strip, time-slot-grid, booking-summary
  navigation/         # mobile-header, bottom-nav
lib/
  format.ts           # rupiah, tanggal, durasi
  theme.ts            # nama tema dan konfigurasi brand
app/
  globals.css         # seluruh token global
```

- Primitive tidak mengenal domain bisnis.
- Shared component menerima istilah melalui props.
- Domain page menyusun komponen, bukan menyalin primitive.
- Variasi visual memakai `variant`, bukan file komponen duplikat.
- Theme dipilih di root dengan `data-theme="laundry|rental|field"`.

---

## 10. Checklist QA

### Layout

- [ ] Tidak ada horizontal scroll pada 320, 360, 390, dan 430px.
- [ ] Pada viewport >430px, aplikasi tetap selebar maksimal 430px dan terpusat.
- [ ] Tidak ada breakpoint yang mengubah UI menjadi desktop/sidebar.
- [ ] Safe area atas/bawah tidak menggandakan padding.
- [ ] Bottom nav dan sticky CTA tidak menutupi konten.
- [ ] Layout stabil saat gambar/skeleton selesai dimuat.
- [ ] Keyboard tidak menutupi input aktif atau tombol form penting.

### Komponen

- [ ] Semua target sentuh minimal 44×44px.
- [ ] Hanya ada satu CTA primary dominan per konteks.
- [ ] State loading mempertahankan ukuran komponen.
- [ ] Selected, error, warning, dan success tidak bergantung pada warna saja.
- [ ] Semua card memakai radius, border, dan padding konsisten.
- [ ] Semua ikon berasal dari satu keluarga dan ukuran yang ditentukan.

### Aksesibilitas

- [ ] Zoom 200% tetap dapat digunakan.
- [ ] Semua kontrol dapat dioperasikan dengan keyboard.
- [ ] Focus-visible terlihat jelas dan tidak terpotong.
- [ ] Icon-only button memiliki accessible name.
- [ ] Form memiliki label, helper, dan error yang terhubung.
- [ ] Kontras teks dan komponen memenuhi WCAG AA.
- [ ] Reduced motion dihormati.
- [ ] Screen reader mengumumkan dialog, sheet, status, dan perubahan penting.

### Konten dan domain

- [ ] Harga selalu menyebut unit: kg, item, jam, atau hari.
- [ ] Biaya wajib muncul sebelum langkah pembayaran.
- [ ] Availability terkait tanggal/lokasi yang sedang dipilih.
- [ ] Empty, loading, error, dan retry tersedia.
- [ ] Format rupiah, tanggal, dan waktu konsisten.
- [ ] Kebijakan pembatalan/deposit/penimbangan muncul sebelum konfirmasi akhir.

### Tema

- [ ] Pergantian `data-theme` tidak mengubah layout.
- [ ] Jumlah warna visual tetap terkendali.
- [ ] Foreground dioverride setiap kali background token berubah.
- [ ] Background dipasang pada elemen `html` dan shell aplikasi.
- [ ] Tidak ada utility warna langsung pada komponen domain.

---

## 11. Pola interaksi lengkap

### Bottom sheet

- Pakai sheet dari bawah untuk tambah/edit data, filter, pilihan kompleks, dan detail kontekstual.
- Tinggi maksimal `92dvh`; konten internal dapat di-scroll, header dan footer aksi tetap terlihat.
- Radius hanya di sudut atas: `rounded-t-3xl`; sediakan drag handle visual dan judul yang terbaca screen reader.
- Tombol batal di kiri dan aksi primer di kanan. Tambahkan safe-area pada padding bawah.
- Jangan gunakan bottom sheet untuk keputusan destruktif singkat; gunakan confirmation dialog.

### Dialog konfirmasi

- Gunakan dialog tengah untuk tindakan irreversible: hapus, batalkan transaksi, reset, atau keluar tanpa menyimpan.
- Judul berupa pertanyaan spesifik, deskripsi menyebut objek serta konsekuensinya.
- Aksi aman memakai outline; aksi berbahaya memakai destructive dan tidak boleh menjadi default keyboard focus.
- Maksimal dua aksi utama. Dialog harus dapat ditutup dengan Escape kecuali proses kritis sedang berjalan.

### Notifikasi dan toast

- Notification center dibuka sebagai bottom sheet dan diurutkan terbaru ke terlama.
- Item belum dibaca memakai dot `primary`; jangan bergantung pada warna saja—sertakan waktu dan isi yang jelas.
- Toast success menghilang otomatis; error persisten sampai ditutup atau memiliki aksi retry.
- Toast tidak dipakai untuk informasi yang harus tetap dibaca. Gunakan Alert inline untuk kondisi tersebut.

### Dropdown dan date picker

- Gunakan `Select` untuk memilih satu nilai dari daftar tetap; gunakan `DropdownMenu` untuk kumpulan aksi pada objek.
- Setiap dropdown memiliki trigger berlabel, group, label group bila konteks diperlukan, dan item destruktif ditempatkan setelah separator.
- Date picker memakai tombol outline yang menampilkan tanggal terformat, lalu kalender di dalam popover.
- Kalender harus mendukung navigasi keyboard, locale Indonesia, status selected, today, disabled, dan focus ring.
- Pada form mobile, popover kalender tidak boleh lebih lebar dari viewport dan harus menutup setelah tanggal dipilih.

### Tambah dan edit data

- Form tambah data dibuka dari CTA `Tambah data` dan menggunakan bottom sheet.
- Susunan wajib: judul, deskripsi, field utama, field opsional, lalu footer aksi.
- Label tidak boleh diganti placeholder. Field required ditandai secara tekstual dan error muncul dekat field.
- Setelah submit sukses: tutup sheet, update daftar, fokus kembali ke pemicu, lalu tampilkan toast.
- Saat submit: disable tombol, tampilkan spinner tanpa mengubah lebar tombol, dan cegah submit ganda.

### Tabel mobile

- Tabel mobile hanya mempertahankan dua kolom visual utama: identitas data dan status/aksi.
- ID, layanan, harga, dan metadata dirangkum vertikal di sel identitas.
- Search dan filter berada tepat di atas tabel. Overflow horizontal hanya menjadi pilihan terakhir.
- Aksi tiap baris memakai menu icon-only dengan accessible name; seluruh baris tidak otomatis clickable.
- Empty, loading, error, pagination/load-more, dan hasil pencarian kosong harus tersedia.

### System states

- Skeleton harus meniru ukuran konten akhir dan tidak dipakai lebih dari struktur yang benar-benar akan muncul.
- Empty state berisi ikon, judul, satu kalimat penjelas, dan maksimal satu CTA primer.
- Error inline memakai Alert dan menyediakan retry bila proses dapat diulang.
- Disabled mengurangi emphasis tetapi tetap memiliki kontras terbaca; jelaskan alasan disabled bila tidak jelas.

### Recipe Tailwind CSS v4

```tsx
<SheetContent side="bottom" className="mx-auto max-h-[92dvh] max-w-[430px] rounded-t-3xl px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]" />

<DialogContent className="max-w-[calc(100%-2rem)] rounded-2xl" />

<div className="overflow-hidden rounded-xl border">
  <Table>{/* dua kolom prioritas */}</Table>
</div>

<nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] border-t bg-background/95 backdrop-blur" />
```

---

## 12. Definition of done

Sebuah layar dianggap sesuai sistem bila dapat dipakai pada 320–430px, tetap berupa kanvas mobile saat dibuka di desktop, memiliki satu aksi utama yang jelas, memakai token semantik, memenuhi target sentuh dan kontras, serta memiliki state loading, empty, error, disabled, dan focus yang relevan. Variasi laundry, rental, dan lapangan harus dapat dicapai dengan mengganti tema, istilah, data, dan pola booking tanpa memodifikasi primitive UI.
