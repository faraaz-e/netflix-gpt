const MovieCard = ({ image }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movies Card" src={image?.medium} />
    </div>
  );
};

export default MovieCard;
