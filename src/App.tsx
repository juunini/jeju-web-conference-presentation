import { Link } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <ul style={{ fontSize: '32px', lineHeight: 2 }}>
      <li><Link to="/box">Box</Link></li>
      <li><Link to="/head">Head</Link></li>
      <li><Link to="/grass">Grass</Link></li>
      <br />
      <li><Link to="/grass/1">Grass1</Link></li>
      <li><Link to="/grass/2">Grass2</Link></li>
      <li><Link to="/grass/3">Grass3</Link></li>
      <li><Link to="/grass/4">Grass4</Link></li>
      <li><Link to="/grass/5">Grass5</Link></li>
      <li><Link to="/grass/6">Grass6</Link></li>
      <li><Link to="/grass/7">Grass7</Link></li>
      <li><Link to="/grass/8">Grass8</Link></li>
      <li><Link to="/grass/9">Grass9</Link></li>
    </ul>
  );
}