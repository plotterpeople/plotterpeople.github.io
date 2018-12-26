---
title: "Plotter People #1"
date: 2019-01-14 18:30:00 -0800
date_label: Monday Jan 14, 2019<br/>6:30 - 9:00pm
venue: GitHub SF<br/>[88 Colin P Kelly Jr St,<br/>San Francisco, CA 94107](https://goo.gl/maps/fY73YaqfztR2)
eventbrite_id: 53937598810
categories: event
---

{::options parse_block_html="true" /}

Plotter People is a meetup for creative coders and people interested in
collaborating with robots to make art. You'll get to talk to folks who make
generative art in a wide variety of programming languages and software
environments, and you'll get access to pen plotters and the people who make
them.

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

Plotter People is free to attend thanks to GitHub's generous donation of event
space, but please RSVP so we know how many people to expect!

{::options parse_block_html="false" /}

{% include eventbrite-button.html %}

<div class="squiggly">
	<h2>{{ page.title }}</h2>
</div>

{::options parse_block_html="true" /}

{:.section-header}
### Speakers

<div class="speaker">
<div class="speaker-description">
#### Sher Minn: Recreating Retro Plotter Art

A brief history of making art with robots, some techniques that people have
used to create art with plotters, and how to recreate them.

Sher Minn is a programmer, an artist and a Recurse Center alum living in New
York. Follow her on Twitter at [@piratefsh](https://twitter.com/piratefsh)!
</div>
<img src="{{ site.baseurl }}/assets/img/sherr.jpg" class="speaker-image" />
</div>


<div class="speaker">
<div class="speaker-description">
#### Lenore Edman: Plotter Projects of Evil Mad Scientist Laboratories

A history of plotter projects that [EMSL](https://www.evilmadscientist.com/)
has worked on, from the first e-paper plotter they made in 2007 to the wildly
popular AxiDraw.

Lenore Edman is a maker of exceptional writing and drawing machines at Evil Mad
Scientist Laboratories in Sunnyvale, California. Follow her on Twitter at
[@1lenore](https://twitter.com/1lenore) (and follow EMSL too at
[@EMSL](https://twitter.com/EMSL)!)
</div>
<img src="{{ site.baseurl }}/assets/img/lenore.jpg" class="speaker-image" />
</div>

{:.section-header}
### Schedule

| 6:30pm | Arrive at {{ page.venue }}.<br/>Make some new friends! |
| 7:00pm | **Sher Minn**<br/>Recreating retro plotter art |
| 7:30pm | **Lenore Edman**<br/>Plotter Projects of Evil Mad Scientist Laboratories |
| 8:00pm | **Gallery + Food**<br/>Grab a bite to eat, check out what folks are working on, and ask them questions! We'll have plotters running---you might even get to plot your own SVGs! |
| 9:00pm | Head home with a belly full of food and a head full of ideas! |

{% include eventbrite-button.html %}

{:.section-header}
### Code of Conduct

All attendees, speakers, sponsors, volunteers and organizers are required to
abide by the [Plotter People Code of Conduct][coc].

[coc]: /codeofconduct.html

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
