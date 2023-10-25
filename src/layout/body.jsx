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

const Body = () => {
  return (
    <main className="max-w-[1240px] mx-auto px-8 md:px-10 pt-44 pb-96">
      <h1 className="text-5xl font-normal text-center">What items to store?</h1>
      <p className="text-center text-[#666] w-[450px] mx-auto mt-6">
        Select which items you wish to store before moving to your new home.
        We’ll keep ’em safe!
      </p>
      <section className="mt-32">
        <div className="w-full flex flex-wrap justify-start gap-x-[15px] gap-y-8">
          <Card image={beds} product="Beds" />
          <Card image={refridegator} product="Refrigerador" />
          <Card image={furniture} product="Furniture" />
          <Card image={oven} product="oven" />
          <Card image={sofa} product="sofa" />
          <Card image={tv} product="TV" />
          <Card image={washer} product="Washer-dryer" />
          <Card image={dining} product="Dining" />
          <Card image={desk} product="Desk" />
          <Card image={wardrobe} product="Wardrobe" />
        </div>
      </section>
    </main>
  );
};

export default Body;
