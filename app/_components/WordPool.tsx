export default function WordPool({
  fieldSize,
}: {
  fieldSize: { width: number; height: number };
}) {
  const textExample = "The students agree they have too much homework";
  const textArray = textExample.split(" ");
  const divArray = textArray.map((word, index) => (
    <div
      key={index}
      style={{
        width: `${fieldSize.width / 10}px`,
        height: `${fieldSize.height / 10}px`,
        backgroundColor: "white",
        margin: "10px",
      }}
    >
      {word}
    </div>
  ));

  return (
    <div
      className="relative m-3 
  flex-[1_1_200px]
   bg-slate-800 flex flex-wrap items-start"
    >
      {divArray}
    </div>
  );
}
