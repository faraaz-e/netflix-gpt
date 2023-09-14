const MovieCard = ({ image }) => {
  if (!image) return null;

  return (
    <div className="w-48 pr-4">
      <img alt="Movies Card" src={image?.medium} />
    </div>
  );
};

export default MovieCard;
