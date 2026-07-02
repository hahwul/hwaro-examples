+++
title = "Insignia"
description = "CV of a robotics researcher working on compliant manipulation and grasping"
template = "home"

[extra]
name = "Petra Lindqvist"
role = "PhD Candidate, Robotics — Compliant Manipulation & Grasping"
tagline = "I build hands and arms that yield on contact instead of fighting it — mechanisms and controllers that treat uncertainty about an object as a reason to grip more gently, not more firmly."
lab = "Thornfield Manipulation Lab, Aldergrove Institute of Technology"
email = "petra.lindqvist@thornfield-lab.org"
diagram_caption = "Joint layout of TF-3, the lab's compliant test arm — four actuated degrees of freedom and a two-finger tactile gripper."

research_title = "Variable Stiffness for Contact-Rich Grasping"
research_body = "Most grasp failures happen in the first ten milliseconds of contact, before any controller has time to react. My current work moves that reaction into the mechanism itself: fingertips whose stiffness can be commanded on the fly, so the hand is soft during first contact and stiff once a grip is confirmed."
research_tags = ["Series-elastic actuation", "Tactile sensing", "Sim-to-real transfer"]

tool_intro = "A snippet from tfgrasp, the lab's Python control library, showing the closed-loop routine that closes a gripper until it detects first contact rather than a fixed position."

[[extra.tool_snippet]]
line = "def close_until_contact(hand, k_min=4.0, k_max=40.0, dx=0.4):"
[[extra.tool_snippet]]
line = "    \"\"\"Close fingers under low stiffness until tactile contact,"
[[extra.tool_snippet]]
line = "    then ramp stiffness up to hold the grasp.\"\"\""
[[extra.tool_snippet]]
line = "    hand.set_stiffness(k_min)"
[[extra.tool_snippet]]
line = "    while not hand.contact_detected():"
[[extra.tool_snippet]]
line = "        hand.step_close(dx)"
[[extra.tool_snippet]]
line = "    hand.ramp_stiffness(k_min, k_max, duration=0.15)"
[[extra.tool_snippet]]
line = "    return hand.grasp_report()"
+++

Fifth-year PhD candidate working on the mechanics and control of compliant robotic hands. Before Aldergrove I built pick-and-place tooling for a small warehouse automation shop, where I got tired of watching grippers crush things they were supposed to be gentle with — that's the problem I still work on.
