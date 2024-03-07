import sharp from 'sharp';
import fileSystem from 'fs';
import imageSize from 'image-size';

const assetsPath = './src/assets';

function getPNGImage(path){
  try{
    let ret = []
    const fileNames = fileSystem.readdirSync(path);
    fileNames.forEach(fileName => {
      const filePath = path+'/'+fileName;
      const stat = fileSystem.statSync(filePath);
      if(stat.isDirectory()){
        ret.push(...getPNGImage(filePath));
      }else if(stat.isFile()){
        ret.push(filePath);
      }
    });
    return ret.filter((fileName) => fileName.endsWith('.png'))
  } catch (err) {
    console.log(err);
  }
}

function removeImage(imagePath){
  try{
    fileSystem.unlinkSync(imagePath);
  } catch (err) {
    console.log(err);
  }
}

function renameCommpressedImage(imagePath){
  try{ 
    const before = imagePath + ".zip";
    const after = imagePath;
    fileSystem.renameSync(before, after);
  } catch(err) {
    console.log(err);
  }
}

async function commpressImage(imagePath){
  const outputPath = imagePath + ".zip";
  try{
    const width = imageSize(imagePath)[1];
    if(width <= 512) return false;

    await sharp(imagePath).resize(512).png({
      progressive: true,
      quality: 80,
    }).toFile(outputPath);

    return true;
  } catch (err) {
    console.log(err);
  }
}

async function main(){
  const imagePaths = getPNGImage(assetsPath);
  for(const imagePath of imagePaths){
    const compressed = await commpressImage(imagePath);
    if(compressed) removeImage(imagePath);
    if(compressed) renameCommpressedImage(imagePath);
  }
}

main()
