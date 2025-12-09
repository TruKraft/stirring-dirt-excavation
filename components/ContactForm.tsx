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

  // Apply styles after widget loads to hide scrollbars
  useEffect(() => {
    const applyScrollbarStyles = () => {
      const widgetElements = document.querySelectorAll('[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"], [id*="EqxDPyRergldTPAsq5QX"], [data-form-id="EqxDPyRergldTPAsq5QX"]');
      widgetElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.scrollbarWidth = 'none';
          (element.style as any).msOverflowStyle = 'none';
          element.style.overscrollBehavior = 'contain';
        }
      });
    };

    // Apply immediately and after a delay to catch dynamically created elements
    applyScrollbarStyles();
    const timeoutId = setTimeout(applyScrollbarStyles, 1000);
    const intervalId = setInterval(applyScrollbarStyles, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
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
          
          /* Completely hide all scrollbars - Webkit browsers */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar,
          div[id*="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar,
          [data-form-id="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar,
          .leadconnector-widget::-webkit-scrollbar,
          .leadconnector-minimized-tab::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
            background: transparent !important;
          }
          
          /* Hide scrollbar track and thumb */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar-track,
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar-thumb,
          div[id*="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar-track,
          div[id*="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar-thumb,
          [data-form-id="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar-track,
          [data-form-id="EqxDPyRergldTPAsq5QX"]::-webkit-scrollbar-thumb {
            display: none !important;
            background: transparent !important;
          }
          
          /* Hide scrollbars - Firefox */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"],
          div[id*="EqxDPyRergldTPAsq5QX"],
          [data-form-id="EqxDPyRergldTPAsq5QX"],
          .leadconnector-widget,
          .leadconnector-minimized-tab {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          
          /* Prevent sticky scroll behavior - fix overflow and touch */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"],
          div[id*="EqxDPyRergldTPAsq5QX"],
          [data-form-id="EqxDPyRergldTPAsq5QX"] {
            overflow-x: hidden !important;
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
            touch-action: pan-y !important;
          }
          
          /* Ensure minimized button doesn't have scroll indicators */
          div[id*="polite-slide-in-right-EqxDPyRergldTPAsq5QX"] button,
          div[id*="EqxDPyRergldTPAsq5QX"] button,
          [data-form-id="EqxDPyRergldTPAsq5QX"] button {
            overflow: hidden !important;
            touch-action: manipulation !important;
          }
          
          /* Prevent scroll event interference */
          #polite-slide-in-right-EqxDPyRergldTPAsq5QX {
            overscroll-behavior: contain !important;
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

