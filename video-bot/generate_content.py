#!/usr/bin/env python3
"""
Lattice Content Generator
Generates text content for short-form videos
Use with free video makers like Canva, CapCut, or InVideo
"""

import json
import random
from datetime import datetime
from pathlib import Path

OUTPUT_DIR = Path(__file__).parent / "output"

CONTENT_TEMPLATES = [
    {
        "hook": "Stop making this resume mistake",
        "points": [
            "Remove your full address",
            "Skip the 'references available' line",
            "Ditch the objective statement"
        ],
        "cta": "Get 10 ATS-proof templates at lattice-n8xu.onrender.com"
    },
    {
        "hook": "This AI prompt gets you interviews",
        "points": [
            "Paste the job description",
            "Ask AI to tailor your resume",
            "Mirror their exact keywords"
        ],
        "cta": "50+ prompts at lattice-n8xu.onrender.com"
    },
    {
        "hook": "Negotiate salary like this",
        "points": [
            "Never give the first number",
            "Say: 'Based on my research...'",
            "Ask for 15% more than target"
        ],
        "cta": "Get the full script at lattice-n8xu.onrender.com"
    },
    {
        "hook": "Your LinkedIn headline is wrong",
        "points": [
            "Don't just list your job title",
            "Add your value proposition",
            "Include target keywords"
        ],
        "cta": "Optimize your profile with lattice-n8xu.onrender.com"
    },
    {
        "hook": "The follow-up email that works",
        "points": [
            "Send within 24 hours",
            "Reference specific conversation points",
            "Include one piece of value"
        ],
        "cta": "Templates at lattice-n8xu.onrender.com"
    }
]

def generate_daily_content():
    """Generate content for today's videos"""
    today = datetime.now().strftime("%Y-%m-%d")
    output_file = OUTPUT_DIR / f"content_{today}.json"
    
    # Select 3 random pieces of content
    content = random.sample(CONTENT_TEMPLATES, 3)
    
    # Add hashtags
    hashtags = ["#CareerTips", "#JobSearch", "#ResumeTips", "#InterviewPrep", "#AI"]
    
    result = {
        "date": today,
        "videos": []
    }
    
    for item in content:
        result["videos"].append({
            "hook": item["hook"],
            "points": item["points"],
            "call_to_action": item["cta"],
            "hashtags": hashtags
        })
    
    OUTPUT_DIR.mkdir(exist_ok=True)
    with open(output_file, 'w') as f:
        json.dump(result, f, indent=2)
    
    print(f"Content generated: {output_file}")
    return result

if __name__ == "__main__":
    generate_daily_content()
