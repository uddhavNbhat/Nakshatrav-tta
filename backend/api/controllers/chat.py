import requests
from flask import Flask, request, jsonify,Blueprint
from ..services.gemeni_service import call_gemini_api
from ..services.gemeni_service import gemeni_query_answers,topic_instructions

cb = Blueprint("chat-service",__name__)


@cb.route("/chat-service",methods = ["POST"])
def chat():
    data = request.get_json()
    question = data.get('question')
    planet = data.get('planet')

    # Get the Gemini response
    answer = call_gemini_api(question, planet)

    # Return the answer back to the frontend
    return jsonify({"answer": answer})

@cb.route("/quiz",methods= ["POST"])
def quiz():
    # Get the category and difficulty from the request
    data = request.get_json()
    category = data.get("category")
    difficulty = data.get("difficulty")
    
    # Validate the input
    if category not in topic_instructions:
        return jsonify({"error": "Invalid category"}), 400

    # Fetch questions from the Gemini API based on category
    questions = gemeni_query_answers(category)
    
    if isinstance(questions, str):  # If the response is an error message
        return jsonify({"error": questions}), 400

    # Return the questions as a response
    return jsonify({"questions": questions})