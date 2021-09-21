import React, { useState } from 'react';
import normalize from '@/utils/normalize';

const delay = (duration) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, duration);
  });
};

const copyToClipboard = (str) => {
  const { clipboard } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, true);
    textarea.setAttribute(`contenteditable`, true);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);
    return Promise.resolve(true);
  }
  return clipboard.writeText(str);
};

const CopyCodeButton = ({
  className,
  content, // raw content passed by gatsby-remark-pre-content
  duration = 3000,
  trim = false,
}) => {
  const [copied, setCopied] = useState(false);

  if(!content) return
  const [stripped] = normalize(content); // strip unwanted comments

  const label = copied ? `copied to clipboard` : `copy code to clipboard`;

  return (
    <div className="relative w-full text-right translate-y-full z-20 -mt-8">
      <button
        type="button"
        title={label}
        name={label}
        className="copy-button"
        disabled={copied}
        onClick={async () => {
          await copyToClipboard(trim ? stripped.trim() : stripped);
          setCopied(true);
          await delay(duration);
          setCopied(false);
        }}
      >
        {copied ? `Copied` : `Copy`}
        <span className="sr-only" aria-roledescription="status">
          {label}
        </span>
      </button>
    </div>
  );
};

export default CopyCodeButton;