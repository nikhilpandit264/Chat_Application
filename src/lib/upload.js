// upload.js
import { getDatabase, ref, push, set } from "firebase/database";

const upload = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = async () => {
            try {
                const db = getDatabase();
                const imagesRef = ref(db, "images");
                const newImageRef = push(imagesRef);

                // Save Base64 in DB
                await set(newImageRef, {
                    name: file.name,
                    data: reader.result,
                    createdAt: Date.now()
                });

                // ✅ Return the Base64 data for direct <img src>
                resolve(reader.result);

            } catch (error) {
                reject("Something went wrong! " + error.message);
            }
        };

        reader.onerror = () => reject("File reading failed!");

        reader.readAsDataURL(file); // ✅ Base64 conversion
    });
};

export default upload;
