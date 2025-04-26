import requests
from flask import Flask, request, jsonify,Blueprint
from ..services.gemeni_service import call_gemini_api
from ..services.gemeni_service import gemeni_query_answers,topic_instructions,clean_questions

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
    data = request.get_json()
    category = data.get("category")
    difficulty = data.get("difficulty")
    print("Received data:", data)

    if category not in topic_instructions:
        return jsonify({"error": "Invalid category"}), 400

    raw_questions = gemeni_query_answers(category)
    if isinstance(raw_questions, str):  # Error from Gemini handler
        return jsonify({"error": raw_questions}), 400

    questions = clean_questions(raw_questions, difficulty)

    return jsonify({"questions": questions})