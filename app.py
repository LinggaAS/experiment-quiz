import os

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['db_url']
db = SQLAlchemy(app)
CORS(app)

@cross_origin()
@app.route('/')
def index():
    return jsonify({"hello" : "world"})

@cross_origin()
@app.route('/category')
def getAll_quiz():
    all_quiz = []
    from model import Quiz
    quizs = Quiz.query.all()
    for quiz in quizs:
        results = {
            "id" : quiz.id,
            "question" : quiz.question,
            "category" : quiz.category,
            "answer" : quiz.answer,
            "explanation" : quiz.explanation
        }
        all_quiz.append(results)

        return jsonify(
            {
                "succes" : True,
                "quiz" : all_quiz
            }
        )

@cross_origin()
@app.route('/category/<int:id>')
def get_quiz(id):
    from model import Quiz
    quiz = Quiz.query.get(id)
    results = {
        "id": quiz.id,
        "question": quiz.question,
        "category": quiz.category,
        "answer": quiz.answer,
        "explanation" : quiz.explanation
    }

    return jsonify(
        {
            "succes": True,
            "quiz": results
        }
    )

@cross_origin()
@app.route('/category', methods=['POST'])
def create_quiz():
    quiz_data = request.json

    question = quiz_data['question']
    category = quiz_data['category']
    answer = quiz_data['answer']
    explanation = quiz_data['explanation']

    from model import Quiz
    quiz = Quiz(question= question, category= category, answer= answer, explanation= explanation)
    db.session.add(quiz)
    db.session.commit()

    return jsonify({"succes" : True, "response" : "Quiz added"})

if __name__ == '__main__':
  app.run(debug=True)