from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
import re

# Load environment variables from .env file
load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

# Define your Gemini API endpoint (replace with the actual URL of the API)
GEMINI_API_URL=f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

headers = {
    "Content-Type": "application/json"
}

# Define instructions for each planet
planet_instructions = {
    'earth': "Only answer questions related to Earth. Focus on geography, climate, biology, history, and any information specifically about Earth.",
    'mars': "Only answer questions related to Mars. Focus on its surface, atmosphere, weather, geology, and any information specifically about Mars.",
    'saturn': "Only answer questions related to Saturn. Focus on Saturn's rings, moons, and its position in the Solar System.",
    'venus': "Only answer questions related to Venus. Focus on its atmosphere, temperature, and surface conditions.",
    'jupiter': "Only answer questions related to Jupiter. Focus on its size, moons, and its characteristics as a gas giant.",
    'mercury': "Only answer questions related to Mercury. Focus on its proximity to the Sun, its size, and its surface conditions.",
    'uranus': "Only answer questions related to Uranus. Focus on its rotation, moons, and its unique position in the Solar System.",
    'neptune': "Only answer questions related to Neptune. Focus on its atmosphere, weather patterns, and its distant position from the Sun."
}

topic_instructions = {
    "planets": {
        "description": "Explore the diverse planets in our solar system, from scorching Mercury to icy Neptune. Focus on their unique features like size, composition, atmosphere, moons, and orbits.",
        "question_prompt": "Generate 5 easy, 5 medium, and 5 hard multiple-choice quiz questions (each with 4 options and a correct answer index) specifically about planets in our solar system."
    },
    "moons": {
        "description": "Learn about fascinating moons, such as Earth's Moon, Jupiter's Europa, and Saturn's Titan. Include facts about their geology, atmosphere, water presence, and orbit patterns.",
        "question_prompt": "Generate 5 easy, 5 medium, and 5 hard multiple-choice quiz questions (each with 4 options and a correct answer index) focused on natural satellites (moons) in the solar system."
    },
    "suns": {
        "description": "Discover the Sun and other stars like it, with a focus on solar activity, life cycles of stars, fusion, radiation, and solar wind.",
        "question_prompt": "Generate 5 easy, 5 medium, and 5 hard multiple-choice quiz questions (each with 4 options and a correct answer index) about the Sun and stellar phenomena."
    },
    "satellites": {
        "description": "Understand artificial satellites, their uses in communication, weather forecasting, navigation, and space exploration. Include historical missions and orbits.",
        "question_prompt": "Generate 5 easy, 5 medium, and 5 hard multiple-choice quiz questions (each with 4 options and a correct answer index) specifically about artificial satellites and their roles."
    },
    "asteroids": {
        "description": "Study the rocky bodies scattered across the asteroid belt and beyond. Include size, composition, orbits, and famous examples like Ceres and Vesta.",
        "question_prompt": "Generate 5 easy, 5 medium, and 5 hard multiple-choice quiz questions (each with 4 options and a correct answer index) focusing on asteroids in the solar system."
    },
    "comets": {
        "description": "Investigate icy bodies with glowing tails like Halley's Comet. Cover their structure, orbits, origins in the Kuiper Belt or Oort Cloud, and historical appearances.",
        "question_prompt": "Generate 5 easy, 5 medium, and 5 hard multiple-choice quiz questions (each with 4 options and a correct answer index) specifically about comets."
    }
}

# Function to call the Gemini API with user question and planet-specific instructions
def call_gemini_api(question, planet):
    instructions = planet_instructions.get(
        planet,
        "Please provide a question about the planet you're interested in."
    )
    personalized_prompt = f"{instructions} Question: {question}"

    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {"text": personalized_prompt}
                ]
            }
        ]
    }

    print("Sending Payload:", payload)

    response = requests.post(GEMINI_API_URL, headers=headers, json=payload)

    if response.status_code == 200:
        data = response.json()
        try:
            return data['candidates'][0]['content']['parts'][0]['text']
        except (KeyError, IndexError) as e:
            print("Error parsing Gemini response:", e)
            return "Sorry, I couldn't parse the response."
    else:
        print("Gemini API Error:", response.status_code)
        print("Error Details:", response.text)
        return "Sorry, there was an error processing your request."

def gemeni_query_answers(topic):
    # Get the instruction for the topic
    instructions = topic_instructions.get(
        topic,
        {"question_prompt": "Please select the quiz you want to participate in."}
    )
    personalized_prompt = instructions["question_prompt"]

    # Prepare the payload for the request
    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {"text": personalized_prompt}
                ]
            }
        ]
    }

    print("Sending Payload:", payload)

    # Sending the request to the Gemini API
    try:
        response = requests.post(GEMINI_API_URL, headers=headers, json=payload)
        # Check if the response is successful
        if response.status_code == 200:
            # Parse the response content
            data = response.json()

            # If there's no 'candidates' field or it's empty, we should log this
            if 'candidates' not in data or len(data['candidates']) == 0:
                print("No candidates found in response.")
                return "Sorry, no candidates found in the response."

            try:
                response_text = data['candidates'][0]['content']['parts'][0]['text']
                print("Received Response Text:", response_text)

                # Clean and filter lines
                lines = [line.strip() for line in response_text.split("\n") if line.strip()]
                clean_lines = [
                    re.sub(r"^\*+\s*", "", line).replace("**", "").strip()
                    for line in lines
                    if not re.match(r"^\*?\*?(Correct Answer|Easy|Medium|Hard)", line, re.IGNORECASE)
                ]

                questions = []
                current = {}
                options = []

                for line in clean_lines:
                    if re.match(r"^\d+\.\s", line):  # Start of a new question
                        if current and len(options) == 4:
                            current["options"] = options
                            questions.append(current)
                        current = {
                            "question": line,
                            "correctAnswer": 0  # default, adjust if needed
                        }
                        options = []
                    elif re.match(r"^[a-dA-D]\)", line):  # Option line
                        options.append(line)

                # Add last question if valid
                if current and len(options) == 4:
                    current["options"] = options
                    questions.append(current)

                return questions

            except (KeyError, IndexError) as e:
                print("Error parsing Gemini response:", e)
                return "Sorry, I couldn't parse the response."
        else:
            print(f"Gemini API Error: {response.status_code}")
            print("Error Details:", response.text)
            return "Sorry, there was an error processing your request."
    except requests.exceptions.RequestException as e:
        # If the request fails, log the exception
        print("Request failed:", e)
        return "Sorry, there was an issue with the API request."

def clean_questions(raw_questions, difficulty):
    cleaned = []
    i = 1  # Start index

    while i <= len(raw_questions):  # Iterate over the raw_questions list
        q = raw_questions[i - 1]  # Get the current question (since i starts from 1)
        
        # Check if the question has the required 'question' and 'options' keys
        if "question" in q and "options" in q and len(q["options"]) == 4:
            # Ensure 'question' is a string before applying regex
            question_text = str(q['question'])
            cleaned_question = re.sub(r'^\d+\.\s*', '', question_text)  # Remove leading digits
            cleaned.append({
                "question": f"{i}. {cleaned_question}",
                "options": [opt.strip() for opt in q["options"]],
                "correctAnswer": q.get("correctAnswer", 0),
                "difficulty": difficulty
            })
        
        # Increment the index
        i += 1

    return cleaned


