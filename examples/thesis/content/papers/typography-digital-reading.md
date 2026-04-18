+++
title = "The Effect of Typography on Digital Reading Comprehension"
date = "2026-02-18"
description = "We investigate the relationship between typographic choices and reading comprehension in digital environments. Through a controlled study with 120 participants, we compare serif and sans-serif typefaces, line length, and line height across three device categories. Results indicate that serif typefaces with generous line spacing yield statistically significant improvements in comprehension scores for long-form academic content."
tags = ["typography", "ux-research", "digital-reading"]
template = "post"

[extra]
authors = "M. Chen, A. Nakamura, L. Weber"
affiliation = "Human-Computer Interaction Lab, ETH Zurich"
+++

## Introduction

Typography has been a subject of scholarly inquiry since the invention of movable type. However, the transition from print to screen has introduced new variables that complicate established typographic wisdom. Screen resolution, ambient lighting, viewing distance, and reader control over font size all interact to influence the reading experience.

Despite the prevalence of digital reading, empirical research on the effect of web typography on comprehension remains sparse. Most existing guidelines derive from print conventions or informal usability observations rather than controlled experiments.

This paper presents a controlled study examining how specific typographic variables affect reading comprehension and subjective reading comfort in digital contexts.

## Related Work

Dyson (2004) provided an early survey of research on reading from screens, noting that reading speed was approximately 20--30% slower on CRT monitors compared to print. Subsequent studies with LCD and Retina displays have narrowed this gap considerably.

Bernard et al. (2003) compared reading performance across serif and sans-serif typefaces on screen, finding no significant difference in speed but a slight preference for sans-serif in subjective ratings. However, their study used relatively short passages that may not reflect the demands of academic reading.

Beymer et al. (2008) used eye-tracking to study the effect of font size on reading behavior, finding that smaller fonts increased fixation duration without significantly affecting comprehension. Their work highlighted the importance of distinguishing between performance metrics and physiological effort.

More recently, Rello and Baeza-Yates (2017) investigated the impact of typography on readers with dyslexia, recommending sans-serif typefaces and increased letter spacing for improved accessibility.

## Methodology

### Participants

We recruited 120 participants (68 female, 48 male, 4 non-binary) from the university population. All had normal or corrected-to-normal vision. Ages ranged from 19 to 42 (mean = 26.3, SD = 5.1). Participants reported reading primarily in digital format for both academic and leisure purposes.

### Materials

We selected four academic passages of approximately 2,000 words each from published open-access papers in the social sciences. Passages were edited for consistent difficulty level using the Flesch-Kincaid readability formula (target grade level: 12--14). Each passage was followed by 10 comprehension questions (6 factual recall, 4 inferential).

### Variables

We manipulated three independent variables:

**Typeface family:**
- Serif: Noto Serif (400 weight)
- Sans-serif: Inter (400 weight)

**Line length:**
- Short: 55 characters per line (~520px at 17px)
- Long: 85 characters per line (~780px at 17px)

**Line height:**
- Compact: 1.4
- Generous: 1.8

This yielded a 2 x 2 x 2 factorial design with 8 conditions. Participants were randomly assigned to one condition and read all four passages under that condition.

### Apparatus

Passages were displayed on three device categories:

- Desktop: 24-inch LCD monitor, 1920x1080, viewing distance ~60cm
- Laptop: 13-inch Retina display, 2560x1600, viewing distance ~45cm
- Tablet: 10.9-inch iPad Air, 2360x1640, handheld

Device order was counterbalanced using a Latin square design.

### Procedure

Participants completed a demographic questionnaire, then read each passage at their own pace. Reading time was recorded. After each passage, they answered comprehension questions without access to the text. Following all four passages, participants completed a subjective comfort questionnaire using a 7-point Likert scale.

## Results

### Comprehension Scores

A three-way ANOVA revealed a significant main effect of typeface family on comprehension scores, F(1, 112) = 4.82, p = .030. Participants in the serif condition scored higher (M = 7.6, SD = 1.4) than those in the sans-serif condition (M = 7.1, SD = 1.6).

Line height showed a significant main effect, F(1, 112) = 6.14, p = .015. The generous line height condition (M = 7.8, SD = 1.3) outperformed the compact condition (M = 6.9, SD = 1.5).

Line length did not reach significance as a main effect, F(1, 112) = 2.01, p = .159, though there was a trend favoring shorter lines.

The interaction between typeface and line height was significant, F(1, 112) = 4.21, p = .043. Post-hoc analysis revealed that the combination of serif typeface with generous line height produced the highest comprehension scores (M = 8.2, SD = 1.1), significantly exceeding all other conditions.

### Reading Time

No significant differences in reading time were observed across conditions, suggesting that the comprehension improvements were not attributable to slower, more careful reading.

### Subjective Comfort

Participants rated the serif/generous condition highest for reading comfort (M = 5.8, SD = 0.9) and "appropriateness for academic content" (M = 6.2, SD = 0.7). The sans-serif/compact condition received the lowest comfort ratings (M = 4.1, SD = 1.3).

### Device Effects

Device category did not interact significantly with any typographic variable, though tablet reading showed marginally lower comprehension scores across all conditions, possibly due to the handheld posture and associated instability.

## Discussion

Our findings provide empirical support for the use of serif typefaces with generous line spacing in digital academic publishing. The significant interaction between typeface and line height suggests that these variables should not be considered in isolation; rather, they form a system that collectively influences readability.

The absence of a significant line length effect contrasts with the strong recommendations found in web design guidelines, which typically advocate for 45--75 characters per line. However, the trend in our data was consistent with this recommendation, and a larger sample might reveal significance.

The practical implications for academic web publishing are clear. Platforms hosting scholarly content should default to serif typefaces with line heights of 1.7 or greater. The CSS implementation is straightforward:

```css
.article-body {
  font-family: "Noto Serif", Georgia, serif;
  line-height: 1.8;
  max-width: 720px;
}
```

### Limitations

Our study used a university population that may not represent the broader reading public. Additionally, the passages were in English; typographic effects may differ across writing systems. The single-session design also cannot account for the effects of prolonged reading over hours or days.

## Conclusion

Typography is not merely decorative; it is a functional component of the reading interface. For academic content presented digitally, the combination of a well-crafted serif typeface and generous line spacing yields measurable improvements in reading comprehension. We recommend that digital publishing platforms for scholarly work adopt these typographic defaults.

---

<div class="references">

## References

1. Dyson, M. C. (2004). "How physical text layout affects reading from screen." *Behaviour & Information Technology*, 23(6), 377--393.
2. Bernard, M., Lida, B., Riley, S., Hackler, T., & Janzen, K. (2003). "A comparison of popular online fonts." *Usability News*, 5(1).
3. Beymer, D., Russell, D., & Orton, P. (2008). "An eye tracking study of how font size and type influence online reading." *Proceedings of HCI 2008*, 15--18.
4. Rello, L., & Baeza-Yates, R. (2017). "How to present more readable text for people with dyslexia." *Universal Access in the Information Society*, 16(1), 29--49.
5. Bringhurst, R. (2004). *The Elements of Typographic Style* (3rd ed.). Hartley & Marks.
6. Hochuli, J. (2008). *Detail in Typography*. Hyphen Press.

</div>
