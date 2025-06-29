import RotatingCTA from "./RotatingCTA";

function Main({ children, className }) {
  return (
    <main className={className}>
      {children} <RotatingCTA />
    </main>
  );
}

export default Main;
