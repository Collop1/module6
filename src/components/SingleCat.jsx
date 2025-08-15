function SingleCat({ cat }) {
  return (
    <div>
      <h3>{cat.name}</h3>
      <p><em>({cat.latinName})</em></p>
      <img className="cat-images" src={cat.image} alt={cat.name} />
    </div>
  );
}

export default SingleCat;
