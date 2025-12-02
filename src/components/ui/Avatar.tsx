import Image from "next/image";

interface AvatarProps {
  className?: string;
  src?: string;
  alt: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ className, children, src, alt, size = 'medium' }) => {
  const sizes = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
  };

  return (
    <div className={`${sizes[size]} inline-flex items-center justify-center aspect-square rounded-full overflow-hidden ${className || ''}`}>
      {children ? (children) :
      src ? (
        <Image
          className="w-full h-full"
          src={src}
          alt={alt}
          width={100}
          height={100}
          loading="lazy"
          quality={100}
        /> ) : ( <span className="text-gray-600 text-lg font-bold bg-primary-2">{alt.charAt(0)}</span> )
      }
    </div>
  );
};

export default Avatar;