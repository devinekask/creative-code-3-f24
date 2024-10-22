Exercise:
-------------------------
- Use ScrollTrigger to animate the brightness of the section with classname masthead. 
- When the panels section reaches the top of the viewport, it is pinned and the panels start to animate  horizontally. When a panel comes into view a timeline animation of the title and according image starts playing.
- When we are scrolling through the panels, the subtitle is changed to "...% explored" where "..." is the calculated percentage of the total horizontal scroll.

Try to experiment/use 
------------------------
- standalone ScrollTrigger instance (ScrollTrigger.create() )
- toggleActions
- scrub
- dynamically calculate ScrollTrigger end point by using the offsetWidth property of the panels div block.
- containerAnimation property (to start the nested Timeline only when a panel comes into view)