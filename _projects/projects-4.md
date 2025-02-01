---
title: "<div style='font-size: 24px; color: #333; font-family: sans-serif;'>Sequential Sketch Stroke Generation</div>"
collection: portfolio
custom_padding: "small"
---


<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
In this project, We designed and implemented a sequence prediction model for generating handwritten strokes, focusing on a stroke-by-stroke generation process that mimics how users naturally draw. The goal was to create a conditional diffusion model capable of generating sequential strokes to form complete sketches. The project utilized the Quick, Draw! dataset, which contains user-captured sketch strokes with timestamps across 345 different object categories.</p>

<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
To achieve this, We explored various perspectives on data representation, including both image-based and sequential approaches. The model was trained on three specific categories: cat, garden, and helicopter, with a separate diffusion model developed for each category.</p>

<br>
<p style="font-size: 20px; color: #333; font-family: sans-serif;">
  Datasets
</p>


<div style="text-align: center;">
  <figure style="display: inline-block; margin: 0;">
    <img src="/images/preview_4.png" class="portfolio-image" alt="Preview Image" style="display: block; margin: 0 auto;">
    <figcaption style="font-size: 14px; color: #333; font-family: sans-serif; margin-top: 10px;">
      Quick, Draw! Dataset
    </figcaption>
  </figure>
</div>


<br>
<p style="font-size: 20px; color: #333; font-family: sans-serif;">
Poster
<img src="/images/stroke_poster.png" class="portfolio-image">
</p>