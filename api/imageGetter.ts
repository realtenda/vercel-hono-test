import sharp from "sharp";

const pictureFetcher = async () => {
    const picture = await fetch("https://picsum.photos/200/300");
    // console.log(picture);
  
    return picture;
  };
  

  export const fun = async () => {


    const img = await (await pictureFetcher()).arrayBuffer();
  
    const imgBuffer = sharp(img).rotate(40).toBuffer();
  
    // .then(info => { ... })
    // .catch(err => { ... });
  
    // console.log("sdfsdfsd")
    
    return (await imgBuffer);
  }