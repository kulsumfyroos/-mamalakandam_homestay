import dynamic from 'next/dynamic';

const ImagesGrid = dynamic(() => import('@/components/ImagesGrid'), { ssr: false });

function DashboardGalleryPage() {
  return (
    <>
      <ImagesGrid />
    </>
  );
}

export default DashboardGalleryPage;