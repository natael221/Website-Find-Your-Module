const userInterest = ["programming", "security", "marketing", "design"];

const modulesData = [
    { interest: "programming", image: "/Img/programming.png", title: "Programming Module", link: "programming.html" },
    { interest: "design", image: "/Img/design.png", title: "Design Module", link: "design.html" },
    { interest: "marketing", image: "/Img/cloud.jpeg", title: "Cloud Module", link: "cloud.html" },
    // { interest: "security", image: "/Img/programming.png", title: "Security Module", link: "marketing.html" },
    // { interest: "marketing", image: "/Img/programming.png", title: "Marketing Module", link: "marketing.html" },
    // { interest: "security", image: "/Img/programming.png", title: "Security Module", link: "marketing.html" },
    // { interest: "marketing", image: "/Img/programming.png", title: "Marketing Module", link: "marketing.html" },
    // { interest: "security", image: "/Img/programming.png", title: "Security Module", link: "marketing.html" },
    // { interest: "security", image: "/Img/programming.png", title: "Security Module", link: "marketing.html" },
    // { interest: "marketing", image: "/Img/programming.png", title: "Marketing Module", link: "marketing.html" },
    // { interest: "security", image: "/Img/programming.png", title: "Security Module", link: "marketing.html" },
    // { interest: "marketing", image: "/Img/programming.png", title: "Marketing Module", link: "marketing.html" },
    // { interest: "security", image: "/Img/programming.png", title: "Security Module", link: "marketing.html" },
    // Tambahkan data modul lainnya sesuai kebutuhan
];

document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.getElementById("dashboard");

    let currentRow = null; // Menyimpan elemen yang berfungsi sebagai row
    let modulesInCurrentRow = 0; // Menghitung jumlah modul dalam row saat ini

    modulesData.forEach(moduleData => {
        if (userInterest.includes(moduleData.interest)) {
            // Hanya menambahkan modul jika minat pengguna cocok
            if (!currentRow || modulesInCurrentRow === 4) {
                // Jika tidak ada row saat ini atau row saat ini sudah memiliki 4 kolom, buat row baru
                currentRow = createRowElement();
                dashboard.appendChild(currentRow);
                modulesInCurrentRow = 0; // Setel ulang jumlah modul dalam row saat ini
            }

            const moduleElement = createModuleElement(moduleData);
            currentRow.appendChild(moduleElement);

            modulesInCurrentRow++; // Tambahkan jumlah modul dalam row saat ini

            // Menambahkan event listener untuk menangani klik pada modul
            moduleElement.addEventListener("click", function () {
                // Mengarahkan ke file atau URL tanpa membuka tab baru
                window.location.href = moduleData.link;
            });
        }
    });
});

function createRowElement() {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    return rowElement;
}

function createModuleElement(moduleData) {
    const moduleElement = document.createElement("div");
    moduleElement.classList.add("module");

    const imageElement = document.createElement("img");
    imageElement.src = moduleData.image;
    imageElement.alt = moduleData.title;

    const titleElement = document.createElement("h3");
    titleElement.textContent = moduleData.title;

    moduleElement.appendChild(imageElement);
    moduleElement.appendChild(titleElement);

    return moduleElement;
}