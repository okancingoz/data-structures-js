const basket = ["apples", "grapes", "pears"];

//linked list : apples --> grapes --> pears

/*
!Dizi (Array)
Sabit boyutlu: Oluşturulduğunda boyutu belirlenir (statik dizi). Dinamik dizi de olabilir ama bellekte ardışık yer ister.

Ardışık bellek: Elemanlar bellekte yan yana saklanır.

Hızlı erişim: Belirli bir indeksteki elemana doğrudan erişilebilir → O(1) zaman.

Ekleme/silme maliyetli: Ortaya eleman eklemek ya da silmek için diğer elemanlar kaydırılır → O(n) zaman.
----------------------------------------------------------------
!Bağlı Liste (Linked List)
Esnek boyutlu: İhtiyaca göre genişleyebilir, önceden boyut belirlemeye gerek yok.

Dağınık bellek: Elemanlar bellekte dağınık yerlerde olabilir, her eleman bir sonrakinin adresini tutar.

Sıralı erişim: Belirli bir elemana erişmek için baştan itibaren ilerlemek gerekir → O(n) zaman.

Kolay ekleme/silme: Ortaya eleman eklemek/silmek kolaydır, sadece bağlantılar güncellenir → O(1) zaman (doğru yere erişildiyse).

*prepend = O(1)
*append = O(1)
*lookup = O(n)
*insert = O(n)
*delete = O(n)
*/

//?Pointer : Bellekte başka bir yere veya başka bir nesneye ya da başka bir düğüme referanstır.

let obj1 = {
  a: true,
};
let obj2 = obj1;
obj1.a = "booya";
obj1 = null;
obj2 = "hello";
console.log(obj1, obj2);
