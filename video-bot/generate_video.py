#!/usr/bin/env python3
"""Lattice AI Video Generator - Generates short-form career advice videos"""

import json
import os
import subprocess
import random
from datetime import datetime
from pathlib import Path

OLLAMA_URL = "http://localhost:11434"
OUTPUT_DIR = Path(__file__).parent / "output"
SCRIPTS_DIR = Path(__file__).parent / "scripts"

VIDEO_TOPICS = [
    "3 words to remove from your resume right now",
    "How to use AI to land more interviews",
    "The exact cover letter formula that works",
    "Salary negotiation script you can copy",
    "Why your resume gets rejected by robots",
    "How to answer tell me about yourself",
    "LinkedIn headline that gets recruiters attention",
    "The 2-minute interview prep technique",
    "Why you should never say I'm a hard worker",
    "How to explain a gap in your resume",
    "The follow-up email that gets responses",
    "How to research a company before an interview",
    "Questions you should always ask interviewers",
    "How to stand out in a competitive job market",
    "The biggest mistake people make on resumes",
    "How to use ChatGPT to prepare for interviews",
    "What to wear to a virtual interview",
    "How to negotiate remote work",
    "The best time to apply for jobs",
    "How to network when you hate networking"
]

def generate_script(topic: str) -> dict:
    """Generate a video script using Ollama"""
    prompt = f"""Create a short-form video script (30-60 seconds) about: {topic}

The script should be for a career advice video targeting job seekers.

Format your response as JSON with these fields:
- hook: A attention-grabbing opening line (max 10 words)
- points: Array of 3-4 short bullet points (each max 15 words)
- call_to_action: One sentence directing viewers to visit lattice-n8xu.onrender.com
- hashtags: Array of 5-7 relevant hashtags

Keep it punchy, actionable, and engaging. No fluff."""

    try:
        import urllib.request
        data = json.dumps({
            "model": "llama3.2",
            "prompt": prompt,
            "stream": False,
            "options": {"temperature": 0.8, "num_predict": 500}
        }).encode('utf-8')
        
        req = urllib.request.Request(f"{OLLAMA_URL}/api/generate", data=data,
            headers={'Content-Type': 'application/json'})
        
        with urllib.request.urlopen(req, timeout=60) as response:
            result = json.loads(response.read().decode('utf-8'))
            
        response_text = result.get('response', '')
        try:
            start = response_text.find('{')
            end = response_text.rfind('}') + 1
            if start != -1 and end != -1:

def create_video_from_script(script: dict, topic: str) -> str:
    """Create a video from the script using FFmpeg"""
    safe_topic = "".join(c if c.isalnum() else "_" for c in topic)[:50]
    output_file = OUTPUT_DIR / f"{safe_topic}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.mp4"
    
    # Create text file with script content
    text_file = OUTPUT_DIR / f"{safe_topic}_script.txt"
    with open(text_file, 'w') as f:
        f.write(f"{script['hook']}\n\n")
        for point in script['points']:
            f.write(f"• {point}\n")
        f.write(f"\n{script['call_to_action']}\n")
        f.write(f"\n{' '.join(script['hashtags'])}")
    
    # Use FFmpeg to create video with text overlay
    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "color=c=0x1a1a2e:s=1080x1920:d=30",
        "-vf", f"drawtext=text='{script['hook']}':fontcolor=white:fontsize=60:x=(w-text_w)/2:y=200",
        "-c:v", "libx264", "-t", "30", "-pix_fmt", "yuv420p",
        str(output_file)
    ]
    
    try:
        subprocess.run(ffmpeg_cmd, check=True, capture_output=True)
        print(f"Video created: {output_file}")
        return str(output_file)
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"FFmpeg not available or error: {e}")
        print("Script saved as text file instead.")
        return ""

def main():
    """Main function to generate videos"""
    print("=" * 50)
    print("Lattice AI Video Generator")
    print("=" * 50)
    
    OUTPUT_DIR.mkdir(exist_ok=True)
    SCRIPTS_DIR.mkdir(exist_ok=True)
    
    topics = random.sample(VIDEO_TOPICS, min(3, len(VIDEO_TOPICS)))
    print(f"\nGenerating {len(topics)} videos...\n")
    
    for i, topic in enumerate(topics, 1):
        print(f"[{i}/{len(topics)}] Generating: {topic}")
        script = generate_script(topic)
        
        script_file = SCRIPTS_DIR / f"{topic.replace(' ', '_')[:50]}.json"
        with open(script_file, 'w') as f:
            json.dump(script, f, indent=2)
        print(f"  Script saved: {script_file}")
        
        video_file = create_video_from_script(script, topic)
        if video_file:
            print(f"  Video created: {video_file}")
        print()
    
    print("Done! Check the output folder for videos.")

if __name__ == "__main__":
    main()

                return json.loads(response_text[start:end])
        except json.JSONDecodeError:
            pass
            
        return {
            "hook": topic,
            "points": ["Great career tip", "Actionable advice", "Proven strategy"],
            "call_to_action": "Visit lattice-n8xu.onrender.com for more career tools",
            "hashtags": ["#CareerTips", "#JobSearch", "#ResumeTips"]
        }
    except Exception as e:
        print(f"Error: {e}")
        return {
            "hook": topic,
            "points": ["Great career tip", "Actionable advice", "Proven strategy"],
            "call_to_action": "Visit lattice-n8xu.onrender.com for more career tools",
            "hashtags": ["#CareerTips", "#JobSearch", "#ResumeTips"]
        }
