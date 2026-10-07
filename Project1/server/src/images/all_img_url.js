import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import sharp from 'sharp';
import fs from 'fs/promises';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.Cloud_name,
    api_key: process.env.Api_key,
    api_secret: process.env.Api_secret
});

export const single_img_url = async (path) => {
    try {

        const compressedPath = `${path}-compressed.webp`;

        await sharp(path).resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 70 }).toFile(compressedPath);

        const uploadResult = await cloudinary.uploader.upload(compressedPath, { folder: 'images', resource_type: 'image' });

        await fs.unlink(compressedPath);

        console.log("Original:", path);
        console.log("Uploaded:", uploadResult.secure_url);

        return uploadResult.secure_url;

    }
    catch (err) {
        console.log(err.message);
        throw err;
    }
};


export const multiple_img_url = async (paths) => {
    try {

        const compressedPath = `${paths}-compressed.webp`;

        await sharp(paths).resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 70 }).toFile(compressedPath);

        const uploadResult = await cloudinary.uploader.upload(compressedPath, { folder: 'images', resource_type: 'image' });

        await fs.unlink(compressedPath);

        console.log("Original:", paths);
        console.log("Uploaded:", uploadResult.secure_url);

        return uploadResult.secure_url;

    }
    catch (err) {
        console.log(err.message);
        throw err;
    }
};


export const delete_img_url = async (publicId) => {
    try {
        const deleteResult = await cloudinary.uploader.destroy(compressedPath, { folder: 'images', resource_type: 'image' });
        return deleteResult;

    }
    catch (err) {
        console.log(err.message);
        throw err;
    }
};


