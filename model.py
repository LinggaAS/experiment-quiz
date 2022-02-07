from sqlalchemy import JSON, ARRAY, String

from app import db

class Quiz(db.Model):
    __tablename__ = 'quizs'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    answer = db.Column(JSON)
    explanation = db.Column(ARRAY(String))

#db.create_all()
