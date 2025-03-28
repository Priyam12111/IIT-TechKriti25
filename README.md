# FinStory Overview

**FinStory** is an AI-powered financial storytelling platform designed to simplify complex financial data. By leveraging Large Language Models (LLMs), the project extracts key financial insights from company reports and transforms them into easy-to-understand narratives. The financial stories are then structured into a single JSON file, which serves as the final output for analysis and visualization.

## Technical Workflow

1. **Extract Financial Data**: Retrieve financial reports of selected companies (Reliance Industries, TCS, SBI) for FY24.
2. **Process Data Using LLM**: The model interprets and converts financial data into a structured story format.
3. **Generate JSON Output**: The final processed financial story is saved in a structured JSON file.
4. **Frontend Display**: The data is visualized using a React-based frontend for better user interaction.

## Tech Stack

- **Frontend**: React  
- **Backend**: FAST  
- **LLM Processing**: OpenAI / Other suitable LLMs  
- **Data Handling**: JSON for storing structured financial narratives

## Example

An example financial story for TCS is included in the project (refer to the uploaded video for demonstration).

## How to Use

1. Run the backend to fetch and process financial reports.
2. Generate financial stories using the LLM model.
3. Store the financial story in a JSON format.
4. Load the JSON data into the frontend for visualization.

## Future Enhancements

- Support for more companies and datasets.
- Improved interactivity and financial insights visualization.
- Enhanced storytelling techniques using AI-generated graphs and summaries.

