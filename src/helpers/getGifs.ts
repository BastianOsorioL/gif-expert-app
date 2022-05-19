import { GifData, GifInternalInfo } from '../Components/GifGrid';

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=13&api_key=vxipLtuPe7aUEQXRFjmaGNzlYH07zuae`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img: GifData): GifInternalInfo => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
