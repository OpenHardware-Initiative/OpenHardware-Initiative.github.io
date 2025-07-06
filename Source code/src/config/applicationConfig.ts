// Application Configuration
// Set this to your Google Form URL when applications are open
// Set to null or empty string when applications are closed
export const APPLICATION_CONFIG = {
  // Google Form URL - set this when applications are open
  // Set to null or empty string to show "Application Closed" page
  googleFormUrl: null as string | null,
  
  // Alternative: You can also set this to a different application system URL
  // applicationUrl: "https://your-application-system.com/apply",
  
  // Application status (auto-detected based on URL)
  get isOpen(): boolean {
    return !!this.googleFormUrl && this.googleFormUrl.trim() !== "";
  },
  
  // Get the appropriate URL or route
  get applicationUrl(): string {
    if (this.isOpen) {
      return this.googleFormUrl!;
    }
    return "/apply"; // Route to ApplicationClosed page
  },
  
  // Whether to open in new tab (for external links)
  get openInNewTab(): boolean {
    return this.isOpen; // External forms open in new tab, internal pages don't
  }
};

// Example usage:
// To open applications: set googleFormUrl = "https://forms.google.com/your-form-id"
// To close applications: set googleFormUrl = null or "" 