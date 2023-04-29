import Image from 'next/image'
import recipeesImg from '../public/img/recepies.png'

const Recipies = () => {
  return (
    <div className="flex flex-row p-8">
      {/* why this font family doesn't work~ */}
      <p
        className="text-[#D96B14] text-2xl font-serif"
      >
        Recipies
      </p>
      {/* <p className="text-[#D96B14] text-2xl font-serif">Recipies</p> */}
      {/* Left Div */}
      <div className="bg-blue-600 p-2">
        <Image src={recipeesImg} width={800} height={800} alt='RecImg' />
      </div>
      {/* Rightt Div */}
      <div className="bg-red-600 p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        recusandae, error, velit quaerat unde quis mollitia explicabo cupiditate
        doloremque ipsum aspernatur nulla exercitationem voluptatum quos et
        repellendus quo magnam quibusdam.
      </div>
    </div>
  );
};

export default Recipies;
