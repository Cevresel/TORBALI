function showInfo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Bilgilendirme</h2>
        <p>Proje hakkında detaylı bilgi burada yer alacak.</p>
    `;
}

function showDataEntry() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Veri Girişi</h2>
        <form id="data-entry-form">
            <label for="username">Kullanıcı Adı:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Şifre:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Giriş Yap</button>
        </form>
    `;

    document.getElementById('data-entry-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'Mustafa Kemal' && password === '1881') {
            showDataForm();
        } else {
            alert('Hatalı kullanıcı adı veya şifre');
        }
    });
}

function showDataForm() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Veri Girişi Formu</h2>
        <form id="data-form">
            <label for="school">Okul:</label>
            <input type="text" id="school" name="school" required><br><br>
            <label for="city">İl:</label>
            <input type="text" id="city" name="city" required><br><br>
            <label for="district">İlçe:</label>
            <input type="text" id="district" name="district" required><br><br>
            <label for="school-number">Okul Numarası:</label>
            <input type="text" id="school-number" name="school-number" required><br><br>
            <label for="waste-type">Atık Türü:</label>
            <select id="waste-type" name="waste-type" required>
                <option value="Kağıt/Karton">Kağıt/Karton</option>
                <option value="Plastik">Plastik</option>
                <option value="Cam">Cam</option>
                <option value="Metal">Metal</option>
                <option value="Pil ve Elektronik Atıklar">Pil ve Elektronik Atıklar</option>
            </select><br><br>
            <label for="waste-weight">Atık Kilogramı:</label>
            <input type="number" id="waste-weight" name="waste-weight" required><br><br>
            <button type="submit">Veri Girişi Yap</button>
        </form>
    `;

    document.getElementById('data-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const wasteType = document.getElementById('waste-type').value;
        const wasteWeight = document.getElementById('waste-weight').value;
        let points = 0;
        switch (wasteType) {
            case 'Kağıt/Karton':
                points = wasteWeight * 10;
                break;
            case 'Plastik':
                points = wasteWeight * 15;
                break;
            case 'Cam':
                points = wasteWeight * 20;
                break;
            case 'Metal':
                points = wasteWeight * 25;
                break;
            case 'Pil ve Elektronik Atıklar':
                points = wasteWeight * 50;
                break;
        }
        alert(`Hesaplanan Puan: ${points}`);
    });
}

function showRegister() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Kayıt Ol
