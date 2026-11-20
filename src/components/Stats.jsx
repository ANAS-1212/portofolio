import { Icon } from './Icons.jsx';
import { stats } from '../data.js';
import useCountUp from '../hooks/useCountUp.js';

function Stat({ item }) {
  const [ref, value] = useCountUp(item.value);
  return (
    <li className="stat reveal" ref={ref}>
      <Icon name={item.icon} size={44} strokeWidth={1.400} className="stat__icon" />
      <div>
        <strong>
          {value}
          {item.suffix}
        </strong>
        <span>{item.label}</span>
      </div>
    </li>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="stats" aria-label="Statistik">
      <svg className="stats__mountain" viewBox="0 0 1200 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 140V95l90-35 70 28 110-70 80 55 90-40 120 62 100-50 110 60 90-36 120 48 110-55 110 48V140z" fill="#141414" />
        <path d="M0 140V112l130-30 90 24 140-45 110 38 120-30 150 40 110-34 130 30 120-22V140z" fill="#101010" />
      </svg>
      <div className="container">
        <ul className="stats__grid">
          {stats.map((s) => (
            <Stat key={s.label} item={s} />
          ))}
        </ul>
      </div>
    </section>
  );
}
