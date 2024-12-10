// export const  BASE_URl="http://localhost:8000/api/v1"
export const BASE_URl = "https://book-my-adventure.onrender.com/api/v1"

// bloom filter searching technique 
import {stat} from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const currentWorkingDir = process.cwd();
console.log(`Current Working Directory: ${currentWorkingDir}`);

// Directory of the current file
console.log(`File Directory: ${__dirname}`);

// Full path of the current file
console.log(`Current File Path: ${__fileName}`);
const getFileStats = async ()=>{
    try {
        const stats = await stat(__fileName);
        console.log(`Size of file is: ${stats.size}`);
        console.log(`Created At: ${stats.birthtime}`);
        console.log(`Updated At: ${stats.mtime}`);
        
    } catch (error) {
        console.log(error);
        
    }
}
await getFileStats();
class BloomFilter {
    constructor(size,hash_number,fileName){
        this.size=size;
        this.hash_number=hash_number;
        this.fileName=fileName;
    }
    hashEmail(email){

        const localPath = process.cwd()
        console.log(localPath);
        const fileName = path.basename(__dirname)
    }

}
const bl = new BloomFilter(100,3,"test.txt");
bl.hashEmail("yadav")