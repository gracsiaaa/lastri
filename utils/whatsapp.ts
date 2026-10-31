export interface BookingData {
  nama: string;
  layanan: string;
  jumlahOrang: string;
  tipeLokasi: string;
  alamatLengkap: string;
  area: string;
  hariTanggal: string;
  jamMulai: string;
  catatanTambahan?: string;
}

export const createWhatsAppBookingUrl = (data: BookingData): string => {
  const phone = "62895347499653"; // Nomor Lastri Spa

  const message = `Halo Lastri Spa Home Service, saya ingin melakukan reservasi perawatan:

DETAIL RESERVASI
- Nama Pemesan: ${data.nama}
- Pilihan Layanan/Paket: ${data.layanan}
- Jumlah Orang: ${data.jumlahOrang}

LOKASI LAYANAN
- Tipe Lokasi: ${data.tipeLokasi}
- Alamat Lengkap / Nama Hotel & No. Kamar: ${data.alamatLengkap}
- Area: ${data.area}

JADWAL
- Hari & Tanggal: ${data.hariTanggal}
- Jam Mulai: ${data.jamMulai}

CATATAN TAMBAHAN
- ${data.catatanTambahan || "-"}

Mohon konfirmasi ketersediaan jadwal terapis. Terima kasih.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
