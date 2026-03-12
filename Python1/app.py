from flask import Flask, render_template , request ,redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
db = SQLAlchemy()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db.init_app(app)

migrate = Migrate(app, db)

class Department(db.Model):
    # 部門ID
    id = db.Column(
        db.Integer , 
        primary_key=True 
        )
    # 部門名
    name = db.Column(
        db.String(50),
        nullable=False
        )
    # 論理削除フラグ
    is_deleted = db.Column(
        db.Boolean, 
        nullable=False,
        default=False
        )
    # 画像カラム
    img_name = db.Column(
        db.String(100),
        nullable=True
    )

@app.route("/admin")
def Read():
    posts = Department.query.filter_by(is_deleted=False).all()
    print(posts)
    return render_template("admin.html", posts=posts)


@app.route("/create", methods=['GET','POST'])
def create():

    if request.method == "POST":
        id = request.form.get('departmentid')
        name = request.form.get('departmentName')
        #1. 画像の取得
        file = request.files['img']
        #2. 画像ファイル名の取得
        filename = file.filename
        #3. データベースにファイル名を保存
        Dept = Department(id=id,name=name,img_name=filename)
        #4. 画像を保存する
        save_path = os.path.join(app.static_folder,'img',filename)

        file.save(save_path)
        db.session.add(Dept)
        db.session.commit()
        
        return redirect('/admin')
        
    

    elif request.method == "GET":
        return render_template("create.html",method='GET')

@app.route("/<int:post_id>/update", methods=['GET','POST'])
def update(post_id):
  
    dpt = Department.query.get(post_id)

    if request.method == "POST":
        dpt.name = request.form.get('departmentName')
        dpt.is_deleted = request.form.get('departmentflag') =="True"
        db.session.commit()

        return redirect('/admin')
    elif request.method == "GET":
        return render_template("update.html", dpt=dpt)
   
@app.route("/<int:post_id>/delete")
def delete(post_id):

    dpt = Department.query.get(post_id)
    dpt.is_deleted = True
    db.session.commit()
    return redirect('/admin')

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True,port=8002)
