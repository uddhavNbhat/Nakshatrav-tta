from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

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
    # Retrieve topic instructions from the dictionary or return a default message
    instructions = topic_instructions.get(
        topic,
        {"question_prompt": "Please select the quiz you want to participate in."}
    )

    # Use the question prompt from the selected topic
    personalized_prompt = instructions["question_prompt"]

    # Prepare the payload for the Gemini API
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

    # Send the request to the Gemini API
    response = requests.post(GEMINI_API_URL, headers=headers, json=payload)

    if response.status_code == 200:
        data = response.json()
        try:
            # Parse the response to extract the question and answer options
            response_text = data['candidates'][0]['content']['parts'][0]['text']
            
            # Example of parsing the response to create a list of questions and options
            questions = []
            lines = response_text.split("\n")
            for i in range(0, len(lines), 5):  # 5 lines per question: 1 question + 4 options
                if i + 4 < len(lines):
                    question = lines[i].strip()
                    options = [lines[i + 1].strip(), lines[i + 2].strip(), lines[i + 3].strip(), lines[i + 4].strip()]
                    correct_answer_index = options.index(lines[i + 1].strip())  # For simplicity, we'll assume the first option is always correct
                    questions.append({
                        "question": question,
                        "options": options,
                        "correctAnswer": correct_answer_index
                    })

            return questions

        except (KeyError, IndexError) as e:
            print("Error parsing Gemini response:", e)
            return "Sorry, I couldn't parse the response."
    else:
        print("Gemini API Error:", response.status_code)
        print("Error Details:", response.text)
        return "Sorry, there was an error processing your request."
