"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeCreatedRef = useRef(false);

  useEffect(() => {
    // Create iframe via DOM API to avoid React reconciliation conflicts
    if (containerRef.current && !iframeCreatedRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://api.leadconnectorhq.com/widget/form/EqxDPyRergldTPAsq5QX";
      iframe.style.display = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.style.borderRadius = "4px";
      iframe.id = "polite-slide-in-right-EqxDPyRergldTPAsq5QX";
      iframe.setAttribute("data-layout", "{'id':'POLITE_SLIDE_IN','minimizedTitle':'CONTACT US','isLeftAligned':false,'isRightAligned':true,'allowMinimize':true}");
      iframe.setAttribute("data-trigger-type", "showOnScrolling");
      iframe.setAttribute("data-trigger-value", "80");
      iframe.setAttribute("data-activation-type", "alwaysActivated");
      iframe.setAttribute("data-activation-value", "");
      iframe.setAttribute("data-deactivation-type", "leadCollected");
      iframe.setAttribute("data-deactivation-value", "");
      iframe.setAttribute("data-form-name", "SDE - Contact Form");
      iframe.setAttribute("data-height", "684");
      iframe.setAttribute("data-layout-iframe-id", "polite-slide-in-right-EqxDPyRergldTPAsq5QX");
      iframe.setAttribute("data-form-id", "EqxDPyRergldTPAsq5QX");
      iframe.title = "SDE - Contact Form";
      
      containerRef.current.appendChild(iframe);
      iframeCreatedRef.current = true;
    }

    return () => {
      // Cleanup: remove iframe when component unmounts
      if (containerRef.current && iframeCreatedRef.current) {
        const iframe = containerRef.current.querySelector("#polite-slide-in-right-EqxDPyRergldTPAsq5QX");
        if (iframe && iframe.parentNode) {
          try {
            iframe.parentNode.removeChild(iframe);
          } catch (e) {
            // Ignore errors if iframe was already removed by external script
          }
        }
        iframeCreatedRef.current = false;
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide scroll arrows when form is minimized */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"] [class*="scroll"],
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"] [class*="arrow"],
          div[id*="EqxDPyRergldTPAsq5QX"] [class*="scroll"],
          div[id*="EqxDPyRergldTPAsq5QX"] [class*="arrow"],
          [data-form-id="EqxDPyRergldTPAsq5QX"] [class*="scroll"],
          [data-form-id="EqxDPyRergldTPAsq5QX"] [class*="arrow"],
          .leadconnector-widget [class*="scroll-indicator"],
          .leadconnector-widget [class*="scroll-arrow"],
          .leadconnector-minimized-tab [class*="scroll"],
          .leadconnector-minimized-tab [class*="arrow"],
          button[aria-label*="Contact"] + *,
          button[aria-label*="CONTACT"] + * {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          
          /* Hide scrollbar in minimized state */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar,
          div[id*="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          
          /* Target any sibling elements that might be scroll indicators */
          #polite-slide-in-right-EqxDPyRergldTPAsq5QX ~ * {
            pointer-events: none;
          }
          
          /* Ensure minimized button doesn't have scroll indicators */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"] button,
          div[id*="EqxDPyRergldTPAsq5QX"] button {
            overflow: hidden !important;
          }
        `
      }} />
      <div ref={containerRef} />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}

