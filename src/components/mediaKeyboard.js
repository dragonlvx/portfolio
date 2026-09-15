export function activateMediaOnKey(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.currentTarget.click();
  }
}

export function focusMediaTrigger(event) {
  event.currentTarget.focus({ preventScroll: true });
}
