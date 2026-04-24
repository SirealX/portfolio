/**
 * Ambient type declarations for EmailJS browser SDK loaded via CDN.
 * This avoids @ts-ignore throughout the codebase.
 */
interface EmailJSResponseStatus {
  status: number;
  text: string;
}

interface EmailJSStatic {
  init(publicKey: string): void;
  send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>
  ): Promise<EmailJSResponseStatus>;
}

declare const emailjs: EmailJSStatic;
