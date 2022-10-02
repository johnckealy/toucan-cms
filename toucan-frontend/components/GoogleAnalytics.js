import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script id="gtag-pre"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/<ADD GOOGLE KEY HERE>`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-124270517-2');
              `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
