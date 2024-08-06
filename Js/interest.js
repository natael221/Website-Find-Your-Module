    let userData = {};

    function openForm() {
        document.getElementById("popupForm").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

    function submitForm(event) {
        event.preventDefault(); // Menghentikan pengiriman formulir agar dapat diproses secara manual

        // Mengambil nilai dari formulir
        const username = document.getElementById("username").value;
        const education = document.getElementById("education").value;
        const work = document.getElementById("work").value;
        const skills = document.getElementById("skills").value;
        const interests = document.getElementById("interests").value;

        // Menyimpan data ke dalam objek userData
        userData = {
            username,
            education,
            work,
            skills,
            interests,
        };

        // Menampilkan data yang telah disimpan
        alert("Form submitted!\nData: " + JSON.stringify(userData));

        // Menyimpan data ke dalam file teks (menggunakan metode sederhana, bisa disempurnakan)
        const dataToSave = JSON.stringify(userData);
        const blob = new Blob([dataToSave], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "userData.txt";
        link.click();
        window.location.href = "modules.html";

        // Menutup formulir setelah pengiriman
        closeForm();
    }

    // Fungsi untuk mengisi formulir jika data sudah ada
    function fillFormWithUserData() {
        // Cek apakah userData memiliki data
        if (Object.keys(userData).length > 0) {
            document.getElementById("username").value = userData.username;
            document.getElementById("education").value = userData.education;
            document.getElementById("work").value = userData.work;
            document.getElementById("skills").value = userData.skills;
            document.getElementById("interests").value = userData.interests;
        }
    }

    // Panggil fungsi untuk mengisi formulir dengan data yang sudah ada
    fillFormWithUserData();