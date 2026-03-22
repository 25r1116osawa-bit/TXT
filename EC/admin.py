# admin.py
from flask import Blueprint, redirect, render_template, request
from forms import ItemForm
from models import db, Item


admin = Blueprint("admin", __name__)

@admin.route("/")
def dashboard():
    items = Item.query.all()


    return render_template("admin.html")



@admin.route("/create", methods=["GET", "POST"])
def create():
    form = ItemForm(request.form)

    if form.validate_on_submit():
        item = Item(
            name=form.name.data,
            price=form.price.data,
            stock=form.stock.data,
            category=form.category.data,
            description=form.description.data,
            is_recommended=form.is_recommended.data
        )

        db.session.add(item)
        db.session.commit()

        return redirect("/admin")

    return render_template("create.html", form=form)



