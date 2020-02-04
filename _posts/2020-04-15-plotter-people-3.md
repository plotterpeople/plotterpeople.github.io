---
title: "Plotter People #2"
date: 2020-04-15 18:30:00 -0800
date_label: Wednesday April 15, 2020<br/>6:30 - 9:00pm
venue: Microsoft Reactor<br/>[680 Folsom Street Suite 145,<br/>San Francisco, CA 94107](https://goo.gl/maps/auz4UWAub9jGjofZ9)
eventbrite_id: 92789023467
categories: event-sf
---

{::options parse_block_html="true" /}

Plotter People is a meetup for creative coders and people interested in
collaborating with robots to make art. Come talk to folks who make generative
art in a wide variety of programming languages and software environments, see
pen plotters in action and meet the people who make them.

<div class="when-and-where">
<div class="when">
<h4>When</h4>
{{ page.date_label }}
</div>
<div class="where">
<h4>Where</h4>
{{ page.venue }}
<small>This venue is wheelchair-accessible.</small>
</div>
</div>

Plotter People is free to attend thanks to Microsoft's generous donation of event
space, but please RSVP so we know how many people to expect!

{::options parse_block_html="false" /}

{% include eventbrite-button.html %}

{% include subscribe-form.html %}

<div class="squiggly">
	<h2>{{ page.title }}</h2>
</div>

{::options parse_block_html="true" /}

{:.section-header}
### Speakers

<div class="speaker">
<div class="speaker-description">
#### Speaker #1: TBD

TBD

</div>
<img src="" class="speaker-image" />
</div>


<div class="speaker">
<div class="speaker-description">
#### Speaker #2: TBD

TBD

</div>
<img src="" class="speaker-image" />
</div>

{:.section-header}
### Schedule

| 6:30pm | Arrive at {{ page.venue }}.<br/>Make some new friends! |
| 7:00pm | **Speaker #1**<br/>TBD |
| 7:30pm | **Speaker #2**<br/>TBD |
| 8:00pm | **Gallery**<br/>Check out what folks are working on, and ask them questions! We'll have plotters running---you might even get to plot your own SVGs! |
| 9:00pm | Head home with a head full of ideas! |

{% include eventbrite-button.html %}

{:.section-header}
### Code of Conduct

All attendees, speakers, sponsors, volunteers and organizers are required to
abide by the [Plotter People Code of Conduct][coc].

[coc]: /conduct.html

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
<script type="text/javascript">
(window.rsvpIds || []).forEach(function (id) {
	window.EBWidgets.createWidget({
		widgetType: 'checkout',
		eventId: '{{ page.eventbrite_id }}',
		modal: true,
		modalTriggerElementId: id,
		onOrderComplete: function() {},
	})
})
</script>
