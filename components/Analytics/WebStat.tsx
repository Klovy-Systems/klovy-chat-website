import Script from "next/script";

export default function WebStat() {
  return (
    <>
      <Script
        id="webstat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var s = document.createElement('script');
              s.src = 'https://webstat.pl/jsm.php';
              s.onload = function() { stats(document, screen, 6485, 7818); };
              document.head.appendChild(s);
            })();
          `,
        }}
      />
      <noscript>
        <img
          width={1}
          height={1}
          src="https://webstat.pl/wsimg.php?w=6485&p=7818"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}
        />
      </noscript>
    </>
  );
}
