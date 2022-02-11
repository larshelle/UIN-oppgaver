const food = ['Pizza', 'Hamburger', 'Coke'];

export default function Array() {
  return (
    <>
      <ul>
        {food.map((food) => (
          <li key={food}>{food}</li>
        ))}
      </ul>
    </>
  );
}
