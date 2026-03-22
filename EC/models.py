from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    price = db.Column(db.Integer,nullable=False)
    stock = db.Column(db.Integer,nullable=False)
    description = db.Column(db.String(200),nullable=True)
    is_recommended = db.Column(db.Boolean)
    category = db.Column(db.String(50),nullable=False)