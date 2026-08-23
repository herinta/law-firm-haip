export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  desc: string; // Excerpt / ringkasan singkat
  content: string[]; // Paragraf-paragraf isi lengkap
}

export const newsArticles: NewsArticle[] = [
  {
    id: "regulasi-ketenagakerjaan-pkwt",
    title: "Implikasi Regulasi Ketenagakerjaan Baru terhadap PKWT di Indonesia",
    date: "12 Juli 2026",
    author: "Indra Kusuma, S.H., LL.M.",
    image: "/gavel_book.png",
    desc: "Analisis komprehensif mengenai tata cara penyusunan Perjanjian Kerja Waktu Tertentu (PKWT) pasca penyesuaian regulasi cipta kerja terbaru.",
    content: [
      "Perubahan konstan dalam regulasi ketenagakerjaan di Indonesia menuntut perhatian ekstra dari para pelaku usaha dan departemen Sumber Daya Manusia. Undang-Undang Cipta Kerja dan peraturan turunannya telah membawa penyesuaian mendasar pada mekanisme Perjanjian Kerja Waktu Tertentu (PKWT), baik dari segi durasi maksimal, jenis pekerjaan yang diperbolehkan, hingga kewajiban pembayaran uang kompensasi.",
      "Salah satu perubahan yang paling krusial adalah penetapan batas waktu akumulasi PKWT. Pengusaha kini harus menghitung dengan cermat durasi kontrak kerja beserta perpanjangannya agar tidak secara otomatis demi hukum berubah status menjadi Perjanjian Kerja Waktu Tidak Tertentu (PKWTT) atau karyawan permanen. Kelalaian dalam administrasi waktu ini sering kali menjadi pemicu perselisihan hubungan industrial yang berujung pada gugatan di Pengadilan PHI.",
      "Selain batasan durasi, pengusaha wajib membayarkan uang kompensasi PKWT pada saat berakhirnya hubungan kerja kontrak, dihitung secara proporsional sesuai masa kerja karyawan. Ketentuan ini berlaku bagi Warga Negara Indonesia (WNI) dan harus dianggarkan secara berkala oleh manajemen keuangan perusahaan guna menghindari sanksi administratif dan hukum.",
      "H A I P Law Firm menyarankan agar perusahaan melakukan audit kepatuhan hukum secara menyeluruh (Legal Compliance Audit) terhadap semua draf perjanjian kerja yang saat ini berlaku. Hal ini penting untuk memastikan klausul-klausul di dalamnya tidak bertentangan dengan ketentuan terbaru dan tetap melindungi rahasia dagang serta aset intelektual perusahaan melalui klausul kerahasiaan yang kuat."
    ]
  },
  {
    id: "perlindungan-merek-era-digital",
    title: "Perlindungan Hak Merek di Era Digital: Panduan untuk Pelaku Usaha",
    date: "28 Juni 2026",
    author: "Agung Dewantoro, S.H., M.H.",
    image: "/lawyer_meeting.png",
    desc: "Bagaimana korporasi dapat memitigasi risiko pelanggaran merek dagang di platform e-commerce dan sosial media melalui tindakan hukum preventif.",
    content: [
      "Di era ekonomi digital yang berkembang pesat, merek bukan sekadar nama identitas, melainkan aset tak berwujud (intangible asset) yang bernilai komersial tinggi. Namun, kemudahan bertransaksi di dunia maya juga meningkatkan kerentanan terhadap pemalsuan merek, peniruan identitas visual, hingga penyalahgunaan nama domain oleh pihak ketiga yang tidak bertanggung jawab.",
      "Pendaftaran merek pada Direktorat Jenderal Kekayaan Intelektual (DJKI) merupakan langkah perlindungan hukum pertama yang bersifat mutlak karena sistem perlindungan merek di Indonesia menganut prinsip 'first-to-file'. Siapa pun yang mendaftarkan mereknya terlebih dahulu secara sah akan mendapatkan hak eksklusif untuk menggunakan dan melarang pihak lain menggunakannya untuk kelas barang atau jasa yang sejenis.",
      "Bagi pelaku usaha, pemantauan aktif di marketplace dan media sosial adalah keharusan. Apabila ditemukan pelanggaran berupa penjualan barang tiruan atau penggunaan merek tanpa izin, pemilik merek yang sah dapat mengajukan permohonan takedown (penurunan konten) ke penyedia platform atau melayangkan somasi formal sebagai langkah penyelesaian sengketa di luar pengadilan.",
      "Apabila jalur mediasi tidak membuahkan hasil, hukum Indonesia menyediakan mekanisme gugatan ganti rugi melalui Pengadilan Niaga, maupun tuntutan pidana terhadap pelanggar hak merek. HAIP Law Firm memiliki keahlian mendalam dalam mendampingi klien korporasi untuk merancang strategi perlindungan kekayaan intelektual komprehensif, mulai dari audit portofolio merek hingga penegakan hukum di ruang sidang."
    ]
  },
  {
    id: "pkpu-penyelamatan-bisnis-krisis",
    title: "PKPU sebagai Instrumen Penyelamatan Bisnis dalam Krisis Likuiditas",
    date: "15 Mei 2026",
    author: "Prof. Dr. Hendra Agung, S.H., M.H., LL.M.",
    image: "/court_building.png",
    desc: "Menelaah langkah strategis pengajuan restrukturisasi utang (PKPU) untuk menghindari kepailitan dan memulihkan kesehatan finansial korporasi.",
    content: [
      "Krisis ekonomi global dan fluktuasi pasar domestik sering kali menempatkan perusahaan pada posisi kesulitan arus kas atau likuiditas sementara. Dalam situasi di mana kewajiban pembayaran utang mulai jatuh tempo dan tidak dapat dipenuhi, Penundaan Kewajiban Pembayaran Utang (PKPU) dapat menjadi jalur penyelamatan hukum yang sah untuk menata ulang finansial perusahaan tanpa harus berujung pada likuidasi kepailitan.",
      "PKPU adalah proses hukum yang diatur dalam Undang-Undang Kepailitan dan PKPU yang memberikan kesempatan kepada debitur untuk mengajukan rencana perdamaian. Rencana ini mencakup tawaran restrukturisasi utang, baik berupa perpanjangan jangka waktu pembayaran (rescheduling), pengurangan suku bunga, konversi utang menjadi saham (debt-to-equity swap), maupun opsi penyelesaian komersial lainnya.",
      "Keuntungan utama PKPU bagi debitur adalah adanya penundaan eksekusi jaminan utang oleh kreditur selama proses persidangan berlangsung. Hal ini memberikan ruang bernapas bagi manajemen untuk fokus memperbaiki operasional bisnis dan merumuskan rencana perdamaian yang realistis agar disetujui oleh mayoritas kreditur melalui mekanisme pemungutan suara (voting).",
      "Kunci sukses lolos dari jeratan PKPU adalah penyusunan proposal perdamaian yang didasarkan pada proyeksi keuangan yang akurat serta strategi komunikasi hukum yang persuasif kepada para kreditur. HAIP Law Firm berpengalaman mendampingi debitur maupun kreditur dalam menavigasi kompleksitas hukum PKPU di Pengadilan Niaga guna mencapai mufakat perdamaian yang homologatif."
    ]
  }
];

export function getArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id);
}
