# Design System — sprayfoamreceptionist.com

Light, warm, professional B2B-service aesthetic per FLAGSHIP "NOT DARK" override. Fifth distinct
palette + typography pairing this session (prior four: rust/forest/amber+Fraunces/Inter; copper/
saguaro/gold+Fraunces/Inter; gold/juniper/rust+Bitter/Work Sans; canyon-red/sage/ochre+Roboto
Slab/Nunito Sans). This site skews slightly more "tech-service" in register than the trade/craft
sites — it's about call-handling and responsiveness, not physical installation work — so the
typography shifts to a confident sans-serif headline instead of a serif/slab, while staying
firmly in the warm-earth palette family per house rule.

## Palette (exact hexes, hue-verified against the palette gate)
| Token | Hex | Role |
|---|---|---|
| `amber` (primary) | `#C77C2E` | Primary brand accent — CTAs, links, active states (a warm signal-amber, evokes attentiveness/alertness — fitting for a "never miss a call" positioning) |
| `amberDark` | `#A0631F` | Hover/pressed states on amber |
| `moss` (secondary green) | `#5C6B4A` | Secondary accent — trust bar, badges |
| `mossDark` | `#465237` | Hover/pressed states on moss |
| `terracotta` (accent) | `#A24E32` | Sparingly — stat callouts, highlighted terms |
| `charcoal` (inverted band) | `#26201A` | Dark band background — warm near-black brown |
| `paper` (base bg) | `#F7F0E3` | Page background — warm cream |
| `paperRaised` | `#ECE1CC` | Elevated/tinted band background |
| `ink` (text) | `#2A231A` | Body text — warm dark brown-black |
| `inkSoft` | `#5E5443` | Secondary/muted text |

Hue check: amber hue ≈30°, moss hue ≈83°, terracotta hue ≈16°, charcoal hue ≈27° — all warm-earth
or natural-green, zero overlap with the banned 255-340° purple/rose band, no blue gradients.

## Typography
- **Headline:** Libre Franklin — a confident, bold grotesk-style sans, distinct from every prior
  build's serif/slab headline this session, fitting this site's slightly more "modern service"
  register.
- **Body:** Source Sans 3 — clean, highly legible, pairs naturally with Libre Franklin without
  reading cold or corporate.

## Section rhythm
Rotate: `paper` base → `paperRaised` tinted band → `charcoal` inverted band (trust bar / CTA) →
occasional full-bleed image band with a neutral dark scrim (never below 50% opacity where copy
sits). Cards use white/paperRaised surfaces with a thin amber/moss accent border.

## Motif
Communication / coverage: phone, message-square, clock (24/7), headset, check-circle,
calendar-check (lucide-react). Photography style: real-feeling spray foam contractor jobsite
imagery (a crew member on a ladder/in an attic mid-install, a phone buzzing unanswered on a
truck dashboard, a business owner reviewing missed-call notifications) — not generic stock
call-center headset-model photos, since this is about the CONTRACTOR's problem, not a call
center's product.

## Stitch design-director brief (used verbatim as the create_design_system designMd + generate prompts)
"Educational B2B resource site for spray foam insulation contractors about the cost of missed
calls and how to fix call-handling gaps — NOT a literal answering-service product page, no fake
pricing or signup flow. Light, warm, professional, slightly more modern/tech-service register
than a typical trade-contractor site. Palette: warm signal-amber #C77C2E primary, moss green
#5C6B4A secondary, terracotta #A24E32 sparingly, warm cream paper #F7F0E3 background, warm
charcoal-brown #26201A for dark inverted bands (never pure black, never navy). Headline font:
Libre Franklin (confident bold grotesk sans). Body font: Source Sans 3. Motif: communication/
coverage — phone, message, clock, headset, check-circle iconography. Section rhythm: alternate
cream base, tinted band, and a charcoal inverted trust band — never two adjacent sections share a
background. Photography should show real spray foam contractor jobsite moments (a crew member on
a ladder or in an attic, a phone going unanswered on a truck dashboard) rather than generic
call-center stock photos. Tone: practical, respectful of a busy contractor's time, no hard sales
pressure. Primary CTA throughout: 'Get Your Free Call Coverage Assessment' (a real conversation,
not a purchase flow). Zero purple/pink/blue-gradient, zero emoji as UI icons."
