"use client"
import { useRouter } from 'next/router';

interface SkeletonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

const Skeleton: React.FC<SkeletonProps> = ({
children, variant = 'text', className, ...props
}) => {

  const router = useRouter();
  const loading = router.isFallback;

  const classes = {
    text: 'w-full h-5 bg-gray-300/20 animate-pulse',
    circular: 'rounded-full w-10 h-10 bg-gray-300/20 animate-pulse',
    rectangular: 'rounded-md w-full h-52 bg-gray-300/20 animate-pulse'
  }
  
  if (loading) {
    return (
      <div className={`skeleton ${classes[variant]} ${className || ''}`} />
    );
  }

  return (
    <>
      {children}
    </>
  );
}

export default Skeleton;