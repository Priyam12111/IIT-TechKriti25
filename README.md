# FinStory Overview

**FinStory** is an AI-powered financial storytelling platform designed to simplify complex financial data. By leveraging Large Language Models (LLMs), the project extracts key financial insights from company reports and transforms them into easy-to-understand narratives. The financial stories are then structured into a single JSON file, which serves as the final output for analysis and visualization.
![Screenshot 2025-03-28 083237](https://github.com/user-attachments/assets/df2b9a71-7f17-4a3d-9afb-ab413e28d30b)

## Technical Workflow

1. **Extract Financial Data**: Retrieve financial reports of selected companies (Reliance Industries, TCS, SBI) for FY24.
![Screenshot 2025-03-28 074705](https://github.com/user-attachments/assets/f53bda2d-a8ce-46ae-bbfc-3b2d33a9a950)
2. **Process Data Using LLM**: The model interprets and converts financial data into a structured story format.
![Screenshot 2025-03-28 075240](https://github.com/user-attachments/assets/0afe1cdf-deee-470f-a29a-1d65d120daf3)
3. **Generate JSON Output**: The final processed financial story is saved in a structured JSON file.
4. **Frontend Display**: The data is visualized using a React-based frontend for better user interaction.
   

## Tech Stack

- **Frontend**: React  
- **Backend**: FAST  
- **LLM Processing**: OpenAI / Other suitable LLMs  
- **Data Handling**: JSON for storing structured financial narratives

## Example

An example financial story for TCS is included in the project (refer to the uploaded video for demonstration).
https://photos.app.goo.gl/1GnMheiyVL1PHzsM9
## How to Use

1. Run the backend to fetch and process financial reports.
2. Generate financial stories using the LLM model.
![Screenshot 2025-03-28 083252](https://github.com/user-attachments/assets/44481414-2cd7-47a4-aeaf-5c7c1936b27d)
3. Store the financial story in a JSON format.
4. Load the JSON data into the frontend for visualization.
![WhatsApp Image 2025-03-28 at 08 42 02_3d0c6d69](https://github.com/user-attachments/assets/eb38cb9c-3881-47ad-9954-8d4a719a9249)

## Future Enhancements

- Support for more companies and datasets.
- Improved interactivity and financial insights visualization.
- Enhanced storytelling techniques using AI-generated graphs and summaries.

