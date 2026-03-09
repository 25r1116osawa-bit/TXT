from flask import Flask, render_template , request ,redirect
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db.init_app(app)



class Department(db.Model):
    id = db.Column(db.Integer , primary_key=True )
    name = db.Column(db.String(50),nullable=False)



@app.route("/admin")
def admin():
    posts = [
       {
       'title':"記事のタイトル1",
       'body':'記事の内容',
       'created_at':"2026-03-03"
   },{
       'title':"記事のタイトル2",
       'body':'記事の内容',
       'created_at':"2026-03-03"
   },{
       'title':"記事のタイトル3",
       'body':'記事の内容',
       'created_at':"2026-03-03"
   },{
       'title':"記事のタイトル4",
       'body':'記事の内容',
       'created_at':"2026-03-03"
   }
   ]

    return render_template("admin.html",posts=posts)


@app.route("/create", methods=['GET','POST'])
def create():

# 1.リクエストできたメソッドの判別
    if request.method == "POST":

        # 2.リクエストできた情報の取得
        id = request.form.get('departmentid')
        name = request.form.get('departmentName')
      
        # 3.リクエストできた情報の保存
        Dept = Department(id=id,name=name)
        db.session.add(Dept)
        db.session.commit()

        return redirect('/admin')
        #return render_template("create.html",method='POST',id=id,name=name)
    

    elif request.method == "GET":
        return render_template("create.html",method='GET')



with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True,port=8002)

#datetimeは、2h5分のところ