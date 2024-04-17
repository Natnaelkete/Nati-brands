import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <>
      <div
        className="flex flex-1 text-black flex-col w-full max-sm:w-full hover:scale-105 transition duration-300 ease-in-out"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <img src={imgURL} alt={name} className="size-[280px]" />

        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            4.5
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal">
          {price}
        </p>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box ">
          <img src={imgURL} alt={name} className="size-[80px]" />

          <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
              4.5
            </p>
          </div>
          <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
            {name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal">
            {price}
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default PopularProductCard;
