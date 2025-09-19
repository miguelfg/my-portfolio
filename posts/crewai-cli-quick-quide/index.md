<!--
.. title: CrewAI CLI Quick Quide
.. slug: crewai-cli-quick-quide
.. date: 2025-09-19 12:28:39 UTC+02:00
.. tags: crewai,agents,ai
.. category: AI
.. link: 
.. description: A quick guide to using the CrewAI CLI for managing AI agent projects.
.. type: text
-->

# CrewAI CLI Quick Guide

## Overview

CrewAI is a lean, lightning-fast Python framework for orchestrating autonomous AI agents. It offers both high-level simplicity and precise low-level control, with two main approaches:

- **CrewAI Crews**: Autonomous AI agent teams with specialized roles working collaboratively
- **CrewAI Flows**: Structured, event-driven workflows with precise execution control

## Installation

### Basic Installation
```bash
# Install CrewAI core
pip install crewai

# Install CrewAI with additional tools
pip install 'crewai[tools]'
```

### Prerequisites
- Python ≥3.10 <3.14
- Environment variables for LLM providers (OpenAI, Anthropic, etc.)

### Common Dependencies Issues
```bash
# Fix tiktoken issues
pip install 'crewai[embeddings]'

```

## CLI Commands

### Project Creation
```bash
# Create a new CrewAI project
crewai create crew <project_name>

# Example
crewai create crew my-ai-team
```

### Project Structure Created
```
my_project/
├── .gitignore
├── pyproject.toml
├── README.md
├── .env
└── src/
    └── my_project/
        ├── __init__.py
        ├── main.py
        ├── crew.py
        ├── tools/
        │   ├── custom_tool.py
        │   └── __init__.py
        └── config/
            ├── agents.yaml
            └── tasks.yaml
```

### Project Management
```bash
# Install dependencies (optional)
crewai install

# Run the crew
crewai run

# Update CrewAI version
crewai update
```

### Alternative Execution
```bash
# Direct Python execution
python src/my_project/main.py
```

## Configuration Files

### agents.yaml
```yaml
researcher:
  role: >
    {topic} Senior Data Researcher
  goal: >
    Uncover cutting-edge developments in {topic}
  backstory: >
    You're a seasoned researcher with a knack for uncovering the latest
    developments in {topic}. Known for your ability to find the most
    relevant information and present it clearly.

reporting_analyst:
  role: >
    {topic} Reporting Analyst
  goal: >
    Create detailed reports based on {topic} data analysis and research findings
  backstory: >
    You're a meticulous analyst with a keen eye for detail. You turn complex
    data into clear and actionable reports.
```

### tasks.yaml
```yaml
research_task:
  description: >
    Conduct thorough research about {topic}. Make sure you find any interesting
    and relevant information given the current year is 2025.
  expected_output: >
    A list with 10 bullet points of the most relevant information about {topic}
  agent: researcher

reporting_task:
  description: >
    Review the context you got and expand each topic into a full section for a
    report. Make sure the report is detailed and contains all relevant information.
  expected_output: >
    A fully fledged report with main topics, each with a full section of
    information. Formatted as markdown without '```'
  agent: reporting_analyst
  output_file: report.md
```

## Core Components

### Agents
```python
from crewai import Agent

# Define agent with specific role and capabilities
agent = Agent(
    role="Senior Data Researcher",
    goal="Uncover cutting-edge developments in AI",
    backstory="Expert researcher with deep domain knowledge",
    verbose=True,
    tools=[SerperDevTool()],  # Add tools as needed
    llm=llm_instance  # Optional: specify LLM
)
```

### Tasks
```python
from crewai import Task

# Define task with clear objectives
task = Task(
    description="Research the latest trends in AI",
    expected_output="Comprehensive report with key findings",
    agent=researcher,
    output_file="research_report.md"  # Optional: save output
)
```

### Crews (Autonomous Teams)
```python
from crewai import Crew, Process

# Create crew with agents and tasks
crew = Crew(
    agents=[researcher, analyst],
    tasks=[research_task, analysis_task],
    process=Process.sequential,  # or Process.hierarchical
    verbose=True
)

# Execute crew
result = crew.kickoff(inputs={'topic': 'AI Agents'})
```

### Flows (Structured Workflows)
```python
from crewai.flow.flow import Flow, start, listen, router

class AnalysisFlow(Flow):
    @start()
    def fetch_data(self):
        return {"data": "initial_data"}

    @listen(fetch_data)
    def analyze_data(self, data):
        # Process data with crew or custom logic
        return analysis_results

    @router(analyze_data)
    def route_next_step(self):
        # Conditional routing based on results
        if confidence > 0.8:
            return "high_confidence"
        return "needs_review"
```

## Process Types

### Sequential Process
- Tasks executed in order
- Each task waits for previous completion
- Default process type

```python
crew = Crew(
    agents=[agent1, agent2],
    tasks=[task1, task2],
    process=Process.sequential
)
```

### Hierarchical Process
- Manager agent oversees workflow
- Automatic task delegation
- Validation of results

```python
crew = Crew(
    agents=[agent1, agent2],
    tasks=[task1, task2],
    process=Process.hierarchical
)
```

## Common Tools

### Search and Research
```python
from crewai_tools import SerperDevTool, WebsiteSearchTool

# Web search
search_tool = SerperDevTool()

