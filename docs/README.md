# MoralMap Project Overview

MoralMap project aims to develop a comprehensive platform for collecting, analyzing, and generating insights from user interactions with ethical dilemma scenarios. The platform will facilitate diverse demographic participation, ethical dilemma generation, and robust data collection processes, with automated quality control and insight generation.

Developed by Anushka Levaku, Ben Tausner, Grant Wells, Marc Vaz, Mantas Viazmitinas, and Sam Tausner

## Flow Chart Breakdown

This section outlines the flow of data and processes from platform development to final evaluation.

1. **Platform Development**: Begins with interface design and backend setup, establishing the foundation for data entry and user interactions.
2. **Ethical Dilemma Creation**: Uses AI to generate a variety of ethical dilemmas, ensuring a broad scope of scenarios for user engagement.
3. **Participant Recruitment**: Recruits a diverse demographic pool through automated and manual methods.
4. **Data Collection**: Collects responses, including demographic data, ethical responses, and free-text explanations.
5. **Quality Control**: Automatically checks responses for  quality to maintain data integrity. Inconsistent responses are those that fail attention or consisteny checks, or if participants responded too quickly.
6. **Data Aggregation**: Aggregates responses based on demographic and regional factors, preparing for analysis. Employ hierarchical clustering to identify regional clusters.
7. **Data Analysis**: Identifies ethical trends through statistical and ML methods, laying the groundwork for insight generation.
8. **Insight Generation**: AI-generated insights are reviewed and interpreted by human experts for contextual relevance. Will explore different visualization methods based on geographic, demographic, and ideological clusters.
9. **Evaluation**: The process concludes with a decision point where metrics are reviewed to determine the project's readiness for dissemination.

## Components and Milestones

### 1. Platform Development (Point Value: 4)

**Description**: Build a web platform to host and manage user interactions, data entry, and collection. This includes interface design, backend setup, and initial testing to ensure usability and scalability for data collection.

- **Milestones**:
  - **M1**: Develop UI for data entry and interaction.
  - **M2**: Implement backend infrastructure for storing and retrieving user responses.
  - **M3**: Unit testing

### 2. Ethical Dilemma Creation (Point Value: 1)

**Description**: Utilize AI to automatically generate ethical dilemma scenarios, drawing from existing studies and creating new variations. This component ensures a diverse array of dilemmas, relevant to various cultural and ideological contexts.

- **Milestones**:
  - **M1**: Generate an initial set of ethical dilemmas based on existing studies.
  - **M2**: Use generative AI to create more ethical dilemmas.

### 3. Participant Recruitment (Point Value: 3)

**Description**: Recruit participants from (ideally) diverse demographics across the U.S. through both automated (Amazon Mechanical Turk) and manual (university/community partnerships) methods.

- **Milestones**:
  - **M1**: Set up recruitment through Amazon Mechanical Turk.
  - **M2**: Establish partnerships with universities and community organizations.
  - **M3**: Track recruitment to ensure diverse participant representation.

### 4. Data Collection (Crowd Input) (Point Value: 2)

**Description**: Collect demographic data, ethical dilemma responses, and text explanations from participants. This component involves user engagement on the platform and recording of diverse data inputs.

- **Milestones**:
  - **M1**: Enable data collection for demographic details and dilemma responses.

### 5. Quality Control (Automatic Checks) (Point Value: 2)

**Description**: Implement automatic quality control checks, such as attention checks, consistency verification, and response time validation, to ensure data integrity.

- **Milestones**:
  - **M1**: Develop and test attention and consistency checks.
  - **M2**: Exclude low-quality responses and flag data for review if necessary.

### 6. Data Aggregation (Automatic) (Point Value: 3)

**Description**: Use statistical and NLP techniques to organize responses by demographic, regional, and ideological factors, forming the foundation for data analysis.

- **Milestones**:
  - **M1**: Choose models and implement data aggregation pipeline.
  - **M2**: Validate aggregated data accuracy and relevance.

### 7. Data Analysis (Automatic) (Point Value: 3)

**Description**: Perform data analysis to identify ethical trends using NLP and statistical methods, preparing insights on regional and demographic patterns.

- **Milestones**:
  - **M1**: Choose and apply statistical methods to extract trends.
  - **M2**: Review and verify data analysis results.
  - **M3**: Visualize data analysis results (if time allows)

### 8. Insight Generation (Mixed) (Point Value: 1)

**Description**: Generate preliminary insights from data patterns, leveraging AI for automatic pattern recognition, followed by human interpretation for contextual insights.

- **Milestones**:
  - **M1**: Implement AI-based insight generation.
  - **M2**: Conduct human review and interpretation.

### 9. Evaluation (Decision Point) (Point Value: 1)

**Description**: Review metrics (e.g., demographic diversity, data quality, statistical significance) to determine if findings are ready for dissemination or if further adjustments are needed.

- **Milestones**:
  - **M1**: Set evaluation criteria.
  - **M2**: Review results against criteria and decide next steps.

### Data
ethical_dilemmas.json – ourlist of ethical dilemmas designed to explore ideological differences in contemporary issues: each entry has an "issue," (topic) a "question," and "options" (type of answers)

sample_qc_input.json/sample_qc_output.json – shows how the QC module identifies low-quality responses
  - Input: participant details with responses and quality flags (attention check from response time)
  - Output: flags responses as valid or invalid

sample_aggregation_input.json/sample_aggregation_output.json – example of how the aggregation module groups data by demographics
  - Input: demographics and responses from each participant
  - Output: counts of responses by demographic (ideology, state, etc)
