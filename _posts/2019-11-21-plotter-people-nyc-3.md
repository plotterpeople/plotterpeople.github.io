---
title: "Plotter People NYC #3"
date: 2019-11-21 19:00:00 -0400
date_label: Thursday, November 21<br/>7:00 - 9:00pm
venue: Two Sigma Ventures<br>Third Floor<br>[100 6th Ave., NYC](https://goo.gl/maps/CDfbvvHRyeP4AFWV7)
eventbrite_id: 79980458705
categories: event-nyc
---
{::options parse_block_html="true" /}

The third Plotter People NYC will take place on November 21, 2019. Join us and meet a community of artists, makers, and creative coders who use robots to make art. Everyone who has an interest in pen plotting and robotic art is welcome to attend, regardless of experience level.

<div class="when-and-where">
<div class="when">
<h4>When</h4>
{{ page.date_label }}
</div>
<div class="where">
<h4>Where</h4>
{{ page.venue }}
</div>
</div>

Plotter People is free to attend thanks to Two Sigma Ventures' generous donation of event
space, but please RSVP so we can sign you in to the building!

{::options parse_block_html="false" /}

{% include eventbrite-button.html %}

{% include nyc-subscribe-form.html %}

<div class="squiggly">
	<h2>{{ page.title }}</h2>
</div>

{::options parse_block_html="true" /}

{:.section-header}
### Speakers

<div class="speaker">
<div class="speaker-description">
#### Show-and-tell

Five-minute presentations for plotters to talk about their work. Please <a href="mailto:plot@paulbutler.org">reach out to Paul</a> for a slot.
</div>
</div>

<div class="speaker">
<div class="speaker-description">
#### Sylvia Heisel (<a href="https://twitter.com/sylviaheisel">@sylviaheisel</a>)

<a href="https://heisel.co/">Sylvia</a> is a fashion designer and creative technologist working with 3D printing, new materials, manufacturing and physical computing for fashion and wearables. Her work can be seen at [@heisel_co](https://www.instagram.com/heisel_co/) and [namesdress.com](https://www.namesdress.com/).

</div>
<img src="{{ site.baseurl }}/assets/img/sylvia.jpg" class="speaker-image" />
</div>

### Gallery

The show-and-tell will be accompanied by a gallery in which attendees can display their work. If you would like to participate in the gallery, bring your work and we will help you set it up.

### Schedule

| 6:30pm | Arrive at {{ page.venue }}.<br/>Make some new friends! |
| 7:00pm | **Talks** |
| 8:00pm | **Gallery + Food**<br/>Grab a bite to eat, check out what folks are working on, and ask them questions! |

{% include eventbrite-button.html %}

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