import Image from "next/image";
import { IMAGE_SIZES } from "../utils/constants";

const convertSize = (size) => {
  switch (size) {
    case IMAGE_SIZES.SMALL:
      return 256;
    case IMAGE_SIZES.MEDIUM:
      return 512;
    case IMAGE_SIZES.LARGE:
      return 1024;
    default:
      return 256;
  }
};

const Images = ({ images, size }) => {
  const sizeToShow = convertSize(size);

  return (
    <div className="m-2 p-2">
      <ul className="flex justify-center">
        {images.map(({ url }) => (
          <li key={url} className="p-2">
            <Image src={url} alt={url} width={sizeToShow} height={sizeToShow} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
