import Card from "../components/Card";
import beds from "../assets/beds.png";
import refridegator from "../assets/refridegator.png";
import furniture from "../assets/furniture.png";
import oven from "../assets/oven.png";
import sofa from "../assets/sofa.png";
import tv from "../assets/tv.png";
import washer from "../assets/washerdryer.png";
import dining from "../assets/dining.png";
import desk from "../assets/desk.png";
import wardrobe from "../assets/wardrobe.png";
import SummaryItem from "../components/SummaryItem";
import { useEffect, useState } from "react";

const productList = [
  {
    name: "Beds",
    value: 1.2,
    image: beds,
  },
  {
    name: "Refrigerator",
    value: 1,
    image: refridegator,
  },
  {
    name: "Furniture",
    value: 0.5,
    image: furniture,
  },
  {
    name: "Oven",
    value: 0.6,
    image: oven,
  },
  {
    name: "Sofa",
    value: 1.5,
    image: sofa,
  },
  {
    name: "TV",
    value: 0.25,
    image: tv,
  },
  {
    name: "Washer-dryer",
    value: 0.5,
    image: washer,
  },
  {
    name: "Dining",
    value: 2,
    image: dining,
  },
  {
    name: "Desk",
    value: 0.75,
    image: desk,
  },
  {
    name: "Wardrobe",
    value: 3.2,
    image: wardrobe,
  },
];

const Body = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({
    totalItems: 0,
    totalMeters: 0,
    subtotal: 0,
    tax: 0,
    totalFinal: 0,
    dueToday: 0,
  });

  const addItem = (item) => {
    if (cart.find((obj) => obj.name === item)) {
      const newCart = cart.map((x) =>
        x.name === item
          ? {
              ...x,
              quantity: x.quantity + 1,
            }
          : x
      );
      return setCart(newCart);
    }
    return setCart(
      cart.concat({
        name: item,
        quantity: 1,
      })
    );
  };

  const removeItem = (item) => {
    if (cart.find((obj) => obj.name === item)) {
      const newCart = cart.map((x) =>
        x.name === item
          ? {
              ...x,
              quantity: x.quantity - 1,
            }
          : x
      );
      return setCart(newCart);
    }
  };

  const calculateTotal = (arr) => {
    let newTotalItems = arr.reduce((acc, item) => acc + item.quantity, 0);
    let newTotalMeters = arr.reduce((acc, item) => {
      let obj = productList.filter((o) => o.name === item.name);
      return acc + obj[0].value * item.quantity;
    }, 0);
    let newSubtotal = newTotalMeters * 200;
    let newTax = newSubtotal * 0.16;
    let newTotalFinal = newSubtotal + newTax;
    let newDueToday = newTotalFinal * 0.5;
    setTotal({
      totalItems: newTotalItems,
      totalMeters: parseFloat(newTotalMeters.toFixed(2)),
      subtotal: parseFloat(newSubtotal.toFixed(2)),
      tax: parseFloat(newTax.toFixed(2)),
      totalFinal: parseFloat(newTotalFinal.toFixed(2)),
      dueToday: parseFloat(newDueToday.toFixed(2)),
    });
  };

  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  return (
    <main className="max-w-[1240px] mx-auto px-8 md:px-10 pt-44 pb-96">
      <h1 className="text-5xl font-normal text-center">What items to store?</h1>
      <p className="text-center text-[#666] sm:w-[450px] mx-auto mt-6 w-full">
        Select which items you wish to store before moving to your new home.
        We’ll keep ’em safe!
      </p>
      <section className="mt-32">
        <div className="w-full flex flex-wrap justify-center gap-x-[15px] gap-y-8">
          {productList.map((obj) => (
            <Card
              key={obj.name}
              image={obj.image}
              product={obj.name}
              addItem={addItem}
              removeItem={removeItem}
              cart={cart}
            />
          ))}
        </div>
        <div className="mt-16 flex flex-row justify-center">
          <button
            className="border-2 w-full sm:w-auto border-solid border-[#FD9255] py-2 px-16 rounded-md"
            onClick={() => {
              setTotal({
                totalItems: 0,
                totalMeters: 0,
                subtotal: 0,
                tax: 0,
                totalFinal: 0,
                dueToday: 0,
              });
              setCart([]);
            }}
          >
            Clear
          </button>
          {/* <button
            className="bg-[#FD9255] py-2 px-16 rounded-md"
            onClick={() => calculateTotal(cart)}
          >
            Calculate
          </button> */}
        </div>
        <div className="mt-11">
          <h3 className="text-center text-4xl">Summary</h3>
          <div className="sm:w-[416px] w-full mt-16 mx-auto p-8 bg-[#F9F9F9]">
            <SummaryItem title="Total items" quantity={total.totalItems} />
            <SummaryItem title="Total m²" quantity={total.totalMeters} />
            <SummaryItem title="Subtotal" quantity={`$${total.subtotal}`} />
            <SummaryItem title="Tax" quantity={`$${total.tax}`} />
            <SummaryItem title="Total" quantity={`$${total.totalFinal}`} bold />
            <SummaryItem
              title="Due Today 50%"
              quantity={`$${total.dueToday}`}
              bold
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
