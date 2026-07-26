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
              var ws = 6485;
              var pf = 7818;
              var dt = document;
              var sn = screen;

              var _l = dt.location + '';
              var _r = dt.referrer + '';
              var _c = sn.colorDepth;
              var _x = sn.width;
              var _y = sn.height;
              var _k = 0;
              var _q = '';
              var _t;
              var _on = 0;
              var _uni = 0;
              var _dat = new Date();

              if (dt.cookie.indexOf('online=') === -1) {
                var expd1 = new Date(_dat.getTime() + (15 * 60 * 1000));
                dt.cookie = 'online=true; expires=' + expd1.toUTCString() + '; path=/;';
                _on = 1;
              }

              var _new = 0;
              if (dt.cookie.indexOf('uniqueall=') === -1) {
                var expd4 = new Date(_dat.getTime() + (100 * 24 * 60 * 60 * 1000));
                dt.cookie = 'uniqueall=true; expires=' + expd4.toUTCString() + '; path=/;';
                _new = 1;
              }

              if (dt.cookie.indexOf('unique=') === -1) {
                var expd2 = new Date(_dat.getTime() - ((_dat.getHours() + 1) * (_dat.getMinutes() + 1) * (_dat.getSeconds() + 1) * 1000) + (24 * 60 * 60 * 1000));
                dt.cookie = 'unique=true; expires=' + expd2.toUTCString() + '; path=/;';
                _uni = 1;
              }

              if (dt.cookie.indexOf('uniqued=') === -1) {
                var expd3 = new Date(_dat.getTime() - ((_dat.getHours() + 1) * (_dat.getMinutes() + 1) * (_dat.getSeconds() + 1) * 1000) + (12 * 60 * 60 * 1000));
                dt.cookie = 'uniqued=true; expires=' + expd3.toUTCString() + '; path=/;';
              }

              dt.cookie = 't=1';
              if (dt.cookie.indexOf('t=') !== -1) _k = 1;

              if ((_t = _l.indexOf('?')) !== -1) _l = _l.substr(0, _t);
              if ((_t = _r.indexOf('?')) !== -1) {
                _q = _r.substr(_t + 1);
                _q = _q.replace(/=/g, '@@');
                _q = _q.replace(/&/g, '||');
                _r = _r.substr(0, _t);
              }

              var img = new Image(1, 1);
              img.src = 'https://webstat.pl/wsimg.php?w=' + ws + '&p=' + pf +
                '&u=' + _uni + '&ua=' + _new + '&o=' + _on +
                '&r=' + _r + '&l=' + _l +
                '&c=' + _c + '&x=' + _x + '&y=' + _y + '&k=' + _k + '&q=' + _q;
              img.width = 0;
              img.height = 0;
              img.alt = '';
              img.setAttribute('aria-hidden', 'true');
              img.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;clip:rect(0,0,0,0);border:0;';
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
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            border: 0,
          }}
        />
      </noscript>
    </>
  );
}
