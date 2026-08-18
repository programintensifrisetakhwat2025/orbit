"use client"

import { useState } from "react"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { Bell, CalendarDays, Check, ChevronDown, ChevronRight, CircleAlert, Clock3, Copy, Eye, Home, Inbox, LayoutGrid, MoreHorizontal, Pencil, Plus, Search, SlidersHorizontal, Sparkles, Trash2, UserRound } from "lucide-react"
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const orders = [
  { id: "#SRV-1048", name: "Rina Putri", service: "Paket Reguler", total: "Rp48.000", status: "Diproses" },
  { id: "#SRV-1047", name: "Bima Arta", service: "Paket Premium", total: "Rp125.000", status: "Selesai" },
  { id: "#SRV-1046", name: "Nadia Sari", service: "Paket Harian", total: "Rp72.000", status: "Menunggu" },
]

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="flex flex-col gap-1"><p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p><h2 className="text-balance text-xl font-semibold tracking-tight">{title}</h2><p className="text-pretty text-sm leading-6 text-muted-foreground">{description}</p></div>
}

function StatusBadge({ status }: { status: string }) {
  return <Badge variant={status === "Selesai" ? "default" : status === "Menunggu" ? "outline" : "secondary"}>{status}</Badge>
}

function DatePickerDemo() {
  const [date, setDate] = useState<Date>(new Date(2026, 7, 18))
  const [open, setOpen] = useState(false)

  return <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger render={<Button variant="outline" className="w-full justify-between font-normal" />}>
      <span className="flex items-center gap-2"><CalendarDays />{date ? format(date, "EEEE, d MMMM yyyy", { locale: id }) : "Pilih tanggal"}</span><ChevronDown />
    </PopoverTrigger>
    <PopoverContent align="start" className="w-auto p-0">
      <Calendar mode="single" selected={date} onSelect={(value) => { if (value) { setDate(value); setOpen(false) } }} locale={id} initialFocus />
    </PopoverContent>
  </Popover>
}

function RowMenu({ name }: { name: string }) {
  return <DropdownMenu>
    <DropdownMenuTrigger render={<Button size="icon-sm" variant="ghost" aria-label={`Menu ${name}`} />}><MoreHorizontal /></DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-44">
      <DropdownMenuLabel>Aksi data</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem><Eye />Lihat detail</DropdownMenuItem>
        <DropdownMenuItem><Pencil />Edit data</DropdownMenuItem>
        <DropdownMenuItem><Copy />Duplikat</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup><DropdownMenuItem variant="destructive"><Trash2 />Hapus</DropdownMenuItem></DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
}

function AddDataSheet() {
  const [open, setOpen] = useState(false)
  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild><Button><Plus data-icon="inline-start" />Tambah data</Button></SheetTrigger>
    <SheetContent side="bottom" className="mx-auto max-h-[92dvh] max-w-[430px] rounded-t-3xl px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-border" aria-hidden="true" />
      <SheetHeader className="px-0 pt-3 text-left"><SheetTitle>Tambah pesanan</SheetTitle><SheetDescription>Masukkan informasi utama. Detail dapat disunting kembali.</SheetDescription></SheetHeader>
      <form className="flex flex-col gap-4 py-5" onSubmit={(e) => { e.preventDefault(); setOpen(false); toast.success("Pesanan berhasil ditambahkan", { description: "Data #SRV-1049 tersimpan sebagai pesanan baru." }) }}>
        <div className="flex flex-col gap-2"><Label htmlFor="customer">Nama pelanggan</Label><Input id="customer" placeholder="Contoh: Dimas Pratama" required /></div>
        <div className="flex flex-col gap-2"><Label htmlFor="service">Jenis layanan</Label><Select required><SelectTrigger id="service"><SelectValue placeholder="Pilih layanan" /></SelectTrigger><SelectContent><SelectGroup><SelectLabel>Layanan tersedia</SelectLabel><SelectItem value="regular">Paket Reguler</SelectItem><SelectItem value="premium">Paket Premium</SelectItem><SelectItem value="daily">Paket Harian</SelectItem></SelectGroup></SelectContent></Select></div>
        <div className="flex flex-col gap-2"><Label>Tanggal layanan</Label><DatePickerDemo /></div>
        <div className="flex flex-col gap-2"><Label htmlFor="note">Catatan <span className="font-normal text-muted-foreground">(opsional)</span></Label><Textarea id="note" placeholder="Instruksi khusus pelanggan" /></div>
        <SheetFooter className="grid grid-cols-2 gap-3 px-0"><SheetClose asChild><Button type="button" variant="outline">Batal</Button></SheetClose><Button type="submit">Simpan data</Button></SheetFooter>
      </form>
    </SheetContent>
  </Sheet>
}

