const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      toggle.classList.toggle("show-icon");
    });
  }
};

showMenu("nav-toggle", "nav-menu");


const sections = document.querySelectorAll(".fade-section");

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
}


const studentForm = document.getElementById("studentForm");

if (studentForm) {
  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send("service_vl7cux7", "template_od50xpi", {
        il: studentForm.il.value,
        ilce: studentForm.ilce.value,
        veli: studentForm.veli.value,
        ogrenci: studentForm.ogrenci.value,
        sinif: studentForm.sinif.value,
        telefon: studentForm.telefon.value,
        saat: studentForm.saat.value,
        egitimModeli: studentForm.egitimModeli.value,
      })
      .then(() => {
        alert("Başvurunuz başarıyla gönderildi ✅");
        studentForm.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Bir hata oluştu ❌ Lütfen tekrar deneyin.");
      });
  });
}

const teacherForm = document.getElementById("teacherForm");

if (teacherForm) {
  teacherForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send("service_vl7cux7", "template_hkd70gl", {
        ad: teacherForm.ad.value,
        email: teacherForm.email.value,
        cinsiyet: teacherForm.cinsiyet.value,
        yas: teacherForm.yas.value,
        sehir: teacherForm.sehir.value,
        ilce: teacherForm.ilce.value,
        telefon: teacherForm.telefon.value,
        egitim: teacherForm.egitim.value,
        okul: teacherForm.okul.value,
        matematikBag: teacherForm.matematikBag.value,
        tecrube: teacherForm.tecrube.value,
        referans: teacherForm.referans.value,
      })
      .then(() => {
        alert("Eğitmen başvurunuz başarıyla gönderildi ✅");
        teacherForm.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Bir hata oluştu ❌ Lütfen tekrar deneyin.");
      });
  });
}
