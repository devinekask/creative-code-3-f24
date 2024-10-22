# Scrollworld

- Use ScrollTrigger to set the brightness filter of the hero section to 0 when we scroll down.
- When the explore section reaches the top of the viewport, it is pinned and the panels start to scroll horizontally.
- When a panel comes into view, the image in each panel animates into view (fade in + slide in from the bottom).
- When we are scrolling through the panels, the subtitle is changed to "...% explored" where "..." is the calculated percentage of the total horizontal scroll.

Try to experiment/use 
------------------------
- standalone ScrollTrigger instance (ScrollTrigger.create() )
- toggleActions
- scrub
- dynamically calculate ScrollTrigger end point by using the offsetWidth property of the panels div block.
- containerAnimation property (to start the nested Timeline only when a panel comes into view)