// download-images.js
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Масив даних JSON
const data = [
    {
        id: "1",
        title: "Echinodorus Grisebachii Amazonicus",
        subtitle: "Ехінодорус Амазонський",
        image: "http://www.echinodorus.com.ua/static/media/1.57c584ba7905d233335a.jpg",
        description: ""
    },
    {
        id: "2",
        title: "Echinodorus Ozelot",
        subtitle: "Ехінодорус Озелот",
        image: "http://www.echinodorus.com.ua/static/media/2.jpg",
        description: ""
    }
];

// Папка для збереження картинок
const imagesFolder = path.join(__dirname, "images");
if (!fs.existsSync(imagesFolder)) {
    fs.mkdirSync(imagesFolder);
}

// Функція для завантаження картинки
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filename);
        const client = url.startsWith("https") ? https : http;
        client.get(url, (res) => {
            res.pipe(file);
            file.on("finish", () => {
                file.close(resolve);
            });
        }).on("error", (err) => {
            fs.unlink(filename, () => reject(err));
        });
    });
}

async function downloadAll() {
    for (const item of data) {
        try {
            const ext = path.extname(item.image); // .jpg
            const safeTitle = item.title.replace(/ /g, "_").replace(/'/g, "");
            const filename = path.join(imagesFolder, `${item.id}_${safeTitle}${ext}`);
            await downloadImage(item.image, filename);
            console.log(`Завантажено: ${filename}`);
        } catch (err) {
            console.error("Помилка завантаження:", item.image, err);
        }
    }
    console.log("Всі картинки завантажені!");
}

downloadAll();