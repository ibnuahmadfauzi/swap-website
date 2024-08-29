const teams = [
  {
    id: 1,
    name: "Bahrul Huda",
    position: "Direktur Eksekutif",
    definition:
      "Pemimpin utama organisasi yang bertanggung jawab atas strategi keseluruhan, pengelolaan operasional, dan hubungan eksternal, termasuk penggalangan dana dan hubungan dengan mitra.",
    jobdesk:
      "<ul><li>Merancang, mengembangkan, dan melaksanakan program-program SWAP di sektor pendidikan, sosial, dan lingkungan.</li><li>Mengelola dan memantau proyek-proyek kampanye dan inisiatif program.</li><li>Berkoordinasi dengan Koordinator Lapangan untuk pelaksanaan program di lapangan.</li><li>Mengelola anggaran program dan memastikan sumber daya digunakan dengan efektif.</li><li>Menyusun laporan program dan mengevaluasi dampak serta hasil.</li></ul>",
    image: "bahrul.png",
  },
  {
    id: 2,
    name: "Irfan Fahmi",
    position: "Manajer Divisi Public Relations (PR) dan Fundraising",
    definition:
      "Mengelola strategi PR untuk membangun dan memelihara citra organisasi, serta merancang dan melaksanakan kegiatan penggalangan dana untuk mendukung kebutuhan keuangan organisasi.",
    jobdesk:
      "<ul><li>Mengembangkan dan melaksanakan strategi komunikasi untuk membangun hubungan dengan publik, media, dan pemangku kepentingan.</li><li>Mengelola penggalangan dana, termasuk merencanakan, melaksanakan, dan mengawasi kegiatan fundraising.</li><li>Membangun dan memelihara hubungan dengan donor, sponsor, dan mitra.</li><li>Menyusun proposal pendanaan, laporan untuk donor, dan materi PR untuk mendukung kampanye.</li><li>Menyusun dan melaksanakan strategi untuk meningkatkan visibilitas NGO dan menarik dukungan finansial.</li></ul>",
    image: "irfan.png",
  },
  {
    id: 3,
    name: "Tsania Maulida",
    position: "Manajer Divisi Program",
    definition:
      "Mengelola perencanaan, pelaksanaan, dan evaluasi program dan proyek organisasi, serta memastikan bahwa program mencapai tujuan dan berdampak sesuai rencana.",
    jobdesk:
      "<ul><li>Merancang dan melaksanakan program kampanye awareness di sektor pendidikan, sosial, dan lingkungan.</li><li>Mengelola dan memantau proyek-proyek kampanye.</li><li>Berkoordinasi dengan Koordinator Lapangan untuk pelaksanaan di lapangan.</li><li>Menyusun laporan program dan evaluasi hasil.</li></ul>",
    image: "sample.jpg",
  },

  {
    id: 4,
    name: "Renandy Ilham",
    position: "Manajer Divisi Media dan IT",
    definition:
      "Mengawasi semua aspek media dan teknologi informasi, termasuk pengelolaan website, sistem TI, dan strategi media untuk mendukung kegiatan organisasi.",
    jobdesk:
      "<ul><li>Mengelola strategi dan implementasi media sosial SWAP, termasuk pengembangan konten dan interaksi dengan audiens.</li><li>Mengelola infrastruktur TI SWAP, termasuk perangkat keras, perangkat lunak, dan dukungan teknis.</li><li>Mengelola logistik teknologi informasi dan memastikan sistem berfungsi dengan baik.</li><li>Berkoordinasi dengan tim PR dan Program untuk memastikan konsistensi pesan dan penggunaan teknologi yang efektif.</li></ul>",
    image: "sample.jpg",
  },
  {
    id: 5,
    name: "Novi Ria",
    position: "Koordinator Lapangan",
    definition:
      "Mengelola dan mendukung kegiatan di lapangan, termasuk pengumpulan data, pelaksanaan program, dan berinteraksi langsung dengan komunitas atau penerima manfaat",
    jobdesk:
      "<ul><li>Mengatur pelaksanaan program dan kampanye di lapangan.</li><li>Berinteraksi langsung dengan komunitas dan mitra lokal.</li><li>Mengelola kegiatan di lapangan termasuk pelatihan dan workshop.</li><li>Mengumpulkan umpan balik dari lapangan dan melaporkan kepada Manajer Program.</li></ul>",
    image: "novi.png",
  },
  {
    id: 6,
    name: "Aisya Syarifa",
    position: "Koordinator Penggalangan Dana (Fundraising)",
    definition:
      "Merencanakan dan melaksanakan kegiatan penggalangan dana, mengelola hubungan dengan donor, serta menyusun proposal dan laporan untuk memastikan keberhasilan penggalangan dana.",
    jobdesk:
      "<ul><li>Mengembangkan dan melaksanakan strategi penggalangan dana.</li><li>Mengelola hubungan dengan donor dan mengidentifikasi donor baru.</li><li>Menulis proposal dan permohonan dana untuk hibah dan sponsor.</li><li>Merencanakan dan melaksanakan acara penggalangan dana.</li><li>Memantau hasil penggalangan dana dan menyusun laporan.</li></ul>",
    image: "aisya.png",
  },
  {
    id: 7,
    name: "Ibnu Ahmad",
    position: "IT Support Specialist",
    definition:
      "Menyediakan dukungan teknis sehari-hari dan memastikan semua perangkat keras dan perangkat lunak dalam NGO berfungsi dengan optimal untuk mendukung operasional yang efisien.",
    jobdesk:
      "<ul><li>Menyediakan bantuan teknis kepada member SWAP terkait penggunaan perangkat keras dan perangkat lunak.</li><li>Mengelola dan memelihara perangkat TI untuk memastikan kelancaran operasional.</li></ul>",
    image: "sample.jpg",
  },
  {
    id: 8,
    name: "Syifa 'Urriyadhoh",
    position: "Media Social Specialist",
    definition:
      "Mengelola dan mengoptimalkan kehadiran organisasi di platform media sosial, menciptakan konten, dan berinteraksi dengan audiens untuk meningkatkan visibilitas dan engagement.",
    jobdesk:
      "<ul><li>Mengelola dan mengembangkan strategi media sosial SWAP.</li><li>Membuat dan memposting konten di platform media sosial.</li><li>Berinteraksi dengan audiens dan memonitor umpan balik serta tren.</li><li>Mengukur efektivitas kampanye media sosial dan melaporkan hasilnya.</li></ul>",
    image: "syfa.png",
  },
  {
    id: 9,
    name: "Evita Ummul",
    position: "Digital Campaign Specialist",
    definition:
      "Merancang, mengimplementasikan, dan menganalisis kampanye digital yang efektif untuk mendukung tujuan NGO, meningkatkan kesadaran publik, dan mendorong partisipasi aktif dalam isu-isu sosial dan lingkungan.",
    jobdesk:
      "<ul><li>Merancang strategi kampanye digital yang inovatif untuk mempromosikan program dan inisiatif di berbagai platform online.</li><li>Berkolaborasi dengan tim media dan program untuk memastikan kampanye digital selaras dengan tujuan dan pesan organisasi.</li></ul>",
    image: "evita.png",
  },

  {
    id: 10,
    name: "Afif Nala",
    position: "Sekretaris dan Bendahara",
    definition:
      "Menyusun dan mengelola dokumentasi administratif serta catatan keuangan organisasi, termasuk pencatatan transaksi, pengelolaan anggaran, dan pelaporan keuangan.",
    jobdesk:
      "<ul><li>Menyusun dan memelihara catatan keuangan, termasuk pembukuan, anggaran, dan laporan keuangan. Mengelola arus kas, pembayaran, dan pendanaan.</li><li>Menyusun, mengelola, dan menyimpan dokumentasi organisasi, termasuk notulen rapat, arsip, dan korespondensi.</li><li>Mengatur jadwal pertemuan, rapat, dan acara organisasi. Menyusun agenda, mencatat notulen, dan menyebarluaskan informasi kepada peserta.</li><li>Memastikan bahwa semua transaksi keuangan dan proses administrasi mematuhi kebijakan organisasi dan peraturan hukum yang berlaku.</li><li>Mengelola komunikasi internal dengan staf dan anggota tim serta menyampaikan informasi penting, serta berkoordinasi dengan donor dan pihak eksternal terkait administrasi dan keuangan.</li></ul>",
    image: "afif.png",
  },
];

export default teams;
