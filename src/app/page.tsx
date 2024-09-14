import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Hello Messenger!</p>
      <Image 
        src="/path-to-your-image.jpg" 
        alt="Description of the image" 
        width={500} 
        height={300} 
      />
    </div>
  );
}
