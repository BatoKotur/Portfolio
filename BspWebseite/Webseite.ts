namespace Webseite {

    interface Artikel {

        bezeichnung: string;
        kurzbeschreibung: string;
        preis: number;
        artikelzahl: number;
        lieferzeit: string;
        aktion: boolean;
        farbe: string[];
        breite: number;
        hoehe: number;
        tiefe: number;
        url: string;
        stoerer: string;
        kategorie: string;
        marke: string;
        prozessor: string;
    }

    var A1: Artikel = {

        bezeichnung: "HP ENVY x360 15-bq102ng",
        kurzbeschreibung: "15,6 FHD IPS Touch, AMD Ryzen 5 2500U Quad-Core, 8GB DDR4, 256GB PCIe SSD, Win10",
        preis: 777,
        artikelzahl: 30,
        lieferzeit: "2 Tage",
        aktion: true,
        farbe: ["schwarz", "grau"],
        breite: 0.4,
        hoehe: 0.3,
        tiefe: 0.2,
        url: "HP.jpg",
        stoerer: "neu",
        kategorie: "500",
        marke: "HP",
        prozessor: "ryzen5"
    }

    var A2: Artikel = {

        bezeichnung: "Apple MacBook Air 13 MQD32DA",
        kurzbeschreibung: "A Intel Core i5 1.8GHz, 8GB Ram, 128GB SSD, macOS High Sierra - 2017",
        preis: 928,
        artikelzahl: 5,
        lieferzeit: "4 Tage",
        aktion: true,
        farbe: ["weiﬂ", "grau"],
        breite: 0.6,
        hoehe: 0.28,
        tiefe: 0.15,
        url: "Apple.jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Apple",
        prozessor: "i5"
    }

    var A3: Artikel = {

        bezeichnung: "Lenovo V110-15IKB 80TH002WGE",
        kurzbeschreibung: "15,6 Full HD Display, Intel Pentium Dual-Core, 4GB, 256GB SSD, Win 10",
        preis: 349,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Lenovo.jpg",
        stoerer: "",
        kategorie: "250",
        marke: "Lenovo",
        prozessor: "intelpentium"
    }

    var A4: Artikel = {

        bezeichnung: "Lenovo Yoga 520-14IKB",
        kurzbeschreibung: "Full HD IPS, Core i5-7200U, 8GB DDR4, 128GB PCIe SSD, Win10",
        preis: 729,
        artikelzahl: 9,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Lenovo(1).jpg",
        stoerer: "neu",
        kategorie: "500",
        marke: "Lenovo",
        prozessor: "i5"
    }

    var A5: Artikel = {

        bezeichnung: "Asus VivoBook F540UA-DM304T",
        kurzbeschreibung: "15,6 Full-HD / Intel Core i5-7200U / 8GB RAM / 256GB SSD / Windows 10",
        preis: 529,
        artikelzahl: 70,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Asus.jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Asus",
        prozessor: "i5"
    }

    var A6: Artikel = {

        bezeichnung: "Acer Aspire 7 A717-71G-76SA",
        kurzbeschreibung: " Intel Core i7-7700HQ 8GB DDR4 1000GB HDD GeForce GTX 1050Ti Full-HD IPS Windows 10",
        preis: 888,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Acer.jpg",
        stoerer: "noch 5",
        kategorie: "500",
        marke: "Acer",
        prozessor: "i7"
    }

    var A7: Artikel = {

        bezeichnung: "MSI GL72MVR 2018",
        kurzbeschreibung: "17,3 Full HD, Core i7-7700HQ, GTX 1060 6GB, 8GB RAM, 1TB Speicher, FreeDOS",
        preis: 989,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "MSI.jpg",
        stoerer: "",
        kategorie: "500",
        marke: "MSI",
        prozessor: "i7"
    }

    var A8: Artikel = {

        bezeichnung: "TREKSTOR PRIMEBOOK C13",
        kurzbeschreibung: "Volks-Notebook",
        preis: 319,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Trekstor.jpg",
        stoerer: "neu",
        kategorie: "250",
        marke: "Trekstor",
        prozessor: "intelceleron"
    }

    var A9: Artikel = {

        bezeichnung: "Lenovo Legion Y520-15IKBN",
        kurzbeschreibung: "15.6 Full HD IPS, i5-7300HQ, 8GB RAM, 1000GB HDD, GTX 1050, ohne Win",
        preis: 699,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Lenovo(2).jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Lenovo",
        prozessor: "i5"
    }

    var A10: Artikel = {

        bezeichnung: "Dell Inspiron 15 7577 Gaming",
        kurzbeschreibung: "15,6 FHD / Intel Core i7-7700HQ / 16GB RAM / 1TB+128GB SSD / GeForce GTX 1050Ti / Windows 10",
        preis: 1.079,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Dell.jpg",
        stoerer: "noch 2",
        kategorie: "1000",
        marke: "Dell",
        prozessor: "i7"
    }

    var A11: Artikel = {

        bezeichnung: "Microsoft Surface Laptop",
        kurzbeschreibung: "256GB mit Intel Core i5 & 8GB RAM - Platin Grau",
        preis: 1.249,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Microsoft.jpg",
        stoerer: "",
        kategorie: "1000",
        marke: "Microsoft",
        prozessor: "i5"
    }

    var A12: Artikel = {

        bezeichnung: "Dell XPS 13 9360R Ultrabook",
        kurzbeschreibung: "13,3 Full-HD / Intel Core i5-8250U / 8GB RAM / 256GB SSD / Windows 10",
        preis: 1.099,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Dell(2).jpg",
        stoerer: "",
        kategorie: "1000",
        marke: "Dell",
        prozessor: "i5"
    }

    var A13: Artikel = {

        bezeichnung: "HP 17-bs007ng",
        kurzbeschreibung: "17,3 HD+, Intel Pentium N3710, 4 GB DDR4, 500GB HDD, DVD, FreeDos",
        preis: 299,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "HP(1).jpg",
        stoerer: "",
        kategorie: "250",
        marke: "HP",
        prozessor: "intelpentium"
    }

    var A14: Artikel = {

        bezeichnung: "Apple MacBook Pro 15",
        kurzbeschreibung: "Space Grau 2017 MPTT2D/A 2.9GHz, 16GB RAM, 512GB SSD, Radeon Pro 560, macOS High Sierra - Touch Bar",
        preis: 2.282,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Apple(1).jpg",
        stoerer: "",
        kategorie: "2000",
        marke: "Apple",
        prozessor: "i7"
    }

    var A15: Artikel = {

        bezeichnung: "Acer Predator Helios 300 G3-572-79KL",
        kurzbeschreibung: " Intel Core i7-7700HQ 8GB DDR4 1000GB HDD GTX 1060 Full-HD IPS Linux",
        preis: 999,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Acer(1).jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Acer",
        prozessor: "i7"
    }

    var A16: Artikel = {

        bezeichnung: "ASUS Transformer Mini T103HAF",
        kurzbeschreibung: "10 Touch / Intel Core x5-Z8350 / 4GB RAM / 128 GB eMMC / Windows10",
        preis: 395,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Asus(1).jpg",
        stoerer: "",
        kategorie: "250",
        marke: "Asus",
        prozessor: "intelatom"
    }

    var A17: Artikel = {

        bezeichnung: "MEDION ERAZER P6681",
        kurzbeschreibung: " 15,6 Full HD IPS, Core i5-7200U, GTX 1050 4GB, 8GB, 256GB SSD + 1000GB HDD, Win10",
        preis: 799,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Medion.jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Medion",
        prozessor: "i5"
    }

    var A18: Artikel = {

        bezeichnung: "Toshiba Satellite Pro A50-C-24C",
        kurzbeschreibung: "15,6 FHD IPS, Intel Core i7-6500U, 16GB, 256GB SSD, GeForce 930M, Win10 Pro",
        preis: 899,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Toshiba.jpg",
        stoerer: "neu",
        kategorie: "500",
        marke: "Toshiba",
        prozessor: "i7"
    }

    var A19: Artikel = {

        bezeichnung: "SCHENKER XMG A507-NBB",
        kurzbeschreibung: "15,6 Full HD IPS, Core i5-7300HQ, 16GB, 1TB + 128GB SSD, GTX 1050 Ti 4GB, DOS",
        preis: 949,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "XMG.jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Schenker",
        prozessor: "i5"
    }

    var A20: Artikel = {

        bezeichnung: "Fujitsu LIFEBOOK A555",
        kurzbeschreibung: "15,6 HD matt, Core i3-5005U, 8GB, 256 GB SSD, Win 7 Pro + Win 10 Pro",
        preis: 560,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Fujitsu.jpg",
        stoerer: "",
        kategorie: "500",
        marke: "Fujitsu",
        prozessor: "i3"
    }

    var A21: Artikel = {

        bezeichnung: "Dell Alienware 15 R3",
        kurzbeschreibung: "15,6 Full-HD / Intel Core i7-7700HQ / 16GB RAM / 1TB HDD + 256GB SSD / GeForce GTX1070 (8GB) / Windows",
        preis: 1.899,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Alienware.jpg",
        stoerer: "neu",
        kategorie: "1500",
        marke: "Dell",
        prozessor: "i7"
    }

    var A22: Artikel = {

        bezeichnung: "Acer Swift 1 SF113-31-P7Z0",
        kurzbeschreibung: "13 Full-HD IPS Intel Quad-Core N4200 4GB 128GB SSD ohne Windows gold",
        preis: 399,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Acer(2).jpg",
        stoerer: "",
        kategorie: "250",
        marke: "Acer",
        prozessor: "intelpentium"
    }

    var A23: Artikel = {

        bezeichnung: "Asus Zenbook 13 UX331UN",
        kurzbeschreibung: "13,3 Full-HD / Intel Core i7-8550U / 8GB RAM / 512GB SSD / GeForce MX150 / Windows 10",
        preis: 1.199,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Asus(2).jpg",
        stoerer: "",
        kategorie: "1000",
        marke: "Asus",
        prozessor: "i7"
    }

    var A24: Artikel = {

        bezeichnung: "Asus ROG GL503VM-ED091T",
        kurzbeschreibung: "15,6 Full-HD / Intel Core i7-7700HQ / 16GB RAM / 1TB HDD + 256GB SSD / GeForce GTX 1060 / Windows 10",
        preis: 1.449,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Asus(3).jpg",
        stoerer: "",
        kategorie: "1000",
        marke: "Asus",
        prozessor: "i7"
    }

    var A25: Artikel = {

        bezeichnung: "OMEN by HP 17-an014ng",
        kurzbeschreibung: "17,3 FHD 120Hz, Intel Core i7-7700HQ, 16GB DDR4, 1TB HDD + 256GB SSD, GeForce GTX 1070 8GB, Win 10",
        preis: 1.899,
        artikelzahl: 59,
        lieferzeit: "3 Tage",
        aktion: false,
        farbe: ["weiﬂ", "schwarz"],
        breite: 0.5,
        hoehe: 0.3,
        tiefe: 0.1,
        url: "Omen.jpg",
        stoerer: "neu",
        kategorie: "1500",
        marke: "HP",
        prozessor: "i7"
    }

    var arrayArtikel: Artikel[] = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, A21, A22, A23, A24, A25];

    function generateProductOverview(): void {

        var node: any = document.getElementById("content");

        var childNodeHTML: string;

        var i: number = 0;

        while (i < arrayArtikel.length) {

            childNodeHTML = "";
            childNodeHTML += "<article ";
            childNodeHTML += "id=filter" + i + " >";
            childNodeHTML += "<section>";

            if (arrayArtikel[i].stoerer != "") {

                childNodeHTML += "<div class=Stoerer>";
                childNodeHTML += arrayArtikel[i].stoerer;
                childNodeHTML += "</div>";
            }

            childNodeHTML += "<img src=imgs/";
            childNodeHTML += arrayArtikel[i].url;
            childNodeHTML += ">";
            childNodeHTML += "<ul>";
            childNodeHTML += "<li><strong>";
            childNodeHTML += arrayArtikel[i].bezeichnung;
            childNodeHTML += "</strong></li>";
            childNodeHTML += "<p><li><strong>";
            childNodeHTML += arrayArtikel[i].kurzbeschreibung;
            childNodeHTML += "</p></strong></li>";
            childNodeHTML += "<li><p><b>";
            childNodeHTML += arrayArtikel[i].preis + ",00";
            childNodeHTML += "</b></p></li>";
            childNodeHTML += "<li><button>";
            childNodeHTML += "In den Warenkorb";
            childNodeHTML += "</li></button>";
            childNodeHTML += "</ul>";
            childNodeHTML += "</section>";
            childNodeHTML += "</article>";

            node.innerHTML += childNodeHTML;

            i++;
        }
    }

    function filterByPreis(price: string): void {

        console.log("Filter", price);

        var i: number = 0;

        while (i < arrayArtikel.length) {

            var node: any = document.getElementById("filter" + i);

            console.log("filter" + i);

            if (arrayArtikel[i].kategorie != price && price != "all") {

                node.style.display = "none";

            } else {

                node.style.display = "initial";

            }

            i++;

        }
    }

    function filterByBrand(brand: string): void {

        console.log("Filter", brand);

        var i: number = 0;

        while (i < arrayArtikel.length) {

            var node: any = document.getElementById("filter" + i);

            console.log("filter" + i);

            if (arrayArtikel[i].marke != brand && brand != "all") {

                node.style.display = "none";

            } else {

                node.style.display = "initial";

            }

            i++;

        }
    }

    function filterByProcessor(processor: string): void {

        console.log("Filter", processor);

        var i: number = 0;

        while (i < arrayArtikel.length) {

            var node: any = document.getElementById("filter" + i);

            console.log("filter" + i);

            if (arrayArtikel[i].prozessor != processor && processor != "all") {

                node.style.display = "none";

            } else {

                node.style.display = "initial";

            }

            i++;

        }
    }

    function main(): void {

        console.log("main");

        generateProductOverview();

        document.getElementById("allFilter").addEventListener('click', function() {
            filterByPreis("all");
        });

        document.getElementById("250bis500Filter").addEventListener('click', function() {
            filterByPreis("250");
        });

        document.getElementById("500bis1000Filter").addEventListener('click', function() {
            filterByPreis("500");
        });

        document.getElementById("1000bis1500Filter").addEventListener('click', function() {
            filterByPreis("1000");
        });

        document.getElementById("1500bis2000Filter").addEventListener('click', function() {
            filterByPreis("1500");
        });

        document.getElementById("2000bis2500Filter").addEventListener('click', function() {
            filterByPreis("2000");
        });

        document.getElementById("AsusFilter").addEventListener('click', function() {
            filterByBrand("Asus");
        });

        document.getElementById("AcerFilter").addEventListener('click', function() {
            filterByBrand("Acer");
        });

        document.getElementById("MSIFilter").addEventListener('click', function() {
            filterByBrand("MSI");
        });

        document.getElementById("FujitsuFilter").addEventListener('click', function() {
            filterByBrand("Fujitsu");
        });

        document.getElementById("SchenkerFilter").addEventListener('click', function() {
            filterByBrand("Schenker");
        });

        document.getElementById("DellFilter").addEventListener('click', function() {
            filterByBrand("Dell");
        });

        document.getElementById("ToshibaFilter").addEventListener('click', function() {
            filterByBrand("Toshiba");
        });

        document.getElementById("HPFilter").addEventListener('click', function() {
            filterByBrand("HP");
        });

        document.getElementById("TrekstorFilter").addEventListener('click', function() {
            filterByBrand("Trekstor");
        });

        document.getElementById("i7Filter").addEventListener('click', function() {
            filterByProcessor("i7");
        });

        document.getElementById("i5Filter").addEventListener('click', function() {
            filterByProcessor("i5");
        });

        document.getElementById("i3Filter").addEventListener('click', function() {
            filterByProcessor("i3");
        });

        document.getElementById("ipentiumFilter").addEventListener('click', function() {
            filterByProcessor("intelpentium");
        });

        document.getElementById("iatomFilter").addEventListener('click', function() {
            filterByProcessor("intelatom");
        });

        document.getElementById("iceleronFilter").addEventListener('click', function() {
            filterByProcessor("intelceleron");
        });

    }

    document.addEventListener('DOMContentLoaded', main);

}



