import MenuItem from "./MenuItem";
import { menu } from "../Data/mockMenuData";
import Image from "next/image";
import wineimg from "../public/assets/wine.png";
import burgerimg from "../public/assets/burger.png";
import "../styles/annimations.css";

const Menu = () => (
  <div className="items-center flex-col  mt-16 sm:pt-4" id="menu">
    <div className="mb-2 text-center w-full">
      <p className="font-cormorant text-lg font-semibold text-lightcrimson dark:text-crimson ">
        Menu that fits your palatte
      </p>
      <h1 className="font-cormorant text-4xl font-extrabold text-lightgolden dark:text-golden">
        Today&apos;s Special
      </h1>
    </div>
    <div className="sm:px-16 px-10 sm:w-[40%]">
      <input
        type="text"
        placeholder="Search your favorite here"
        className="mt-4 w-full text-base font-cormorant rounded-lg items-left text-crimsonlight border border-lightgray dark:border-gray outline-none dark:text-crimson  pr-20 py-2 pl-3"
      />
    </div>
    <p
      id="burgerpizza"
      className=" font-cormorant text-2xl font-bold w-full text-center  my-4 text-lightgolden dark:text-golden"
    >
      {" "}
      Burger & Pizza
    </p>
    <div className="w-full flex items-center justify-start sm:flex-row flex-col">
      <div className="flex flex-col w-full mt-2 scale-up-center-menu">
        <p className="font-cormorant text-xl font-semibold w-full text-center text-lightcrimson dark:text-crimson">
          Burger
        </p>
        <div className="flex flex-col  w-full">
          {menu[0].burger.map((burgerItem, index) => (
            <MenuItem
              key={burgerItem.title + index}
              title={burgerItem.title}
              price={burgerItem.price}
              tags={burgerItem.tags}
            />
          ))}
        </div>
      </div>

      <div className="w-full hidden lg:block my-2 ">
        <Image src={burgerimg} width={"50%"} height={"40%"} alt="menu" />
      </div>

      <div className="flex flex-col w-full mt-2 scale-up-center-menu">
        <p className="font-cormorant text-xl font-semibold w-full text-center  text-lightcrimson dark:text-crimson">
          Pizza
        </p>
        <div className="flex flex-col  w-full">
          {menu[0].pizza.map((pizzaItem, index) => (
            <MenuItem
              key={pizzaItem.title + index}
              title={pizzaItem.title}
              price={pizzaItem.price}
              tags={pizzaItem.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <p
      id="winebeer"
      className="font-cormorant text-2xl font-bold w-full text-center  my-4 text-lightgolden dark:text-golden"
    >
      {" "}
      Wine and Beer
    </p>
    <div className="w-full flex items-center justify-start sm:flex-row flex-col">
      <div className="flex flex-col w-full mt-2">
        <p className="font-cormorant text-xl font-semibold w-full text-center  text-lightcrimson dark:text-crimson">
          Wines
        </p>
        <div className="flex flex-col  w-full">
          {menu[0].wine.map((wineItem, index) => (
            <MenuItem
              key={wineItem.title + index}
              title={wineItem.title}
              price={wineItem.price}
              tags={wineItem.tags}
            />
          ))}
        </div>
      </div>

      <div className="w-full hidden lg:block my-2">
        <Image src={wineimg} width={"50%"} height={"40%"} alt="menu" />
      </div>

      <div className="flex flex-col w-full mt-2">
        <p className="font-cormorant text-xl font-semibold w-full text-center  text-lightcrimson dark:text-crimson">
          Beers
        </p>
        <div className="flex flex-col  w-full">
          {menu[0].beer.map((beersItem, index) => (
            <MenuItem
              key={beersItem.title + index}
              title={beersItem.title}
              price={beersItem.price}
              tags={beersItem.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
