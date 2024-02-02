const About = () => (
  <div className="p-2">
    <div className="md:border p-5 md:w-8/12 md:shadow md:rotate-[-0.5deg] mx-auto text-neutral-600 dark:text-neutral-200 dark:border-neutral-800">
      <h2 className="font-bold text-3xl leading-loose mb-2 text-black dark:text-neutral-200">
        Notes from @faultables
      </h2>
      <p className="mb-6">
        Sebelumnya saya menjalankan <em>instance</em>{" "}
        <a
          href="https://pixelfed.org"
          className="underline"
          target="_blank"
          rel="noopener noreferer"
        >
          Pixelfed
        </a>{" "}
        selama bertahun-tahun sebagai alternatif dari sosial media mainstream
        yang dijalankan oleh "big co". Pixelfed masih dalam tahap pengembangan,
        sehingga, adanya bug dan masalah acak lainnya adalah hal yang wajar.
      </p>
      <p className="mb-6">
        Disamping itu, Pixelfed sangat menjanjikan: menggunakan protokol{" "}
        <a
          href="https://www.w3.org/TR/activitypub/"
          className="underline"
          target="_blank"
          rel="noopener noreferer"
        >
          ActivityPub
        </a>{" "}
        sehingga bisa "berfederasi" dengan <em>instance</em> lain, dan yang
        paling penting adalah{" "}
        <a
          href="https://github.com/pixelfed/pixelfed"
          classname="underline"
          target="_blank"
          rel="noopener noreferer"
        >
          bersumber kode terbuka
        </a>{" "}
        <strong>dan</strong> dikembangkan murni oleh komunitas. Pixelfed
        mendukung fitur standar untuk bersosial media seperti memperbaharui
        status, mengikuti pengguna, mengirim komentar, menyukai, intinya fitur
        bersosial apapun yang sudah menjadi mainstream. Meskipun saya sudah
        memiliki akun sosial media lainnya di "universe"{" "}
        <a
          href="https://joinmastodon.org"
          className="underline"
          target="_blank"
          rel="noopener noreferer"
        >
          Mastodon
        </a>
        , saya memilih Pixelfed murni hanya untuk berbagi media dalam bentuk
        foto saja.
      </p>
      <p className="mb-6">
        Tapi, ya, saya tidak menggunakan Pixelfed sesering itu. Saya melakukan
        optimasi gambar secara manual berikut menghapus metadata exif dan
        memotong gambar ke 1024px tanpa menggunakan fitur built-in (crop) karena
        terkadang fiturnya tidak berjalan sesuatu dengan yang harapkan.
      </p>
      <p className="mb-6">
        Secara teknis, menjalankan 2 aplikasi (Laravel & Horizon) plus MySQL
        bukanlah hal yang sulit dan mahal, namun bagaimanapun, saya tidak
        menggunakan "fitur sosial" yang ada di Pixelfed karena itulah yang saya
        inginkan sehingga terkesan seperti berlebihan.
      </p>
      <p className="mb-6">
        Jika kamu seorang fotografer, kamu bisa mencoba Pixelfed. Kamu juga bisa
        berinteraksi dengan komunitas di jaringan yang sama—selama menggunakan
        protokol ActivityPub—karena Pixelfed adalah jaringan federasi!
      </p>
      <p className="mb-6">
        Bagaimanapun, pilihan ini bukanlah pendekatan yang terbaik. Tapi
        setidaknya, ini tidak berlebihan, khususnya untuk saat ini.
      </p>
      <br />
      <a
        href="https://github.com/faultables"
        target="_blank"
        rel="noopener noreferer"
      >
        <p className="mb-6">— faultables</p>
      </a>
    </div>
  </div>
);

export default About;
