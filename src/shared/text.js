const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeText(value) {
  // Unicode matching keeps surrogate pairs intact while omitting invalid XML characters.
  return String(value).replace(/[&<>"'\u0000-\u0008\u000b\u000c\u000e-\u001f\ud800-\udfff\ufffe\uffff]/gu,
    character => entities[character] ?? '');
}
