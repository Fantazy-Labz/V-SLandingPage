import './Stats.css';

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '280+', label: 'Projects Completed' },
  { value: '12', label: 'States Served' },
  { value: '98%', label: 'On-Time Delivery' },
];

export default function Stats() {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat-item" key={s.label}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
