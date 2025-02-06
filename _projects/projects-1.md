---
title: "<div style='font-size: 24px; color: #333; font-family: sans-serif;'>
Video Generation with Reference Image and Pose Guidance</div>"
collection: portfolio
custom_padding: "small"
---

<div style="display: flex; justify-content: center;">
  <video src="/images/Motion_Retargeting.mp4" width="640" height="360" controls></video>
</div>
<div style="height: 15px;"></div>

<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
In this project, we focused on developing a novel video generation framework that leverages motion data to create realistic and dynamic videos. The core objective was to generate high-quality videos guided by reference images and pose sequences, utilizing a diffusion-based model architecture.</p>

<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
Existing research primarily relied on 2D pose guidance using OpenPose for video generation tasks. However, this approach faced significant limitations when handling motions or reference images with differing compositions. Specifically, the quality of generated content drastically degraded in such scenarios. Since the motion information was processed in 2D, the model struggled to truly "understand" the motion. Instead, it treated the guidance as a static image, making it vulnerable to issues such as motion rotation, changes in camera viewpoint, and structural inaccuracies (e.g., incorrect arm lengths, disconnections in body parts like the waist). These limitations highlighted the need for a more robust and motion-aware guidance mechanism.</p>

<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
To address these challenges, some studies, such as CHAMP, attempted to incorporate SMPL-based body information as guidance. While this was a step forward, CHAMP still relied heavily on traditional 2D OpenPose guidance, supplementing it with SMPL-derived visual and depth images. Although this hybrid approach improved results to some extent, it did not fully leverage the potential of SMPL's 3D motion representation.</p>

<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
In our work, we aimed to maximize the use of SMPL information to overcome these limitations. Our proposed model focuses on three key objectives: 1. Better Understanding of 3D Motion 2. Robustness to Body Rotation and Camera View Changes 3. Preservation of Structural Integrity</p>

<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
By focusing on these aspects, we propose a novel framework that not only addresses the shortcomings of existing methods but also sets a new standard for motion-guided video generation. Our approach demonstrates significant improvements in both qualitative and quantitative metrics, paving the way for more realistic and versatile video synthesis applications.
</p>


<br>
<p style="font-size: 20px; color: #333; font-family: sans-serif;">
  References
</p>
<p style="font-size: 17px; color: #444444; font-family: sans-serif;">
[1] Zhu, Shenhao, et al, Champ: Controllable and consistent human image animation with 3d parametric guidance. ECCV. 2024.<br>
[2] Li Hu et al. Animate Anyone: Consistent and Controllable Image-to-Video Synthesis for Character Animation. CVPR. 2024.<br>
[3] Zhang, Yuang, et al. Mimicmotion: High-quality human motion video generation with confidence-aware pose guidance. arXiv. 2024.<br>
[4] Shuyuan Tu1, et al. StableAnimator: High-Quality Identity-Preserving Human Image Animation. CVPR. 2024.
</p>