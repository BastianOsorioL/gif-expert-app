import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export interface GifGridProps {
  category: string;
}
export interface GifData {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export interface GifInternalInfo {
  id: string;
  title: string;
  url: string;
}

export const GifGrid = (props: GifGridProps) => {
  const { data: images, loading } = useFetchGifs(props.category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{props.category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((image: GifInternalInfo) => (
          <GifGridItem key={image.id} img={image} />
        ))}
      </div>
    </>
  );
};
