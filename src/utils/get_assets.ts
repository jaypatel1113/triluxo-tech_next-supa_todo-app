import fs from "fs";
import path from "path";

import type { Asset, AssetType } from "~/types";

function getFilesRecursively(folderPath: string): string[] {
    const files = [];
    const entries = fs.readdirSync(folderPath);

    for (const entry of entries) {
        const entryPath = path.join(folderPath, entry);
        const normalizedEntryPath = path.normalize(entryPath);

        const stat = fs.statSync(normalizedEntryPath);

        if (stat.isDirectory()) {
            files.push(...getFilesRecursively(normalizedEntryPath));
        } else if (stat.isFile()) {
            files.push(normalizedEntryPath.replace(/\\/g, "/")); // Replace backslashes with forward slashes
        }
    }

    return files;
}

export function getAssets(): Asset[] {
    const publicFolder = path.join(process.cwd(), "public");
    const assetFiles = getFilesRecursively(publicFolder);

    const assets: Asset[] = assetFiles.map((filePath) => {
        const fileExtension = path.extname(filePath);
        const assetType: AssetType =
            fileExtension === ".jpg" || fileExtension === ".png" ? "image"
                : fileExtension === ".mp4" ? "video"
                : (fileExtension === ".woff" || fileExtension === ".otf" || fileExtension === ".ttf") ? "font"
                : fileExtension === ".svg" ? "svg"
                : "generic";

        let name: string | null = null;

        if (assetType === "font") {
            name = path.basename(filePath, fileExtension);
        }

        return {
            
name: name, 
            // Replace backslashes with forward slashes
type: assetType,
            url: `/${path.relative(publicFolder, filePath)}`.replace(/\\/g, "/"),
        };
    });

    return assets;
}
