import GameContainer from "./_components/GameContainer";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <main className="flex flex-col flex-grow items-center">
          <h1>ENGLISH ART PUZZLE</h1>
          <GameContainer />

          {/* <ControlBar/>
       
        */}
        </main>
        <footer></footer>
      </div>
    </>
  );
}
