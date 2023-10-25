/* eslint-disable react/prop-types */
const FooterList = ({ children, title }) => {
  return (
    <div className="xl:w-1/5 sm:w-5/12 w-full">
      <span className="text-2xl">{title}</span>
      <ul className="mt-14 flex flex-col gap-y-6">{children}</ul>
    </div>
  );
};

export default FooterList;
