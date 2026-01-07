"use client";

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    // Load the external form script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to get started? Request a quote or give us a call. We&apos;re here to help with all your home repair needs.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            {/* Phone */}
            <div className="bg-dark-lighter rounded-lg p-6 border border-gray-800 hover:border-primary transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <a
                    href="tel:+12088510122"
                    className="text-xl text-white hover:text-primary transition-colors block"
                  >
                    (208) 851-0122
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Mon-Fri 8am-6pm</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-dark-lighter rounded-lg p-6 border border-gray-800 hover:border-primary transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:Stirringdirtexcavation@gmail.com"
                    className="text-xl text-white hover:text-primary transition-colors block break-all"
                  >
                    Stirringdirtexcavation@gmail.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-3">Service Area</h4>
              <p className="text-gray-300">
                Proudly serving Northern Utah and Southern Idaho regions, including Logan, Preston, Ogden, and surrounding areas. Call to confirm service availability in your area.
              </p>
            </div>
          </div>

          {/* Request a Quote Form */}
          <div className="bg-dark-lighter rounded-lg p-6 lg:p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Request a Quote
            </h3>

            {/* External Form Iframe */}
            <div className="relative w-full" style={{ minHeight: "635px" }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/EqxDPyRergldTPAsq5QX"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                }}
                id="inline-EqxDPyRergldTPAsq5QX"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="SDE - Contact Form"
                data-height="635"
                data-layout-iframe-id="inline-EqxDPyRergldTPAsq5QX"
                data-form-id="EqxDPyRergldTPAsq5QX"
                title="SDE - Contact Form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
