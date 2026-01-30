"use client";

import * as React from "react";
import Script from "next/script";

/**
 * GoogleTranslate component
 * Loads Google Translate widget and provides a function to trigger Arabic translation
 */
export function GoogleTranslate() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ar,en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    // Clean up function
    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  // Only render on client to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div
        id="google_translate_element"
        style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
        aria-hidden="true"
      />

      {/* Google Translate Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}

/**
 * Function to trigger Arabic translation
 * Call this from the Arabic button click handler
 */
export function triggerArabicTranslation() {
  const selectElement = document.querySelector(".goog-te-combo");

  if (selectElement) {
    selectElement.value = "ar";
    selectElement.dispatchEvent(new Event("change"));

    // Set RTL direction for Arabic
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    // If widget not loaded yet, try again after a short delay
    setTimeout(() => {
      const retrySelect = document.querySelector(".goog-te-combo");
      if (retrySelect) {
        retrySelect.value = "ar";
        retrySelect.dispatchEvent(new Event("change"));
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      }
    }, 500);
  }
}

/**
 * Function to switch back to English
 */
export function triggerEnglishTranslation() {
  const selectElement = document.querySelector(".goog-te-combo");

  if (selectElement) {
    selectElement.value = "en";
    selectElement.dispatchEvent(new Event("change"));

    // Reset to LTR direction for English
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
}
