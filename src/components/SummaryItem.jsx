/* eslint-disable react/prop-types */
const SummaryItem = ({ title, quantity, bold }) => {
  return (
    <div
      className={`flex justify-between pt-6 first-of-type:pt-0 ${
        bold ? "font-bold" : "font-normal"
      }`}
    >
      <span>{title}</span>
      <span className="w-1/5">{quantity}</span>
    </div>
  );
};

export default SummaryItem;
