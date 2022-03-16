import React from 'react';

export default function TrustBox() {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot && process.browser) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
      className="trustpilot-widget" // Renamed this to className.
      data-locale="en-US"
      data-template-id="539ad0ffdec7e10e686debd7"
      data-businessunit-id="6142c6d38f0dad001d8bd11a"
      data-style-height="350px"
      data-style-width="100%"
      data-theme="light"
      data-tags="SelectedReview"
      data-review-languages="en"
      data-per-page={3}
    >
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://www.trustpilot.com/review/example.com" target="_blank" rel="noopener">
        Trustpilot
      </a>
    </div>
  );
}
