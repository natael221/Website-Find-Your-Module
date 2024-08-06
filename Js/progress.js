const userInterest = ["programming", "security", "marketing", "design"];

const modulesData = [
    { interest: "programming", image: "/Img/programming.png", title: "Programming Modules", link: "programming.html", progress: 75 },
    { interest: "design", image: "/Img/design.png", title: "Design Modules", link: "design.html", progress: 40 },
    { interest: "marketing", image: "/Img/cloud.jpeg", title: "Cloud Modules", link: "cloud.html", progress: 20 },
    // ... (tambahkan data modul lainnya sesuai kebutuhan)
];

document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.getElementById("dashboard");

    let currentRow = null;
    let modulesInCurrentRow = 0;

    document.addEventListener("DOMContentLoaded", async function () {
    const dashboard = document.getElementById("dashboard");

    try {
        // Simulasi pengambilan data modul dari sumber eksternal (contoh: endpoint API)
        const modulesData = await fetchModulesData();
        
        let currentRow = null;
        let modulesInCurrentRow = 0;

        modulesData.forEach(moduleData => {
            if (userInterest.includes(moduleData.interest)) {
                if (!currentRow || modulesInCurrentRow === 4) {
                    currentRow = createRowElement();
                    dashboard.appendChild(currentRow);
                    modulesInCurrentRow = 0;
                }

                const moduleElement = createModuleElement(moduleData);
                const progressBarElement = createProgressBarElement(moduleData.progress);

                moduleElement.appendChild(progressBarElement);

                currentRow.appendChild(moduleElement);

                modulesInCurrentRow++;

                // Menambahkan event listener untuk menangani klik pada modul
                moduleElement.addEventListener("click", function () {
                    window.location.href = moduleData.link;
                });
            }
        });
    } catch (error) {
        console.error("Gagal mengambil data modul:", error);
    }
});

async function fetchModulesData() {
    // Simulasi pengambilan data modul dari sumber eksternal (contoh: endpoint API)
    const response = await fetch("https://example.com/api/modules");
    const data = await response.json();
    return data.modules;
}
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

function createProgressBarElement(progress) {
    const progressBarElement = document.createElement("div");
    progressBarElement.classList.add("progress-bar");

    const progressElement = document.createElement("div");
    progressElement.classList.add("progress");
    progressElement.style.width = `${progress}%`;
    progressElement.textContent = `${progress}%`;

    progressBarElement.appendChild(progressElement);

    return progressBarElement;
}
