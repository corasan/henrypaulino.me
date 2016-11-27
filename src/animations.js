export const enterTransition = (target) => {
  TweenMax.from(target, 1.5, {opacity: 0, x: 150});
}

export const footerAnimation = (target) => {
  TweenMax.from(target, 0.8, {opacity: 0});
}
