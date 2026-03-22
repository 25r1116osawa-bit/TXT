from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, BooleanField
from wtforms.validators import DataRequired, Length, InputRequired,NumberRange

class ItemForm(FlaskForm):
    name = StringField("商品名", validators=[
    DataRequired("商品名は必須です"),  
    ],render_kw={"placeholder":"商品名"})
    
    category = StringField("カテゴリー")

    price = IntegerField("価格",render_kw={"min": 0},default=0)

    stock = IntegerField("在庫",render_kw={"min": 0},default=0)
    
    description = StringField("商品説明",render_kw={"placeholder":"商品説明"})
    is_recommended = BooleanField("おすすめ")