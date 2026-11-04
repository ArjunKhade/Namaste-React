const withPromotedLabel = (RestaurantCard) => {
  const PromotedRestaurantCard = (props) => (
    <RestaurantCard
      {...props}
      promotedLabel={<span className="promoted-label">Promoted</span>}
    />
  );

  return PromotedRestaurantCard;
};

export default withPromotedLabel;
