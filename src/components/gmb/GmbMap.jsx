export default function GmbMap() {
  return (
    <div className="map">
      <iframe
        title="Map showing Ignite Training Institute at Al Moosa Tower 1, Sheikh Zayed Road"
        src="https://www.google.com/maps?q=Ignite+Training+Institute,+Al+Moosa+Tower+1,+Sheikh+Zayed+Road,+Dubai&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <style jsx>{`
        .map { width: 90vw; margin: 0 auto 60px; overflow: hidden; border: 1px solid rgba(121, 190, 165, 0.52); border-radius: 18px; }
        iframe { display: block; width: 100%; height: 380px; border: 0; }
        @media (max-width: 575px) { iframe { height: 280px; } }
      `}</style>
    </div>
  );
}
