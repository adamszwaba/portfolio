import Image, { ImageProps } from 'next/image';

type CustomImageProps = ImageProps & {
  displayAlt?: boolean;
};

export const CustomImage = ({ src, alt, displayAlt = true, className }: CustomImageProps) => {
  return (
    <div className={`w-full flex flex-col`}>
      <div className="w-full relative h-0 pt-[56.25%]">
        <Image fill={true} src={src} alt={alt} className={`my-0 ${className}`} />
      </div>
      {displayAlt && <div className="text-center font-light">{alt}</div>}
    </div>
  );
};

export default CustomImage;
