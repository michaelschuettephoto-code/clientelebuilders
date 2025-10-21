// Minimal entry-server for build compatibility
// This file is required by package.json build scripts but not used in SPA mode
export function render() {
  return { html: '' };
}
