import Image, { ImageProps } from 'next/image';

export const CustomImage = (props: ImageProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full relative h-0 pt-[56.25%]">
        <Image fill={true} src={props.src} alt={props.alt} />
      </div>
      <div className="uppercase text-center font-light mt-[5.25%]">{props.alt}</div>
    </div>
  );
};

export default CustomImage;
