function GoodsItem(props) {
  const {
    mainId: id,
    displayName,
    displayDescription,
    displayAssets,
    price: { finalPrice },
    addOrder = Function.prototype,
  } = props;

  // console.log(displayAsset[0].full_background);

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="button-buy"
          onClick={() =>
            addOrder({
              id,
              displayName,
              finalPrice,
              displayAssets,
            })
          }
        >
          Buy
        </button>
        <span className="right">{finalPrice} $ </span>
      </div>
    </div>
  );
}

export { GoodsItem };
