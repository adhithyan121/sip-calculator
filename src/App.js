import { useState } from "react";

export default function SIPCalculator() {

  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate]       = useState(12);
  const [years, setYears]     = useState(10);

  const r = rate / 12 / 100;
  const n = years * 12;
  const maturity = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthly * n;
  const returns  = maturity - invested;

  const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div style={{ padding: 24, maxWidth: 400, margin: "0 auto",
      fontFamily: "sans-serif", background: "#f5f7ff", minHeight: "100vh" }}>

      <h2 style={{ color: "#5367ff" }}>SIP Calculator</h2>

      <label>Monthly Investment (₹)</label>
      <input
        type="number"
        value={monthly}
        onChange={(e) => setMonthly(Number(e.target.value))}
        style={{ display:"block", width:"100%", padding:8,
          marginTop:4, marginBottom:16, borderRadius:8,
          border:"1px solid #ccc", fontSize:16 }}
      />

      <label>Expected Annual Return (%)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        style={{ display:"block", width:"100%", padding:8,
          marginTop:4, marginBottom:16, borderRadius:8,
          border:"1px solid #ccc", fontSize:16 }}
      />

      <label>Duration (Years)</label>
      <input
        type="number"
        value={years}
        onChange={(e) => setYears(Number(e.target.value))}
        style={{ display:"block", width:"100%", padding:8,
          marginTop:4, marginBottom:16, borderRadius:8,
          border:"1px solid #ccc", fontSize:16 }}
      />

      <div style={{ background:"#fff", borderRadius:12, padding:20,
        boxShadow:"0 2px 12px rgba(83,103,255,0.1)",
        borderTop: "4px solid #5367ff" }}>

        <Row label="Invested Amount"  value={fmt(invested)}  color="#333" />
        <Row label="Returns Earned"   value={fmt(returns)}   color="#00b386" />
        <Row label="Maturity Value"   value={fmt(maturity)}  color="#5367ff" bold />

      </div>
    </div>
  );
}

function Row({ label, value, color, bold }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between",
      marginBottom: 12 }}>
      <span style={{ color:"#888", fontSize:14 }}>{label}</span>
      <span style={{ color, fontSize:14,
        fontWeight: bold ? 700 : 400 }}>{value}</span>
    </div>
  );
}