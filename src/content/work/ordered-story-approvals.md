---
order: 3
slugId: ordered-story-approvals
title: Building an ordered story approval workflow
shortTitle: Ordered story approvals
subtitle: Giving each story reviewer a turn, with assigned roles and notifications as a review progresses.
employer: Spokn
role: Software Engineer
period: Aug 2025 – Present
evidenceBadge: Employer Project · Spokn
illustrationBadge: Contains Labeled Fictional Approval Demo
ogImage: /og/ordered-story-approvals.png
stack:
  - Node.js
  - TypeScript
  - Express
  - MySQL
  - Sequelize
  - Customer.io
  - REST APIs
cardSummary: Notify the next reviewer when the previous approval is complete.
decisionSummary: The backend handles step order and reviewer permissions. A client can show the active step using those rules.
calloutHeading: Product rules belong in the API boundary
calloutQuote: Hiding an “Approve” button in the UI isn’t a permission model. Enforcing step order and role checks in the service layer guarantees every client—and every Customer.io notification—follows the exact same rule.
---

## Why the order matters

Imagine an editorial lead, a compliance reviewer, and a final approver reviewing the same story. If the final approver is asked to act while compliance is still working, it is unclear which version they are signing off on.

## What I built

At Spokn I built story approval workflows and team administration APIs with ordered review steps, assigned reviewers, and role restrictions. I also integrated Customer.io notifications into the workflow. Order and permissions answer different questions. The next step can be ready while a particular person still lacks the role to approve it.
