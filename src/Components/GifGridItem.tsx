import { GifInternalInfo } from './GifGrid';

export interface GifGridItemProps {
  img: GifInternalInfo;
}

export const GifGridItem = (props: GifGridItemProps) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={props.img.url} alt={props.img.title} />
      <p>{props.img.title}</p>
    </div>
  );
};
