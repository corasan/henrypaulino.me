export const enterTransition = (target) => {
  TweenMax.from(target, 1.8, {opacity: 0, x: 160});
}

export const footerAnimation = (target) => {
  TweenMax.from(target, 1.2, {opacity: 0});
}
