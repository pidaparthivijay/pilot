import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
  state,
} from "@angular/animations";
export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    style({ position: "relative" }),
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
        }),
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [animate("500ms ease-out", style({ transform: "translateY(-100%)" }))],
      { optional: true }
    ),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(
        ":leave",
        [
          animate(
            "500ms ease-out",
            style({ top: "0%", transform: "translateY(-100%)" })
          ),
        ],
        { optional: true }
      ),
      query(
        ":enter",
        [
          animate(
            "500ms ease-out",
            style({ top: "-100%", transform: "translateY(0%)" })
          ),
        ],
        { optional: true }
      ),
    ]),
    query(":enter", animateChild(), { optional: true }),
  ]),
]);

export const rowExpansionAnimations = trigger("rowExpansionTrigger", [
  state(
    "void",
    style({
      transform: "translateY(-10%)",
      opacity: 0,
    })
  ),
  state(
    "active",
    style({
      transform: "translateY(0)",
      opacity: 1,
    })
  ),
  transition("* <=> *", animate("500ms cubic-bezier(0.86, 0, 0.07, 1)")),
]);
