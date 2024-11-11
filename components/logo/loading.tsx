import Image from "next/image";
import Link from "next/link";

type Props = {
  size?: number;
};

const LoadingLogo = ({ size }: Props) => {
  // If `size` is undefined, provide a fallback value (e.g., 100)
  const scaledSize = size ? size * 100 : 100;

  return (
    <Link className="h-full w-full flex justify-center items-center" href={"/"}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={scaledSize}
        height={scaledSize}  // You can use `scaledSize` for both width and height
        className="animate-pulse duration-800"  // Fixed typo in className (removed space before duration)
      />
    </Link>
  );
};

export default LoadingLogo;
