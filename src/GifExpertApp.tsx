import { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Dragon Ball Z']);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setcategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
