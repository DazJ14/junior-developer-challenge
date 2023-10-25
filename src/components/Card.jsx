/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Card = ({ image, product, addItem, removeItem, cart }) => {
  const [items, setItems] = useState(0);

  useEffect(() => {
    if (cart.length === 0) {
      setItems(0);
    }
  }, [cart]);

  return (
    <div>
      <div className="w-[220px] h-[222px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-7">
        <img src={image} className="w-28 h-16 object-contain" alt="" />
        <span>{product}</span>
      </div>
      <aside className="flex mt-8">
        <button
          className="w-10 h-12 bg-[#E2E2E2] rounded-[5px_0px_0px_5px] relative"
          onClick={() => {
            if (items > 0) {
              setItems(items - 1);
              removeItem(product);
            }
          }}
        >
          <AiOutlineMinus className="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
        <span className="flex-grow text-xl bg-white text-center grid content-center">
          <span>{items}</span>
        </span>
        <button
          className="w-10 h-12 bg-[#E2E2E2] rounded-[0px_5px_5px_0px] relative"
          onClick={() => {
            setItems(items + 1);
            addItem(product);
          }}
        >
          <AiOutlinePlus className="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
      </aside>
    </div>
  );
};

export default Card;
