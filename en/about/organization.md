---
layout: default
title: Organization
permalink: /about/:basename/
toc: true
tocMaxDepth: 2
---
# {{ page.title }}

## Consortium partners
The SBDI Consortium consists of eleven partner organizations. Below we list the SBDI Consortium partners and describe their responsibilities, contributions and skills.

{% for partner in site.data.partners %}
  <article class="clear-both overflow-auto">
    <h3>{{ partner.title }}{% if partner.abbreviation %} ({{ partner.abbreviation }}){% endif %}</h3>
    <img class="w-30 h-30 lg:w-36 lg:h-36 mr-4 lg:mr-6 float-left" src="/uploads/partners/{{ partner.image }}" alt="Logotype {{ partner.title }}" aria-hidden="true">
    <p>{{ partner.description }}</p>
  </article>
{% endfor %}

The SBDI Executive Office (ExO) manages the daily business of SBDI and coordinates the work in different work groups.

## Executive office
<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
{% for item in site.data.organisation["executive_office"] %}
  <article class="max-w-3xs">
    <img src="/uploads/people/{{ item.image }}" class="h-56" alt="Picture of {{ item.name }}">
    <h3 class="text-xl mt-4">{{ item.name }}</h3>
    <div class="italic text-lg">{{ item.title }}</div>
    <div class="mt-3">{% include icons/envelope.html %}<a href="mailto:{{ item.email }}">{{ item.email }}</a></div>
    {% if item.phone %}
      <div class="mt-1">{% include icons/phone.html %}<a href="tel:{{ item.phone }}">{{ item.phone }}</a></div>
    {% endif %}
    <div class="mt-4 flex">
      {{ item.affiliation }}
      <img src="/uploads/partners/{{ item.affiliation_image }}" class="{{ item.affiliation_image_class | default: "h-20"}}" alt="Logotype of {{ item.affiliation }}" aria-hidden="true">
    </div>
  </article>
{% endfor %}
</div>

## Govnernance

### Steering committee
SBDI is governed by an independent Steering Committee (SC) composed of seven representatives with wide experience from research and research infrastructure in Sweden and abroad.

{% for item in site.data.organisation["steering_committee"] %}
  - *{{ item.name }}*, {{ item.affiliation }}
{% endfor %}

### Scientific committee
The SBDI SC is supported by a Scientific Committee (SciC). The SciC consists of internationally renowned representatives from the biodiversity informatics and user communities.

{% for item in site.data.organisation["scientific_committee"] %}
  - *{{ item.name }}*, {{ item.affiliation }}
{% endfor %}

### Stakeholder assembly
Additionally, representatives from the heads of all partner organizations in the SBDI consortium congregate for an annual Stakeholder assembly, pointing out directions to the SC and handling common matters related to the overarching administration of the SBDI consortium.
