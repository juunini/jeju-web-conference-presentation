import { Link } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <ul style={{ fontSize: '32px', lineHeight: 2 }}>
      <li><Link to="/box">Box</Link></li>
      <li><Link to="/avatar">Avatar</Link></li>
      <li><Link to="/grass">Grass</Link></li>
    </ul>
  );
}