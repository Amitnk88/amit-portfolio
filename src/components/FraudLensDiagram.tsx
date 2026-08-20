export default function FraudLensDiagram() {
  return (
    <svg
      viewBox="0 0 600 160"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: Transactions flow into ML Processing, which outputs Fraud Detection results"
    >
      <defs>
        <path id="flow-path" d="M 80 80 L 520 80" />
      </defs>

      {/* connecting line */}
      <line x1="80" y1="80" x2="520" y2="80" stroke="var(--border)" strokeWidth="2" />

      {/* animated pulse along the path (decorative) */}
      <circle r="4" fill="var(--accent)">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M 80 80 L 520 80" />
      </circle>

      {/* Stage 1: Transactions */}
      <g>
        <rect x="20" y="50" width="120" height="60" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="80" y="76" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--text-muted)">
          transactions.csv
        </text>
        <text x="80" y="94" textAnchor="middle" fontSize="12" fontFamily="var(--font-display)" fontWeight="600" fill="var(--text)">
          Transactions
        </text>
      </g>

      {/* Stage 2: ML Processing */}
      <g>
        <rect x="240" y="42" width="120" height="76" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="300" y="70" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--accent)">
          preprocess → classify
        </text>
        <text x="300" y="92" textAnchor="middle" fontSize="12" fontFamily="var(--font-display)" fontWeight="600" fill="var(--text)">
          ML Processing
        </text>
      </g>

      {/* Stage 3: Fraud Detection */}
      <g>
        <rect x="460" y="50" width="120" height="60" rx="10" fill="var(--mint-soft)" stroke="var(--mint)" strokeWidth="1.5" />
        <text x="520" y="76" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--mint)">
          flagged / clear
        </text>
        <text x="520" y="94" textAnchor="middle" fontSize="12" fontFamily="var(--font-display)" fontWeight="600" fill="var(--text)">
          Fraud Detection
        </text>
      </g>
    </svg>
  );
}
