import Image from "next/image";

const Content = ({ images }) => {
  return (
    <div className="m-2 p-2">
      <ul className="flex justify-center">
        {images.map(({ url }) => (
          <li key={url} className="p-2">
            <Image src={url} alt={url} width={200} height={200} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
