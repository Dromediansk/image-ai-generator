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

const Images = ({ data }) => {
  const sizeToShow = convertSize(data.size);

  return (
    <div className="m-2 p-2">
      <ul className="flex justify-center flex-wrap">
        {data.images.map(({ url }) => (
          <li key={url} className="p-1 m-2 border shadow">
            <Image src={url} alt={url} width={sizeToShow} height={sizeToShow} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
