const ShimmerCard = () => <div className="shimmer-card"></div>;

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-container">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </>
  );
};

export default Shimmer;
