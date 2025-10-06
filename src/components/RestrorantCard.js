
const RestrorantCard = (props) => {

  const { resName, cuisine, rating, time, imgUrl } = props?.restroData;

  return (
    <div>
      <div className="res-card">
        <img src={imgUrl} />
        <h2>{resName}</h2>
        <h4>{cuisine}</h4>
        <h4>Rating {rating}</h4>
        <h4>{time}</h4>
      </div>
    </div>
  );
};

export default RestrorantCard;
