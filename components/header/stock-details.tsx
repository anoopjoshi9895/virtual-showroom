const StockDetails = (props: { stockCount: number }) => {
  return (
    <div className="carsinstock px-3 d-flex align-items-center text-white">
      <span className="mr-2">{props.stockCount}</span> Cars In Stock
    </div>
  );
};

export default StockDetails;
