import GooeyNav from '../ReactBit/GooeyNav';
import '../App.css';
import '../css/Header.css'; // Add this CSS file

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="main-header">
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </header>
  );
}
