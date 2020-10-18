import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                animate('500ms ease-out', style({ transform: 'translateY(-100%)' }))

            ]),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ top: '0%', transform: 'translateY(-100%)' }))
                ], { optional: true }),
                query(':enter', [
                    animate('500ms ease-out', style({ top: '-100%', transform: 'translateY(0%)' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);