# Website content search
website_tool = WebsiteSearchTool()
```

### File Operations
```python
from crewai_tools import (
    FileReadTool,
    DirectoryReadTool,
    PDFSearchTool,
    CSVSearchTool
)

# File operations
file_tool = FileReadTool()
pdf_tool = PDFSearchTool()
csv_tool = CSVSearchTool()
```

### Code and Development
```python
from crewai_tools import CodeDocsSearchTool, GithubSearchTool

# Code documentation search
code_docs = CodeDocsSearchTool()

# GitHub repository search
github_tool = GithubSearchTool()
```

## Environment Setup

### Required Environment Variables
```bash
# .env file
OPENAI_API_KEY=sk-...
SERPER_API_KEY=your_serper_key
ANTHROPIC_API_KEY=your_anthropic_key  # If using Claude
```

### LLM Configuration
```python
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

# OpenAI
openai_llm = ChatOpenAI(model="gpt-4")

# Anthropic
anthropic_llm = ChatAnthropic(model="claude-3-sonnet-20240229")

# Local models with Ollama
from langchain_ollama import ChatOllama
local_llm = ChatOllama(model="llama3")
```

## Execution Patterns

### Basic Execution
```python
# Simple crew execution
result = crew.kickoff()
print(result)
```

### Parameterized Execution
```python
# Pass input parameters
inputs = {
    'topic': 'Machine Learning',
    'industry': 'Healthcare',
    'timeframe': '2024'
}
result = crew.kickoff(inputs=inputs)
```

### Async Execution
```python
import asyncio

async def run_crew():
    result = await crew.kickoff_async(inputs=inputs)
    return result

# Run async
result = asyncio.run(run_crew())
```

### Bulk Execution
```python
# Run crew multiple times with different inputs
inputs_list = [
    {'topic': 'AI'},
    {'topic': 'ML'},
    {'topic': 'NLP'}
]

results = crew.kickoff_for_each(inputs=inputs_list)
```

## Advanced Features

### Custom Tools
```python
from crewai.tools import BaseTool
from pydantic import BaseModel, Field

class MyCustomTool(BaseTool):
    name: str = "My Custom Tool"
    description: str = "Description of what the tool does"

    def _run(self, query: str) -> str:
        # Tool implementation
        return f"Processed: {query}"
```

### Human-in-the-Loop
```python
from crewai import Task

task_with_human_input = Task(
    description="Analyze data and get human approval",
    expected_output="Analysis with human validation",
    agent=analyst,
    human_input=True
)
```

### Memory and Context
```python
crew = Crew(
    agents=[agent],
    tasks=[task],
    memory=True,  # Enable memory
    verbose=True
)
```

### Training and Fine-tuning
```python
# Train crew based on execution results
crew.train(
    n_iterations=5,
    filename="training_data.pkl"
)
```

## Monitoring and Observability

### Built-in Logging
```python
crew = Crew(
    agents=[agent],
    tasks=[task],
    verbose=True,  # Enable detailed logging
    share_crew=False  # Control telemetry
)
```

### Enterprise Observability
- Real-time monitoring dashboard
- Performance metrics tracking
- Execution tracing
- Error handling and recovery

## Best Practices

### Development
- Start with simple sequential processes
- Test agents individually before integration
- Use clear, specific task descriptions
- Implement proper error handling

### Production
- Use environment variables for API keys
- Implement monitoring and logging
- Design for scalability
- Include human oversight for critical decisions

### Performance
- Optimize LLM calls to reduce costs
- Use appropriate process types
- Cache results when possible
- Monitor token usage

## Troubleshooting

### Common Issues
```bash
# Module not found errors
pip install 'crewai[tools]'

# Dependency conflicts
pip install --upgrade crewai

# Memory issues with large crews
# Reduce agent count or use hierarchical process
```

### Debug Mode
```python
crew = Crew(
    agents=[agent],
    tasks=[task],
    verbose=True,  # Enable debug output
)
```

### Error Handling
```python
try:
    result = crew.kickoff()
except Exception as e:
    print(f"Crew execution failed: {e}")
    # Implement recovery logic
```

## Integration Examples

### With Streamlit
```python
import streamlit as st
from crewai import Crew, Agent, Task

st.title("CrewAI Interface")
topic = st.text_input("Enter research topic:")

if st.button("Run Analysis"):
    result = crew.kickoff(inputs={'topic': topic})
    st.write(result)
```

### With FastAPI
```python
from fastapi import FastAPI
from crewai import Crew

app = FastAPI()

@app.post("/analyze")
async def analyze(topic: str):
    result = await crew.kickoff_async(inputs={'topic': topic})
    return {"result": result}
```

## Resources

### Official Documentation
- [docs.crewai.com](https://docs.crewai.com)
- [API Reference](https://docs.crewai.com/api-reference)
- [Examples Repository](https://github.com/crewAIInc/crewAI-examples)

### Community
- [CrewAI Forum](https://community.crewai.com)
- [GitHub Repository](https://github.com/crewAIInc/crewAI)
- [Learning Resources](https://learn.crewai.com)

### Learning Paths
- **Beginners**: Sequential processes → Custom agents → Basic tools
- **Intermediate**: Hierarchical processes → Conditional tasks → Async execution
- **Advanced**: Custom tools → Multi-agent orchestration → Enterprise deployment

