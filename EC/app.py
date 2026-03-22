from flask import Flask, redirect, render_template, request
from flask_wtf import CSRFProtect
from app2 import app2
from models import db, Item
from admin import admin

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret-key'
csrf = CSRFProtect(app) 

app.register_blueprint(app2,url_prefix="/APP2")
app.register_blueprint(admin,url_prefix="/admin")
db.init_app(app)

@app.route("/")
def index():
    return redirect("/APP2/top") 





@app.route("/item/<int:item_id>")
def itemdetels(item_id):

    return render_template("itemdetels.html")

with app.app_context():
    db.create_all()

    if Item.query.count() == 0:
        item = Item(
            name="紅茶",
            price=1000,
            stock=10,
            description="イギリス発祥の人気の紅茶シリーズ",
            is_recommended=True,
            category="ドリンク"
        )

        db.session.add(item)
        db.session.commit()



if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)