export function MobileServiceDemo() {
  const [activeNav, setActiveNav] = useState("Beranda")
  const [notify, setNotify] = useState(true)
  return <main className="min-h-dvh bg-canvas md:px-8 md:py-10">
    <div className="mobile-shell mx-auto min-h-dvh overflow-hidden border-border bg-background shadow-2xl md:min-h-[calc(100dvh-5rem)] md:rounded-[2rem] md:border">
      <header className="sticky top-0 z-20 border-b bg-background/95 px-5 py-4 backdrop-blur"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="size-5" /></div><div><p className="text-sm font-semibold">SatuLayan</p><p className="text-xs text-muted-foreground">Universal mobile UI</p></div></div>
        <Sheet><SheetTrigger asChild><Button size="icon" variant="outline" aria-label="Buka notifikasi"><Bell /></Button></SheetTrigger><SheetContent side="bottom" className="mx-auto max-w-[430px] rounded-t-3xl px-5 pb-8"><SheetHeader className="text-left"><SheetTitle>Notifikasi</SheetTitle><SheetDescription>3 pembaruan operasional terbaru.</SheetDescription></SheetHeader><div className="flex flex-col gap-3 py-5">{["Pesanan #SRV-1047 telah selesai", "Pembayaran Nadia telah diterima", "Jadwal besok hampir penuh"].map((text, i) => <button key={text} className="flex items-start gap-3 rounded-xl border p-3 text-left"><span className="mt-1 size-2 rounded-full bg-primary" /><span className="flex-1 text-sm leading-6">{text}<span className="block text-xs text-muted-foreground">{i + 1} jam lalu</span></span><ChevronRight className="mt-1 size-4 text-muted-foreground" /></button>)}</div></SheetContent></Sheet>
      </div></header>

      <div className="flex flex-col gap-10 px-5 pb-28 pt-6">
        <section className="flex flex-col gap-5"><div className="flex items-end justify-between gap-4"><SectionTitle eyebrow="Design system" title="Satu palet, banyak layanan" description="Biru elektrik #0000F2, putih, dan neutral dingin dipakai konsisten untuk laundry, rental, serta sewa lapangan." /><Badge variant="outline">v1.0</Badge></div><div className="grid grid-cols-5 gap-2" aria-label="Palet warna"><div className="h-14 rounded-xl bg-primary" /><div className="h-14 rounded-xl bg-accent" /><div className="h-14 rounded-xl bg-foreground" /><div className="h-14 rounded-xl border bg-card" /><div className="h-14 rounded-xl bg-muted" /></div>
          <Card><CardHeader><CardDescription>Ringkasan hari ini</CardDescription><CardTitle className="text-3xl">12 pesanan</CardTitle></CardHeader><CardContent><div className="grid grid-cols-3 gap-2">{[["8", "Aktif"], ["3", "Selesai"], ["1", "Tertunda"]].map(([n,l]) => <div key={l} className="rounded-xl bg-muted p-3"><p className="text-lg font-semibold">{n}</p><p className="text-xs text-muted-foreground">{l}</p></div>)}</div></CardContent><CardFooter><AddDataSheet /></CardFooter></Card></section>

        <section className="flex flex-col gap-5"><SectionTitle eyebrow="Actions" title="Button & feedback" description="Hierarki aksi primer, sekunder, destruktif, toast, dan dialog konfirmasi." /><div className="grid grid-cols-2 gap-3"><Button>Button utama</Button><Button variant="outline">Sekunder</Button><Button variant="secondary">Tersier</Button><Button variant="destructive">Destruktif</Button></div><Alert><CircleAlert /><AlertTitle>Perlu perhatian</AlertTitle><AlertDescription>Satu jadwal belum memiliki petugas. Tetapkan sebelum pukul 17.00.</AlertDescription></Alert><div className="flex gap-3"><Button variant="outline" className="flex-1" onClick={() => toast("Perubahan disimpan", { description: "Semua data telah diperbarui." })}>Tampilkan toast</Button><Dialog><DialogTrigger asChild><Button variant="destructive" size="icon" aria-label="Hapus data"><Trash2 /></Button></DialogTrigger><DialogContent className="max-w-[calc(100%-2rem)] rounded-2xl"><DialogHeader><DialogTitle>Hapus pesanan?</DialogTitle><DialogDescription>Pesanan #SRV-1046 akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.</DialogDescription></DialogHeader><DialogFooter className="grid grid-cols-2 gap-3"><DialogClose asChild><Button variant="outline">Batal</Button></DialogClose><DialogClose asChild><Button variant="destructive" onClick={() => toast.success("Pesanan dihapus")}>Ya, hapus</Button></DialogClose></DialogFooter></DialogContent></Dialog></div></section>

        <section className="flex flex-col gap-5"><SectionTitle eyebrow="Data display" title="Tabel nyaman di mobile" description="Kolom prioritas tetap terlihat; detail sekunder diringkas menjadi baris bertumpuk." /><div className="flex gap-2"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Cari pelanggan" aria-label="Cari pelanggan" /></div><Button size="icon" variant="outline" aria-label="Filter"><SlidersHorizontal /></Button></div><div className="overflow-hidden rounded-xl border"><Table><TableHeader><TableRow><TableHead>Pesanan</TableHead><TableHead className="text-right">Status</TableHead></TableRow></TableHeader><TableBody>{orders.map((order) => <TableRow key={order.id}><TableCell><div className="flex flex-col gap-1"><span className="font-medium">{order.name}</span><span className="text-xs text-muted-foreground">{order.id} · {order.service}</span><span className="text-xs font-medium">{order.total}</span></div></TableCell><TableCell className="text-right"><div className="flex items-center justify-end gap-2"><StatusBadge status={order.status} /><RowMenu name={order.name} /></div></TableCell></TableRow>)}</TableBody></Table></div></section>

        <section className="flex flex-col gap-5"><SectionTitle eyebrow="Forms" title="Input & states" description="Label selalu terlihat, area sentuh minimal 44px, dan pesan bantu dekat kontrol." /><Card><CardHeader><CardTitle>Pengaturan layanan</CardTitle><CardDescription>Form universal untuk semua kategori bisnis.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4"><div className="flex flex-col gap-2"><Label htmlFor="business">Nama bisnis</Label><Input id="business" defaultValue="SatuLayan Kemang" /></div><div className="flex flex-col gap-2"><Label htmlFor="category">Kategori bisnis</Label><Select defaultValue="laundry"><SelectTrigger id="category"><SelectValue /></SelectTrigger><SelectContent><SelectGroup><SelectLabel>Pilih kategori</SelectLabel><SelectItem value="laundry">Laundry</SelectItem><SelectItem value="rental">Rental kendaraan</SelectItem><SelectItem value="field">Sewa lapangan</SelectItem></SelectGroup></SelectContent></Select></div><div className="flex flex-col gap-2"><Label>Tanggal operasional</Label><DatePickerDemo /></div><div className="flex flex-col gap-2"><Label htmlFor="address">Alamat layanan</Label><Textarea id="address" defaultValue="Jl. Kemang Raya No. 12, Jakarta" /></div><div className="flex items-center justify-between gap-4 rounded-xl border p-3"><div><Label htmlFor="notify">Notifikasi otomatis</Label><p className="text-xs leading-5 text-muted-foreground">Kirim pembaruan status ke pelanggan.</p></div><Switch id="notify" checked={notify} onCheckedChange={setNotify} /></div></CardContent><CardFooter><Button className="w-full" onClick={() => toast.success("Pengaturan tersimpan")}><Check data-icon="inline-start" />Simpan pengaturan</Button></CardFooter></Card></section>

        <section className="flex flex-col gap-5"><SectionTitle eyebrow="System states" title="Loading & empty state" description="Skeleton mengikuti struktur akhir; empty state memiliki satu aksi jelas." /><Tabs defaultValue="loading"><TabsList className="grid w-full grid-cols-2"><TabsTrigger value="loading">Loading</TabsTrigger><TabsTrigger value="empty">Kosong</TabsTrigger></TabsList><TabsContent value="loading"><Card><CardContent className="flex flex-col gap-4 pt-6">{[1,2,3].map(i => <div key={i} className="flex items-center gap-3"><Skeleton className="size-10 rounded-xl" /><div className="flex flex-1 flex-col gap-2"><Skeleton className="h-4 w-2/3" /><Skeleton className="h-3 w-1/2" /></div></div>)}</CardContent></Card></TabsContent><TabsContent value="empty"><Card><CardContent className="flex flex-col items-center gap-4 py-10 text-center"><div className="flex size-12 items-center justify-center rounded-full bg-muted"><Inbox className="size-5 text-muted-foreground" /></div><div><p className="font-semibold">Belum ada pesanan</p><p className="mt-1 text-sm text-muted-foreground">Pesanan baru akan muncul di sini.</p></div><AddDataSheet /></CardContent></Card></TabsContent></Tabs></section>

        <section className="flex flex-col gap-5"><SectionTitle eyebrow="Scheduling" title="Tanggal & slot waktu" description="Cocok untuk rental, lapangan, pickup laundry, atau janji temu." /><div className="grid grid-cols-3 gap-2">{["09.00", "10.30", "13.00", "15.30", "17.00", "19.30"].map((slot,i) => <Button key={slot} variant={i === 2 ? "default" : "outline"} disabled={i === 4}><Clock3 data-icon="inline-start" />{slot}</Button>)}</div><div className="flex items-center gap-3 rounded-xl border p-4"><CalendarDays className="size-5 text-primary" /><div className="flex-1"><p className="text-sm font-medium">Selasa, 18 Agustus</p><p className="text-xs text-muted-foreground">Slot terpilih · 13.00–14.00</p></div><ChevronRight className="size-4 text-muted-foreground" /></div></section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-[430px] border-t bg-background/95 px-3 pb-[calc(.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur" aria-label="Navigasi utama"><div className="grid grid-cols-4">{[["Beranda",Home],["Pesanan",Inbox],["Layanan",LayoutGrid],["Profil",UserRound]].map(([label, Icon]) => { const NavIcon = Icon as typeof Home; return <button key={label as string} onClick={() => setActiveNav(label as string)} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-xs font-medium ${activeNav === label ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`} aria-current={activeNav === label ? "page" : undefined}><NavIcon className="size-5" />{label as string}</button> })}</div></nav>
    </div>
  </main>
}
