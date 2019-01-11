---
layout: default
---

# Code of Conduct

All attendees, speakers, sponsors, volunteers and organizers at any Plotter
People event are required to abide by the following code of conduct. Organizers
will enforce this code throughout the event.

## How to Get in Touch

If you see, hear, or over-hear anything that makes you uncomfortable, please
find one of us and we'll do what we can to make it right.

If you can't immediately find one of us in person if you see or hear something,
you can send an anonymous SMS to [**(415) 237-7262**](sms:+14152377262), or email
[plotterpeople@nornagon.net](mailto:plotterpeople@nornagon.net).

Or, you can submit an anonymous report right here.

<script>
function cocSubmit(e) {
  e.preventDefault()
  fetch('https://ppconduct.herokuapp.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({description: description.value}),
  }).then(response => {
    reportform.style.display = 'none'
    reportresult.style.display = null
    reportresult.style.color = 'green'
    reportresult.textContent = 'Thank you. The organizers have been notified.'
  }).catch(e => {
    reportresult.style.display = null
    reportresult.style.color = 'red'
    reportresult.textContent = 'There was a problem notifying the organizers. Try again, or text (415) 237-7267.'
  })
}
</script>
<form id="reportform" onsubmit="cocSubmit(event)">
  <p><textarea placeholder="Anonymously send us a report." autofocus required id="description" style="width: 100%; height: 4em; border: 2px solid #b3b3b3; font-size: 1em; padding: .5rem .75rem;"></textarea></p>
  <button style="border: 2px solid black; padding: 5px 10px; font: inherit; box-shadow: 2px 2px #c3c3c3">Report</button>
  <p>
    We’ll review and act on it. If you let us know who you are, we’ll
    follow up with you.
  </p>
</form>
<p id="reportresult" style="display: none"></p>

## The Quick Version

Plotter People is dedicated to providing a harassment-free meet-up experience
for everyone, regardless of gender, sexual orientation, disability, physical
appearance, body size, race, age, or religion. We do not tolerate harassment of
attendees in any form. Sexual language and imagery is not appropriate in any
medium, including talks (or even just casual conversation arriving, during and
after the event). Plotter People participants violating these rules may be
sanctioned or expelled from the meet-up without a refund at the discretion of
the organizers

Plotter People's code of conduct is inspired by the [JSConf code of
conduct](https://jsconf.com/codeofconduct.html).

## The Less Quick Version

Harassment includes offensive verbal comments related to gender, gender
identity and expression, age, sexual orientation, disability, physical
appearance, body size, race, ethnicity, religion, technology choices, sexual
images in public spaces, deliberate intimidation, stalking, following,
harassing photography or recording, sustained disruption of talks or other
events, inappropriate physical contact, and unwelcome sexual attention.

Participants asked to stop any harassing behavior are expected to comply
immediately.

If a participant engages in harassing behavior, the meet-up organizers may take
any action they deem appropriate, including warning the offender or expulsion
from the meet-up without refund.

If you are being harassed, notice that someone else is being harassed, or have
any other concerns, please contact an organizer immediately.

Meet-up organizers will be happy to help participants contact venue security or
local law enforcement, provide escorts, or otherwise assist those experiencing
harassment to feel safe for the duration of the event. We value your
attendance.

We expect participants to follow these rules at all meet-up venues and
meet-up-related social events. This includes any social activity preceding or
following a meet-up.
