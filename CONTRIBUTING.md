## Partner Contribution Workflow

A guide for partners contributing documentation to the UniMaaS wiki.

### 1. Initial setup (one time)

1. Get added as a collaborator on the GitHub repository.
2. Clone the repository locally.
3. Review the repo for every file where your organization appears as **Lead** in the header block.

### 2. Locate your files

Each markdown file begins with a partner assignment header similar to:

``````
> This page will be completed by the following partners:
>
> **Lead:** CEL
>
> **Contributors:** NTUA, UPV, NET, NET-BE, ODINS
``````

Search the repo for your organization name to build your task list.

### 3. Deliver work (per task or task group)

**Step 1 – Branch**  
Never work directly on `main`. Create a feature branch such as `wp4-task4.1-partnername`.

**Step 2 – Edit**  
Update only the files where you are listed. Replace placeholder text with the actual technical content and keep any provided template structure.

**Step 3 – Commit**  
Write descriptive commit messages prefixed with the work package/task, e.g., `WP4-T4.1: Add Data Spaces documentation`.

**Step 4 – Push**  
Push your branch to GitHub.

**Step 5 – Pull request**  
Lead partners open the PR, provide a clear title and description, and tag contributing partners when needed.

**Step 6 – Review**  
Wait for the Netcompany integration team to review.

**Step 7 – Merge & publish**  
Once approved, the PR merges into `main` and the site publishes automatically.

### 4. Choose a workflow style

**Option A – Separate PRs**
- One branch and PR per task/file.
- Ideal when tasks are completed at different times.

**Option B – Combined PR**
- One branch that covers all assigned tasks.
- Submit a single PR after finishing everything.

### 5. Key rules

1. Lead partners own PR creation.
2. Contributing partners share their input with the lead before the PR opens.
3. Edit only the files that list your organization.
4. Every change must flow through a PR; never push directly to `main`.
5. The Netcompany integration team approves all PRs prior to merge.

Workflow recap: find your files → branch → edit → push → PR → review → merge.
