//*idempotent -> bağımsız ve bağlantısız (çıktıdan girdiye ulaşmak imkansız, tek yönlüdür)

//* Hash tabloları ne kadar optimize edilmiş olsalar bile bellekte aynı adrese farklı verileri koyabilir (Yaygın bilinen adı collision(çakışma) - sha1 ve md5 şifreleme algoritmalarında bu tespit edildiğinden artık güvenli değil, sha256 daha yavaş olsa ya güvenlidir ve aktif olarak kullanılmaktadır, henüz collision tespit edilmedi (bitcoin ve blockchain sistemleri,https sertifikaları gibi önemli alanlarda kullanılıyor))

//* insert -> O(1)
//* lookup -> O(1)
//* delete -> O(1)
//* search -> O(1)

const user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("wizaaaaard");
  },
};

console.log(user.age); // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

const a = new Map(); // *ES6 ile gelmiştir.Her türden anahtarı destekler(string, number, object, function),sıralıdır, ekleme sırasını korur, daha optimizedir, daha fazla özellik sunar (size,keys(),values(),entries(),vb.)

const b = new Set(); //* Sadece anahtarları depolar
