const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem  sm:px-16 px-10 py-2 flex flex-col w-full">
    <div className="app__menuitem-head flex justify-between items-center">
      <div className="app__menuitem-name flex-1">
        <p className="p__cormorant pr-10 font-cormorant text-xl font-bold   text-lightgolden dark:text-golden">
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash sm:w-20 w-16 h-[1px] bg-orange-400 my-4" />
      <div className="app__menuitem-price flex justify-end items-end">
        <p className="p__cormorant font-cormorant sm:text-lg text-base font-semibold  text-lightcrimson dark:text-crimson">
          &nbsp; &nbsp; {price}
        </p>
      </div>
    </div>

    <div className="app__menuitem-sub items-center mt-1">
      <p className="font-cormorant items-left text-left text-base font-normal text-lightgray dark:text-gray ">
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
